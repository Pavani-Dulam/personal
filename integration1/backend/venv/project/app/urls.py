from django.urls import path
from .views import *
urlpatterns = [
    path('emp/',ReactAPIView.as_view()),
    path('hi/<int:id>/',ReactAPIView.as_view()),
    path('emp/<int:id>/',operationsPerform.as_view()),
    path('increment/<int:id>/',IncrementDecrement.as_view()),
    path('search/<str:query>/',SearchAPIView.as_view()),
    path('drop/<int:min_price>/<int:max_price>/',DropdownView.as_view()),
]