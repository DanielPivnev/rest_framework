import graphene
from graphene_django import DjangoObjectType
from ToDoList.projects.models import Project, ToDo
from ToDoList.users.models import User


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class Query(graphene.ObjectType):
    projects = graphene.List(ProjectType)
    todos = graphene.List(ToDoType)
    users = graphene.List(UserType)


    def resolve_projects(root, info):
        return Project.objects.all()


    def resolve_todos(root, info):
        return ToDo.objects.all()


    def resolve_users(root, info):
        return User.objects.all()


class UserMutation(graphene.Mutation):
    class Arguments:
        id = graphene.Int(requred=True)
        email = graphene.String(required=False)
        password = graphene.String(required=False)

    @classmethod
    def mutate(cls, root, info, id, email, password):
        user = User.objects.get(id=id)
        if email:
            user.email = email
        if password:
            user.password = password
        user.save()


schema = graphene.Schema(query=Query, mutation=UserMutation)
