from django.core.management.base import BaseCommand
from users.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.user_create(username='test', email='test@gmx.com', password='ABcd1234!')
