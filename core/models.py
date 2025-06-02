from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Transaction(models.Model):
    CATEGORY_CHOICES =[
        ('FOOD', 'Food'),
        ('RENT', 'Rent'),
        ('TRAVEL', 'Travel'),
        ('SHOPPING', 'Shopping'),
        ('OTHER', 'Other'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    date = models.DateField()
    description = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.category} - {self.amount}"
