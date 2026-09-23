from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from bson import ObjectId
from ..models.mongo_client import MongoDBClient
import datetime

class ItemsListCreateView(APIView):
    collection_name = "items"

    def get(self, request):
        collection = MongoDBClient.get_collection(self.collection_name)
        items = list(collection.find())
        
        # Format for frontend
        formatted_items = []
        for item in items:
            formatted_item = item.copy()
            formatted_item['id'] = str(item['_id']) # 1. Transformamos o ObjectId em texto e salvamos na chave "id"
            del formatted_item['_id']  # 2. Deletamos a chave "_id" original
            formatted_items.append(formatted_item)
            
        return Response(formatted_items, status=status.HTTP_200_OK)

    def post(self, request):
        collection = MongoDBClient.get_collection(self.collection_name)
        data = request.data
        
        # Add basic metadata
        data['createdAt'] = datetime.datetime.now(datetime.timezone.utc).isoformat()
        
        result = collection.insert_one(data)
        
        data['id'] = str(result.inserted_id)
        del data['_id']
        
        return Response(data, status=status.HTTP_201_CREATED)


class ItemDetailView(APIView):
    collection_name = "items"

    def get(self, request, item_id):
        collection = MongoDBClient.get_collection(self.collection_name)
        try:
            item = collection.find_one({"_id": ObjectId(item_id)})
        except Exception:
            return Response({"error": "Invalid ID format"}, status=status.HTTP_400_BAD_REQUEST)

        if not item:
            return Response({"error": "Item not found"}, status=status.HTTP_404_NOT_FOUND)

        item['id'] = str(item['_id'])
        del item['_id']
        return Response(item, status=status.HTTP_200_OK)

    def put(self, request, item_id):
        collection = MongoDBClient.get_collection(self.collection_name)
        try:
            object_id = ObjectId(item_id)
        except Exception:
            return Response({"error": "Invalid ID format"}, status=status.HTTP_400_BAD_REQUEST)

        update_data = request.data
        if 'id' in update_data:
            del update_data['id']

        result = collection.replace_one({"_id": object_id}, update_data)
        
        if result.matched_count == 0:
            return Response({"error": "Item not found"}, status=status.HTTP_404_NOT_FOUND)

        # Retrieve updated item
        updated_item = collection.find_one({"_id": object_id})
        updated_item['id'] = str(updated_item['_id'])
        del updated_item['_id']
        
        return Response(updated_item, status=status.HTTP_200_OK)

    def delete(self, request, item_id):
        collection = MongoDBClient.get_collection(self.collection_name)
        try:
            object_id = ObjectId(item_id)
        except Exception:
            return Response({"error": "Invalid ID format"}, status=status.HTTP_400_BAD_REQUEST)

        result = collection.delete_one({"_id": object_id})
        
        if result.deleted_count == 0:
            return Response({"error": "Item not found"}, status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)
