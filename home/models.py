from pydoc import describe
from django.db import models
from django.forms import CharField

# Create your models here.
class Pages(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    html = models.TextField()
    css = models.TextField()