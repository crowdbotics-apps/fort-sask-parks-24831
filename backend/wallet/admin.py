from django.contrib import admin
from .models import (
    PaymentTransaction,
    TaskerPaymentAccount,
    TaskerWallet,
    PaymentMethod,
    CustomerWallet,
)

admin.site.register(PaymentTransaction)
admin.site.register(TaskerPaymentAccount)
admin.site.register(TaskerWallet)
admin.site.register(CustomerWallet)
admin.site.register(PaymentMethod)

# Register your models here.
