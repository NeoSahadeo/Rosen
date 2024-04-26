from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.SimpleRouter()

urlpatterns = [
    path('signup/', views.Signup.as_view()),
    path('login/', views.Login.as_view()),
    path('logout/', views.Logout.as_view()),
    path('validatesession/', views.ValidateSession.as_view()),

    path('', include(router.urls)),
]
