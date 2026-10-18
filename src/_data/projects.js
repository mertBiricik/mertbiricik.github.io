// Curated portfolio. Real projects only. Mirrors cv.tex content.

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
    sourceLink: 'https://github.com/mertBiricik/enerdata.git',
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
    sourceLink: 'https://github.com/mertBiricik/tune2travel.git',
    featured: true
  },
  {
    id: 'memory-forensics-triage',
    title: 'Unsupervised Memory Forensics Triage',
    subtitle: 'Volatility3 and Isolation Forest for fileless malware',
    period: '2025 – 2026',
    problem: 'Fileless and zero-day malware slip past signature-based tools, and a raw memory dump gives an analyst far too much to look through.',
    solution: 'We built a triage system on top of Volatility3 that scores processes with an Isolation Forest over behavioural and graph features and points the analyst to the unusual ones.',
    outcome: 'Manuscript under review (Texas, USA), with H. Coskun and R. Creutzburg.',
    tech: ['Volatility3', 'Memory Forensics', 'Isolation Forest', 'Graph Analysis', 'Python'],
    featured: true
  },
  {
    id: 'tbf_mhk_rag',
    title: 'Basketball RAG Agent',
    subtitle: 'Domain-specific Retrieval-Augmented Generation for Turkish basketball',
    period: '2025',
    problem: 'Generic search tools fail at semantic, domain-specific basketball queries and break entirely on Turkish league data.',
    solution: 'Built a dual-intelligence RAG system: a vector store of 873 official rule documents plus a FastAPI server over 17,000+ Turkish league games, routed by an intent classifier and exposed through a Gradio UI.',
    outcome: 'Answers complex bilingual queries about both rules and live league statistics via a single conversational interface.',
    tech: ['LangChain', 'Ollama', 'RAG', 'FastAPI', 'Gradio', 'Python'],
    sourceLink: 'https://github.com/mertBiricik/tbf_mhk_rag.git',
    featured: false
  },
  {
    id: 'osint-scada',
    title: 'OSINT-Driven SCADA Threat Discovery',
    subtitle: 'Field assessment on a Milan SCADA testbed',
    period: '2024 – 2025',
    problem: 'Power distribution operators lack a structured pipeline that combines open-source intelligence with AI-based protection for SCADA assets.',
    solution: 'Performed a hands-on OSINT vulnerability assessment on a SCADA testbed in Milan and contributed to a novel framework combining OSINT-driven threat discovery with AI-based protective controls.',
    outcome: 'Published at IEEE UPEC 2025 (DOI: 10.1109/UPEC65436.2025.11279773).',
    tech: ['OSINT', 'SCADA', 'Threat Discovery', 'Network Security'],
    publicationLink: 'https://doi.org/10.1109/UPEC65436.2025.11279773',
    featured: false
  },
  {
    id: 'c_benchmark',
    title: 'C/C++ Systems Benchmarking Suite',
    subtitle: 'Custom allocator, scheduler, shell, and HTTP server',
    period: '2023 – 2024',
    problem: 'Coursework rarely connects OS theory (allocation, scheduling, IO) to measurable performance on a single rig.',
    solution: 'Engineered a Makefile-driven suite implementing a custom memory allocator, process scheduler, UNIX shell, and minimal web server, each with reproducible benchmarks.',
    outcome: 'Reusable framework for systems performance experiments and a teaching reference.',
    tech: ['C', 'C++', 'Makefile', 'Linux', 'System Programming'],
    sourceLink: 'https://github.com/mertBiricik/c_benchmark.git',
    featured: false
  }
];

module.exports = {
  all: projects,
  featured: projects.filter(p => p.featured)
};
