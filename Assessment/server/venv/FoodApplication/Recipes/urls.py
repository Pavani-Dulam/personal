from django.urls import path
from .views import *
urlpatterns = [
    path('res/',RecipeAPIView.as_view()),
    path('res/<int:id>/',RecipeAPIView.as_view()),
    path('edit/<int:id>/',EditAPIView.as_view()),
    path('week/<str:week>/',dateAPIView.as_view()),
]