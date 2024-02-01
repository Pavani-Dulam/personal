from django.db import models

# Create your models here.
class Students(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    course=models.CharField(max_length=20,null=True,blank=True)

class Exams(models.Model):
    Student_Id=models.ForeignKey(Students, null=True, on_delete=models.SET_NULL)
    Subject=models.CharField(max_length=30)
    Exam_Date= models.CharField(max_length=20)
    Max_Score=models.IntegerField()
    Actual_Score=models.IntegerField()
    Percentage=models.DecimalField( max_digits=5, decimal_places=2,null=True,blank=True)