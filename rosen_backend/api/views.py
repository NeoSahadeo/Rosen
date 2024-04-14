from importlib import import_module
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import (
        authenticate,
        login,
        logout,
        SESSION_KEY,
        BACKEND_SESSION_KEY,
        load_backend)
from django.contrib.auth.models import AnonymousUser, User
from django.conf import settings
from django.contrib.sessions.models import Session
from django.db import IntegrityError
import django.middleware.csrf

engine = import_module(settings.SESSION_ENGINE)


def validateSession(sessionid):
    """
    Take in session and checks the SessionStore

    Returns a logged in User or AnonymousUser
    """
    try:
        session = engine.SessionStore(sessionid)
        user_id = session[SESSION_KEY]
        backend_path = session[BACKEND_SESSION_KEY]
        backend = load_backend(backend_path)
        user = backend.get_user(user_id)
        return user
    except KeyError:
        user = AnonymousUser()
        return user


class Latest(APIView):
    def get(self, request):
        pass


class ValidateSession(APIView):
    def post(self, request):
        sessionid = request.data.get('sessionid')
        request.user = validateSession(sessionid)
        if not request.user.is_anonymous:
            return Response(status=status.HTTP_202_ACCEPTED)

        return Response(status=status.HTTP_401_UNAUTHORIZED)


class User_CSRF(APIView):
    def get(self, request):
        csrf = django.middleware.csrf.get_token(request)
        return Response({'csrf': csrf}, status=status.HTTP_202_ACCEPTED)


class Signup(APIView):
    def post(self, request):
        user = None
        # TODO
        # CLean data
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            User.objects.get(email=email)
            return Response({
                'Email already exists'
                }, status=status.HTTP_409_CONFLICT)
        except User.DoesNotExist:
            pass

        try:
            if username and email and password:
                user = User.objects.create_user(username=username,
                                                email=email,
                                                password=password)
                user.save()
                return Response(status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response({
                'Username already exists'
                }, status=status.HTTP_409_CONFLICT)


class Login(APIView):
    def post(self, request):
        username_email = request.data.get('username_email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=username_email)
            user = authenticate(username=user.username, password=password)
        except User.DoesNotExist:
            user = None
        if user is None:
            user = authenticate(username=username_email, password=password)

        if user is not None:
            try:
                login(request, user)
                return Response()
            except AttributeError:
                pass

        return Response(status=status.HTTP_401_UNAUTHORIZED)


class Logout(APIView):
    def get(self, request):
        sessionid = request.data.get('sessionid')
        request.user = validateSession(sessionid)
        if request.user.is_authenticated:
            try:
                Session.objects.get(session_key=sessionid).delete()
                logout(request)
            except Session.DoesNotExist:
                pass
        return Response()
