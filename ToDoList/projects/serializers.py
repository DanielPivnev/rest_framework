from rest_framework import serializers
from rest_framework.serializers import HyperlinkedModelSerializer

from users.serializers import UserModelSerializer
from .models import Project, ToDo


class ProjectModelSerializer(HyperlinkedModelSerializer):
    employees = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    user = UserModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
