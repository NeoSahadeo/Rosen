import json
from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework.test import APIRequestFactory, APIClient
from api.models import (User, Group)

# Test Values
USERNAME = 'NeoSahadeo'
EMAIL = 'neosahadeo@protonmail.com'
PASSWORD = 'Password@1234'
GROUP_NAME = 'Groupy'
GROUP_DESCRIPTION = 'A very groupy group.'
# IMAGE = SimpleUploadedFile('gooby_wooby.png',
#                            content=b'file_content',
#                            content_type='image/png')

factory = APIRequestFactory()
client = APIClient()


class GroupTest(TestCase):
    def test_model_creation(self):
        Group.objects.create(
                name=GROUP_NAME,
                description=GROUP_DESCRIPTION,)
        group = Group.objects.get(name=GROUP_NAME)
        self.assertIsNotNone(group)


class UserTest(TestCase):
    def setUp(self):
        client.post('/signup/', {
            'username': USERNAME,
            'email': EMAIL,
            'password': PASSWORD,
            })

    def test_creation(self):
        User.objects.get(username=USERNAME)

    def test_patch(self):
        user = User.objects.get(username=USERNAME)
        user.username = 'Neo'
        user.save()
        user = User.objects.get(username='Neo')

    def test_login(self):
        # Incorrect credentials
        response = client.post('/login/', {'username_email': USERNAME, 'password': ''})
        self.assertEqual(response.status_code, 401)

        # Correct credentials
        response = client.post('/login/', {'username_email': USERNAME, 'password': PASSWORD})
        self.assertEqual(response.status_code, 202)
