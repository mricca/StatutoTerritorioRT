# Generated by Django 2.0.8 on 2019-02-15 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('strt_users', '0005_auto_20190213_1641'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appuser',
            name='first_name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='nome'),
        ),
        migrations.AlterField(
            model_name='appuser',
            name='last_name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='cognome'),
        ),
    ]
