from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from .models import *


from .pLib import *

from django.core.mail import EmailMessage


@api_view(["GET"])
def get_contact(request):
    contacts = Contact.objects.all()
    seralizer = contactSerializer(contacts, many = True)
    return Response(seralizer.data, status = status.HTTP_200_OK)

@api_view(["POST"])
def post_contact(request):
    data = request.data
    seralizer = contactSerializer(data = data)
    if(seralizer.is_valid()):
        seralizer.save()
        
        first_name = data.get('first_name', '')
        last_name = data.get('last_name', '')
        email = data.get('email', '')
        message = data.get('message', '')
        
        
        email_message = EmailMessage(
            subject=f"New Message from {first_name} {last_name}",
            body=message,
            from_email=email, 
            to=['klaidaswik@gmail.com'],     
            headers={'Reply-To': email} 
        )
        
        email_message.send(fail_silently=False)
        
        return Response(seralizer.data, status = status.HTTP_201_CREATED)
    return Response(seralizer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    
@api_view(["GET"])
def get_projects(request):
    projects = Projects.objects.all()
    seralizer = projectsSerializer(projects, many = True)
    return Response(seralizer.data, status = status.HTTP_200_OK)


@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def post_project(request):
    data = request.data
    seralizer = projectsSerializer(data = data)
    if(seralizer.is_valid()):
        seralizer.save()
        
    
        return Response(seralizer.data, status = status.HTTP_201_CREATED)
    return Response(seralizer.errors, status = status.HTTP_400_BAD_REQUEST)
        