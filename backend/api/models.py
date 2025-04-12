from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Contact(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    description = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.username} - {self.email}"

class ClashMatch(models.Model):
    player1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name="player1_matches")
    player2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name="player2_matches")
    level = models.IntegerField()
    subject = models.CharField(max_length=100)
    created_at = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    player1_score = models.IntegerField(default=0)
    player2_score = models.IntegerField(default=0)

class ClashQuestion(models.Model):
    match = models.ForeignKey(ClashMatch, on_delete=models.CASCADE, related_name="questions")
    question = models.ForeignKey("Question", on_delete=models.CASCADE)
    player1_answer = models.CharField(max_length=1, blank=True, null=True)
    player2_answer = models.CharField(max_length=1, blank=True, null=True)
    correct_option = models.CharField(max_length=1)


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
    
# for game 

class Question(models.Model):
    SUBJECT_CHOICES = [
        ('math', 'Math'),
        ('science', 'Science'),
        ('gk', 'General Knowledge'),
        ('cs', 'Computer Science'),
        # Add more if needed
    ]

    level = models.IntegerField()
    subject = models.CharField(max_length=50, choices=SUBJECT_CHOICES)
    question_text = models.TextField()
    options = models.JSONField()  # A, B, C, D
    correct_option = models.CharField(max_length=1)  # 'A', 'B', etc.
    solution = models.TextField()  # Detailed explanation

    def __str__(self):
        return f"{self.subject} | L{self.level} | {self.question_text[:30]}"
