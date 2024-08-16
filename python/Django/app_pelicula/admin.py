from django.contrib import admin
from .models import Pelicula  # ---importar clase  ( pelicula ) para REGISTRAR


# Register your models here.

@admin.register(Pelicula)# decorador para registrar la clase de modelo (en este caso PELICULA)
class PelicualAdmin(admin.ModelAdmin):
    ...
