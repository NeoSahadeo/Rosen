import bcrypt
from api.models import User


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
