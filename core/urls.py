from django.urls import path
from .views import TransactionListCreateView,RegisterView

urlpatterns = [
    path('transactions/', TransactionListCreateView.as_view(), name='transactions'),
    path('register/', RegisterView.as_view(), name='register'),
]