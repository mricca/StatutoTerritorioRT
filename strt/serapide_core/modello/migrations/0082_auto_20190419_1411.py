# Generated by Django 2.0.8 on 2019-04-19 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modello', '0081_auto_20190419_1112'),
    ]

    operations = [
        migrations.AddField(
            model_name='proceduraapprovazione',
            name='pubblicazione_sito_data',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='proceduraapprovazione',
            name='pubblicazione_sito_url',
            field=models.URLField(blank=True, default='', null=True),
        ),
    ]
