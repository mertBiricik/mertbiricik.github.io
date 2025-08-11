---
layout: post
title: "Building a Production RAG System: Turkish Basketball Federation AI Assistant"
date: 2025-08-11
tags:
  - ai
  - rag
  - mcp
  - python
  - tutorial
---

## Building a Production RAG System: Turkish Basketball Federation AI Assistant

Complete tutorial for deploying a multilingual Retrieval-Augmented Generation system combining basketball rules with live statistics on any Linux system.

---

### System Overview

Production-ready Basketball RAG system with dual-component architecture:

*   **Rules Component:** ChromaDB vector database (873 documents)
*   **Statistics Component:** FastAPI server (17,261+ games)
*   **Smart Router:** Query classification and routing
*   **Web Interface:** Gradio production frontend

**Key Features:**
*   Bilingual Turkish/English support
*   GPU-accelerated embeddings (BGE-M3)
*   Llama 3.1 8B integration via Ollama
*   External access via localtunnel
*   Production error handling and logging

---

### Prerequisites

**System Requirements:**
```bash
# Ubuntu/Debian systems
sudo apt update
sudo apt install python3.8+ python3-pip git curl build-essential

# GPU acceleration (recommended)
# CUDA-capable GPU with 8GB+ VRAM
# RTX 3060/4060 or better
```

**Core Dependencies:**
```bash
pip install torch transformers sentence-transformers
pip install chromadb fastapi uvicorn gradio
pip install pandas numpy requests pyyaml tqdm
pip install langchain-community ollama python-docx
```

**Ollama Setup:**
```bash
# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Pull required model
ollama pull llama3.1:8b-instruct-q4_K_M
```

---

### Project Structure

```
tbf_mhk_rag_mcp/
├── data/                    # CSV game statistics (76 files)
├── documents/              # PDF basketball rules
├── scripts/
│   ├── setup_database.py   # Vector DB initialization  
│   ├── build_stats_db.py   # Statistics DB builder
│   └── gradio_app.py       # Development interface
├── servers/
│   └── stats_api.py        # FastAPI statistics server
├── src/
│   └── utils/
│       ├── config.py       # Hardware detection
│       └── query_router.py # Query classification
├── production_app.py       # Production system
└── Basketball_RAG_Setup_Instructions.md
```

---

### Step 1: Database Initialization

**Vector Database (Rules):**
```bash
# Create vector database from PDF documents
python scripts/setup_database.py

# Verify database
# Should output: "✅ Connected to vector database: 873 documents"
```

**Statistics Database (Games):**
```bash
# Build SQLite database from CSV files
python scripts/build_stats_db.py

# Output: "✅ Database built: 17,261 games processed"
```

---

### Step 2: Query Router Implementation

**Core Router Logic:**
```python
class QueryRouter:
    def __init__(self, stats_api_url="http://localhost:8001"):
        self.stats_keywords = {
            # Turkish: maç, takım, sezon, sonuç, istatistik
            # English: game, team, season, result, statistics
        }
        
        self.team_patterns = [
            r'\b(tofaş|fenerbahçe|galatasaray)\b',
            r'\b(efes|beşiktaş|trabzonspor)\b'
        ]
    
    def classify_query(self, query: str) -> str:
        # Smart classification logic
        # Returns 'stats' or 'rules'
        
    def query_stats_api(self, query: str) -> dict:
        # Extract parameters and query API
        # Turkish character encoding handled
```

**Turkish Character Encoding:**
```python
# Critical for Turkish team names
params = {'team_name': 'TOFAŞ'}
url = f"{api_url}?{urlencode(params, safe='', encoding='utf-8')}"
```

---

### Step 3: Production System Setup

**Launch Production System:**
```bash
# Single command deployment
python production_app.py

# System startup sequence:
# 🚀 Initializing Production Basketball RAG System...
# 📊 Loading BAAI/bge-m3 on cuda...
# ✅ Vector database: 873 documents
# ✅ Stats API started successfully
# 🎉 Production system ready!
# 🌐 Access at: http://localhost:7860
```

**Key Production Features:**
*   Automatic service startup
*   Port detection and binding  
*   Error recovery and fallbacks
*   Comprehensive logging
*   GPU optimization with CPU fallback

---

### Step 4: External Access Configuration

**Localtunnel Setup:**
```bash
# Install localtunnel globally
npm install -g localtunnel

# Create tunnel to production system
lt --port 7860

# Example output:
# your url is: https://all-spies-hunt.loca.lt
# Password: 31.223.4.21 (your public IP)
```

**Alternative Tunneling:**
```bash
# Using ngrok
ngrok http 7860

# Using serveo
ssh -R 80:localhost:7860 serveo.net
```

---

### Step 5: Query Examples and Testing

**Rules Queries (Turkish):**
```
"5 faul yapan oyuncuya ne olur?"
"Basketbol sahasının boyutları nelerdir?"
"Şut saati kuralı nasıl işler?"
"2024 yılında hangi kurallar değişti?"
```

**Rules Queries (English):**
```
"What happens when a player gets 5 fouls?"
"What are basketball court dimensions?"
"How does the shot clock rule work?"
"Which rules changed in 2024?"
```

**Statistics Queries (Turkish):**
```
"TOFAŞ maçları 2023-2024 sezonunda"
"Fenerbahçe vs Galatasaray maçları"
"BSL 2024-2025 sezon sonuçları"
"Kadın basketbol lig sonuçları"
```

**Statistics Queries (English):**
```
"TOFAŞ games in 2023-2024 season"
"Show me games from BSL league"
"Basketball league standings"
"Women's basketball results"
```

---

### Step 6: API Integration and Testing

**Direct Statistics API Testing:**
```bash
# Test API endpoints directly
curl "http://localhost:8001/games/?team_name=TOFAŞ&limit=5"

# Expected response:
# [{"tarih": "12.05.2024", "team_a": "TOFAŞ", "team_b": "GALATASARAY", ...}]
```

**API Parameters:**
*   `team_name`: Turkish team name (TOFAŞ, FENERBAHÇE, GALATASARAY)
*   `season`: Format "2023-2024"
*   `date`: Format "DD.MM.YYYY"
*   `limit`: Maximum results (default 50)

---

### Step 7: MCP Server Integration (Optional)

**Model Context Protocol Setup:**
```python
# Configure MCP for Claude integration
# Enables direct API access from Claude Code

class MCPServer:
    def handle_basketball_query(self, query: str):
        # Route query through production system
        return self.rag_system.process_query(query)
```

**MCP Configuration:**
```json
{
  "mcpServers": {
    "basketball-rag": {
      "command": "python",
      "args": ["mcp_server.py"],
      "env": {
        "STATS_API_URL": "http://localhost:8001"
      }
    }
  }
}
```

---

### Step 8: Performance Optimization

**Hardware Detection:**
```python
def detect_hardware():
    if torch.cuda.is_available():
        gpu_name = torch.cuda.get_device_name(0)
        vram_gb = torch.cuda.get_device_properties(0).total_memory / 1e9
        # Optimize model selection based on VRAM
        return select_optimal_models(vram_gb)
    return default_models()
```

**Model Selection Logic:**
*   **8GB+ VRAM:** BGE-M3 embeddings + Llama 3.1 8B
*   **4-8GB VRAM:** BGE-M3 embeddings + Llama 3.1 8B Q4
*   **<4GB VRAM:** MiniLM embeddings + Llama 3.1 8B Q2

---

### Step 9: Troubleshooting Common Issues

**Vector Database Empty:**
```bash
# Check database status
python -c "import chromadb; print(chromadb.PersistentClient('./vector_db/chroma_db').get_collection('basketball_rules').count())"

# If 0 documents, rebuild:
python scripts/setup_database.py
```

**Turkish Character Issues:**
```python
# Ensure proper encoding in all API calls
import urllib.parse
team_name = "TOFAŞ"
encoded = urllib.parse.quote(team_name, encoding='utf-8')
```

**GPU Memory Issues:**
```bash
# Monitor GPU usage
nvidia-smi -l 1

# Clear GPU cache in Python
torch.cuda.empty_cache()
```

**Port Conflicts:**
```bash
# Find and kill processes using required ports
lsof -ti:8001 | xargs kill -9
lsof -ti:7860 | xargs kill -9
```

---

### Step 10: Production Deployment Checklist

**Pre-deployment:**
- [ ] Vector database populated (873 documents)
- [ ] Statistics database built (17,261+ games)
- [ ] Ollama running with Llama 3.1 8B model
- [ ] All dependencies installed
- [ ] GPU drivers configured (if applicable)

**Deployment:**
- [ ] Production system launches successfully
- [ ] Both rules and stats queries working
- [ ] External tunnel configured
- [ ] Error logging active
- [ ] Performance monitoring enabled

**Post-deployment:**
- [ ] Test all query types
- [ ] Verify Turkish character handling
- [ ] Check response times (<3s typical)
- [ ] Monitor system resources
- [ ] Document access credentials

---

### System Architecture Benefits

**Scalability:**
*   Microservice architecture (RAG + Stats API)
*   Horizontal scaling via load balancing
*   Database sharding for large datasets

**Reliability:**
*   Automatic failover between components
*   Graceful degradation when services unavailable
*   Comprehensive error handling and logging

**Multilingual Support:**
*   Language detection and routing
*   Turkish/English response formatting
*   Character encoding optimization

---

### Next Steps

**System Enhancements:**
*   Add more sports leagues and data sources
*   Implement user authentication and sessions
*   Create mobile application interface
*   Add real-time statistics streaming

**Technical Improvements:**
*   Fine-tune embedding models for domain-specific queries
*   Implement advanced caching strategies
*   Add A/B testing for query routing algorithms
*   Integrate with official federation APIs

**Production Monitoring:**
*   Set up Prometheus/Grafana dashboards
*   Implement alerting for system failures
*   Add performance analytics and user tracking
*   Create automated backup procedures

---

Complete production system providing intelligent basketball assistance through advanced AI integration. Deployable on any Linux system with comprehensive documentation and error handling.