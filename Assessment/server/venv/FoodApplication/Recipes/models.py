from django.db import models

# Create your models here.
class Food(models.Model):
    recipe_name=models.CharField(max_length=40)
    recipe_description=models.CharField(max_length=500,null=True)
    recipe_type=models.CharField(max_length=30)
    recipe_created=models.DateField()
    recipe_image=models.CharField(max_length=200)




