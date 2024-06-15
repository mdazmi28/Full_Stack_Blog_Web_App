# serializers
from rest_framework import serializers
from .models import BlogModel, BlogCategoryModel

class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategoryModel
        fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.category', read_only=True)

    class Meta:
        model = BlogModel
        fields = ['id', 'title', 'description', 'img', 'img_description', 'created_at', 'updated_at', 'category', 'category_name']
        #fields = '__all__'

