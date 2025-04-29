from django.urls import path
from .views import get_contact, post_contact

urlpatterns = [
    
    path("contacts/", get_contact, name ="get_contact"),
    path("contacts/post/", post_contact, name ="post_contact"),
]
