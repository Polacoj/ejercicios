from .models import Pelicula
from rest_framework import serializers

class PeliculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pelicula    #MODELO a Serializar (convertir en JSON)
        fields = '__all__' #CAMPOS a tomar---se pueden restringir---