from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import logout

@api_view(['GET'])
def current_user(request):
    if request.user.is_authenticated:
        data = {
            'username': request.user.username,
            'email': request.user.email
        }
        return Response(data)
    return Response({'error': 'Not authenticated'}, status=401)

@api_view(['GET'])
def logout_view(request):
    logout(request)
    return Response({'message': 'Logged out successfully'}, status=200)
