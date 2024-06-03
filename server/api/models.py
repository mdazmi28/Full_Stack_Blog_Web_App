from django.db import models

class BlogCategoryModel(models.Model):
    category = models.CharField(max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.category

class BlogModel(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    category = models.ForeignKey(BlogCategoryModel, on_delete=models.CASCADE)
    img = models.CharField(max_length=255)
    img_description = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.description
