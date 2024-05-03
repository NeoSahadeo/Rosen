import re
import bcrypt
from PIL import Image
from api.models import User, UserSession
from rest_framework.response import Response
from rest_framework import status


def hash_password(password):
    """
    Uses Bcrypt to salt and hash password

    Returns hashed password
    """
    password = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password, salt)
    hashed_password = hashed_password.decode('utf-8')
    return hashed_password


def authenticate(username, password):
    """
    Authenticates user provided password and
    username against db value

    Returns User or None
    """
    try:
        user = User.objects.get(username=username)
        password_match = bcrypt.checkpw(password.encode('utf-8'),
                                        user.password.encode('utf-8'))
        return {'authenticated': password_match, 'username': username}
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


def validateSession(session_id):
    """
    Take in session and checks the SessionStore

    Returns a logged in User or None
    """
    try:
        session = UserSession.objects.get(session_id=session_id)
        user = User.objects.get(id=session.user_id)
        return user
    except UserSession.DoesNotExist:
        return None


def verifySession(session_id):
    """
    Wrapper for return responses
    for validtesession.

    Return {user, 202} if still exists in db
    Return {none, 401} if session does not exist in db
    """
    user = validateSession(session_id)
    if user is not None:
        return {'user': user, 'status': status.HTTP_202_ACCEPTED}

    return {'user': None, 'response': status.HTTP_401_UNAUTHORIZED}


def api_response(status, message='', **kwargs):
    """
    Wrapper for Response;
    Provides a system for Uniform Responses
    """
    return Response(data={'message': message, 'content': kwargs}, status=status, content_type='application/json')


def validate_username(username):
    # Validates Username \w+
    valid_username = r'^\w+$'

    username = username.strip()

    if username.__len__() < 3:
        raise Exception('Username is invalid')

    match = re.match(valid_username, username)
    if not match:
        raise Exception('Username is invalid')


def validate_image(image):
    # Validates Image using pillow
    if image:
        im = Image.open(image)
        im.verify()
