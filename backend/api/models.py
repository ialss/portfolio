from django.db import models

class Contact(models.Model):
    firstName = models.CharField(max_length = 50)
    lastName = models.CharField(max_length = 50)
    email = models.CharField(max_length = 254)
    message = models.TextField
    dateSent = models.DateTimeField(auto_now_add=True)
    
    def _str_(self):
        return self.firstName, self.lastName, self.email, self.message, self.dataSent