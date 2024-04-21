from django.test import TestCase
from django.db.utils import IntegrityError
from api.models import User, Post


# class UserTest(TestCase):
#     def test_user_creation(self):
#         user = User.objects.create(
#                 username="Neo",
#                 email="neo@gmail.com")
#         self.assertIsNotNone(user)

#     def test_invalid_username_creation(self):
#         user = User.objects.create(
#                 username="Neo Neo",
#                 email="neo@gmail.com")
#         try:
#             user = User.objects.get(username='Neo Neo')
#         except User.DoesNotExist:
#             self.assertIsNone(user)

#     def test_invalid_email_creation(self):
#         user = User.objects.create(
#                 username="Neo",
#                 email="Neo")
#         try:
#             user = User.objects.get(email='Neo')
#         except User.DoesNotExist:
#             self.assertIsNone(user)

#     def test_single_username(self):
#         try:
#             User.objects.create(
#                     username="Neo",
#                     email="Neo@gmail.com")
#             User.objects.create(
#                     username="Neo",
#                     email="Neo@gmail.com")
#         except IntegrityError:
#             pass
