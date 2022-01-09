from django.http import Http404
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .filters import ProjectFilter
from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .paginators import ProjectPaginator, ToDoPaginator


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectPaginator
    filter_class = ProjectFilter


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoPaginator

    def destroy(self, request, *args, **kwargs):
        try:
            todo = self.get_object()
            todo.active = False
            todo.save()
        except Http404:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)
