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
    def test_creation(self):
        client.post('/signup/', {
            'username': USERNAME,
            'email': EMAIL,
            'password': PASSWORD,
            'image': IMAGE
            })
        User.objects.get(username=USERNAME)
