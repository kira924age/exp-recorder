from django.urls import path
from . import views

urlpatterns = [
    path('api/money_record/', views.Money_record_Create.as_view() ),
    path('api/detail/<int:pk>', views.Money_record_Detail.as_view() ),
]
