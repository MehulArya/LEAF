from django.contrib.auth.models import AbstractUser
from django.db import models

class College(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True
    )

    code = models.CharField(
        max_length=50,
        unique=True
    )

    city = models.CharField(
        max_length=100
    )

    state = models.CharField(
        max_length=100
    )

    country = models.CharField(
        max_length=100,
        default="India"
    )

    email_domain = models.CharField(
        max_length=255,
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.name


class User(AbstractUser):
    email = models.EmailField(
        unique=True,
        max_length=255
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    profile_image = models.URLField(
        blank=True,
        null=True
    )

    bio = models.TextField(
        blank=True,
        null=True,
        max_length=500
    )

    college = models.ForeignKey(
        College,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="students"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.username