from django.urls import path
from api import views


urlpatterns = [
    path('login/', views.Login.as_view()),
    path('logout/', views.Logout.as_view()),
    path('signup/', views.Signup.as_view()),
    path('validatesession/', views.ValidateSession.as_view()),
]
