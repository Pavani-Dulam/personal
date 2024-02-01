from django.db import models
#  source /home/applines-16/Music/ReactDjano/back
# end/venv/bin/activate
# Create your models here.

class Products(models.Model):
    product_id=models.IntegerField()
    product_name = models.CharField(max_length=30)
    product_price = models.IntegerField(max_length=30)
    product_quantity=models.IntegerField(max_length=30)
    total=models.IntegerField(max_length=30,default=0)
    description=models.CharField(max_length=100)
    

