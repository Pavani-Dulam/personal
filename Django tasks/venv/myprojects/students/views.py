from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED,HTTP_204_NO_CONTENT, HTTP_400_BAD_REQUEST)
from .models import Students
import logging
log=logging.getLogger(__name__)
from .serializers import Studentserializer

class StudentsAPIView(APIView):
    # try:
    #     def post(self, request):
    #         my_dict = request.data
    #         student_info = Students()
    #         student_info.student_id=my_dict["studentId"]
    #         student_info.first_name =my_dict["firstName"]
    #         student_info.last_name =my_dict["lastName"]
    #         student_info.email=my_dict["email"]
    #         student_info.course=my_dict["course"]
    #         student_info.save()
    #         return Response(True, HTTP_201_CREATED)
    # except Exception as e:
    #     log.exception(e)
    try:
        def get(self, request):
            # student_info = Students.objects.all()
            student_info=Students.objects.filter(course="BTech")
            serializer = Studentserializer(student_info, many=True)
            return Response(serializer.data, status=HTTP_200_OK)
    except Exception as e:
        log.exception(e)
    try:
        def post(self, request):
            my_dict = request.data
            serializer=Studentserializer(data=my_dict)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data,status=HTTP_201_CREATED)
    except Exception as e:
        log.exception(e)
    try:
        def delete(self, request, id):
            product_info = Students.objects.get(id=id).delete()
            return Response(True, status=HTTP_200_OK)
    except Exception as e:
           log.exception(e)
    try:
        def put(self, request,id):
            product_info = Students.objects.get(id=id)
            my_dict = request.data
            serializer=Studentserializer(product_info,data=my_dict)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data,status=HTTP_201_CREATED)
    except Exception as e:
        log.exception(e)


