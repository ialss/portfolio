from rest_framework import serializers
from .models import * 

class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class projectsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Projects
        fields = "__all__"