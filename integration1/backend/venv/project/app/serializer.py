from rest_framework import serializers
from .models import Products
class Productserializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = (
                  'product_id',
                  'product_name',
                  'product_price',
                  'product_quantity',
                  'total',
                  'id',
                  'description',
                    )