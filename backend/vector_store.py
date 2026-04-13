# """
# Vector store module for Qdrant database integration.
# Handles storage and retrieval of embeddings.
# """

# import logging
# from qdrant_client import QdrantClient
# from qdrant_client.models import Distance, VectorParams, PointStruct
# from typing import List, Dict, Any, Optional
# import uuid

# # Configure logger
# logger = logging.getLogger(__name__)


# class VectorStore:
#     """
#     Wrapper class for Qdrant vector database operations.
#     """
    
#     def __init__(
#         self, 
#         host: str = "localhost", 
#         port: int = 6333,
#         collection_name: str = "portfolio"
#     ):
#         """
#         Initialize connection to Qdrant vector database.
        
#         Args:
#             host: Qdrant server host
#             port: Qdrant server port
#             collection_name: Name of the collection to use
#         """
#         self.host = host
#         self.port = port
#         self.collection_name = collection_name
#         self.client = QdrantClient(host=host, port=port)
#         logger.info(f"Connected to Qdrant at {host}:{port}")
    
#     def create_collection(self, vector_size: int):
#         """
#         Create a new collection in Qdrant.
        
#         Args:
#             vector_size: Dimension of the embedding vectors
#         """
#         try:
#             # Check if collection already exists
#             collections = self.client.get_collections().collections
#             collection_exists = any(
#                 collection.name == self.collection_name 
#                 for collection in collections
#             )
          
#             if collection_exists:
#                 logger.info(f"Collection '{self.collection_name}' already exists")
#                 return
            
#             # Create new collection
#             self.client.create_collection(
#                 collection_name=self.collection_name,
#                 vectors_config=VectorParams(
#                     size=vector_size,
#                     distance=Distance.COSINE
#                 )
#             )
#             logger.info(f"Created collection '{self.collection_name}' with vector size {vector_size}")
#         except Exception as e:
#             logger.error(f"Error creating collection: {e}", exc_info=True)
#             raise
    
#     def delete_collection(self):
#         """
#         Delete the collection from Qdrant.
#         """
#         try:
#             self.client.delete_collection(collection_name=self.collection_name)
#             logger.info(f"Deleted collection '{self.collection_name}'")
#         except Exception as e:
#             logger.error(f"Error deleting collection: {e}", exc_info=True)
    
#     def insert_embeddings(
#         self, 
#         embeddings: List[List[float]], 
#         texts: List[str],
#         metadata: Optional[List[Dict[str, Any]]] = None
#     ):
#         """
#         Insert embeddings with their corresponding texts into Qdrant.
        
#         Args:
#             embeddings: List of embedding vectors
#             texts: List of original text chunks
#             metadata: Optional list of metadata dictionaries for each text
#         """
#         if len(embeddings) != len(texts):
#             raise ValueError("Number of embeddings must match number of texts")
        
#         if metadata and len(metadata) != len(texts):
#             raise ValueError("Number of metadata entries must match number of texts")
        
#         points = []
#         for idx, (embedding, text) in enumerate(zip(embeddings, texts)):
#             point_id = str(uuid.uuid4())
#             payload = {"text": text}
            
#             if metadata and idx < len(metadata):
#                 payload.update(metadata[idx])
            
#             points.append(
#                 PointStruct(
#                     id=point_id,
#                     vector=embedding,
#                     payload=payload
#                 )
#             )
        
#         self.client.upsert(
#             collection_name=self.collection_name,
#             points=points
#         )
#         logger.info(f"Inserted {len(points)} embeddings into collection '{self.collection_name}'")
    
#     def search_similar(
#         self, 
#         query_embedding: List[float], 
#         top_k: int = 5
#     ) -> List[Dict[str, Any]]:
#         """
#         Search for similar vectors in the collection.
        
#         Args:
#             query_embedding: Query vector to search for
#             top_k: Number of top results to return
            
#         Returns:
#             List of dictionaries containing matched texts and scores
#         """
#         try:
#             search_results = self.client.query_points(
#                 collection_name=self.collection_name,
#                 query=query_embedding,
#                 limit=top_k
#             )
            
#             results = []
#             for result in search_results.points:
#                 results.append({
#                     "text": result.payload.get("text", ""),
#                     "score": result.score,
#                     "metadata": {k: v for k, v in result.payload.items() if k != "text"}
#                 })
            
#             return results
#         except Exception as e:
#             logger.error(f"Error searching collection: {e}", exc_info=True)
#             return []
    
#     def count_documents(self) -> int:
#         """
#         Get the total number of documents in the collection.
        
#         Returns:
#             Number of documents
#         """
#         try:
#             collection_info = self.client.get_collection(collection_name=self.collection_name)
#             return collection_info.points_count
#         except Exception as e:
#             logger.error(f"Error counting documents: {e}", exc_info=True)
#             return 0


# # Global instance
# _vector_store = None

# #
# def get_vector_store() -> VectorStore:
#     """
#     Get or create a global vector store instance.
    
#     Returns:
#         VectorStore instance
#     """
#     global _vector_store
#     if _vector_store is None:
#         _vector_store = VectorStore()
#     return _vector_store
