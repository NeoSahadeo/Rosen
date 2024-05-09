from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from api import views

router = routers.SimpleRouter()
urlpatterns = []

urlpatterns += [
    path('signup/', views.Signup.as_view()),
    path('login/', views.Login.as_view()),
    path('validatesession/', views.ValidateSession.as_view()),
    path('patch/', views.UpdateProfile.as_view()),
    path('fetchprofile/', views.FetchProfilePrivate.as_view()),
    path('search/', views.Search.as_view()),

    path('', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
