from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .algoritmo import algoritmo_aestrella

@api_view(['GET'])
def ejecutar_astar(request):

    resultado = algoritmo_aestrella()

    return Response(resultado)