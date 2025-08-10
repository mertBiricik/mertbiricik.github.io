// A list of all projects, parsed from GEMINI.md

// Helper function to format the title
function formatTitle(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

const projects = [
  {
    id: 'c_benchmark',
    title: 'C/C++ Systems Benchmarking Suite',
    overview: 'A comprehensive suite of C/C++ projects for benchmarking and demonstrating advanced computer systems concepts, including memory allocation, process scheduling, a UNIX shell, a web server, and security tools.',
    tech: ['C', 'C++', 'Makefile', 'Benchmarking'],
    sourceLink: 'https://github.com/mertBiricik/c_benchmark.git',
    featured: true,
  },
  {
    id: 'enerdata',
    title: 'Energy Data Visualization',
    overview: 'A data analysis and visualization project focused on energy data. It includes scripts to process data from CSV files and display it in interactive HTML dashboards.',
    tech: ['Python', 'HTML', 'JavaScript', 'Data Visualization'],
    sourceLink: 'https://github.com/mertBiricik/enerdata.git',
    featured: false,
  },
  {
    id: 'tbf_mhk_rag_mcp',
    title: 'Basketball RAG Agent',
    overview: 'A Retrieval-Augmented Generation (RAG) project for basketball data, enabling complex queries against a specialized knowledge base.',
    tech: ['LangChain', 'Ollama', 'Transformers', 'Gradio', 'RAG'],
    sourceLink: 'https://github.com/mertBiricik/tbf_mhk_rag.git',
    featured: false,
  },
  {
    id: 'tune2travel',
    title: 'Tune2Travel',
    overview: 'An AI-powered travel planning application that leverages various NLP libraries to process and understand user travel requests.',
    tech: ['NLTK', 'spaCy', 'Gensim', 'TextBlob', 'Google Cloud Translate', 'Selenium'],
    sourceLink: 'https://github.com/mertBiricik/tune2travel.git',
    visitSiteLink: 'https://listenandtravelwithme.khas.edu.tr/',
    featured: false,
  },
  {
    id: 'you-tune',
    title: 'You-Tune',
    subtitle: 'YouTube Comment Analyzer',
    overview: 'A command-line YouTube comment analysis tool with multi-language support, spam filtering, sentiment analysis, and topic extraction.',
    tech: ['Python', 'PyTorch', 'Transformers', 'Pandas', 'Scikit-learn'],
    sourceLink: 'https://github.com/mertBiricik/youtube_cleanser',
    featured: false,
  },
  {
    id: 'silk_spectre',
    title: 'Silk Spectre',
    subtitle: 'Sequential Polling System',
    overview: 'A PHP-based polling application that supports sequential polls with branching logic and timed transitions. It allows administrators to create complex polling sequences, manage polls, and view results.',
    tech: ['PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    sourceLink: 'https://github.com/mertBiricik/silk_spectre.git',
    featured: false,
  }
];

module.exports = {
  all: projects,
  featured: projects.filter(p => p.featured)
};