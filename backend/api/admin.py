from django.contrib import admin
from .models import (
    ClashMatch,
    ClashQuestion,
    Level,
    Subject,
    UserProfile,
    Question,
    Contact
)

# No need to use admin.site.register for these since we use decorators below

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'submitted_at')
    search_fields = ('username', 'email')

@admin.register(ClashMatch)
class ClashMatchAdmin(admin.ModelAdmin):
    list_display = ('id', 'player1', 'player2', 'level', 'subject', 'is_active', 'player1_score', 'player2_score')
    list_filter = ('level', 'subject', 'is_active')
    search_fields = ('player1__username', 'player2__username')

@admin.register(ClashQuestion)
class ClashQuestionAdmin(admin.ModelAdmin):
    list_display = ('match', 'question', 'player1_answer', 'player2_answer', 'correct_option')

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'gender', 'dob', 'level', 'subject')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('subject', 'level', 'question_text', 'correct_option')
    list_filter = ('subject', 'level')
    search_fields = ('question_text',)

# These don’t have custom admin classes, so you can register simply
admin.site.register(Level)
admin.site.register(Subject)
