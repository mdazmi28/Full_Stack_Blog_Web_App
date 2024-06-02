from rest_framework import serializers
from .models import BlogModel, BlogCategoryModel

class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategoryModel
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    category = BlogCategorySerializer(read_only=True)  # Nested serializer to show category details

    class Meta:
        model = BlogModel
        fields = '__all__'
