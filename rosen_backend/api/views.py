from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import AnonymousUser
from django.contrib.sessions.models import Session
from django.db import IntegrityError
from api.models import User
from api.utils import (
        hash_password,
        authenticate,
        createSession,
        validateSession)
from django.contrib.auth import (
        login,
        logout)


class Latest(APIView):
    def get(self, request):
        pass


class ValidateSession(APIView):
    """Session validation endpoint

    Return 202 if still exists in db
    Return 401 if session does not exist in db
    """
    def post(self, request):
        sessionid = request.data.get('sessionid')
        user = validateSession(sessionid)
        if user is not None:
            return Response(status=status.HTTP_202_ACCEPTED)

        return Response(status=status.HTTP_401_UNAUTHORIZED)


class Signup(APIView):
    def post(self, request):
        # TODO
        # Clean data
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        hashed_password = hash_password(password)

        try:
            User.objects.get(email=email)
            return Response({
                'Email already exists'
                }, status=status.HTTP_409_CONFLICT)
        except User.DoesNotExist:
            pass

        try:
            if username and email and password:
                user = User(username=username,
                            password=hashed_password,
                            email=email)
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

        # Authenticate with username or email
        try:
            user_email = User.objects.get(email=username_email)
            user = authenticate(username=user_email.username,
                                password=password)
        except User.DoesNotExist:
            user = authenticate(username=username_email,
                                password=password)

        # Attempt a user log in
        # Will return a session
        if user is not None and user.get('authenticated'):
            user = User.objects.get(username=user.get('username'))
            createSession(user, request)
            response = Response(status=status.HTTP_202_ACCEPTED)
            request.session.set_expiry(0)
            return response

        user = AnonymousUser()
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
