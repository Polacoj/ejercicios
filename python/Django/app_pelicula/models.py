from django.db import models
# ----los MODELS son CLASES que se heredan----------

# Create your models here.


class Pelicula(models.Model):
    class Meta:
        db_table = 'pelicula'  # como se va a llamar la tabla de manera automatica----
# ---CONTIENE datos de datos ( en este caso informacion de la clase peliculas)

    nombre = models.CharField(max_length=200, unique=True)
    fecha_alta = models.DateField()
    genero = models.CharField(max_length=100)
    duracion = models.IntegerField()

    def __str__(self) -> str:
        return self.nombre
# ---METODO-para cuando imprimamos la PELICULA como objeto primero que muestre sea el nombre
