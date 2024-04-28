import json
from django.test import TestCase
from django.db.utils import IntegrityError
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework.test import APIRequestFactory, APIClient
from api.models import (User, Group)
from api.utils import (
        hash_password,
        authenticate,
        createSession,
        validateSession)
from api.views import (
        Signup,
        Login,
        ValidateSession,
        Logout)

# Test Values
USERNAME = 'NeoSahadeo'
EMAIL = 'neosahadeo@protonmail.com'
PASSWORD = 'Password@1234'
GROUP_NAME = 'Groupy'
GROUP_DESCRIPTION = 'A very groupy group.'
IMAGE = SimpleUploadedFile('gooby_wooby.png',
                           content=b'file_content',
                           content_type='image/png')

factory = APIRequestFactory()
client = APIClient()


class GroupTest(TestCase):
    def test_model_creation(self):
        Group.objects.create(
                name=GROUP_NAME,
                description=GROUP_DESCRIPTION,
                image=IMAGE)
        group = Group.objects.get(name=GROUP_NAME)
        self.assertIsNotNone(group)


class UserTest(TestCase):
    def setUp(self):
        client.post('/signup/', {
            'username': USERNAME,
            'email': EMAIL,
            'password': PASSWORD,
            'image': IMAGE
            })

    def test_creation(self):
        User.objects.get(username=USERNAME)

    def test_patch(self):
        user = User.objects.get(username=USERNAME)
        user.username = 'Neo2'
        user.save()

        user = User.objects.get(username='Neo2')
        # response = client.post('/login/', {
        #     'username_email': USERNAME,
        #     'password': PASSWORD
        #     })
        # response = str(response.content, encoding='utf-8')
        # print(response)
        # response = json.loads(response)
        # session_id = response.get('session_id')

        # client.patch('/patch/', {
        #     'username': 'Neo2'
        #     })
        # user = User.objects.get(username='Neo2')
        # print(user.image)
