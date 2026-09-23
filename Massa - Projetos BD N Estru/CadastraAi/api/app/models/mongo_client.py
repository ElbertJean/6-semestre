from pymongo import MongoClient
from django.conf import settings

class MongoDBClient:
    _instance = None
    _client = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._client = MongoClient(settings.MONGO_URI)
            cls._instance.db = cls._instance._client[settings.MONGO_DB_NAME]
        return cls._instance

    @classmethod
    def get_collection(cls, collection_name):
        return cls().db[collection_name]

    @classmethod
    def close(cls):
        if cls._client:
            cls._client.close()
            cls._instance = None
