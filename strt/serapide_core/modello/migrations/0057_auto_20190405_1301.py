# Generated by Django 2.0.8 on 2019-04-05 13:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('modello', '0056_auto_20190405_0915'),
    ]

    operations = [
        migrations.AddField(
            model_name='conferenzacopianificazione',
            name='data_chiusura_conferenza',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='piano',
            name='procedura_vas',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='vas', to='modello.ProceduraVAS'),
        ),
        migrations.AlterField(
            model_name='azione',
            name='tipologia',
            field=models.CharField(choices=[('unknown', 'UNKNOWN'), ('creato_piano', 'Creato Piano/Variante'), ('richiesta_verifica_vas', 'Documento Preliminare VAS'), ('pareri_verifica_sca', 'Pareri verifica VAS'), ('emissione_provvedimento_verifica', 'Emissione Provvedimento di verifica'), ('pubblicazione_provvedimento_verifica', 'Pubblicazione provvedimento di verifica'), ('avvio_consultazioni_sca', 'Avvio consultazioni SCA'), ('pareri_sca', 'Pareri SCA'), ('avvio_esame_pareri_sca', 'Avvio esame pareri SCA'), ('upload_elaborati_vas', 'Upload elaborati VAS'), ('avvio_procedimento', 'Avvio del Procedimento'), ('formazione_del_piano', 'Formazione del Piano'), ('protocollo_genio_civile', 'Protocollo Genio Civile'), ('protocollo_genio_civile_id', 'Protocollo N.'), ('richiesta_conferenza_copianificazione', 'Richiesta Conferenza di copianificazione'), ('esito_conferenza_copianificazione', 'Esito conferenza di copianificazione'), ('trasmissione_adozione', 'Trasmissione Adozione'), ('osservazioni_enti', 'Osservazioni Enti'), ('osservazioni_regione', 'Osservazioni Regione'), ('upload_osservazioni_privati', 'Upload Osservazioni Privati')], default='unknown', max_length=80),
        ),
    ]
