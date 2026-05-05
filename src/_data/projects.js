// Curated portfolio. Real projects only. Mirrors cv.tex content.

const projects = [
  {
    id: 'enerjiveri',
    title: 'EnerjiVeri — 100 Years of Turkish Energy Data',
    subtitle: 'TUBITAK 1001 — Sole web developer for the national strategic project (No. 323K520)',
    period: '09/2024 — Present',
    problem: 'A century of national energy production, consumption, and policy data sat fragmented across CSVs and PDFs, unusable for evidence-based policy analysis.',
    solution: 'Built a dynamic Turkish-language data portal consolidating 100 years of quantitative and qualitative energy data with time-series charts, sectoral distribution models, and interactive dashboards.',
    outcome: 'Live national portal used by researchers and policy stakeholders under the project "Energy Strategies in the Second Century of the Republic".',
    tech: ['Python', 'Data Visualization', 'Time-Series', 'Web Portal', 'ETL'],
    visitSiteLink: 'https://enerjiveri.khas.edu.tr/',
    demoLink: '/demos/enerdata-primary-energy/',
    sourceLink: 'https://github.com/mertBiricik/enerdata.git',
    featured: true
  },
  {
    id: 'tune2travel',
    title: 'Tune2Travel — Music Videos & Destination Marketing',
    subtitle: 'TUBITAK 1001 — Data infrastructure & NLP pipeline',
    period: '2024 — 2025',
    problem: 'Quantifying how music videos shape tourism perception requires large-scale, multi-language social media data plus cultural NLP processing.',
    solution: 'Engineered the data infrastructure: YouTube API ingestion, ETL pipelines, NLP and ML models surfacing cultural and sociological signals about destination marketing on social platforms.',
    outcome: 'National research project deliverable enabling marketing & sociology researchers to query patterns across thousands of cross-language music videos.',
    tech: ['Python', 'NLP', 'spaCy', 'Gensim', 'YouTube API', 'ETL', 'Selenium'],
    visitSiteLink: 'https://listenandtravelwithme.khas.edu.tr/',
    sourceLink: 'https://github.com/mertBiricik/tune2travel.git',
    featured: true
  },
  {
    id: 'memory-forensics-triage',
    title: 'Unsupervised Memory Forensics Triage',
    subtitle: 'Volatility3 + Isolation Forest for fileless malware',
    period: '2025 — 2026',
    problem: 'Zero-day and fileless malware evade signature-based detection and overwhelm analysts with raw memory artefacts.',
    solution: 'Designed an automated memory forensics triage system on top of Volatility3 with unsupervised ML (Isolation Forest) over behavioural and graph-theoretic features to surface anomalous processes.',
    outcome: 'Manuscript under review (Texas, USA). Co-authored with H. Coskun and R. Creutzburg.',
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
    period: '2024 — 2025',
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
    period: '2023 — 2024',
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
