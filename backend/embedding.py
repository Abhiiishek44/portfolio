# """
# Embedding module for converting text to vector embeddings.
# Uses Google Gemini embedding model for semantic embeddings.
# """

# import os
# import logging
# from google import genai
# from typing import List
# from dotenv import load_dotenv

# # Load environment variables from .env file
# load_dotenv()

# # Configure logger
# logger = logging.getLogger(__name__)

# class EmbeddingModel:
    
#     def __init__(self, model_name: str = "gemini-embedding-001"):
        
#         logger.info(f"Loading embedding model: {model_name}")

#         api_key = os.getenv("GEMINI_API_KEY")
#         if not api_key:
#             logger.error("GEMINI_API_KEY environment variable not set")
#             raise ValueError("GEMINI_API_KEY environment variable not set")

#         self.client = genai.Client(api_key=api_key)
#         self.model_name = model_name
        
#         # Correct dimension for embedding-001
#         self.embedding_dim = 3072
        
#         logger.info(f"Model loaded successfully. Embedding dimension: {self.embedding_dim}")

#     def encode(self, text: str) -> List[float]:
#         try:
#             result = self.client.models.embed_content(
#                 model=self.model_name,
#                 contents=text
#             )
#             return result.embeddings[0].values
#         except Exception as e:
#             logger.error(f"Error encoding text: {e}", exc_info=True)
#             raise

#     def encode_batch(self, texts: List[str]) -> List[List[float]]:
#         embeddings = []
#         for text in texts:
#             embedding = self.encode(text)
#             embeddings.append(embedding)
#         return embeddings

#     def get_embedding_dimension(self) -> int:
#         return self.embedding_dim


# _embedding_model = None


# def get_embedding_model() -> EmbeddingModel:
#     global _embedding_model
#     if _embedding_model is None:
#         _embedding_model = EmbeddingModel()
#     return _embedding_model