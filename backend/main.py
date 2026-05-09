# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from typing import List, Optional
# import os
# from openai import OpenAI
# from dotenv import load_dotenv

# load_dotenv()

# app = FastAPI(title="Portfolio Chatbot API", version="1.0.0")

# # Allow requests from the Next.js frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000", "https://yourportfolio.com"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY", ""))

# # -----------------------------------------------------------------------
# # Portfolio knowledge — the AI is "trained" on this context.
# # Edit this to reflect YOUR real info, projects, skills, experience.
# # -----------------------------------------------------------------------
# PORTFOLIO_CONTEXT = """
# You are an AI assistant for a GenAI & Full Stack Developer's portfolio website.
# Your job is to answer questions about this developer professionally and concisely.
# Always be helpful, friendly, and encouraging. Keep answers under 150 words unless more detail is needed.

# === ABOUT ===
# Name: Vaishnavi Tompe
# Title: GenAI & Full Stack Developer
# Experience: 2+ years
# Location: Pune, India
# Status: Open to work (Full-time & Freelance)
# Email: tompevaishnavi89@email.com
# LinkedIn: https://www.linkedin.com/in/vaishnavitompe/
# GitHub: https://github.com/VaishnaviTompe

# === SKILLS ===
# - Generative AI: OpenAI GPT-4o, LangChain, LangGraph, HuggingFace, RAG pipelines, LLM fine-tuning, Prompt Engineering
# - Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
# - Backend: Python, FastAPI, Node.js, REST APIs, WebSockets
# - Databases: PostgreSQL, MongoDB, Redis, ChromaDB, Pinecone, Qdrant
# - DevOps: Docker, AWS, GCP, GitHub Actions, CI/CD
# - Tools: Git, Jupyter, Streamlit, Langfuse, Cursor AI

# === PROJECTS ===
# 1. AI Resume Screener
#    - Stack: Next.js, FastAPI, OpenAI, ChromaDB, PostgreSQL
#    - AI: GPT-4o + RAG pipeline for semantic resume-job matching
#    - Impact: Processes 500+ resumes in minutes vs hours manually

# 2. Kronos Financial Predictor
#    - Stack: Python, Streamlit, Whisper, Plotly, Edge-TTS
#    - AI: OpenAI Whisper voice commands + time-series prediction models
#    - Feature: Voice-enabled dashboard with natural language queries

# 3. LLM SQL Code Generator
#    - Stack: Python, Unsloth, Qwen 4B, FastAPI, HuggingFace
#    - AI: Fine-tuned Qwen 4B with LoRA on Text-to-SQL datasets
#    - Output: Natural language → accurate SQL query generation

# 4. Multi-Agent Code Assistant
#    - Stack: Next.js, LangGraph, FastAPI, OpenAI, WebSockets
#    - AI: Multi-agent system with planner, coder & reviewer agents
#    - Feature: Real-time code generation with live file preview

# === EXPERIENCE ===
# - Current: GenAI Full Stack Developer at [Current Company] (Jan 2024–Present)
#   Built enterprise RAG systems, LangGraph agents, Next.js apps (2000+ users)
# - Previous: Full Stack AI Developer (Jun 2022–Dec 2023)
#   LangChain chatbots, voice interfaces, document Q&A systems
# - First job: Junior Full Stack Developer (Aug 2021–May 2022)
#   React + Django apps, REST API design
# - Education: B.Tech CS from [University], 2017-2021, CGPA 8.5

# === AVAILABILITY & HIRING ===
# - Open to full-time roles (GenAI / Full Stack)
# - Available for freelance AI projects
# - Can start: immediately / 2 weeks notice
# - Preferred: Remote or hybrid

# If asked something you don't know, say: "I don't have that information — please contact [Your Name] directly at your@email.com"
# """

# class ChatMessage(BaseModel):
#     role: str
#     content: str

# class ChatRequest(BaseModel):
#     message: str
#     history: Optional[List[ChatMessage]] = []

# class ChatResponse(BaseModel):
#     reply: str

# @app.get("/")
# def root():
#     return {"status": "Portfolio Chatbot API is running 🚀"}

# @app.get("/health")
# def health():
#     return {"status": "ok"}

# @app.post("/api/chat", response_model=ChatResponse)
# async def chat(request: ChatRequest):
#     if not os.getenv("OPENAI_API_KEY"):
#         raise HTTPException(
#             status_code=503,
#             detail="OpenAI API key not configured. Set OPENAI_API_KEY in .env file.",
#         )

#     # Build message history for the API call
#     messages = [{"role": "system", "content": PORTFOLIO_CONTEXT}]

#     # Add conversation history (limit to last 8 exchanges to save tokens)
#     for msg in request.history[-8:]:
#         if msg.role in ("user", "assistant"):
#             messages.append({"role": msg.role, "content": msg.content})

#     # Add the new user message
#     messages.append({"role": "user", "content": request.message})

#     try:
#         response = client.chat.completions.create(
#             model="gpt-4o-mini",  # cheap & fast; upgrade to gpt-4o for better quality
#             messages=messages,  # type: ignore
#             max_tokens=300,
#             temperature=0.7,
#         )
#         reply = response.choices[0].message.content or "I couldn't generate a response. Please try again."
#         return ChatResponse(reply=reply)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"LLM error: {str(e)}")




from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
from openai import AzureOpenAI
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Vaishnavi Portfolio Chatbot API", version="1.0.0")

# Allow requests from the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://yourportfolio.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Azure OpenAI environment variables
AZURE_OPENAI_API_KEY = os.getenv("AZURE_OPENAI_API_KEY", "")
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT", "")
AZURE_OPENAI_API_VERSION = os.getenv("AZURE_OPENAI_API_VERSION", "2024-02-15-preview")
AZURE_OPENAI_DEPLOYMENT_NAME = os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME", "")

# Create Azure OpenAI client only if all required values exist
client = None

if AZURE_OPENAI_API_KEY and AZURE_OPENAI_ENDPOINT and AZURE_OPENAI_DEPLOYMENT_NAME:
    client = AzureOpenAI(
        api_key=AZURE_OPENAI_API_KEY,
        azure_endpoint=AZURE_OPENAI_ENDPOINT,
        api_version=AZURE_OPENAI_API_VERSION,
    )


PORTFOLIO_CONTEXT = """
You are Vaishnavi AI Assistant, a professional portfolio chatbot.

Your job is to answer questions about Vaishnavi Tompe's skills, projects,
experience, tech stack, resume highlights, and availability.

Keep answers professional, short, recruiter-friendly, and under 150 words.

=== ABOUT ===
Name: Vaishnavi Tompe
Title: GenAI & Full Stack Engineer
Experience: 2+ years
Location: Pune, India
Status: Open to work for full-time and freelance opportunities
Email: tompevaishnavi89@gmail.com
LinkedIn: https://www.linkedin.com/in/vaishnavitompe/
GitHub: https://github.com/VaishnaviTompe

=== CORE SKILLS ===
Generative AI:
Azure OpenAI, OpenAI API, LangChain, LangGraph, RAG pipelines,
LLM applications, Prompt Engineering, Multi-Agent Systems,
Embeddings, FAISS, Pinecone, Vector Search.

Frontend:
React.js, Next.js, JavaScript, TypeScript, Tailwind CSS,
HTML5, CSS3, Redux.

Backend:
Python, FastAPI, Node.js, Express.js, REST APIs,
API integrations, scalable backend systems.

Cloud & DevOps:
Azure VM, Docker, Docker Compose, Linux deployment,
Nginx reverse proxy, SSL configuration, CI/CD,
Vercel, Render, production monitoring.

Databases:
MongoDB, SQL, Vector Databases, FAISS, Pinecone.

=== EXPERIENCE ===
Current Role:
AI Full Stack Engineer at GenAIKit Pvt Ltd, Jan 2024 – Present.

Key work:
- Built and deployed BharatShodh, a multilingual Indian-language chatbot.
- Designed RAG pipelines using FAISS and embeddings.
- Built scalable REST APIs using FastAPI and Node.js.
- Created LangGraph-based multi-agent workflows.
- Deployed AI applications on Azure VM using Docker, Nginx, and SSL.
- Optimized prompts, token usage, API latency, and backend performance.

Internship:
Intern at GenAIKit Pvt Ltd, Oct 2023 – Dec 2023.
Worked on RAG pipelines, LLM applications, prompt optimization,
and data ingestion to response generation workflows.

=== PROJECTS ===
1. AI Interview Assistant
Stack: FastAPI, LangChain, Vector DB, Azure OpenAI.
Features: Voice-based AI assistant, speech-to-text, text-to-speech,
RAG pipeline, and contextual answers.

2. RAG Q&A Platform
Stack: FastAPI, LangChain, FAISS, Azure OpenAI.
Features: Retrieval-based system for financial datasets,
vector search, improved query relevance, and reduced hallucination.

3. LLM Fine-tuning Legal Summarizer
Stack: Mistral 7B, LoRA, FastAPI, Gradio.
Features: Fine-tuned legal summarization model on 10k+ documents
and improved summarization accuracy.

4. BharatShodh
Multilingual Indian-language chatbot deployed on Azure VM.

=== ACHIEVEMENTS ===
- Reduced manual processing effort by 40%.
- Improved backend performance by 30%.
- Delivered 3+ production-level GenAI applications.
- Reduced API operational costs by 25% using token optimization.
- Built scalable AI apps using FastAPI, Azure OpenAI, LangGraph,
Docker, and Azure VM.

=== AVAILABILITY ===
Vaishnavi is open to GenAI Engineer, AI Full Stack Engineer,
Full Stack Developer, and AI Application Developer roles.
She is also available for freelance AI projects.

If asked something outside this portfolio, politely say:
"I can answer questions about Vaishnavi's skills, projects, experience,
tech stack, resume, and availability."
"""


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessage]] = []


class ChatResponse(BaseModel):
    reply: str
    source: str = "fallback"


def fallback_reply(user_message: str) -> str:
    msg = user_message.lower()

    if any(word in msg for word in ["skill", "skills", "tech stack", "technology", "tools"]):
        return (
            "Vaishnavi's top skills include Azure OpenAI, LangChain, LangGraph, "
            "RAG pipelines, FastAPI, React, Next.js, Python, Node.js, Docker, "
            "Azure VM, Nginx, FAISS, Pinecone, MongoDB, SQL, and REST APIs."
        )

    if any(word in msg for word in ["project", "projects", "work", "built"]):
        return (
            "Vaishnavi has worked on production-level GenAI projects including "
            "BharatShodh, AI Interview Assistant, RAG Q&A Platform, LLM Legal "
            "Summarizer, and LangGraph-based automation workflows."
        )

    if any(word in msg for word in ["experience", "job", "company", "role"]):
        return (
            "Vaishnavi is a GenAI & Full Stack Engineer with 2+ years of experience. "
            "She has worked on AI applications, RAG systems, REST APIs, cloud deployments, "
            "Dockerized apps, and Azure VM production environments."
        )

    if any(word in msg for word in ["available", "hire", "hiring", "open", "freelance"]):
        return (
            "Yes, Vaishnavi is open to full-time and freelance opportunities in "
            "GenAI Engineering, AI Full Stack Development, and AI application development."
        )

    if any(word in msg for word in ["contact", "email", "linkedin", "github"]):
        return (
            "You can contact Vaishnavi at tompevaishnavi89@gmail.com. "
            "You can also connect with her on LinkedIn or view her work on GitHub."
        )

    if any(word in msg for word in ["rag", "llm", "genai", "ai"]):
        return (
            "Vaishnavi specializes in GenAI applications, RAG pipelines, LLM workflows, "
            "LangChain, LangGraph, Azure OpenAI, vector search, prompt engineering, "
            "and multi-agent AI systems."
        )

    if any(word in msg for word in ["devops", "cloud", "docker", "azure", "deployment"]):
        return (
            "Vaishnavi has experience deploying AI applications on Azure VM using "
            "Docker, Docker Compose, Linux, Nginx reverse proxy, SSL configuration, "
            "and production monitoring."
        )

    if any(word in msg for word in ["resume", "cv"]):
        return (
            "Vaishnavi's resume highlights her experience in GenAI, full-stack development, "
            "RAG pipelines, FastAPI, React, Azure OpenAI, Docker, Azure VM, and production deployments."
        )

    return (
        "I can help you learn about Vaishnavi's skills, projects, experience, "
        "tech stack, resume highlights, contact details, and work availability."
    )


@app.get("/")
def root():
    return {
        "status": "Vaishnavi Portfolio Chatbot API is running",
        "ai_provider": "Azure OpenAI" if client else "Fallback mode"
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
        "azure_openai_configured": bool(client),
        "fallback_enabled": True
    }


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    # If Azure OpenAI is not configured, normal chatbot will work
    if not client:
        return ChatResponse(
            reply=fallback_reply(request.message),
            source="fallback"
        )

    messages = [{"role": "system", "content": PORTFOLIO_CONTEXT}]

    # Add last 8 conversation messages
    for msg in request.history[-8:]:
        if msg.role in ("user", "assistant"):
            messages.append({"role": msg.role, "content": msg.content})

    messages.append({"role": "user", "content": request.message})

    try:
        response = client.chat.completions.create(
            model=AZURE_OPENAI_DEPLOYMENT_NAME,
            messages=messages,
            max_tokens=300,
            temperature=0.5,
        )

        reply = response.choices[0].message.content

        if not reply:
            reply = fallback_reply(request.message)

        return ChatResponse(reply=reply, source="azure_openai")

    except Exception:
        # If Azure OpenAI fails, rate limit comes, wrong key, deployment issue, etc.
        # Normal chatbot will still work.
        return ChatResponse(
            reply=fallback_reply(request.message),
            source="fallback"
        )