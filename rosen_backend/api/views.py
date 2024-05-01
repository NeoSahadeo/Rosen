from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.html import strip_tags
from django.core.validators import (
        validate_email,
        MinLengthValidator)
from django.db import IntegrityError
from api.models import (
        User,
        Group)
from api.utils import (
        hash_password,
        authenticate,
        createSession,
        validateSession,
        verfiySession,
        api_response,
        validate_username,
        validate_image)


class Latest(APIView):
    def get(self, request):
        pass


class ValidateSession(APIView):
    """Session validation endpoint
    """
    def post(self, request):
        sessionid = request.data.get('sessionid')
        return verfiySession(sessionid)['response']


class Signup(APIView):
    def post(self, request):
        username = strip_tags(request.data.get('username'))
        email = strip_tags(request.data.get('email'))
        password = strip_tags(request.data.get('password'))
        image = request.data.get('image')

        # Validation
        try:
            validate_email(email)
            validate_username(username)
            validate_image(image)
        except Exception as error:
            error = error.__str__()
            return api_response(message='Sign Up Failed',
                                data={'error': error},
                                status=status.HTTP_400_BAD_REQUEST)

        try:
            User.objects.get(email=email)
            return api_response(message='Email Already Exists',
                                status=status.HTTP_409_CONFLICT)
        except User.DoesNotExist:
            pass

        try:
            hashed_password = hash_password(password)
            if username and email and password:
                user = User(username=username,
                            password=hashed_password,
                            email=email,
                            image=image)
                user.save()
                return api_response(status=status.HTTP_201_CREATED)
        except IntegrityError:
            return api_response(message='Username Already Exists',
                                status=status.HTTP_409_CONFLICT)


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

        # RETURN CORRECT RESPONSE
        if user is not None and user.get('authenticated'):
            user = User.objects.get(username=user.get('username'))
            createSession(user, request)
            return api_response(message='Login Successful',
                                data={
                                    'session_id': request.session.session_key,
                                    'session_expiry': request.session.set_expiry(0)
                                    },
                                status=status.HTTP_202_ACCEPTED)
        return api_response(status=status.HTTP_401_UNAUTHORIZED)


class CreateGroup(APIView):
    def post(self, request):
        sessionid = request.data.get('sessionid')
        group_name = request.data.get('group_name')
        description = request.data.get('description')
        image = request.FILES['image']
        user = validateSession(sessionid)
        if user is not None:
            try:
                Group.objects.create(
                        name=group_name,
                        description=description,
                        creator=user,
                        image=image)
                return api_response(status=status.HTTP_201_CREATED)
            except IntegrityError:
                return api_response(status=status.HTTP_409_CONFLICT)
        return api_response(status=status.HTTP_401_UNAUTHORIZED)


class UpdateProfile(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        image = request.FILES.get('image')

        # Validation
        try:
            validate_email(email)
            validate_username(username)
            validate_image(image)
        except Exception as error:
            error = error.__str__()
            return api_response(message='Sign Up Failed',
                                data={'error': error},
                                status=status.HTTP_400_BAD_REQUEST)

        sessionid = request.data.get('sessionid')
        user = validateSession(sessionid)

        if user is not None:
            user.username = username or user.username
            user.email = email or user.email
            user.password = password or user.password
            # TODO
            # Delete previous image
            user.image = image or user.image
            user.save()
            return api_response(status=status.HTTP_202_ACCEPTED)
        return api_response(status=status.HTTP_401_UNAUTHORIZED)


class FetchProfileImage(APIView):
    # NEED TO ABSTRACT
    def post(self, request):
        sessionid = str(request.body, 'utf-8')
        response = verfiySession(sessionid)['user']
        try:
            image_url = response.image.url
        except ValueError:
            image_url = None
        return api_response(message='Profile Fetched',
                            data={'image': image_url,
                                  'username': response.username,
                                  'email': response.email},
                            status=status.HTTP_200_OK)


class Search(APIView):
    def get(self, request):
        pass
