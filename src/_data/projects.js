// Portfolio entries. Real projects only; mirrors cv.tex.

const projects = [
  {
    id: 'enerjiveri',
    title: 'EnerjiVeri: 100 Years of Turkish Energy Data',
    subtitle: 'TÜBİTAK 1001 project No. 323K520, sole web developer',
    period: '09/2024 – Present',
    problem: 'A hundred years of Turkish energy production, consumption and policy data was spread across CSV files and PDFs.',
    solution: "I built the project's Turkish-language portal that brings it together, with time-series charts, sector breakdowns and interactive dashboards.",
    outcome: "The portal is live and used by the project's researchers and policy stakeholders (\"Energy Strategies in the Second Century of the Republic\").",
    tech: ['Python', 'Data Visualization', 'Time-Series', 'Web Portal', 'ETL'],
    visitSiteLink: 'https://enerjiveri.khas.edu.tr/',
    demoLink: '/demos/enerdata-primary-energy/',
    sourceLink: 'https://github.com/mertBiricik/enerdata',
    featured: true
  },
  {
    id: 'tune2travel',
    title: 'Tune2Travel: Music Videos and Destination Marketing',
    subtitle: 'TÜBİTAK 1001 project, data infrastructure and NLP',
    period: '2024 – 2025',
    problem: 'The project studies how music videos shape the way people see a travel destination, which needs a lot of multilingual social media data.',
    solution: 'I built the data side: collecting videos and comments through the YouTube API, the ETL pipelines, and the NLP and ML models that pull cultural and sociological signals out of the comments.',
    outcome: 'Marketing and sociology researchers on the project use it to compare patterns across thousands of music videos in several languages.',
    tech: ['Python', 'NLP', 'spaCy', 'Gensim', 'YouTube API', 'ETL', 'Selenium'],
    visitSiteLink: 'https://listenandtravelwithme.khas.edu.tr/',
    featured: true
  },
  {
    id: 'osint-scada',
    title: 'OSINT-Driven SCADA Threat Discovery',
    subtitle: 'Field assessment on a SCADA testbed in Milan',
    period: '2024 – 2025',
    problem: 'Power distribution operators have no structured way to combine open-source intelligence about their assets with AI-based protection.',
    solution: 'I did a hands-on OSINT vulnerability assessment of a SCADA testbed in Milan and worked on a framework that pairs OSINT-based threat discovery with AI-based protective controls.',
    outcome: 'Published at IEEE UPEC 2025.',
    tech: ['OSINT', 'SCADA', 'Threat Discovery', 'Network Security'],
    publicationLink: 'https://doi.org/10.1109/UPEC65436.2025.11279773',
    featured: true
  },
  {
    id: 'tbf_mhk_rag',
    title: 'Basketball RAG Agent',
    subtitle: 'Retrieval-augmented generation for Turkish basketball rules and league data',
    period: '2025',
    problem: 'Generic search tools fail at semantic, domain-specific basketball questions and break entirely on Turkish league data.',
    solution: 'I built a RAG system with two sides: a vector store of 873 official rule documents and a FastAPI server over 17,000+ Turkish league games, routed by an intent classifier and exposed through a Gradio UI.',
    outcome: 'Answers bilingual questions about both the rules and league statistics from a single conversational interface.',
    tech: ['LangChain', 'Ollama', 'RAG', 'FastAPI', 'Gradio', 'Python'],
    sourceLink: 'https://github.com/mertBiricik/tbf_mhk_rag_mcp',
    featured: false
  },
  {
    id: 'c_benchmark',
    title: 'C/C++ Systems Benchmarking Suite',
    subtitle: 'Custom allocator, scheduler, shell and HTTP server',
    period: '2023 – 2024',
    problem: 'Coursework rarely connects OS theory (allocation, scheduling, IO) to measurable performance on a single machine.',
    solution: 'A Makefile-driven suite with a custom memory allocator, a process scheduler, a UNIX shell and a minimal web server, each with reproducible benchmarks.',
    outcome: 'A reusable setup for systems performance experiments and a teaching reference.',
    tech: ['C', 'C++', 'Makefile', 'Linux', 'System Programming'],
    sourceLink: 'https://github.com/mertBiricik/c_benchmark',
    featured: false
  }
];

module.exports = {
  all: projects,
  featured: projects.filter(p => p.featured)
};
