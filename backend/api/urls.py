from django.urls import path
from .views import *

urlpatterns = [
    
    path("contacts/", get_contact, name ="get_contact"),
    path("contacts/post/", post_contact, name ="post_contact"),
     path("projects/", get_projects, name ="get_projects"),
    path("projects/post/", post_project, name ="post_project"),
]
