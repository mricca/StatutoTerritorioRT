# Generated by Django 2.0.8 on 2019-03-21 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modello', '0035_auto_20190321_1046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proceduraavvio',
            name='garante_pec',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]