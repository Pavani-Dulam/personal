from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED,HTTP_204_NO_CONTENT, HTTP_400_BAD_REQUEST)
from .models import Food
from .serializers import Foodserializer
from datetime import datetime
from datetime import timedelta
import logging 
log=logging.getLogger(__name__)

# Create your views here.
class RecipeAPIView(APIView):
    try:
        def get(self, request):
            food_info = Food.objects.all()
            serializer = Foodserializer(food_info, many=True)
            return Response(serializer.data, status=HTTP_200_OK)
    except Exception as e:
        log.exception(e)
    try:
        def post(self,request):
            my_dict=request.data
            serializer=Foodserializer(data=my_dict)
            if serializer.is_valid():
               serializer.save()
            return Response(serializer.data,HTTP_201_CREATED)

    except Exception as e:
        log.exception(e)

    try:
        def put(self,request,id):
            food_info=Food.objects.get(id=id) 
            my_dict = request.data
            if request.data.get("recipe_name"):
               food_info.recipe_name =my_dict["recipe_name"]
            if request.data.get("recipe_description"):
               food_info.recipe_description =my_dict["recipe_description"]
            if request.data.get("recipe_type"):
               food_info.recipe_type=my_dict["recipe_type"]
            if request.data.get("recipe_created"):
               food_info.recipe_created=my_dict["recipe_created"]
            if request.data.get("recipe_image"):
               food_info.description=my_dict["recipe_image"]
            food_info.save()
            return Response(True, HTTP_201_CREATED)
    except Exception as e:
            log.exception(e)
    try:
        def delete(self,request,id):
            obj=Food.objects.get(id=id).delete()
            return Response("field deleted")
    except Exception as e:
           log.exception(e)


class EditAPIView(APIView):
        try:
         def get(self,request,id):
             obj=Food.objects.get(id=id)
             serialize=Foodserializer(obj)
             return Response(serialize.data)
        except Exception as e:
            log.exception(e)

class dateAPIView(APIView):
    try:
        def post(self, request,week):
            if  week=="this_week":
               today=datetime.now().date()
               print(today)
               start_of_week=today-timedelta(days=today.weekday())
               print(start_of_week)
               end_of_week=start_of_week+timedelta(days=6)
               print(end_of_week)
               this_week_data=Food.objects.filter(recipe_created__range=[start_of_week,end_of_week])
               serializer =Foodserializer(this_week_data, many=True)
               return Response(serializer.data, status=HTTP_200_OK)
            elif week=="last_week":
                today=datetime.now().date()
                start_of_week=today-timedelta(days=today.weekday())
                end_of_week=start_of_week+timedelta(days=6)
                last_week_start=start_of_week-timedelta(days=7)
                last_week_end=end_of_week-timedelta(days=7)
                # print(last_week_start)
                # print(last_week_end)
                last_week_data=Food.objects.filter(recipe_created__range=[last_week_start,last_week_end])
                serializer =Foodserializer(last_week_data, many=True)
                return Response(serializer.data, status=HTTP_200_OK)
            
            elif week=="all":
                object=Food.objects.all()
                serializer=Foodserializer(object,many=True)
                return Response(serializer.data,status=HTTP_200_OK)
            
            else:
                return Response("no data")

    except Exception as e:
        log.exception(e)