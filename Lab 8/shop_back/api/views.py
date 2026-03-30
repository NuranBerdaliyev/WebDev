from django.shortcuts import render

from django.http import JsonResponse
from .models import Product, Category


def product_to_json(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category.id
    }


def category_to_json(category):
    return {
        "id": category.id,
        "name": category.name
    }



def products_list(request):
    products = Product.objects.all()
    data = [product_to_json(p) for p in products]
    return JsonResponse(data, safe=False)



def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product_to_json(product))
    except Product.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)



def categories_list(request):
    categories = Category.objects.all()
    data = [category_to_json(c) for c in categories]
    return JsonResponse(data, safe=False)



def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category_to_json(category))
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)



def category_products(request, id):
    try:
        products = Product.objects.filter(category_id=id)
        data = [product_to_json(p) for p in products]
        return JsonResponse(data, safe=False)
    except:
        return JsonResponse({"error": "Not found"}, status=404)
