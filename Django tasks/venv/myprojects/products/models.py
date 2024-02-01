from django.db import models

# Create your models here.
class Products(models.Model):
    product_id=models.IntegerField()
    product_name = models.CharField(max_length=30)
    product_price = models.IntegerField(max_length=30)
    product_quantity=models.IntegerField(max_length=30)
    product_archived=models.IntegerField(null=True,blank=True)
    date_time=models.DateField(null=True,blank=True)

