# Generated by Django 2.0.8 on 2019-04-05 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modello', '0058_proceduraavvio_richiesta_integrazioni'),
    ]

    operations = [
        migrations.AddField(
            model_name='proceduraavvio',
            name='messaggio_integrazione',
            field=models.TextField(blank=True, null=True),
        ),
    ]
