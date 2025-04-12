from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Level, Subject

# Serializer for Level
class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ['id', 'name']
        
# Serializer for Subject
class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'name']
        
# Serializer for User Profile
class UserProfileSerializer(serializers.ModelSerializer):
    level = LevelSerializer()
    subject = SubjectSerializer()

    class Meta:
        model = UserProfile
        fields = ['level', 'subject']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    gender = serializers.ChoiceField(choices=UserProfile.GENDER_CHOICES,write_only=True)
    dob = serializers.DateField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'gender', 'dob']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        gender = validated_data.pop('gender')
        dob = validated_data.pop('dob')

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )

        UserProfile.objects.create(user=user, gender=gender, dob=dob)
        return user
    
    def to_representation(self, instance):
            """
            Custom representation after creating the user — show user + profile data
            """
            profile = UserProfile.objects.get(user=instance)
            return {
                'id': instance.id,
                'username': instance.username,
                'email': instance.email,
                'gender': profile.gender,
                'dob': profile.dob,
            }




# from rest_framework import serializers
# from django.contrib.auth.models import User

# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)

#     class Meta:
#         model = User
#         fields = ['username', 'email', 'password']

#     def create(self, validated_data):
#         user = User.objects.create_user(
#             username=validated_data['username'],
#             email=validated_data['email'],
#             password=validated_data['password']
#         )
#         return user
