from django.shortcuts import render
from datetime import datetime,timedelta
from django.db.models import Q
import rest_framework
# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED,HTTP_204_NO_CONTENT, HTTP_400_BAD_REQUEST)
from .models import Products
import logging
log=logging.getLogger(__name__)
from .serializers import Productserializer

class ProductsAPIView(APIView):
    try:
        def post(self, request):
            my_dict = request.data
            product_info = Products()
            product_info.product_id=my_dict["product_id"]
            product_info.product_name =my_dict["product_name"]
            product_info.product_price =my_dict["product_price"]
            product_info.product_quantity=my_dict["product_quantity"]
            product_info.date_time=my_dict["date_time"]
            product_info.save()
            return Response(True, HTTP_201_CREATED)
    except Exception as e:
        log.exception(e)
    try:
        def get(self, request):
            # product_info = Products.objects.all()
            product_info=Products.objects.filter(product_archived="1")
            serializer = Productserializer(product_info, many=True)
            return Response(serializer.data, status=HTTP_200_OK)
    except Exception as e:
        log.exception(e)
    try:
        def put(self, request,id):
           product_info = Products.objects.get(id=id) 
           my_dict = request.data
           if request.data.get("product_id"):
              product_info.product_id =my_dict["product_id"]
           if request.data.get("product_name"):
              product_info.product_name =my_dict["product_name"]
           if request.data.get("product_price"):
              product_info.product_price=my_dict["product_price"]
           if request.data.get("product_archived"):
              product_info.product_archived=my_dict["product_archived"]
           if request.data.get("product_quantity"):
              product_info.product_quantity=my_dict["product_quantity"]
           if request.data.get("date_time"):
               product_info.date_time=my_dict["date_time"]
           product_info.save()
           return Response(True, HTTP_201_CREATED)
    except Exception as e:
        log.exception(e)
    try:
        def delete(self, request, id):
            product_info = Products.objects.get(id=id).delete()
            return Response(True, status=HTTP_200_OK)
    except Exception as e:
           log.exception(e)

class dateAPIView(APIView):
    try:
        def post(self, request):
            a=None
            if  request.data.get("a")=="this_week":
               today=datetime.now().date()
               start_of_week=today-timedelta(days=today.weekday())
               print(start_of_week)
               end_of_week=start_of_week+timedelta(days=6)
               print(end_of_week)
               this_week_data=Products.objects.filter(date_time__range=[start_of_week,end_of_week])
               serializer = Productserializer(this_week_data, many=True)
               return Response(serializer.data, status=HTTP_200_OK)
            elif request.data.get("a")=="last_week":
                today=datetime.now().date()
                start_of_week=today-timedelta(days=today.weekday())
                end_of_week=start_of_week+timedelta(days=6)
                last_week_start=start_of_week-timedelta(days=7)
                last_week_end=end_of_week-timedelta(days=7)
                last_week_data=Products.objects.filter(date_time__range=[last_week_start,last_week_end])
                serializer = Productserializer(last_week_data, many=True)
                return Response(serializer.data, status=HTTP_200_OK)
            elif request.data.get("a")=="this_month":
                today=datetime.now().date()
                start_of_month=today.replace(day=1)
                end_of_month=start_of_month.replace(day=31)
                this_month_data=Products.objects.filter(date_time__range=[start_of_month,end_of_month])
                serializer = Productserializer(this_month_data, many=True)
                return Response(serializer.data, status=HTTP_200_OK)
            else:
                return Response("no data" ,status=HTTP_200_OK)
            

    except Exception as e:
        log.exception(e)


