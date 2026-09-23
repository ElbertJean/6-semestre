from django.urls import path
from .views.item_views import ItemsListCreateView, ItemDetailView

urlpatterns = [
    path('items/', ItemsListCreateView.as_view(), name='item-list-create'),
    path('items/<str:item_id>/', ItemDetailView.as_view(), name='item-detail'),
]
