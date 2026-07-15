import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_groq import ChatGroq
from langchain_classic.chains import RetrievalQA
from langchain_core.prompts import PromptTemplate

load_dotenv()

embeddings =  HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorestore = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0
)

prompt_template = """
    Eres el asistente interno de Santo Pegasus Soluciones. Respondé la pregunta
    basándote SOLO en el contexto de los documentos internos. Si no está en el contexto, decí que no
    tenés esa información.

    Contexto:
    {context}

    Pregunta: {question}

    Respuesta:
"""

qa_chain = RetrievalQA.from_chain_type(
    
)