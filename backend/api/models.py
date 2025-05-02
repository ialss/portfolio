from django.db import models
from django.core.validators import RegexValidator


name_validator = RegexValidator(
    regex=r"^[A-Za-zÀ-ÿ' -]+$",
    message="Invalid characters used."
)

class Contact(models.Model):
    firstName = models.CharField(max_length = 50, blank = False, null = False, validators=[name_validator])
    lastName = models.CharField(max_length = 50, blank = False, null = False, validators=[name_validator])
    email = models.EmailField()
    message = models.TextField(blank = False, null = False, default="No Message")
    dateSent = models.DateTimeField(auto_now_add=True)
    
    def _str_(self):
        return self.firstName, self.lastName, self.email, self.message, self.dataSent
    
class Projects(models.Model):
    title = models.CharField(max_length = 25)
    date = models.CharField(max_length = 30)
    blurb = models.TextField(default=" ")
    link = models.URLField()
    icon = models.ImageField(upload_to="icons")
    tech = models.JSONField(default=list)
    
    def _str_(self):
        return self.title, self.date, self.blurb, self.link, self.icon, self.tech