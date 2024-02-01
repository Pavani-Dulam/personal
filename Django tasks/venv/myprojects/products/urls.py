from django.urls import path
from .views import *
urlpatterns = [
    path('products/',ProductsAPIView.as_view()),
    path('products/<id>/',ProductsAPIView.as_view()),
    path('date/',dateAPIView.as_view()),
]