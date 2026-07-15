from langchain_community.document_loaders import PyPDFLoader
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
import os

docs_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), "docs")
all_docs = []
for filename in os.listdir(docs_folder):
    if filename.endswith(".pdf"):
        loader = PyPDFLoader(os.path.join(docs_folder, filename))
        all_docs.extend(loader.load())

splitter = RecursiveCharacterTextSplitter(chunk_size = 1000, chunk_overlap = 150)
chunks = splitter.split_documents(all_docs)

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorestore = FAISS.from_documents(chunks, embeddings)
vectorestore.save_local("faiss_index")

print(f"Índice creado con {len(chunks)} chunks.")