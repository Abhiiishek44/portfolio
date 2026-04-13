"""
RAG (Retrieval-Augmented Generation) pipeline.
Combines vector search with Gemini API for intelligent responses.
"""

# from multiprocessing import context
import os
import logging
import time
from google import genai
from google.genai import types
# from app.embedding import get_embedding_model
# from app.vector_store import get_vector_store
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure logger
logger = logging.getLogger(__name__)

class RAGPipeline:
    """
    RAG pipeline for answering questions about the portfolio.
    """
    
    def __init__(self):
        """
        Initialize the RAG pipeline with embedding model, vector store, and Gemini client.
        """
        logger.info("Initializing RAG Pipeline...")
        # self.embedding_model = get_embedding_model()
        # self.vector_store = get_vector_store()
        
        # Initialize Gemini client
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            logger.error("GEMINI_API_KEY environment variable not set")
            raise ValueError("GEMINI_API_KEY environment variable not set")
        
        self.client = genai.Client(api_key=api_key)
        self.model_name = os.getenv("MODEL_NAME", "gemini-1.5-flash")
        logger.info(f"RAG Pipeline initialized successfully with model: {self.model_name}")
    
    
    def create_prompt(self, query: str) -> str:

        prompt = f"""
You are an AI assistant representing Abhishek Kumbhar.

Abhishek is an AI & Data Science student at Pune University and a developer with interests in Artificial Intelligence, Machine Learning, Data Engineering, and Full Stack Development.

Your job is to answer questions about Abhishek’s:
- skills
- projects
- experience
- education
- technical interests

Guidelines for responses:

1. Always respond in a friendly, professional, and conversational tone.
2. Do not output raw resume-style lists unless necessary.
3. Convert structured information into clear and natural explanations.
4. Keep answers concise, clear, and easy to read.
5. Use short paragraphs or clean bullet points when helpful.
6. If the user greets you (hi, hello, hey), respond politely and ask how you can help.
7. If the question is unclear, ask a follow-up question.
8. Never invent information that is not provided in the context.
9. Make the responses feel like a human conversation, not a database output.

Example greeting behavior:
User: hi
Response: 
Hello! I'm Abhishek's AI assistant. 👋  
Feel free to ask about his projects, skills, or experience.

Example skills question:
User: What are Abhishek's technical skills?

Response style:
Abhishek has experience across several areas including Artificial Intelligence, Machine Learning, and Full Stack Development.

He primarily works with Python and JavaScript and has experience with frameworks such as React, Node.js, Express.js, and FastAPI. In the AI domain, he works with tools like TensorFlow, PyTorch, Scikit-learn, Pandas, and NumPy to build machine learning applications.

He is also familiar with data engineering concepts like ETL pipelines and database management, and uses tools such as AWS, Docker, Git, and Linux for development and deployment.

Always prioritize clarity, professionalism, and a conversational tone.

Question:
{query}

Answer:"""    
        
        return prompt
    
    def generate_streaming_response(self, prompt: str):
        """
        Generate a streaming response using Gemini API.
        
        Args:
            prompt: Complete prompt with context and question
            
        Yields:
            Generated response chunks word by word for live UI feel
        """
        try:
            for chunk in self.client.models.generate_content_stream(
                model=self.model_name,
                contents=prompt,
                config=types.GenerateContentConfig(
                    temperature=0.7,
                    max_output_tokens=500,
                    top_p=0.9,
                )
            ):
                if not chunk.text:
                    continue
                # Split chunk into words and yield word by word for smoother streaming
                words = chunk.text.split(' ')
                for i, word in enumerate(words):
                    if i < len(words) - 1:
                        yield word + ' '
                    else:
                        yield word
                    # Add a small delay to make streaming more visible
                    time.sleep(0.05)  # 50ms delay between words
        except Exception as e:
            logger.error(f"Error generating streaming response: {e}", exc_info=True)
            yield "I apologize, but I'm having trouble generating a response right now. Please try again."


    def answer_question_stream(self, query: str):
        """
        Main method to answer a user question using prompt + streaming.
        
        Args:
            query: User's question
            
        Yields:
            Chunks of the answer as they are generated
        """
        logger.info(f"Processing streaming query: {query}")
        
        
        # Create prompt
        prompt = self.create_prompt(query)

        # Stream response
        for chunk in self.generate_streaming_response(prompt):
            yield chunk
    

# Global instance
_rag_pipeline = None


def get_rag_pipeline() -> RAGPipeline:
    """
    Get or create a global RAG pipeline instance.
    
    Returns:
        RAGPipeline instance
    """
    global _rag_pipeline
    if _rag_pipeline is None:
        _rag_pipeline = RAGPipeline()
    return _rag_pipeline
