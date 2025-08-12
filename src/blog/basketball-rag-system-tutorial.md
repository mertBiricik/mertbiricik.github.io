---
layout: post
title: "How I Built a Basketball AI That Actually Understands Turkish Sports (And Why Most Sports Chatbots Fail)"
date: 2025-08-11
tags:
  - ai
  - rag
  - basketball
  - python
  - tutorial
  - multilingual
---

## How I Built a Basketball AI That Actually Understands Turkish Sports (And Why Most Sports Chatbots Fail)

Have you ever asked a sports app about a specific rule and gotten a generic answer that doesn't help? Or tried to find statistics for a Turkish basketball team and hit a wall of broken search results?

I faced this exact frustration when working with Turkish Basketball Federation data. Every existing solution felt like it was built by people who never actually watched basketball or dealt with non-English sports data. So I spent three weeks building something better.

Here's the story of how I created an AI assistant that seamlessly handles both complex basketball rules and live Turkish league statistics, the mistakes that nearly broke everything, and why this approach could revolutionize how we interact with sports data.

## The Problem Every Sports Fan Faces (But Nobody Talks About)

Sports apps are broken. Not technically broken, but functionally useless for anyone who wants real answers.

Ask most sports chatbots "What happens when a player gets 5 fouls?" and you'll get a generic Wikipedia-style response. Ask them "How did TOFAŞ perform against Galatasaray this season?" and they'll either give you nothing or outdated information that's completely wrong.

The core issue? **Most sports AI systems treat rules and statistics as completely separate problems.** They're built by teams who either understand the technical side or the sports side, never both.

## What I Built (And Why It's Different)

Instead of building another generic chatbot, I created a **dual-intelligence system** that handles both basketball rules and live Turkish league statistics through a single interface.

### The Architecture That Actually Works

**Rules Engine:** A vector database containing 873 official basketball documents, regulations, and rule explanations. This isn't just scraped Wikipedia content - it's comprehensive, multilingual documentation that covers everything from basic fouls to complex international regulation differences.

**Statistics Server:** A FastAPI backend managing over 17,000 Turkish basketball games with real-time querying capabilities. Every match result, team performance metric, and seasonal statistic from major Turkish leagues.

**Smart Query Router:** The secret sauce that determines whether you're asking about rules or stats, then routes your question to the appropriate system. This seemingly simple component took the longest to get right.

**Web Interface:** A Gradio-powered frontend that doesn't assume you speak computer science.

---

## Why Turkish Sports Data Is a Nightmare (And How I Solved It)

Building this system taught me that **multilingual sports data is exponentially harder than English-only solutions.**

Turkish basketball presents unique challenges that most developers never consider:

**Character Encoding Hell:** Team names like "TOFAŞ" and "Beşiktaş" contain special characters that break standard URL encoding. One tiny mistake here and your entire statistics engine fails silently.

**Cultural Context:** Turkish sports terminology doesn't map directly to English. A "pressing defense" in English basketball has a completely different connotation in Turkish basketball culture.

**Data Inconsistency:** Turkish league data comes from multiple sources with different formatting standards, date formats, and naming conventions. TOFAŞ might be listed as "Tofas," "TOFAŞ," or "Tofaş Spor Kulübü" depending on the source.

### The Technical Foundation

Here's what you need to recreate this system. I've tested every component multiple times to ensure it works on different hardware configurations.

**System Requirements:**
- Linux machine (Ubuntu 20.04+ recommended)
- 8GB RAM minimum, 16GB preferred
- GPU with 8GB+ VRAM for optimal performance (RTX 3060 or better)
- 20GB storage space for models and databases

**Core Dependencies:**
```bash
# Essential system packages
sudo apt update && sudo apt install python3.8+ python3-pip git curl build-essential

# Python packages for AI and data processing
pip install torch transformers sentence-transformers chromadb fastapi uvicorn gradio pandas numpy requests pyyaml tqdm langchain-community ollama python-docx

# Local language model setup
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull llama3.1:8b-instruct-q4_K_M
```

**Why These Specific Choices:**
- **ChromaDB:** Vector database that handles Turkish text encoding properly
- **FastAPI:** Handles URL encoding for Turkish characters without breaking
- **Ollama:** Runs models locally, eliminating API dependency and latency
- **Gradio:** Simple interface that doesn't require frontend expertise

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

### Step 1: Getting the Databases Ready

This is where the magic happens. You've got to feed the system two different types of knowledge.

First, the rules database. I scraped every basketball PDF I could find and turned them into searchable vectors:

```bash
python scripts/setup_database.py
```

When it works, you'll see something like "✅ Connected to vector database: 873 documents". If you see errors, don't panic - the most common issue is corrupted PDFs or encoding problems.

Next, the statistics database. This was the fun part - I had 76 CSV files with game data that needed to be cleaned and structured:

```bash
python scripts/build_stats_db.py
```

This one takes a while. Grab some coffee. When it's done, you should see "✅ Database built: 17,261 games processed" or similar.

---

### Step 2: Teaching It to Think

Here's where things got interesting. The system needs to figure out what you're actually asking for. Are you asking about rules ("What happens with 5 fouls?") or stats ("How did TOFAŞ do last season?")?

I built a simple router that looks for keywords and patterns:

```python
class QueryRouter:
    def __init__(self, stats_api_url="http://localhost:8001"):
        # Turkish and English keywords for different types of queries
        self.stats_keywords = {
            # Words like: maç, takım, sezon, sonuç, istatistik
            # And: game, team, season, result, statistics
        }
        
        # Team name patterns - this was tricky with Turkish characters
        self.team_patterns = [
            r'\b(tofaş|fenerbahçe|galatasaray)\b',
            r'\b(efes|beşiktaş|trabzonspor)\b'
        ]
```

The hardest part? Turkish characters. They break everything if you don't handle encoding properly:

```python
# This took me forever to get right
params = {'team_name': 'TOFAŞ'}
url = f"{api_url}?{urlencode(params, safe='', encoding='utf-8')}"
```

Trust me, you'll spend hours debugging character encoding issues if you skip this step.

---

### Step 3: Making It All Work Together

After days of debugging individual components, this moment felt like magic. One command to rule them all:

```bash
python production_app.py
```

When it works, you'll see something like this parade of success messages:
```
🚀 Initializing Production Basketball RAG System...
📊 Loading BAAI/bge-m3 on cuda...
✅ Vector database: 873 documents
✅ Stats API started successfully
🎉 Production system ready!
🌐 Access at: http://localhost:7860
```

I built it so everything starts automatically - no need to remember to launch five different services. The system detects if your GPU is available and adjusts accordingly. If something breaks, it tries to recover gracefully instead of just crashing.

The logging was crucial during development. When something went wrong (and it did, frequently), I could actually figure out what happened.

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

### Step 9: When Things Go Wrong (And They Will)

I hit every possible error while building this. Here are the ones that made me want to throw my laptop out the window, and how to fix them:

The empty database syndrome happens when the database setup fails silently. Check if it actually worked by running this command to count documents. If you get 0 documents, the setup script had issues. Run it again and actually read the error messages this time.

```bash
python -c "import chromadb; print(chromadb.PersistentClient('./vector_db/chroma_db').get_collection('basketball_rules').count())"
```

Turkish character nightmares cost me two days of debugging. Turkish team names have special characters that break URLs unless you handle encoding properly. This code snippet will save you the headache I went through.

```python
import urllib.parse
team_name = "TOFAŞ"
encoded = urllib.parse.quote(team_name, encoding='utf-8')
```

Your GPU might run out of memory with large models. Monitor usage with nvidia-smi and if memory usage is maxed out, the system should fall back to CPU automatically. You can also force clear the cache if needed.

```bash
nvidia-smi -l 1
# Clear GPU cache in Python: torch.cuda.empty_cache()
```

Port conflicts are the classic deployment problem. Something's already running on your ports, so kill the processes and try again.

```bash
lsof -ti:8001 | xargs kill -9
lsof -ti:7860 | xargs kill -9
```

---

### Step 10: Before You Go Live

Before deploying to production, make sure your vector database is populated with all 873 documents and your statistics database contains the 17,261+ games. Ollama should be running with the Llama 3.1 8B model, all dependencies installed, and GPU drivers configured if you're using acceleration.

During deployment, verify the production system launches successfully and both rules and stats queries work as expected. Configure your external tunnel, activate error logging, and enable performance monitoring.

After deployment, test all query types thoroughly and verify Turkish character handling works correctly. Check that response times stay under 3 seconds, monitor system resources for any bottlenecks, and document access credentials for future reference.

---

### What I Learned Building This

Building this system taught me a few things. Keep it simple first. I originally tried to build everything at once, which was a terrible idea. Starting with one component, making it work, then adding the next piece saved me weeks of debugging.

Multilingual support is much harder than you think. Supporting Turkish and English wasn't just about translation. It meant handling different character sets, query patterns, and cultural context in sports terminology. Turkish basketball terms don't always have direct English equivalents.

Users don't read documentation, no matter how detailed your instructions are. People will try to use it wrong. Build with that assumption from day one.

---

### What's Next

If I were to extend this (and I probably will), I'd add support for more leagues and sports first. The Turkish Basketball Federation data was just the beginning. A proper mobile interface would be next, since most people check sports stats on their phones anyway. Real-time game updates during matches would be incredible, and user accounts with personalized recommendations could make it genuinely useful for regular basketball fans.

The foundation is solid enough to handle these additions without major rewrites.

---

## What This Means for Sports Technology

This project proves that **sports AI doesn't have to be generic or limited to English-language data.** With the right architecture, you can build systems that understand both rules and statistics across multiple languages and cultural contexts.

The implications extend beyond basketball:
- **Football clubs** could build similar systems for tactical analysis and rule explanations
- **Olympic sports** could create multilingual rule guides that update in real-time
- **Fantasy sports** platforms could integrate real rule understanding with statistics

### Key Takeaways That Will Save You Time

After three weeks of debugging and rebuilding, here's what actually matters:

**Start with character encoding first.** Don't leave Turkish character handling until the end. Build it into your foundation or you'll spend days fixing broken queries.

**Test with real user questions, not hypothetical ones.** People ask sports questions in weird ways. "Why did the ref call that?" is very different from "What is the definition of a technical foul?"

**Separate your concerns early.** Rules and statistics are different data types requiring different processing approaches. Don't try to force them into one system.

**Local models beat API calls for sports.** Sports fans want instant answers during games. Network latency kills the experience.

## Try It Yourself

The complete system is available on GitHub with full documentation and setup scripts. You can adapt it for any sport or language combination.

**What you get:**
- Complete source code with Turkish character handling
- Database setup scripts for both rules and statistics
- Pre-configured Docker containers for easy deployment
- Troubleshooting guide for common encoding issues

**Ready to build your own sports AI?** Clone the repository and follow the setup guide. The entire system deploys in under 30 minutes on a standard Linux machine.

**Questions about implementation?** Drop a comment below. I've debugged every possible error and can help you avoid the pitfalls that cost me weeks of development time.