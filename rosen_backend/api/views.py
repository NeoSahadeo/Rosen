import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import AnonymousUser
from django.db import IntegrityError
from django.http import HttpResponse
from api.models import (
        User,
        Group)
from api.utils import (
        hash_password,
        authenticate,
        createSession,
        validateSession,
        verfiySession)


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
        return verfiySession(sessionid)['response']


class Signup(APIView):
    def post(self, request):
        # TODO
        # Clean data
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        image = request.data.get('image')

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
                            email=email,
                            image=image)
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
            response = Response({
                'session_id': request.session.session_key,
                'session_expiry': request.session.set_expiry(0),
                }, status=status.HTTP_202_ACCEPTED)
            request.session.set_expiry(0)
            return response

        user = AnonymousUser()
        return Response(status=status.HTTP_401_UNAUTHORIZED)


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
                return Response(status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response(status=status.HTTP_409_CONFLICT)
        return Response(status=status.HTTP_401_UNAUTHORIZED)


class UpdateProfile(APIView):
    def post(self, request):
        # TODO
        # clean data
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        image = request.FILES.get('image')
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
            return Response(status=status.HTTP_202_ACCEPTED)
        return Response(status=status.HTTP_401_UNAUTHORIZED)


class FetchProfileImage(APIView):
    # NEED TO ABSTRACT
    def post(self, request):
        sessionid = str(request.body, 'utf-8')
        response = verfiySession(sessionid)['user']
        try:
            image_url = response.image.url
        except ValueError:
            image_url = None
        return Response({
            'image': image_url,
            'username': response.username,
            'email': response.email
            })


class Search(APIView):
    def get(self, request):
        pass
