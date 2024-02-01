from django.urls import path
from .views import *
urlpatterns = [
    # path("", views.index, name="index"),
    # path("date/",views.current_datetime,name="current_dayetime"),
    # path('students/',views.student_list,name="student_list"),
    # path('studentdata/',views.sample,name="sample"),
    path('sample/',StudentAPIView.as_view()),
    path('students/<id>/',StudentAPIView.as_view()),
    path('exam/',ExamAPIView.as_view()),
    path('exams/<id>/',ExamAPIView.as_view()),
]