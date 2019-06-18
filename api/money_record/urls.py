from django.urls import path
from . import views

urlpatterns = [
    path('api/money_record/', views.Money_record_Create.as_view() ),
]
