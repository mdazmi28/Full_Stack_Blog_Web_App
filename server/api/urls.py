from . views import *
from django.urls import path

urlpatterns = [
    path('blogs/create/', BlogCreateView.as_view(), name='blog-create'),
    path('blogs/', BlogReadView.as_view(), name='blog-list'),
    path('blogs/update/<int:pk>/', BlogUpdateView.as_view(), name='blog-update'),
    path('blogs/delete/<int:pk>/', BlogDeleteView.as_view(), name='blog-delete'),
    
    #Blog
    path('categories/create/', BlogCategoryCreateView.as_view(), name='category-create'),
    path('categories/', BlogCategoryReadView.as_view(), name='category-list'),
    path('categories/update/<int:pk>/', BlogCategoryUpdateView.as_view(), name='category-update'),
    path('categories/delete/<int:pk>/', BlogCategoryDeleteView.as_view(), name='category-delete'),
    
    # Blogs by category
    path('blogs/<int:category_id>/', BlogsByCategoryView.as_view(), name='blogs-by-category'),
    path('blogs/details/<int:id>/', BlogsDetailsView.as_view(), name='blogs-by-view'),
]
