from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics

# Create your views here.
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