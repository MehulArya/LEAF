from django.db import models
from django.conf import settings
from Auth.models import College
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __init__(self):
        return self.name

class CommunityModel(models.Model):
    INTRA_COLLEGE = "INTRA-COLLEGE"
    INTER_COLLEGE = "INTER-COLLEGE"

    COMMUNITY_TYPE_CHOICES = [
        (INTRA_COLLEGE, "Intra-College"),
        (INTER_COLLEGE, "Inter-College")
    ]

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null = True, related_name="communities")
    community_type = models.CharField(max_length=20, choices=COMMUNITY_TYPE_CHOICES)
    college = models.ForeignKey(College, on_delete=models.SET_NULL, null=True, blank=True, related_name="communities")
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="created_communities")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        unique_together = ('name', 'college')

    def clean(self):
        from django.core.exceptions import ValidationError
        if self.community_type == self.INTRA_COLLEGE and not self.college:
            raise ValidationError("Intra-college communities must have a college set.")
        if self.community_type == self.INTER_COLLEGE and self.college:
            raise ValidationError("Inter-college communities must not have a college set.")

    def __str__(self):
        return self.name