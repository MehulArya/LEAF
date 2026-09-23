from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from Auth.serializers import RegisterSerializer, CollegeSerializer, PasswordResetRequestSerializer, PasswordResetConfirmserializer
from rest_framework_simplejwt.tokens import RefreshToken
from Auth.models import College, User
from Auth.tokens import email_verification_token
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
# Create your views here.

class CollegeListView(generics.ListAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
    permission_classes = [permissions.AllowAny]

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = serializer.save()
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = email_verification_token.make_token(user)
        verification_link = f"http://127.0.0.1:8000/auth/verify-email/{uid}/{token}/"

        send_mail(
            subject="Verify your Leaf account",
            message=f"Click to verify: {verification_link}",
            from_email="noreply@leaf.com",
            recipient_list=[user.email],
        )


class VerifyEmailView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, uid, token):
        try:
            user_id = force_str(urlsafe_base64_decode(uid))
            user = User.objects.get(pk=user_id)
        except (User.DoesNotExist, ValueError, TypeError, OverflowError):
            return Response({"error": "Invalid Link"}, status = status.HTTP_400_BAD_REQUEST)

        if user.is_email_verified:
            return Response({"message": "Email already verified"}, status=status.HTTP_200_OK)

        if email_verification_token.check_token(user, token):
            user.is_email_verified = True
            user.save()
            return Response({"message": "Email verified successfully"}, status=status.HTTP_200_OK)

        return Response({"error": "Invalid or expired token"}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_class = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_REST_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class PasswordResetRequestView(generics.GenericAPIView):
    serializer_class = PasswordResetRequestSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']

        try:
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            reset_link = f"http://127.0.0.1:8000/auth/reset-password/{uid}/{token}/"
            send_mail(
                subject="Reset your Leaf password",
                message=f"Click to reset: {reset_link}",
                from_email="noreply@leaf.com",
                recipient_list=[user.email],
            )
        except User.DoesNotExist:
            pass

        return Response({"message": "If that email exists, a reset link has been sent."})

class PasswordResetConfirmView(generics.GenericAPIView):
    serializer_class = PasswordResetConfirmserializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "Password reset successful"})