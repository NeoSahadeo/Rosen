from rest_framework import serializers


class UserSerializerPublic(serializers.Serializer):
    username = serializers.CharField(max_length=30)
    image = serializers.ImageField()

class UserSerializerPrivate(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    creation_date = serializers.DateTimeField()
    last_login = serializers.DateTimeField()
    image = serializers.ImageField()

# Add group serializers
