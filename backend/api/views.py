from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .serializers import LevelSerializer, SubjectSerializer, UserProfileSerializer, RegisterSerializer, UserSerializer, ContactSerializer
from .models import Level, Subject, UserProfile, Question, ClashMatch, ClashQuestion, Contact
from api.models import Question    
import random

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

@api_view(['POST'])
def submit_clash_answer(request):
    try:
        match_id = request.data.get("match_id")
        player_id = request.data.get("player_id")
        question_id = request.data.get("question_id")
        selected_option = request.data.get("selected_option")

        match = ClashMatch.objects.get(id=match_id)
        question = Question.objects.get(id=question_id)

        correct = question.correct_option == selected_option

        if correct:
            if match.player1.id == player_id:
                match.player1_score += 1
            else:
                match.player2_score += 1
        else:
            if match.player1.id == player_id:
                match.player1_score -= 1
                match.player2_score += 1
            else:
                match.player2_score -= 1
                match.player1_score += 1

        match.save()

        return Response({
            "correct": correct,
            "explanation": question.solution,
            "player1_score": match.player1_score,
            "player2_score": match.player2_score
        })

    except Exception as e:
        return Response({"error": str(e)}, status=400)

# for clash battle
@api_view(['POST'])
def start_clash(request):
    data = request.data
    try:
        player1 = User.objects.get(id=data['player1_id'])
        player2 = User.objects.get(id=data['player2_id'])
        level = data['level']
        subject = data['subject']

        match = ClashMatch.objects.create(player1=player1, player2=player2, level=level, subject=subject)

        questions = Question.objects.filter(level=level, subject=subject)
        selected = random.sample(list(questions), min(5, len(questions)))

        for q in selected:
            ClashQuestion.objects.create(
                match=match,
                question=q,
                correct_option=q.correct_option
            )

        return Response({'match_id': match.id, 'message': 'Match created successfully'}, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

# to get the questions
@api_view(['GET'])
def get_question(request):
    level = request.GET.get('level')
    subject = request.GET.get('subject')
    questions = Question.objects.filter(level=level, subject=subject)
    
    if not questions.exists():
        return Response({'error': 'No questions found'}, status=404)
    
    q = random.choice(list(questions))
    return Response({
        'id': q.id,
        'question': q.question_text,
        'options': q.options
    })

# to submit the answers
@api_view(['POST'])
def submit_answer(request):
    qid = request.data.get('id')
    answer = request.data.get('answer')
    try:
        q = Question.objects.get(id=qid)
    except Question.DoesNotExist:
        return Response({'error': 'Invalid question ID'}, status=404)

    correct = q.correct_option == answer
    return Response({
        'correct': correct,
        'correct_option': q.correct_option,
        'solution': q.solution
    })


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