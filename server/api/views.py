# views
from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import HttpResponse
from rest_framework import generics

# Create your views here.

#--------------------------------- Blog -------------------------------------#
class BlogCreateView(generics.ListCreateAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = BlogSerializer

class BlogReadView(generics.ListAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = BlogSerializer

class BlogUpdateView(generics.RetrieveUpdateAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = BlogSerializer

class BlogDeleteView(generics.DestroyAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = BlogSerializer
    
#--------------------------------- Blog Category -------------------------------------#
class BlogCategoryCreateView(generics.ListCreateAPIView):
    queryset = BlogCategoryModel.objects.all()
    serializer_class = BlogCategorySerializer
    
class BlogCategoryReadView(generics.ListAPIView):
    queryset = BlogCategoryModel.objects.all()
    serializer_class = BlogCategorySerializer

class BlogCategoryUpdateView(generics.RetrieveUpdateAPIView):
    queryset = BlogCategoryModel.objects.all()
    serializer_class = BlogCategorySerializer

class BlogCategoryDeleteView(generics.DestroyAPIView):
    queryset = BlogCategoryModel.objects.all()
    serializer_class = BlogCategorySerializer
    
    
# Custom view to get blogs by category_ID
class BlogsByCategoryView(generics.ListAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return BlogModel.objects.filter(category_id=category_id)

# search by ID
class BlogsDetailsView(generics.ListAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return BlogModel.objects.filter(id=id)