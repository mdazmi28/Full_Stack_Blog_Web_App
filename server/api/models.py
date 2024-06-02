from django.db import models

class BlogCategoryModel(models.Model):
    category = models.CharField(max_length=25)
    
    def __str__(self):
        return self.category

class BlogModel(models.Model):
    category = models.ForeignKey(BlogCategoryModel, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    
    def __str__(self):
        return self.description
