from rest_framework import serializers
from django.contrib.auth import get_user_model
from Auth.models import College

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    college = serializers.PrimaryKeyRelatedField(
        queryset = College.objects.all(),
        required = True
    )

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'college']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            college=validated_data['college']
        )
        return user

class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = ['id', 'name', 'code', 'city', 'state', 'country']
