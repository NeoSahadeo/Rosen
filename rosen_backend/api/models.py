import uuid
from django.db import models
from django.contrib.sessions.models import Session
from django.core.validators import (
        validate_email,
        RegexValidator)

validate_username = RegexValidator(regex=r'^\S+$')


class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=30,
                                blank=False,
                                unique=True,
                                validators=[validate_username])
    email = models.EmailField(validators=[validate_email],
                              unique=True,
                              blank=False)
    password = models.CharField(max_length=255,
                                blank=False)
    image = models.ImageField(upload_to='static/',
                                blank=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class UserSession(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             db_constraint=False)
    session = models.ForeignKey(Session,
                                null=True,
                                on_delete=models.SET_NULL,
                                db_constraint=False)

    def __str__(self):
        return {self.user, self.session}


class Group(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False,
                            unique=True,
                            max_length=40)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='static/',
                              blank=True)
    members = models.ManyToManyField(User)
    member_count = models.IntegerField(default=0)
    creator = models.OneToOneField(User,
                                   null=True,
                                   related_name='+',
                                   on_delete=models.SET_NULL)


class UserGroups(models.Model):
    user = models.ForeignKey(User,
                             blank=True,
                             on_delete=models.CASCADE)
    group = models.ForeignKey(Group,
                              blank=True,
                              on_delete=models.CASCADE)

# class Message(models.Model):
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     user = models.ForeignKey(User,
#                              on_delete=models.CASCADE,
#                              db_constraint=False)
#     upvotes = models.IntegerField(default=0)
#     downvotes = models.IntegerField(default=0)
#     content = models.TextField(blank=True)


# class Post(models.Model):
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     title = models.TextField(blank=False)
#     content = models.TextField(blank=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     creation_date = models.DateTimeField(auto_now_add=True)
#     upvotes = models.IntegerField(default=0)
#     downvotes = models.IntegerField(default=0)
#     comments_count = models.IntegerField(default=0)
#     share_count = models.IntegerField(default=0)
#     comments = models.ManyToManyField(Message)
