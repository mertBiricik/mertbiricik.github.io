// Profile, education, experience, skills. Mirrors cv.tex; keep the two in sync.

module.exports = {
  name: 'Mert Biricik',
  title: 'Cybersecurity Researcher & CyberMACS Scholar',
  location: 'Istanbul, Turkey',
  citizenship: 'Dual citizen (German / Turkish)',
  summary: 'Cybersecurity researcher and Erasmus Mundus scholar in the CyberMACS MSc in Applied Cybersecurity, with hands-on experience in network administration, system deployment and threat discovery. I have run critical IT infrastructure and software rollouts under pressure, and I want to specialise in Zero Trust architecture, cloud security and SASE.',
  focus: [
    'Threat hunting and memory forensics',
    'OSINT-driven threat discovery',
    'Anomaly detection in critical infrastructure',
    'Agentic AI and RAG systems',
    'Zero Trust, cloud security, SASE'
  ],
  skills: [
    {
      group: 'Security',
      icon: 'shield',
      items: ['Threat Hunting', 'Memory Forensics', 'OSINT Analysis', 'Anomaly Detection', 'Network Security']
    },
    {
      group: 'AI & Data',
      icon: 'nodes',
      items: ['Agentic AI', 'RAG', 'ETL Pipelines', 'Time-Series Analysis', 'NLP', 'Predictive Modeling']
    },
    {
      group: 'Infrastructure',
      icon: 'server',
      items: ['Docker', 'Kubernetes', 'QEMU + KVM', 'Linux (Debian, Red Hat)']
    },
    {
      group: 'Tooling',
      icon: 'code',
      items: ['Python', 'Shell Scripting', 'Git', 'LaTeX', 'Microsoft Office']
    }
  ],
  education: [
    {
      period: '09/2026 — 07/2028',
      degree: 'MSc in Applied Cybersecurity (CyberMACS)',
      institution: 'Erasmus Mundus Joint MSc',
      url: 'https://cybermacs.eu/',
      details: [
        'Full EU scholarship (€1,400/month), awarded on academic merit.',
        'Mobility: year 1 at Kadir Has University (TR) and SRH Berlin (DE); year 2 at UKIM (MK).',
        'Topics: applied cybersecurity, cryptography, network security, entrepreneurship.'
      ]
    },
    {
      period: '09/2025 — 07/2026',
      degree: 'MA in Administrative Sciences',
      institution: 'Kadir Has University',
      details: [
        'Graduate researcher in the BCI-Feast lab on EEG-driven brain–computer interfaces.',
        'Thesis under journal review.'
      ]
    },
    {
      period: '09/2021 — 06/2025',
      degree: 'BA in Management Information Systems',
      institution: 'Kadir Has University, Istanbul',
      details: [
        'Thesis: Anomaly Detection in Electric Distribution Systems, with BEDAŞ.',
        'Published at IEEE UPEC 2025.'
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
        'Research on brain–computer interface (BCI) systems in the BCI-Feast laboratory.',
        'Lab sessions for undergraduate MIS courses on algorithm design and operating systems.'
      ]
    },
    {
      period: '10/2023 — 09/2025',
      role: 'Undergraduate Researcher',
      org: 'Kadir Has University CCIP',
      url: 'https://ccip.khas.edu.tr/en/center-for-cybersecurity-and-critical-infrastructure-protection-3/',
      location: 'Istanbul',
      bullets: [
        'Technical support for researchers on machine learning projects, mostly on GPU-accelerated systems.',
        'Ran the network and systems infrastructure of the Center for Cybersecurity and Critical Infrastructure Protection.'
      ]
    },
    {
      period: '05/2025 — Present',
      role: 'Search & Rescue Operator & Instructor',
      org: 'AFAD',
      location: 'Istanbul',
      bullets: [
        'Urban and mountain search and rescue operations.',
        'Certified AFAD instructor; training on disaster preparedness and USAR protocols.',
        'Specialised equipment under AFAD (TR) and INSARAG (UN) standards.'
      ]
    },
    {
      period: '09/2022 — 07/2025',
      role: 'Video Operator & Technical Support',
      org: 'FIBA & Turkish Basketball Federation',
      bullets: [
        'Technical setup and troubleshooting for 12 video operators during live events, keeping the systems up throughout.',
        'Real-time referee data and video tagging with the ERIC software suite.'
      ]
    }
  ],
  languages: [
    { name: 'Turkish', level: 'Native' },
    { name: 'English', level: 'C1', note: 'IELTS 7.5' },
    { name: 'German',  level: 'A2',  note: 'Dual citizen DE/TR' },
    { name: 'Arabic',  level: 'A1' }
  ],
  interests: ['Mountaineering', 'Rock Climbing', 'Search & Rescue Operations']
};
