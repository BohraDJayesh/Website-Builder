from cgitb import html
import imp
import re
from tkinter import PAGES
from unicodedata import name
from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Pages
from django.core.serializers import serialize
import json

# Create your views here.

def index(request):
    return render(request, 'index.html')

def editor(request):
    return render(request, 'editor.html')

def about(request):
    return render(request, 'about.html')

def savePage(request):
    if(request.method=='POST'):
        html = request.POST['html']
        css = request.POST['css']
        page = Pages.objects.create(name="Untitled", html=html, css=css)
        page.save()
    
    return JsonResponse({ "result" : (json.loads(serialize('json', [page])))[0]})