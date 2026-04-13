# """
# Knowledge loader module for processing and storing portfolio data.
# Reads text files, chunks them, and stores embeddings in vector database.
# """

# import os
# import logging
# from typing import List
# from app.embedding import get_embedding_model
# from app.vector_store import get_vector_store

# # Configure logger
# logger = logging.getLogger(__name__)


# class KnowledgeLoader:
#     """
#     Loads and processes knowledge base documents.
#     """
    
#     def __init__(self, data_path: str = "data/portfolio.txt"):
#         """
#         Initialize the knowledge loader.
        
#         Args:
#             data_path: Path to the portfolio data file
#         """
#         self.data_path = data_path
#         self.embedding_model = get_embedding_model()
#         self.vector_store = get_vector_store()
    
#     def load_text_file(self) -> str:
#         """
#         Load text content from the data file.
        
#         Returns:
#             Full text content as string
#         """
#         if not os.path.exists(self.data_path):
#             raise FileNotFoundError(f"Data file not found: {self.data_path}")
        
#         with open(self.data_path, 'r', encoding='utf-8') as f:
#             content = f.read()
        
#         logger.info(f"Loaded {len(content)} characters from {self.data_path}")
#         return content
    
#     def chunk_text(self, text: str, chunk_size: int = 500, overlap: int = 50) -> List[str]:
#         """
#         Split text into overlapping chunks.
        
#         Args:
#             text: Input text to chunk
#             chunk_size: Maximum size of each chunk in characters
#             overlap: Number of characters to overlap between chunks
            
#         Returns:
#             List of text chunks
#         """
#         # Split by double newlines to respect sections
#         sections = text.split('\n\n')
#         chunks = []
#         current_chunk = ""
        
#         for section in sections:
#             section = section.strip()
#             if not section:
#                 continue
            
#             # If section is small enough, add to current chunk
#             if len(current_chunk) + len(section) + 2 <= chunk_size:
#                 if current_chunk:
#                     current_chunk += "\n\n" + section
#                 else:
#                     current_chunk = section
#             else:
#                 # Save current chunk if it exists
#                 if current_chunk:
#                     chunks.append(current_chunk)
                
#                 # If section itself is larger than chunk_size, split it
#                 if len(section) > chunk_size:
#                     words = section.split()
#                     temp_chunk = ""
                    
#                     for word in words:
#                         if len(temp_chunk) + len(word) + 1 <= chunk_size:
#                             temp_chunk += (" " + word) if temp_chunk else word
#                         else:
#                             if temp_chunk:
#                                 chunks.append(temp_chunk)
#                             temp_chunk = word
                    
#                     current_chunk = temp_chunk
#                 else:
#                     current_chunk = section
        
#         # Add the last chunk
#         if current_chunk:
#             chunks.append(current_chunk)
        
#         logger.info(f"Created {len(chunks)} chunks from text")
#         return chunks
    
#     def load_and_store(self):
#         """
#         Load portfolio data, create embeddings, and store in vector database.
#         """
#         logger.info("Starting knowledge base loading process...")
        
#         # Load text
#         text = self.load_text_file()
        
#         # Create chunks
#         chunks = self.chunk_text(text)
        
#         if not chunks:
#             logger.warning("No chunks created. Exiting.")
#             return
        
#         # Generate embeddings
#         logger.info("Generating embeddings...")
#         embeddings = self.embedding_model.encode_batch(chunks)
        
#         # Create collection
#         embedding_dim = self.embedding_model.get_embedding_dimension()
#         self.vector_store.create_collection(vector_size=embedding_dim)
        
#         # Store in vector database
#         logger.info("Storing embeddings in vector database...")
#         metadata = [{"chunk_id": i} for i in range(len(chunks))]
#         self.vector_store.insert_embeddings(
#             embeddings=embeddings,
#             texts=chunks,
#             metadata=metadata
#         )
        
#         # Verify storage
#         count = self.vector_store.count_documents()
#         logger.info(f"Successfully stored {count} documents in vector database")
#         logger.info("Knowledge base loading completed!")


# def initialize_knowledge_base():
#     """
#     Initialize the knowledge base by loading and storing portfolio data.
#     Call this function to set up the vector database.
#     """
#     loader = KnowledgeLoader()
#     loader.load_and_store()


# if __name__ == "__main__":
#     # Configure logging for standalone execution
#     logging.basicConfig(
#         level=logging.INFO,
#         format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
#         handlers=[
#             logging.StreamHandler()
#         ]
#     )
    
#     # Run this script to initialize the knowledge base
#     initialize_knowledge_base()
