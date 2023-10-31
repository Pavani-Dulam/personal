from rest_framework import serializers
from .models import Food
class Foodserializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = (
                  'recipe_name',
                  'recipe_description',
                  'recipe_type',
                  'recipe_created',
                  'recipe_image',
                  'id',

                    )