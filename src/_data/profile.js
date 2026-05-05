// Profile, education, experience, skills. Sourced from cv.tex.

module.exports = {
  name: 'Mert Biricik',
  title: 'Cybersecurity Researcher & CyberMACS Scholar',
  location: 'Istanbul, Turkey',
  citizenship: 'Dual citizen (German / Turkish)',
  summary: 'Cybersecurity researcher and incoming Erasmus Mundus Scholar (MSc in Applied Cybersecurity) with hands-on experience in network administration, system deployment, and threat discovery. I run critical IT infrastructure and software rollouts under high-pressure conditions and focus on Zero Trust, Cloud Security, and SASE.',
  focus: [
    'Threat hunting & memory forensics',
    'OSINT-driven threat discovery',
    'Anomaly detection in critical infrastructure',
    'Agentic AI & RAG systems',
    'Zero Trust, Cloud Security, SASE'
  ],
  skills: [
    {
      group: 'Security',
      icon: 'fa-shield-halved',
      items: ['Threat Hunting', 'Memory Forensics', 'OSINT Analysis', 'Anomaly Detection', 'Network Security']
    },
    {
      group: 'AI & Data',
      icon: 'fa-brain',
      items: ['Agentic AI', 'RAG', 'ETL Pipelines', 'Time-Series Analysis', 'NLP', 'Predictive Modeling']
    },
    {
      group: 'Infrastructure',
      icon: 'fa-server',
      items: ['Docker', 'Kubernetes', 'QEMU + KVM', 'Linux (Debian, Red Hat)', 'Network Administration']
    },
    {
      group: 'Tooling',
      icon: 'fa-code',
      items: ['Python', 'Shell Scripting', 'Git', 'LaTeX', 'Microsoft Office']
    }
  ],
  education: [
    {
      period: '09/2026 — 07/2027',
      degree: 'MSc in Applied Cybersecurity (CyberMACS)',
      institution: 'Erasmus Mundus Joint MSc',
      url: 'https://cybermacs.eu/',
      details: [
        'Awarded full EU scholarship (€1,400/month) on academic excellence.',
        'Mobility: Year 1 — Kadir Has University (TR) & SRH Berlin (DE); Year 2 — UKIM (MK).',
        'Focus: Applied Cybersecurity, Cryptography, Network Security, Entrepreneurship.'
      ]
    },
    {
      period: '09/2025 — 07/2026',
      degree: 'MA in Administrative Sciences',
      institution: 'Kadir Has University',
      details: [
        'Graduate researcher in the BCI-Feast lab on EEG-driven Brain Computer Interfaces.',
        'Thesis under journal review.'
      ]
    },
    {
      period: '09/2021 — 06/2025',
      degree: 'BA in Management Information Systems',
      institution: 'Kadir Has University, Istanbul',
      details: [
        'Thesis: Anomaly Detection in Electric Distribution Systems.',
        'Collaborative work with BEDAS, published at IEEE UPEC 2025.'
      ]
    }
  ],
  experience: [
    {
      period: '09/2025 — Present',
      role: 'Graduate Researcher',
      org: 'Kadir Has University BCI-Feast',
      url: 'https://sites.google.com/view/bci-feast',
      location: 'Istanbul',
      bullets: [
        'Conducting research on Brain-Computer Interface (BCI) systems within the BCI-FEAST laboratory.',
        'Delivering laboratory sessions for MIS undergraduates on algorithm design and operating systems.'
      ]
    },
    {
      period: '10/2023 — 09/2025',
      role: 'Undergraduate Researcher',
      org: 'Kadir Has University CCIP',
      url: 'https://ccip.khas.edu.tr/en/center-for-cybersecurity-and-critical-infrastructure-protection-3/',
      location: 'Istanbul',
      bullets: [
        'Provided technical support for ML projects, specialising in GPU-accelerated systems.',
        'Administered network and systems infrastructure for the Center on Cybersecurity and Critical Infrastructure Protection.'
      ]
    },
    {
      period: '05/2025 — Present',
      role: 'Search & Rescue Operator & Instructor',
      org: 'AFAD',
      location: 'Istanbul',
      bullets: [
        'Conduct high-stakes urban and mountain search & rescue operations under life-critical pressure.',
        'Certified AFAD instructor delivering training on disaster preparedness and USAR protocols.',
        'Operate specialised equipment under AFAD (TR) and INSARAG (UN) standards.'
      ]
    },
    {
      period: '09/2022 — 07/2025',
      role: 'Video Operator & Technical Support',
      org: 'FIBA & Turkish Basketball Federation',
      bullets: [
        'Provided technical setup and troubleshooting to 12 video operators during live, high-stress events to maintain 100% uptime.',
        'Managed real-time referee data and video tagging using the ERIC software suite.'
      ]
    }
  ],
  languages: [
    { name: 'Turkish', level: 'Native' },
    { name: 'English', level: 'C1', note: 'IELTS 7.5' },
    { name: 'German',  level: 'A2',  note: 'Dual citizen DE/TR' }
  ],
  interests: ['Mountaineering', 'Rock Climbing', 'Search & Rescue Operations']
};
