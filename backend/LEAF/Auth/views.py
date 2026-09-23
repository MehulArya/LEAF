from rest_framework import generics, permissions
from Auth.serializers import RegisterSerializer
# Create your views here.

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permissions_classes = [permissions.AllowAny]