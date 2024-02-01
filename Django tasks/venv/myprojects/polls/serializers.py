from rest_framework import serializers
from .models import Students
from .models import Exams
class Studentserializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = (
                  'first_name',
                  'last_name',
                  'course',
                    )
class Examserializer(serializers.ModelSerializer):
    class Meta:
        model = Exams
        fields = (
                  'Student_Id',
                  'Subject',
                  'Exam_Date',
                  'Max_Score',
                  'Actual_Score',
                  'Percentage',
                    )