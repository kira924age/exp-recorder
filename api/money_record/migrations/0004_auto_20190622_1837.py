# Generated by Django 2.2.2 on 2019-06-22 09:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('money_record', '0003_auto_20190618_1531'),
    ]

    operations = [
        migrations.AlterField(
            model_name='money_record',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]