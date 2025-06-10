from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Transaction
from .serializers import TransactionSerializer,RegisterSerializer
from django.contrib.auth.models import User
# Create your views here.

class TransactionListCreateView(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    # permission_classes = [permissions.AllowAny]

    # def perform_create(self, serializer):
    #     serializer.save()  # Save the user instance created by the serializer
