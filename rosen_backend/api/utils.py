import bcrypt
from api.models import User, UserSession
from rest_framework.response import Response
from rest_framework import status
from django.contrib.sessions.backends.db import SessionStore
from django.contrib.sessions.models import Session
from django.contrib.auth.models import AnonymousUser
from django.contrib.sessions.backends.base import CreateError, SessionBase


def hash_password(password):
    password = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password, salt)
    hashed_password = hashed_password.decode('utf-8')
    # check = bcrypt.checkpw(password, hashed_password)
    return hashed_password


def authenticate(username, password):
    try:
        user = User.objects.get(username=username)
        password_match = bcrypt.checkpw(password.encode('utf-8'),
                                        user.password.encode('utf-8'))
        return {
                'authenticated': password_match,
                'username': username
                }
    except User.DoesNotExist:
        return None


def createSession(user, request):
    """
    If the user exists creates a session id
    attached to request.session
    """
    try:
        usersession = UserSession.objects.get(user_id=user.id)
        session_id = usersession.session_id
        request.session.__init__(session_id)
    except UserSession.DoesNotExist:
        request.session.create()
        UserSession.objects.create(user_id=user.id, session_id=request.session.session_key)


def validateSession(sessionid):
    """
    Take in session and checks the SessionStore

    Returns a logged in User or None
    """
    try:
        session = UserSession.objects.get(session_id=sessionid)
        user = User.objects.get(id=session.user_id)
        return user
    except UserSession.DoesNotExist:
        return None


def verfiySession(sessionid):
    """
        Wrapper for return responses
        for validtesession.
    """
    user = validateSession(sessionid)
    if user is not None:
        return {
                'user': user,
                'response': Response(status=status.HTTP_202_ACCEPTED)
            }

    return Response(status=status.HTTP_401_UNAUTHORIZED)
    return {
            'user': None,
            'response': Response(status=status.HTTP_401_UNAUTHORIZED)
            }
