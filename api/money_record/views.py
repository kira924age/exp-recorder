from money_record.models import Money_record
from money_record.serializers import Money_record_Serializer
from rest_framework import generics

class Money_record_Create(generics.ListCreateAPIView):
    queryset = Money_record.objects.all().order_by('-id')
    serializer_class = Money_record_Serializer

class Money_record_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Money_record.objects.all()
    serializer_class = Money_record_Serializer

