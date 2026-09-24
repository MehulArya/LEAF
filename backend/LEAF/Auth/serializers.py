from rest_framework import serializers
from django.contrib.auth import get_user_model
from Auth.models import College
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import force_str
from django.contrib.auth.tokens import default_token_generator

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

class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

class PasswordResetConfirmserializer(serializers.Serializer):
    uid = serializers.CharField()
    token = serializers.CharField()
    new_password = serializers.CharField(write_only=True, min_length=8)

    def validate(self, data):
        try:
            user_id = force_str(urlsafe_base64_decode(data['uid']))
            user = User.objects.get(pk=user_id)
        except (User.DoesNotExist, TypeError, ValueError, OverflowError):
            raise serializers.ValidationError("Invalid link")

        if not default_token_generator.check_token(user, data['token']):
            raise serializers.ValidationError("Invalid or Expired Token")

        data['user'] = user
        return data

    def save(self):
        user = self.validated_data['user']
        user.set_password(self.validated_data['new_password'])
        user.save()