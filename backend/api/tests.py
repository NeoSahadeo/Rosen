import json
from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
import rest_framework
from rest_framework.test import APIRequestFactory, APIClient
from api.models import (User, Group)
from api.utils import (validate_username)

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

    def test_collision(self):
        response = client.post('/signup/', {
            'username': USERNAME,
            'email': EMAIL,
            'password': PASSWORD,
            })
        self.assertEqual(response.status_code, 409)

    def test_invalid_credentials(self):
        response = client.post('/signup/', {
            'username': 'ne',
            'email': 'neoSahadeo@gm.com',
            'password': PASSWORD,
            })
        self.assertEqual(response.status_code, 400)

        response = client.post('/signup/', {
            'username': 'Neo',
            'email': 'neoSahadeogm.com',
            'password': PASSWORD,
            })
        self.assertEqual(response.status_code, 400)

        response = client.post('/signup/', {
            'username': USERNAME,
            'email': EMAIL,
            'password': '',
            })
        self.assertEqual(response.status_code, 409)

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

    def test_private_fetch(self):
        response = client.post('/login/', {'username_email': USERNAME, 'password': PASSWORD})
        session = json.loads(str(response.content, 'utf-8')) 
        session_id = session.get('data').get('session_id')
        response = client.post('/fetchprofile/', {'session_id': session_id})
        self.assertEqual(response.status_code, 200)

    # def test_session_data(self):
    #     response = client.post('/login/', {'username_email': USERNAME, 'password': PASSWORD})
    #     session = json.loads(str(response.content, 'utf-8'))
    #     print(session)



class SearchTest(TestCase):
    def setUp(self):
        client.post('/signup/', {
            'username': USERNAME,
            'email': EMAIL,
            'password': PASSWORD,
            })

    def test_missing(self):
        response = client.get('/search/?value=NeoSahadeo')
        self.assertEqual(response.status_code, 204)

    def test_search(self):
        response = client.get('/search/?type=user&value=NeoSahadeo')
        self.assertEqual(response.status_code, 200)
