from django.urls import path
from core import views

urlpatterns = [
    path('user/', views.current_user, name='current_user'),
    path('logout/', views.logout_view, name='logout'),
]