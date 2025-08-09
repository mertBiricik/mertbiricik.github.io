// A list of all projects, parsed from GEMINI.md

// Helper function to format the title
function formatTitle(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

const projects = [
  {
    id: 'ai-based-customer-support',
    title: 'AI-Based Customer Support',
    overview: 'An AI-powered customer support chatbot designed to understand and respond to user queries. It leverages modern NLP and machine learning frameworks.',
    tech: ['FastAPI', 'Uvicorn', 'LangChain', 'OpenAI', 'ChromaDB', 'Sentence-Transformers', 'Pandas', 'Numpy'],
    sourceLink: null,
    featured: true,
  },
  {
    id: 'c_benchmark',
    title: 'C/C++ Systems Benchmarking Suite',
    overview: 'A comprehensive suite of C/C++ projects for benchmarking and demonstrating advanced computer systems concepts, including memory allocation, process scheduling, a UNIX shell, a web server, and security tools.',
    tech: ['C', 'C++', 'Makefile', 'Benchmarking'],
    sourceLink: null,
    featured: true,
  },
  {
    id: 'enerdata',
    title: 'Energy Data Visualization',
    overview: 'A data analysis and visualization project focused on energy data. It includes scripts to process data from CSV files and display it in interactive HTML dashboards.',
    tech: ['Python', 'HTML', 'JavaScript', 'Data Visualization'],
    sourceLink: null,
    featured: false,
  },
  {
    id: 'tbf_mhk_rag_mcp',
    title: 'Basketball RAG Agent',
    overview: 'A Retrieval-Augmented Generation (RAG) project for basketball data, enabling complex queries against a specialized knowledge base.',
    tech: ['LangChain', 'Ollama', 'Transformers', 'Gradio', 'RAG'],
    sourceLink: null,
    featured: false,
  },
  {
    id: 'tune2travel',
    title: 'Tune2Travel',
    overview: 'An AI-powered travel planning application that leverages various NLP libraries to process and understand user travel requests.',
    tech: ['NLTK', 'spaCy', 'Gensim', 'TextBlob', 'Google Cloud Translate', 'Selenium'],
    sourceLink: null,
    featured: false,
  }
];

module.exports = {
  all: projects,
  featured: projects.filter(p => p.featured)
};