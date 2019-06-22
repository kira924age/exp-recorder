from django.db import models

class Money_record(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField( default=0 )
    created_at = models.DateTimeField(
        auto_now_add = True,
    )

    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name

