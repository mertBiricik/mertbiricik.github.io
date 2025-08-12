// A list of all projects, with detailed descriptions for a professional portfolio.

const projects = [
  {
    id: 'c_benchmark',
    title: 'C/C++ Systems Benchmarking Suite',
    subtitle: 'A Deep Dive into System Performance',
    problem: 'Evaluating the performance of fundamental computer systems concepts (like memory allocation and process scheduling) requires standardized and robust testing environments.',
    solution: 'I engineered a comprehensive suite of C/C++ projects to benchmark and demonstrate advanced systems concepts. This included building a custom memory allocator, a process scheduler, a UNIX shell, and a web server.',
    outcome: 'The suite provides a reliable framework for performance analysis and serves as a practical demonstration of core OS and server concepts.',
    tech: ['C', 'C++', 'Makefile', 'Benchmarking', 'System Programming'],
    sourceLink: 'https://github.com/mertBiricik/c_benchmark.git',
    featured: true,
  },
  {
    id: 'tbf_mhk_rag_mcp',
    title: 'Basketball RAG Agent',
    subtitle: 'Conversational AI for Sports Analytics',
    problem: 'Standard search tools cannot answer complex, semantic questions about specific domains like basketball history and player statistics.',
    solution: 'I developed a Retrieval-Augmented Generation (RAG) agent using LangChain and a local LLM (Ollama). The system leverages a specialized knowledge base to understand and answer nuanced, conversational questions about basketball.',
    outcome: 'The agent can successfully answer complex queries that traditional search engines cannot, demonstrating a practical application of domain-specific LLMs.',
    tech: ['LangChain', 'Ollama', 'Transformers', 'Gradio', 'RAG', 'Python'],
    sourceLink: 'https://github.com/mertBiricik/tbf_mhk_rag.git',
    featured: true,
  },
  {
    id: 'you-tune',
    title: 'You-Tune: YouTube Comment Analyzer',
    subtitle: 'Sentiment Analysis and Topic Modeling',
    problem: 'YouTube comment sections are often filled with spam and noise, making it difficult to gauge genuine audience sentiment.',
    solution: 'I built a command-line tool that uses a transformer-based model for sentiment analysis, topic extraction, and spam filtering on YouTube comments. It supports multiple languages and provides clear, actionable insights.',
    outcome: 'The tool effectively cuts through the noise to provide a clear summary of audience feedback, achieving high accuracy in spam detection and sentiment classification.',
    tech: ['Python', 'PyTorch', 'Transformers', 'Pandas', 'Scikit-learn'],
    sourceLink: 'https://github.com/mertBiricik/youtube_cleanser',
    featured: true,
  },
  {
    id: 'enerdata',
    title: 'Interactive Energy Data Visualization',
    subtitle: 'From Raw Data to Interactive Dashboards',
    problem: 'Raw energy consumption and production data in CSV files is difficult to interpret and provides no immediate insights.',
    solution: 'I created a data analysis pipeline using Python to process raw energy data. The processed data is then displayed in an interactive HTML dashboard, allowing for easy exploration and visualization.',
    outcome: 'The project transforms complex datasets into an intuitive tool for analysis, making energy trends accessible to a broader audience.',
    tech: ['Python', 'Pandas', 'HTML', 'JavaScript', 'Data Visualization'],
    sourceLink: 'https://github.com/mertBiricik/enerdata.git',
    featured: false,
  },
  {
    id: 'tune2travel',
    title: 'Tune2Travel: AI Travel Planner',
    subtitle: 'NLP-Powered Travel Recommendations',
    problem: 'Planning travel requires understanding nuanced, natural language requests from users.',
    solution: 'I contributed to an AI-powered travel planning application that uses a suite of NLP libraries (NLTK, spaCy, Gensim) to process and understand user travel queries, providing intelligent recommendations.',
    outcome: 'The application successfully translates complex user requests into actionable travel plans, showcasing the power of NLP in a real-world product.',
    tech: ['NLTK', 'spaCy', 'Gensim', 'TextBlob', 'Google Cloud Translate', 'Selenium'],
    sourceLink: 'https://github.com/mertBiricik/tune2travel.git',
    visitSiteLink: 'https://listenandtravelwithme.khas.edu.tr/',
    featured: false,
  },
  {
    id: 'silk_spectre',
    title: 'Silk Spectre: Sequential Polling System',
    subtitle: 'Dynamic Polls with Branching Logic',
    problem: 'Standard polling tools lack the ability to create dynamic, branching logic or timed transitions between questions.',
    solution: 'I built a full-stack polling application using PHP and MySQL that allows administrators to create complex, sequential polls with conditional logic. The frontend is built with Tailwind CSS and Alpine.js for a modern, responsive user experience.',
    outcome: 'The application provides a flexible and powerful platform for creating sophisticated, interactive polls that go beyond the capabilities of standard tools.',
    tech: ['PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Full-Stack'],
    sourceLink: 'https://github.com/mertBiricik/silk_spectre.git',
    featured: false,
  }
];

module.exports = {
  all: projects,
  featured: projects.filter(p => p.featured)
};