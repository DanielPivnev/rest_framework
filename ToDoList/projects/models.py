from django.db import models

# Create your models here.
from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=128)
    project_link = models.URLField(blank=True)
    employees = models.ManyToManyField(User)


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, null=True)
    text = models.CharField(max_length=1000)
    active = models.BooleanField(default=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    created_timestamp = models.DateTimeField(auto_now_add=True)
    updated_timestamp = models.DateTimeField(auto_now=True)
