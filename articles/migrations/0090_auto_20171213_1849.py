# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-12-13 18:49
from __future__ import unicode_literals

import articles.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0089_auto_20161205_1426'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlepage',
            name='json_file',
            field=articles.fields.WagtailFileField(blank=True, help_text='Only provide if you know your template will be filled with the contents of a JSON data file.', max_length=255, null=True, upload_to='', verbose_name='JSON file'),
        ),
    ]
