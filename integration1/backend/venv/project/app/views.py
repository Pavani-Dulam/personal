# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED,HTTP_204_NO_CONTENT, HTTP_400_BAD_REQUEST)
from .models import Products
import logging
log=logging.getLogger(__name__)
from .serializer import Productserializer

class ReactAPIView(APIView):
    
    try:
        def post(self, request):
            my_dict = request.data
            product_info = Products()
            product_info.product_id=my_dict["product_id"]
            product_info.product_name =my_dict["product_name"]
            product_info.product_price =my_dict["product_price"]
            product_info.product_quantity=my_dict["product_quantity"]
            product_info.total=float(product_info.product_price)*float(product_info.product_quantity)
            product_info.description=my_dict["description"]
    
            product_info.save()
            return Response(True, HTTP_201_CREATED)
    except Exception as e:
        log.exception(e)
    try:
        def get(self, request):
            product_info = Products.objects.all()
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
           if request.data.get("product_quantity"):
              product_info.product_quantity=my_dict["product_quantity"]
           if request.data.get("description"):
              product_info.description=my_dict["description"]
           if request.data.get("total"):
              product_info.total=my_dict["total"]
        
        
           
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

class operationsPerform(APIView):
    def get(self,request,id):
        obj=Products.objects.get(id=id)
        serialize=Productserializer(obj)
        return Response(serialize.data)
    
    def put(self,request,id):
        obj=Products.objects.get(id=id)
        serializer=Productserializer(obj,data=request.data)
        if serializer.is_valid():
            price =serializer.validated_data['product_price']
            quantity = serializer.validated_data['product_quantity']
            total = int(price) * int(quantity)
            serializer.validated_data['total'] = total
            serializer.save()
        return Response(serializer.data)
    def delete(self,request,id):
        obj=Products.objects.get(id=id)
        obj.delete()
        return Response("field deleted successfully")
    
class IncrementDecrement(APIView):
    def patch(self,request,id):
        obj = Products.objects.get(id=id)
        serializer = Productserializer(obj, data=request.data, partial=True)
        if serializer.is_valid():
            price = obj.product_price
            quantity = serializer.validated_data['product_quantity']
            total = int(price) * int(quantity)
            serializer.validated_data['total'] = total
            serializer.save()
        return Response("success",status=HTTP_201_CREATED)
class SearchAPIView(APIView):
          def get(self,request,query):
                    data = Products.objects.filter(product_name__icontains = query)
                    serializer = Productserializer(data,many=True)
                    return Response(serializer.data, HTTP_200_OK)
class DropdownView(APIView):
       def get(self,request, min_price, max_price):
           products = Products.objects.filter(product_price__gte=min_price, product_price__lte=max_price)
           serializer = Productserializer(products,many=True)
           return Response(serializer.data,HTTP_200_OK)
        

