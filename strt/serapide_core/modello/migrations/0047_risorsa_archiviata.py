# Generated by Django 2.0.8 on 2019-03-27 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modello', '0046_auto_20190326_1114'),
    ]

    operations = [
        migrations.AddField(
            model_name='risorsa',
            name='archiviata',
            field=models.BooleanField(default=False),
        ),
    ]
