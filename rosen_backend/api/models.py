import uuid
from django.db import models
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
    picture = models.ImageField(upload_to='static/',
                                blank=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)


class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.TextField()
    content = models.TextField(blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
