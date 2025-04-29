from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact


from .pLib import contactSeralizer
import re

from django.core.mail import EmailMessage


@api_view(["GET"])
def get_contact(request):
    contacts = Contact.objects.all()
    seralizer = contactSeralizer(contacts, many = True)
    return Response(seralizer.data)

@api_view(["POST"])
def post_contact(request):
    data = request.data
    seralizer = contactSeralizer(data = data)
    if(seralizer.is_valid()):
        seralizer.save()
        
        first_name = data.get('first_name', '')
        last_name = data.get('last_name', '')
        email = data.get('email', '')
        message = data.get('message', '')
        
        
        
        if( not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email)):
            return Response(email, status = status.HTTP_400_BAD_REQUEST)
            
        
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
    