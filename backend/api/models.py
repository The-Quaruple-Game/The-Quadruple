from django.db import models
from django.contrib.auth.models import User

# Level model
class Level(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Subject model
class Subject(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class UserProfile(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    dob = models.DateField()
    # added after words 
    level = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True, blank=True)
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, blank=True)
    
    def __str__(self):
        return self.user.username
