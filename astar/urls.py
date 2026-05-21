from django.urls import path
from .views import ejecutar_astar

urlpatterns = [
    path('ejecutar/', ejecutar_astar),
]