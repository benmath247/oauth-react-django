from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import logout
from core.models import User
from core.serializers.user import UserSerializer  # Import the serializer

@api_view(['GET'])
def current_user(request):
    if request.user.is_authenticated:
        try:
            user = User.objects.get(email=request.user.email)
            serializer = UserSerializer(user)  # Serialize the user object
            return Response(serializer.data, status=200)  # Return serialized data
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
    return Response({'error': 'Not authenticated'}, status=401)

@api_view(['POST'])
def logout_view(request):
    logout(request)
    return Response({'message': 'Logged out successfully'}, status=200)
