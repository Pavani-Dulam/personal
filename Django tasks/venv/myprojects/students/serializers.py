from rest_framework import serializers
from .models import Students
class Studentserializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = (
                  'student_id',
                  'first_name',
                  'last_name',
                  'email',
                  'course',
                    )