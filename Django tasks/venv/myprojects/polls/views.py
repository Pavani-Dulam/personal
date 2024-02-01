from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
from django.http import HttpResponse
import datetime
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED,HTTP_204_NO_CONTENT, HTTP_400_BAD_REQUEST)
from .models import Students,Exams
from .serializers import Studentserializer,Examserializer
import logging
log=logging.getLogger(__name__)
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

def student_list(request):
    students=Students.objects.all()
    return HttpResponse("list of students{}".format(students))

# def sample(request):
class StudentAPIView(APIView):
    try:
        def post(self, request):
            my_dict = request.data
            student_info = Students()
            student_info.first_name =my_dict["firstName"]
            student_info.last_name =my_dict["lastName"]
            student_info.course=my_dict["course"]
            student_info.save()
            return Response(True, HTTP_201_CREATED)

    except Exception as e:
        # print("eeeeeeee",e)
        log.exception(e)
    try:
        def delete(self, request, id):
            student_info = Students.objects.get(id=id).delete()
            return Response(True, status=HTTP_200_OK)
    except Exception as e:
           log.exception(e)
    try:
        def put(self, request,id):
            student_info = Students.objects.get(id=id) 
            my_dict = request.data
            if request.data.get("firstName"):
               student_info.first_name =my_dict["firstName"]
            if request.data.get("lastName"):
               student_info.last_name =my_dict["lastName"]
            if request.data.get("course"):
               student_info.course=my_dict["course"]
            student_info.save()
            return Response(True, HTTP_201_CREATED)

    except Exception as e:
        print("eeeeeeee",e)
        log.exception(e)
    try:
        def get(self, request):
            student_info = Students.objects.all()
            # student_info=Students.objects.filter(course="CSE")
            serializer = Studentserializer(student_info, many=True)
            return Response(serializer.data, status=HTTP_200_OK)
    except Exception as e:
            print("eeee for get")
            log.exception(e)

class ExamAPIView(APIView):
    try:
        def post(self, request):
            my_dict = request.data
            exam_info=Exams()
            exam_info.Student_Id=Students.objects.get(id=request.data.get('Student_Id'))
            exam_info.Subject=my_dict["Subject"]
            exam_info.Exam_Date=my_dict["Exam_Date"]
            exam_info.Max_Score=my_dict["Max_Score"]
            exam_info.Actual_Score=my_dict["Actual_Score"]
            exam_info.Percentage=(exam_info.Actual_Score/exam_info.Max_Score)*100
            exam_info.save()
            return Response(True, HTTP_201_CREATED)

    except Exception as e:
        log.exception(e)
    try:
        def put(self, request,id):
            exam_info=Exams.objects.get(id=id)
            my_dict = request.data
            exam_info.Student_Id=Students.objects.get(id=request.data.get('Student_Id'))
            exam_info.Subject=my_dict["Subject"]
            exam_info.Exam_Date=my_dict["Exam_Date"]
            exam_info.Max_Score=my_dict["Max_Score"]
            exam_info.Actual_Score=my_dict["Actual_Score"]
            exam_info.Percentage=my_dict["Percentage"]
            exam_info.Percentage=(exam_info.Actual_Score/exam_info.Max_Score)*100
            exam_info.save()
            return Response(True, HTTP_201_CREATED)

    except Exception as e:
        log.exception(e)
    try:
        def get(self, request):
            # exam_info = Exams.objects.all()
            exam_info=Exams.objects.filter(Percentage__gt=50)
            serializer = Examserializer(exam_info, many=True)
            return Response(serializer.data, status=HTTP_200_OK)
    except Exception as e:
            log.exception(e)



