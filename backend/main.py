"""
FastAPI backend server for the RAG-based portfolio chatbot.
"""

import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from dotenv import load_dotenv
from backend.rag_pipeline import get_rag_pipeline
# from app.knowledge_loader import initialize_knowledge_base

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="Portfolio AI Chatbot",
    description="RAG-based AI chatbot for Abhishek Kumbhar's portfolio website",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Request/Response models
class ChatRequest(BaseModel):
    """Request model for chat endpoint"""
    message: str
    
    class Config:
        json_schema_extra = {
            "example": {
                "message": "What projects has Abhishek built?"
            }
        }


class ChatResponse(BaseModel):
    """Response model for chat endpoint"""
    reply: str
    class Config:
        json_schema_extra = {
            "example": {
                "reply": "Abhishek has built several impressive projects...",
            }
        }


# Global RAG pipeline instance
rag_pipeline = None


@app.on_event("startup")
async def startup_event():
    """
    Initialize services on startup.
    """
    global rag_pipeline

    logger.info("Starting Portfolio AI Chatbot...")

    try:
        rag_pipeline = get_rag_pipeline()
        logger.info("RAG pipeline initialized successfully")
    except Exception as e:
        logger.error(f"Could not initialize RAG pipeline: {e}")
        logger.warning("Chat requests will fail until environment is configured correctly")


@app.get("/")
async def root():
    """
    Root endpoint - API health check.
    """
    return {
        "message": "Portfolio AI Chatbot API",
        "status": "active",
        "version": "1.0.0",
        "endpoints": {
            "chat_stream": "/chat/stream",
            "health": "/health",
            "docs": "/docs"
        }
    }


@app.get("/health")
async def health_check():
    """
    Health check endpoint.
    """
    return {
        "status": "healthy",
        "rag_pipeline": "initialized" if rag_pipeline else "not initialized"
    }



@app.post("/chat/stream")
async def chat_stream(request: ChatRequest):
    """
    Streaming chat endpoint for real-time answer generation.
    
    Args:
        request: ChatRequest containing user's message
        
    Returns:
        StreamingResponse with AI-generated reply chunks
    """
    global rag_pipeline
    
    if not request.message or not request.message.strip():
        logger.warning("Received empty message in chat stream request")
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    
    if rag_pipeline is None:
        logger.error("RAG pipeline not initialized when chat stream was called")
        raise HTTPException(
            status_code=503,
            detail="RAG pipeline not initialized. Please initialize the knowledge base first."
        )
    
    logger.info(f"Processing streaming chat request: '{request.message}'")
    
    async def generate():
        try:
            for chunk in rag_pipeline.answer_question_stream(request.message):
                yield chunk
        except Exception as e:
            logger.error(f"Error in streaming response generation: {e}", exc_info=True)
            yield "Error generating response."
    
    return StreamingResponse(generate(), media_type="text/plain")


if __name__ == "__main__":
    import uvicorn
    
    # Run the server
    uvicorn.run(
        "backend.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
