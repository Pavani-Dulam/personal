from django.urls import path
from .views import *
urlpatterns = [
    path('students/',StudentsAPIView.as_view()),
     path('students/<id>/',StudentsAPIView.as_view()),
    
    
]