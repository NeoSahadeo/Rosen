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
from rest_framework.decorators import api_view
from django.core.validators import validate_email

engine = import_module(settings.SESSION_ENGINE)


# REMOVE
# ['TEST_COOKIE_NAME', 'TEST_COOKIE_VALUE', '_SessionBase__not_given', '_SessionBase__session_key', '__class__', '__contains__', '__delattr__', '__delitem__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_get_new_session_key', '_get_or_create_session_key', '_get_session', '_get_session_from_db', '_get_session_key', '_session', '_session_cache', '_session_key', '_set_session_key', '_validate_session_key', 'accessed', 'clear', 'clear_expired', 'create', 'create_model_instance', 'cycle_key', 'decode', 'delete', 'delete_test_cookie', 'encode', 'exists', 'flush', 'get', 'get_expire_at_browser_close', 'get_expiry_age', 'get_expiry_date', 'get_model_class', 'get_session_cookie_age', 'has_key', 'is_empty', 'items', 'key_salt', 'keys', 'load', 'model', 'modified', 'pop', 'save', 'serializer', 'session_key', 'set_expiry', 'set_test_cookie', 'setdefault', 'test_cookie_worked', 'update', 'values']
@api_view(['GET'])
def create_session(request):
    user = AnonymousUser()
    login(request, user)
    print(request.session)
    return Response()


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
    """Session validation endpoint

    Return 202 if session still exists in db
    Return 401 if session does not exist in db
    """
    def post(self, request):
        sessionid = request.data.get('sessionid')
        request.user = validateSession(sessionid)
        if not request.user.is_anonymous:
            return Response(status=status.HTTP_202_ACCEPTED)

        return Response(status=status.HTTP_401_UNAUTHORIZED)


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

        # Authenticate with username or email
        try:
            user_email = User.objects.get(email=username_email)
            user = authenticate(username=user_email.username,
                                password=password)
        except User.DoesNotExist:
            user = authenticate(username=username_email, password=password)

        # Attempt a user log in
        # Will return a session
        if user is not None:
            try:
                login(request, user)
                response = Response()
                response.status_code = status.HTTP_202_ACCEPTED
                request.session.set_expiry(0)
                return response
            except AttributeError:
                pass

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
