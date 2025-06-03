from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Transaction
from .serializers import TransactionSerializer
# Create your views here.

class TransactionListCreateView(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    
    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
