from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .serializers import LevelSerializer, SubjectSerializer, UserProfileSerializer, RegisterSerializer, UserSerializer
from .models import Level, Subject, UserProfile

# API to get available subjects
@api_view(['GET'])
def get_subjects(request):
    subjects = Subject.objects.all()
    serializer = SubjectSerializer(subjects, many=True)
    return Response(serializer.data)

# API to update user profile with level and subject
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_user_profile(request):
    user = request.user
    level_id = request.data.get('level')
    subject_id = request.data.get('subject')

    try:
        level = Level.objects.get(id=level_id)
        subject = Subject.objects.get(id=subject_id)
    except (Level.DoesNotExist, Subject.DoesNotExist):
        return Response({"error": "Invalid level or subject"}, status=400)

    # Update User Profile
    profile, created = UserProfile.objects.get_or_create(user=user)
    profile.level = level
    profile.subject = subject
    profile.save()

    return Response({"message": "User profile updated successfully"})

# API to get available levels
@api_view(['GET'])
def get_levels(request):
    levels = Level.objects.all()
    serializer = LevelSerializer(levels, many=True)
    return Response(serializer.data)

# Register API
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

# Protected route
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    return Response({"message": f"Hello, {request.user.username}! This is a protected view."})

    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    try:
        profile = UserProfile.objects.get(user=user)
        gender = profile.gender
        dob = profile.dob
    except UserProfile.DoesNotExist:
        gender = None
        dob = None

    return Response({
        'username': user.username,
        'email': user.email,
        'id': user.id,
        'gender': gender,
        'dob': dob,
    })
    
@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# so this was to check the authentication
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def user_profile(request):
#     user = request.user
#     return Response({
#         'username': user.username,
#         'email': user.email,
#         'id': user.id,
#     })