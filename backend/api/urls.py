from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import RegisterView, protected_view,  user_profile, get_levels, get_subjects, update_user_profile, register_user, start_clash, ContactCreateView, LogoutView
from . import views


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('register/', RegisterView.as_view(), name='register'),
    path('protected/', protected_view, name='protected'),
    path('profile/', user_profile),
    path('levels/', get_levels, name='get_levels'),
    path('subjects/', get_subjects, name='get_subjects'),
    path('update-profile/', update_user_profile, name='update_user_profile'),
    path('register/', register_user, name='register'),
    path('quiz/question/', views.get_question, name='question'),
    path('quiz/submit/', views.submit_answer, name='submit'),
    path('start_clash/', start_clash, name='start_clash'),
    path('clash/submit/', views.submit_clash_answer, name='submit_clash_answer'),
    path('contact/', ContactCreateView.as_view(), name='contact-create'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
]
