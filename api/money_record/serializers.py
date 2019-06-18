from rest_framework import serializers
from money_record.models import Money_record

class Money_record_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Money_record
        fields = '__all__'

