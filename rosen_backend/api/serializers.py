from rest_framework import serializers


class PublicUserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=30)

class UserSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
    creation_date = serializers.DateTimeField()
    last_login = serializers.DateTimeField()

# Add group serializers
