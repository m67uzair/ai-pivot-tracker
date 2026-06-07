// ==============================================================
// =============== PLAN DATA (single source of truth) ===========
// ==============================================================

const PLAN = [

// ============== PHASE 0 — Python Bootcamp (NEW) ==============
{
  id: 'p0',
  number: '00',
  title: 'Python Bootcamp for Dart Devs',
  weeks: 'Wk 0',
  hours: 10.5,
  budget: '$0',
  isBuffer: false,
  summary: 'Pre-pivot prep. You know Dart; Python has different idioms (decorators, context managers, generators, dataclasses vs Pydantic). Plus SQL basics — you\'ll need it from Week 5.',
  mvp: 'If short on time: just t1, t2, t3, t5. Skip the rest, learn as you go in Phase 1.',
  weekBlocks: [{
    week: 0,
    focus: 'Get Python + SQL primitives down. Set up AI-assisted dev workflow.',
    tasks: [
      { id: 'p0-w0-t1', text: 'Install Python 3.12+ via <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener">uv</a> — `uv init test-project`', hours: 0.5 },
      { id: 'p0-w0-t2', text: 'Python crash course for non-Pythonistas — work through <a href="https://realpython.com/python-first-steps/" target="_blank" rel="noopener">Real Python: First Steps</a>', hours: 2 },
      { id: 'p0-w0-t3', text: 'Decorators, context managers, generators — read <a href="https://realpython.com/primer-on-python-decorators/" target="_blank" rel="noopener">RP Decorators</a> + try each', hours: 1.5 },
      { id: 'p0-w0-t4', text: 'Type hints deep dive — Optional, Union, TypedDict, Generics, `typing.Protocol`', hours: 1 },
      { id: 'p0-w0-t5', text: 'SQL fundamentals — <a href="https://sqlbolt.com/" target="_blank" rel="noopener">SQLBolt</a> lessons 1-13 (interactive, free)', hours: 2 },
      { id: 'p0-w0-t6', text: 'Set up <a href="https://www.cursor.com/" target="_blank" rel="noopener">Cursor</a> or <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener">Claude Code</a> — pair-program everything from here', hours: 1 },
      { id: 'p0-w0-t7', text: 'Config patterns — `python-dotenv` + `pydantic-settings` cookbook', hours: 0.5 },
      { id: 'p0-w0-t8', text: 'Write a CLI: fetches public API → Pydantic-parses → prints. (Ship a real artifact this week.)', hours: 0.5 },
      { id: 'p0-w0-t9', text: '★ <a href="https://www.youtube.com/watch?v=VMj-3S1tku0" target="_blank" rel="noopener">Karpathy — micrograd (2h25m)</a> at 1.5×. Autograd vocabulary, not implementation. Optional but useful for interviews.', hours: 1.5 }
    ]
  }],
  project: {
    name: 'Throwaway "Hello Python" CLI',
    description: 'A 50-line script that proves you can read a JSON API into typed Pydantic models from Python. No deploy needed — this is just to lock muscle memory before Phase 1.',
    deliverables: [
      { id: 'p0-d1', text: 'Script runs without errors with `uv run main.py`' },
      { id: 'p0-d2', text: 'Output validated by Pydantic model with at least one nested type' }
    ]
  },
  resources: [
    { name: 'Real Python — First Steps', url: 'https://realpython.com/python-first-steps/', icon: '🐍', tags: ['free', 'core'], note: 'Best free Python intro, geared at devs who know other languages.' },
    { name: 'SQLBolt (interactive)', url: 'https://sqlbolt.com/', icon: '🗄️', tags: ['free', 'core'], note: '13 free interactive lessons. Done in ~2 hours.' },
    { name: 'Pydantic v2 docs', url: 'https://docs.pydantic.dev/latest/', icon: '✅', tags: ['free', 'core'] },
    { name: 'Cursor (AI-first IDE)', url: 'https://www.cursor.com/', icon: '🤖', tags: ['paid', 'core'], note: 'Free tier OK. Or use Claude Code if you live in terminal.' },
    { name: 'uv (Python package manager)', url: 'https://docs.astral.sh/uv/', icon: '📦', tags: ['free', 'core'] },
    { name: 'Python typing module docs', url: 'https://docs.python.org/3/library/typing.html', icon: '📘', tags: ['free'] },
    { name: 'Karpathy — Neural Networks: Zero to Hero', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ', icon: '🎬', tags: ['free', 'new'], note: 'Watch micrograd in W0 (1.5× speed). Save Let\'s Build GPT for Phase 2.' }
  ]
},

// ============== PHASE 1 — Python + LLM APIs ==============
{
  id: 'p1',
  number: '01',
  title: 'Python + LLM API Foundations',
  weeks: 'Wks 1–4',
  hours: 52,
  budget: '$10–20 (API credits)',
  summary: 'Production-grade Python (async, Pydantic, FastAPI) + first deployed LLM service with structured outputs, tool calling, streaming, and prompt caching.',
  mvp: 'If short on time: must-do = all of W1 + W4 (Project 1). Skim W2 (Instructor + caching) and W3 (DB layer) if behind.',
  weekBlocks: [
    {
      week: 1,
      focus: 'First LLM calls + prompt engineering fundamentals',
      tasks: [
        { id: 'p1-w1-t1', text: 'Anthropic <a href="https://github.com/anthropics/prompt-eng-interactive-tutorial" target="_blank" rel="noopener">Interactive Prompt Engineering</a> — chapters 1–3', hours: 3 },
        { id: 'p1-w1-t2', text: 'Get OpenAI + Anthropic API keys, set $10/mo spend cap on each', hours: 0.5 },
        { id: 'p1-w1-t3', text: 'First chat completion script in Python — both providers, compare output', hours: 2 },
        { id: 'p1-w1-t4', text: 'Push repo `karachi-ai-pivot` to GitHub — README declares the pivot publicly', hours: 0.5 },
        { id: 'p1-w1-t5', text: 'Anthropic Interactive tutorial — chapters 4–6', hours: 3 },
        { id: 'p1-w1-t6', text: 'DeepLearning.AI — <a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank" rel="noopener">ChatGPT Prompt Eng for Devs</a> (Andrew Ng, 1h)', hours: 1.5 }
      ]
    },
    {
      week: 2,
      focus: 'Structured outputs, tool calling, prompt caching',
      tasks: [
        { id: 'p1-w2-t1', text: 'Finish Anthropic tutorial — chapters 7–9', hours: 3 },
        { id: 'p1-w2-t2', text: 'Implement Structured Outputs with Pydantic. Do it on <b>Groq</b> Chat Completions (free, real constrained-decoding strict mode via <code>gpt-oss-120b</code>) so you are not paying per call; the <a href="https://platform.openai.com/docs/guides/structured-outputs" target="_blank" rel="noopener">OpenAI Structured Outputs</a> guide is the canonical reference for the same concepts. Know JSON mode exists as the older valid-JSON-only fallback, but default to schema-constrained outputs.', hours: 2 },
        { id: 'p1-w2-t3', text: 'Try <a href="https://python.useinstructor.com/" target="_blank" rel="noopener">Instructor library</a> — easier path to structured outputs (rapidly adopted in 2026 JDs)', hours: 1.5 },
        { id: 'p1-w2-t4', text: 'Function/tool calling — build a weather-fetch agent', hours: 2 },
        { id: 'p1-w2-t5', text: '<a href="https://docs.claude.com/en/docs/build-with-claude/prompt-caching" target="_blank" rel="noopener">Anthropic prompt caching</a> — biggest cost lever in 2026; implement on a long system prompt (context engineering). For free hands-on practice (Anthropic caching is cheap but not free), use Gemini 2.5 Flash implicit caching with a stable system prefix over ~2,100 tokens and watch <code>usage_metadata</code> for cached tokens — same stable-prefix-first discipline.', hours: 1.5 },
        { id: 'p1-w2-t6', text: '🔥 <b>Tokenizer Day</b> — work through <a href="https://github.com/rasbt/LLMs-from-scratch/blob/main/ch02/05_bpe-from-scratch/bpe-from-scratch.ipynb" target="_blank" rel="noopener">Raschka BPE-from-scratch notebook</a> end-to-end (this is file <code>05</code> inside the <code>ch02</code> folder — you only need this one notebook; you do <b>not</b> need the rest of the book). Output: blog post "Why my Urdu prompts cost 3× English" → Gulf-market-relevant portfolio piece + interview talking point.', hours: 6 }
      ]
    },
    {
      week: 3,
      focus: 'FastAPI + async + multi-provider abstraction',
      tasks: [
        { id: 'p1-w3-t1', text: '<a href="https://fastapi.tiangolo.com/tutorial/" target="_blank" rel="noopener">FastAPI tutorial</a> — First Steps → Dependencies', hours: 4 },
        { id: 'p1-w3-t2', text: 'Async/await in Python — <a href="https://realpython.com/async-io-python/" target="_blank" rel="noopener">RealPython async guide</a>', hours: 2 },
        { id: 'p1-w3-t3', text: 'Streaming endpoint — SSE for LLM token streaming', hours: 2.5 },
        { id: 'p1-w3-t4', text: 'pytest basics + mocking LLM calls (`respx` or `pytest-mock`)', hours: 2 },
        { id: 'p1-w3-t5', text: '<a href="https://docs.litellm.ai/" target="_blank" rel="noopener">LiteLLM</a> — unified provider interface (you\'ll see in JDs)', hours: 1 }
      ]
    },
    {
      week: 4,
      focus: 'Ship Project 1 — PR-Review LLM Bot',
      tasks: [
        { id: 'p1-w4-t1', text: 'GitHub webhook → FastAPI receives PR diff', hours: 2 },
        { id: 'p1-w4-t2', text: 'Structured review output (issues, severity, suggested fix) — Pydantic-validated', hours: 2 },
        { id: 'p1-w4-t3', text: 'Post review comment back via GitHub API', hours: 2 },
        { id: 'p1-w4-t4', text: 'Store reviews — SQLAlchemy + Alembic + SQLite (DB skill activates here)', hours: 2 },
        { id: 'p1-w4-t5', text: 'Dockerfile (multi-stage) + GitHub Actions CI', hours: 2 },
        { id: 'p1-w4-t6', text: 'Deploy to <a href="https://railway.com/" target="_blank" rel="noopener">Railway</a> (free tier)', hours: 1 },
        { id: 'p1-w4-t7', text: '90-sec demo video, embed in README, post on LinkedIn', hours: 2 }
      ]
    }
  ],
  project: {
    name: 'PR-Review LLM Bot',
    description: 'FastAPI service that triggers on GitHub PR webhook, reviews diff with Claude/GPT using Pydantic structured output, posts back. Streams via SSE. Stores history in SQLite. Multi-stage Docker. Deployed.',
    deliverables: [
      { id: 'p1-d1', text: 'Live deployed URL + open-source repo' },
      { id: 'p1-d2', text: 'README with measurable claim ("reviews 500 LOC in <20s")' },
      { id: 'p1-d3', text: 'pytest CI passing on every commit' },
      { id: 'p1-d4', text: '90-second Loom/YouTube demo' },
      { id: 'p1-d5', text: 'Prompt caching saving documented cost % vs naive approach' }
    ]
  },
  resources: [
    { name: 'Anthropic Interactive Prompt Engineering Tutorial', url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial', icon: '🎓', tags: ['free', 'core'], note: 'Canonical starting point. 9 chapters. (examples use Claude 3 Haiku; techniques still current).' },
    { name: 'Anthropic Courses (GitHub)', url: 'https://github.com/anthropics/courses', icon: '📚', tags: ['free', 'core'] },
    { name: 'DeepLearning.AI — ChatGPT Prompt Eng for Devs', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', icon: '🎓', tags: ['free', 'core'] },
    { name: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', icon: '📖', tags: ['free', 'core'] },
    { name: 'FastAPI Tutorial', url: 'https://fastapi.tiangolo.com/tutorial/', icon: '⚡', tags: ['free', 'core'] },
    { name: 'Instructor Library', url: 'https://python.useinstructor.com/', icon: '🔧', tags: ['free', 'core', 'new'], note: 'Rapidly adopted 2026 structured-output lib. Easier than raw JSON mode.' },
    { name: 'LiteLLM', url: 'https://docs.litellm.ai/', icon: '🔌', tags: ['free', 'core', 'new'], note: 'Provider abstraction. Appears in many production JDs.' },
    { name: 'Anthropic Prompt Caching Guide', url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-caching', icon: '💰', tags: ['free', 'core', 'new'], note: 'Cost-reduction lever. Up to 90% savings on long contexts.' },
    { name: 'Chip Huyen — "AI Engineering" book (O\'Reilly, Dec 2024)', url: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/', icon: '📕', tags: ['paid', 'core'], note: 'The canonical book. Read alongside the plan.' },
    { name: 'Raschka — Build a Large Language Model (From Scratch)', url: 'https://www.manning.com/books/build-a-large-language-model-from-scratch', icon: '📕', tags: ['paid', 'stretch', 'new'], note: 'Optional — not required by any task. Tokenizer Day uses the free ch02/05 notebook and Self-Attention Day uses Raschka\'s free blog, which together cover Ch 2 + Ch 3. Buy this only if you want the full from-scratch book treatment.' },
    { name: 'LLMs-from-scratch notebooks (Raschka, free)', url: 'https://github.com/rasbt/LLMs-from-scratch', icon: '🔬', tags: ['free', 'new'], note: 'Free companion code. Use ch02/05_bpe-from-scratch for Tokenizer Day.' },
    { name: 'uv docs', url: 'https://docs.astral.sh/uv/', icon: '📦', tags: ['free'] },
    { name: 'SQLAlchemy 2.0 Tutorial', url: 'https://docs.sqlalchemy.org/en/20/tutorial/', icon: '🗄️', tags: ['free'] }
  ]
},

// ============== PHASE 2 — RAG ==============
{
  id: 'p2',
  number: '02',
  title: 'Retrieval-Augmented Generation',
  weeks: 'Wks 5–9',
  hours: 68.5,
  budget: '$20–40 (APIs + Cohere rerank + LangSmith free tier)',
  summary: 'End-to-end production RAG with document parsing, hybrid retrieval, reranking, and measurable evals. The #1 in-demand pattern in 2026 hiring data.',
  mvp: 'If short on time: must-do = W5 (parsing + embeddings), W8 (evals — most important week of the entire plan), W9 (ship). Skim W6 + W7.',
  weekBlocks: [
    {
      week: 5,
      focus: 'Document parsing + embeddings + chunking',
      tasks: [
        { id: 'p2-w5-t1', text: 'Read <a href="https://eugeneyan.com/writing/llm-patterns/" target="_blank" rel="noopener">Eugene Yan — Patterns for LLM Systems</a> (RAG section)', hours: 2 },
        { id: 'p2-w5-t2', text: 'Document parsing — try <a href="https://unstructured.io/" target="_blank" rel="noopener">unstructured.io</a>, <a href="https://github.com/VikParuchuri/marker" target="_blank" rel="noopener">Marker</a>, <a href="https://www.llamaindex.ai/llamaparse" target="_blank" rel="noopener">LlamaParse</a> on the same messy PDF — compare output', hours: 3 },
        { id: 'p2-w5-t3', text: 'Embeddings — try OpenAI text-embedding-3-small vs <a href="https://docs.cohere.com/docs/cohere-embed" target="_blank" rel="noopener">Cohere Embed v4</a> vs <a href="https://huggingface.co/BAAI/bge-large-en-v1.5" target="_blank" rel="noopener">BGE</a> — quality vs cost', hours: 2 },
        { id: 'p2-w5-t4', text: 'Install Chroma locally, ingest 5 PDFs you care about', hours: 2 },
        { id: 'p2-w5-t5', text: '3 chunking strategies — fixed, recursive, semantic. Compare retrieval quality.', hours: 2 },
        { id: 'p2-w5-t6', text: '🔥 <b>Self-Attention Day</b> — read <a href="https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html" target="_blank" rel="noopener">Raschka — Self-Attention from Scratch</a> (this free blog post is sufficient on its own; the book\'s Ch 3 covers the same ground if you ever want more depth, but it is optional) + watch first 45min of <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" target="_blank" rel="noopener">Karpathy — Let\'s Build GPT</a>. Output: 500-word note in portfolio repo explaining attention in your own words, citing <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">Vaswani et al.</a>', hours: 6 },
        { id: 'p2-w5-t7', text: 'Embedding theory primer — cosine vs dot product, dimensionality tradeoffs. <a href="https://www.pinecone.io/learn/vector-similarity/" target="_blank" rel="noopener">Pinecone Vector Similarity</a>', hours: 1 }
      ]
    },
    {
      week: 6,
      focus: 'LangChain + production patterns + LlamaIndex peek',
      tasks: [
        { id: 'p2-w6-t1', text: 'DeepLearning.AI — <a href="https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/" target="_blank" rel="noopener">LangChain for LLM App Development</a>', hours: 2 },
        { id: 'p2-w6-t2', text: 'DeepLearning.AI — <a href="https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/" target="_blank" rel="noopener">LangChain: Chat with Your Data</a>', hours: 2 },
        { id: 'p2-w6-t3', text: 'Migrate from Chroma → <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector</a> (Postgres extension)', hours: 3 },
        { id: 'p2-w6-t4', text: 'Citation/provenance — every answer cites source chunk', hours: 2 },
        { id: 'p2-w6-t5', text: '<a href="https://docs.llamaindex.ai/" target="_blank" rel="noopener">LlamaIndex</a> 30-min peek — when to choose it over LangChain', hours: 1 }
      ]
    },
    {
      week: 7,
      focus: 'Hybrid retrieval + reranking + advanced techniques',
      tasks: [
        { id: 'p2-w7-t1', text: 'BM25 sparse search (`rank_bm25`) for hybrid retrieval', hours: 2 },
        { id: 'p2-w7-t2', text: 'Reciprocal Rank Fusion between dense + sparse', hours: 2 },
        { id: 'p2-w7-t3', text: '<a href="https://docs.cohere.com/docs/rerank" target="_blank" rel="noopener">Cohere Rerank</a> API (free tier) or cross-encoder reranker', hours: 2 },
        { id: 'p2-w7-t4', text: 'HyDE — Hypothetical Document Embeddings (improves recall)', hours: 2 },
        { id: 'p2-w7-t5', text: 'Multi-query retrieval + query rewriting', hours: 2 },
        { id: 'p2-w7-t6', text: 'Benchmark latency p50/p95 with/without reranking', hours: 1 }
      ]
    },
    {
      week: 8,
      focus: 'EVALS — the single most important week of this plan',
      tasks: [
        { id: 'p2-w8-t1', text: 'Read <a href="https://hamel.dev/blog/posts/evals/" target="_blank" rel="noopener">Hamel — Your AI Product Needs Evals</a> + <a href="https://eugeneyan.com/writing/evals/" target="_blank" rel="noopener">Eugene Yan — Task-Specific LLM Evals</a> (how to choose the right metric per task type)', hours: 1.5 },
        { id: 'p2-w8-t2', text: 'Read <a href="https://hamel.dev/blog/posts/evals-faq/" target="_blank" rel="noopener">Hamel + Shreya — LLM Evals FAQ</a> (Jan 2026, curated from 700+ engineers)', hours: 2 },
        { id: 'p2-w8-t3', text: 'Read <a href="https://hamel.dev/blog/posts/llm-judge/" target="_blank" rel="noopener">Hamel — LLM-as-a-Judge Complete Guide</a>', hours: 1 },
        { id: 'p2-w8-t4', text: 'Build a 50-question golden dataset for your docs', hours: 3 },
        { id: 'p2-w8-t5', text: 'Implement LLM-as-judge pipeline — faithfulness + answer-relevance', hours: 3 },
        { id: 'p2-w8-t6', text: 'Compute Precision@k, Recall@k, MRR retrieval metrics', hours: 2 },
        { id: 'p2-w8-t7', text: '<a href="https://docs.ragas.io/" target="_blank" rel="noopener">RAGAS framework</a> — run their canonical metrics on your set', hours: 1.5 },
        { id: 'p2-w8-t8', text: 'Synthetic eval data generation — use Claude to expand 50 → 200 questions', hours: 1.5 }
      ]
    },
    {
      week: 9,
      focus: 'Ship Project 2 with measurable evals',
      tasks: [
        { id: 'p2-w9-t1', text: 'Sign up for <a href="https://smith.langchain.com/" target="_blank" rel="noopener">LangSmith</a> free tier — instrument all RAG calls', hours: 2 },
        { id: 'p2-w9-t2', text: 'Wire evals into GitHub Actions — fail build if faithfulness < 0.75', hours: 3 },
        { id: 'p2-w9-t3', text: 'Build minimal Streamlit or Next.js UI for upload + query', hours: 4 },
        { id: 'p2-w9-t4', text: 'Deploy to <a href="https://railway.com/" target="_blank" rel="noopener">Railway</a> or <a href="https://render.com" target="_blank" rel="noopener">Render</a>', hours: 1 },
        { id: 'p2-w9-t5', text: 'README with eval numbers: "82% faithfulness on 50-item set, p95 1.8s"', hours: 2 },
        { id: 'p2-w9-t6', text: 'Write blog post — "What I learned building production RAG"', hours: 3 },
        { id: 'p2-w9-t7', text: '★ 🔒 Add permission-aware retrieval to DocChat — filter retrieved chunks by user/role ACL metadata. 2026 enterprise RAG pattern; interviewers ask about multi-department document permissions. Guide: <a href="https://www.pinecone.io/learn/rag-access-control/" target="_blank" rel="noopener">Pinecone — RAG with Access Control</a>', hours: 1.5 }
      ]
    }
  ],
  project: {
    name: 'DocChat — RAG with measurable evals',
    description: 'Users upload PDFs and ask questions with cited answers. Stack: FastAPI + pgvector + Cohere Rerank + LangSmith. Eval gate in CI blocks faithfulness regressions.',
    deliverables: [
      { id: 'p2-d1', text: 'Live deployed URL with public demo set' },
      { id: 'p2-d2', text: 'README states measurable eval metrics' },
      { id: 'p2-d3', text: 'LangSmith trace dashboard linked' },
      { id: 'p2-d4', text: 'GitHub Actions eval gate visible' },
      { id: 'p2-d5', text: 'Blog post live (dev.to / Medium / personal site)' },
      { id: 'p2-d6', text: 'Demonstrates safe fallback — answers "I don\'t have that information" when the answer isn\'t in retrieved context (near-universal RAG take-home requirement)' }
    ]
  },
  resources: [
    { name: 'Hamel Husain — Your AI Product Needs Evals', url: 'https://hamel.dev/blog/posts/evals/', icon: '📝', tags: ['free', 'core'], note: 'Read twice. Canonical eval mental model.' },
    { name: 'Hamel + Shreya — LLM Evals FAQ (Jan 2026)', url: 'https://hamel.dev/blog/posts/evals-faq/', icon: '📝', tags: ['free', 'core'] },
    { name: 'Hamel — LLM-as-a-Judge Complete Guide', url: 'https://hamel.dev/blog/posts/llm-judge/', icon: '📝', tags: ['free', 'core'] },
    { name: 'Eugene Yan — Patterns for LLM Systems', url: 'https://eugeneyan.com/writing/llm-patterns/', icon: '📝', tags: ['free', 'core'] },
    { name: 'Eugene Yan — Task-Specific LLM Evals', url: 'https://eugeneyan.com/writing/evals/', icon: '📝', tags: ['free', 'core'] },
    { name: 'DeepLearning.AI — LangChain for LLM App Dev', url: 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/', icon: '🎓', tags: ['free', 'core'] },
    { name: 'DeepLearning.AI — LangChain: Chat with Your Data', url: 'https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/', icon: '🎓', tags: ['free', 'core'] },
    { name: 'RAGAS framework', url: 'https://docs.ragas.io/', icon: '📏', tags: ['free', 'core', 'new'], note: 'Industry-standard RAG eval metrics out of the box.' },
    { name: 'unstructured.io', url: 'https://unstructured.io/', icon: '📄', tags: ['free', 'new'], note: 'Best free document parser for messy PDFs.' },
    { name: 'LlamaIndex docs', url: 'https://docs.llamaindex.ai/', icon: '📚', tags: ['free', 'new'], note: '~25% of postings list LlamaIndex. 30-min peek is enough.' },
    { name: 'Pinecone Learn — RAG courses', url: 'https://www.pinecone.io/learn/', icon: '📌', tags: ['free'], note: 'Free, high-quality RAG depth content.' },
    { name: 'Chroma DB docs', url: 'https://docs.trychroma.com/', icon: '🗄️', tags: ['free'] },
    { name: 'pgvector', url: 'https://github.com/pgvector/pgvector', icon: '🗄️', tags: ['free'] },
    { name: 'Raschka — Self-Attention from Scratch (blog)', url: 'https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html', icon: '📝', tags: ['free', 'core', 'new'], note: 'Canonical "explain attention without hand-waving" post. Use for Self-Attention Day.' },
    { name: 'Karpathy — Let\'s Build GPT (video, 1h56m)', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', icon: '🎬', tags: ['free', 'new'], note: 'Watch first 45min only for attention intuition. Skip the training.' },
    { name: 'Vaswani et al. — Attention Is All You Need (arXiv)', url: 'https://arxiv.org/abs/1706.03762', icon: '📄', tags: ['free', 'stretch', 'new'], note: 'The 2017 paper. Cite it in your Self-Attention Day note.' },
    { name: 'Pinecone — Vector Similarity Explained', url: 'https://www.pinecone.io/learn/vector-similarity/', icon: '📌', tags: ['free', 'new'] }
  ]
},

// ============== BUFFER 1 — Review + Application Engine kickoff ==============
{
  id: 'buf1',
  number: 'B1',
  title: 'Buffer Week — Review + Application Engine',
  weeks: 'Wk 10',
  hours: 15.5,
  budget: '$0',
  isBuffer: true,
  summary: 'Catch up. Polish what you have. Start the parallel job-search engine. Most plans fail because they\'re too rigid; this buffer is non-negotiable.',
  mvp: 'If perfectly on track: skip catch-up tasks, double down on application setup + portfolio polish.',
  weekBlocks: [{
    week: 10,
    focus: 'Catch up + polish + ignite the apply engine',
    tasks: [
      { id: 'buf1-t1', text: 'Review Phases 1+2 — write a "what worked / what didn\'t" doc in your notes', hours: 1 },
      { id: 'buf1-t2', text: 'Catch up on ANY unfinished tasks from Phase 1 or 2', hours: 3 },
      { id: 'buf1-t3', text: 'Polish DocChat README — add screenshots, deploy badge, eval numbers prominent', hours: 2 },
      { id: 'buf1-t4', text: 'Build target company list — 30 companies (PK / remote / Gulf segments)', hours: 1.5 },
      { id: 'buf1-t5', text: 'Set up an application tracker (Notion or sheet) — date, company, status, contact', hours: 1 },
      { id: 'buf1-t6', text: 'First mock system design — "Design a RAG-powered customer support tool" (record yourself)', hours: 1.5 },
      { id: 'buf1-t7', text: 'ML vocabulary for LLM engineers (reading/video only, NO coding): supervised vs unsupervised, train/val/test split, overfitting, precision/recall/F1/AUC, what embeddings are, when classical ML beats an LLM, what fine-tuning actually does. Interview-readiness only. Watch <a href="https://www.youtube.com/watch?v=zjkBMFhNj_g" target="_blank" rel="noopener">Karpathy — Intro to LLMs (1h)</a> (note: 2023, still the best plain-English intro; concepts current even if model names are dated).', hours: 2.5 },
      { id: 'buf1-t8', text: '★ (Optional, market-dependent) Hands-on LoRA fine-tune of a small open model on a free Colab GPU — once, so you can speak to it. JD skill lists mention fine-tuning (~25%) but take-homes almost never test it; this is keyword/interview insurance, not core. Reference <a href="https://huggingface.co/docs/peft" target="_blank" rel="noopener">HuggingFace PEFT</a>', hours: 3 }
    ]
  }],
  project: {
    name: 'Catch-up checkpoint',
    description: 'Not a deliverable phase — this is your buffer to absorb life happening and to launch the parallel application engine.',
    deliverables: [
      { id: 'buf1-d1', text: 'Application tracker live with 30 target companies' },
      { id: 'buf1-d2', text: 'DocChat README polished and re-shared on LinkedIn' }
    ]
  },
  resources: [
    { name: 'Notion job hunt template', url: 'https://www.notion.com/templates/category/jobs', icon: '📋', tags: ['free'] },
    { name: 'Hacker News — Who\'s Hiring (monthly)', url: 'https://news.ycombinator.com/submitted?id=whoishiring', icon: '🟧', tags: ['free', 'core'], note: 'First of every month. Pure gold for remote roles.' }
  ]
},

// ============== PHASE 3 — Agents + LangGraph + MCP ==============
{
  id: 'p3',
  number: '03',
  title: 'Agents, LangGraph & MCP',
  weeks: 'Wks 11–15',
  hours: 60,
  budget: '$30–50 (more LLM calls, Tavily, MCP testing)',
  summary: 'Multi-step agent with tool use, memory, budgets, and a custom MCP server. The 2026 hiring premium — and the area where most candidates are weakest.',
  mvp: 'If short on time: must-do = W14 (MCP — the premium skill) + W15 (ship). Skim DSPy and CrewAI comparisons.',
  weekBlocks: [
    {
      week: 11,
      focus: 'Agent fundamentals + framework comparison',
      tasks: [
        { id: 'p3-w11-t1', text: 'Read <a href="https://www.anthropic.com/research/building-effective-agents" target="_blank" rel="noopener">Anthropic — Building Effective Agents</a>', hours: 2 },
        { id: 'p3-w11-t2', text: '🔥 <b>Raw Agent Loop Day</b> — Build ~60-line ReAct loop with raw Anthropic SDK + tool_use (Thought → Action → Observation). No frameworks. Reference <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">Yao et al. ReAct paper</a>. Push as `raw_agent_loop.py` to portfolio — this is your "explain agents to me" interview artifact. (agentic engineering)', hours: 6 },
        { id: 'p3-w11-t3', text: 'HuggingFace <a href="https://huggingface.co/learn/agents-course" target="_blank" rel="noopener">Agents Course</a> — Unit 1', hours: 2 },
        { id: 'p3-w11-t4', text: 'Read <a href="https://platform.openai.com/docs/guides/agents" target="_blank" rel="noopener">OpenAI Agents SDK docs</a>', hours: 1 },
        { id: 'p3-w11-t5', text: '30-min hands-on with <a href="https://docs.crewai.com/" target="_blank" rel="noopener">CrewAI</a> + scan <a href="https://docs.ag2.ai/" target="_blank" rel="noopener">AutoGen</a> docs — know when each is named in JDs', hours: 1.5 }
      ]
    },
    {
      week: 12,
      focus: 'LangGraph state machines + budgets',
      tasks: [
        { id: 'p3-w12-t1', text: 'DeepLearning.AI — <a href="https://www.deeplearning.ai/courses/ai-agents-in-langgraph" target="_blank" rel="noopener">AI Agents in LangGraph</a>', hours: 3 },
        { id: 'p3-w12-t2', text: 'LangChain Academy — <a href="https://academy.langchain.com/courses/intro-to-langgraph" target="_blank" rel="noopener">Introduction to LangGraph</a>', hours: 4 },
        { id: 'p3-w12-t3', text: 'Build simple LangGraph state graph with conditional routing', hours: 2 },
        { id: 'p3-w12-t4', text: 'Add checkpoint persistence (SQLite checkpointer)', hours: 1.5 },
        { id: 'p3-w12-t5', text: 'Agent budgets — implement token + step caps. Runaway agents = $$$', hours: 1 }
      ]
    },
    {
      week: 13,
      focus: 'Memory, multi-agent, optimization paradigms',
      tasks: [
        { id: 'p3-w13-t1', text: 'DeepLearning.AI — <a href="https://www.deeplearning.ai/courses/long-term-agentic-memory-with-langgraph" target="_blank" rel="noopener">Long-Term Agentic Memory</a>', hours: 2 },
        { id: 'p3-w13-t2', text: 'LangChain Academy — <a href="https://academy.langchain.com/courses/deep-agents-with-langgraph" target="_blank" rel="noopener">Deep Agents with LangGraph</a>', hours: 3 },
        { id: 'p3-w13-t3', text: 'Implement supervisor + worker multi-agent pattern', hours: 2.5 },
        { id: 'p3-w13-t4', text: 'Human-in-the-loop interrupts with LangGraph', hours: 1.5 },
        { id: 'p3-w13-t5', text: '<a href="https://dspy.ai/" target="_blank" rel="noopener">DSPy</a> 30-min intro — prompt optimization as compilation', hours: 1 }
      ]
    },
    {
      week: 14,
      focus: 'MCP — the must-learn 2026 protocol',
      tasks: [
        { id: 'p3-w14-t1', text: 'Read <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener">MCP spec overview</a> + <a href="https://modelcontextprotocol.io/docs/develop/build-server" target="_blank" rel="noopener">Quickstart</a>', hours: 1.5 },
        { id: 'p3-w14-t2', text: 'Build first MCP server with FastMCP — exposes 2–3 tools', hours: 3 },
        { id: 'p3-w14-t3', text: 'Connect MCP server to Claude Desktop + test', hours: 1.5 },
        { id: 'p3-w14-t4', text: 'MCP client → call your server from a LangGraph agent', hours: 3 },
        { id: 'p3-w14-t5', text: 'Read <a href="https://blog.modelcontextprotocol.io/" target="_blank" rel="noopener">MCP blog</a> — latest patterns (sampling, notifications)', hours: 1 },
        { id: 'p3-w14-t6', text: 'Tool-call accuracy evals — measure when your agent picks the WRONG tool. Framework: <a href="https://www.deeplearning.ai/courses/evaluating-ai-agents" target="_blank" rel="noopener">DeepLearning.AI × Arize — Evaluating AI Agents</a>', hours: 1.5 }
      ]
    },
    {
      week: 15,
      focus: 'Ship Project 3 + new agent surfaces',
      tasks: [
        { id: 'p3-w15-t1', text: 'Build Research Agent — given topic, search via Tavily, summarize, cite', hours: 4 },
        { id: 'p3-w15-t2', text: 'Add self-critique loop before final output', hours: 2 },
        { id: 'p3-w15-t3', text: 'Custom MCP server for your Notion / PDF library', hours: 3 },
        { id: 'p3-w15-t4', text: 'Test prompt injection + add guardrails', hours: 2 },
        { id: 'p3-w15-t5', text: 'Deploy to <a href="https://fly.io" target="_blank" rel="noopener">Fly.io</a>, post blog + Show HN', hours: 2.5 },
        { id: 'p3-w15-t6', text: '★ Browser-use agent primer — try <a href="https://www.browserbase.com/" target="_blank" rel="noopener">Browserbase</a> or Playwright + LLM (one of hottest 2026 categories)', hours: 1.5 },
        { id: 'p3-w15-t7', text: '★ Voice agent primer — <a href="https://platform.openai.com/docs/guides/realtime" target="_blank" rel="noopener">OpenAI Realtime API</a> hello-world', hours: 1.5 }
      ]
    }
  ],
  project: {
    name: 'Research & Automation Agent',
    description: 'LangGraph agent that researches a topic, searches via Tavily/Brave, summarizes with citations, self-critiques. Custom MCP server connects to your knowledge base. Token + step budgets enforced.',
    deliverables: [
      { id: 'p3-d1', text: 'Live deployed URL' },
      { id: 'p3-d2', text: 'Custom MCP server published to GitHub' },
      { id: 'p3-d3', text: 'Architecture blog post with diagrams' },
      { id: 'p3-d4', text: 'Show HN submission' },
      { id: 'p3-d5', text: 'README includes red-team eval results + cost-per-task metric' }
    ]
  },
  resources: [
    { name: 'Anthropic — Building Effective Agents', url: 'https://www.anthropic.com/research/building-effective-agents', icon: '📝', tags: ['free', 'core'] },
    { name: 'DeepLearning.AI — AI Agents in LangGraph', url: 'https://www.deeplearning.ai/courses/ai-agents-in-langgraph', icon: '🎓', tags: ['free', 'core'] },
    { name: 'DeepLearning.AI — Long-Term Agentic Memory', url: 'https://www.deeplearning.ai/courses/long-term-agentic-memory-with-langgraph', icon: '🎓', tags: ['free', 'core'] },
    { name: 'LangChain Academy — Introduction to LangGraph', url: 'https://academy.langchain.com/courses/intro-to-langgraph', icon: '🎓', tags: ['free', 'core'] },
    { name: 'LangChain Academy — Deep Agents', url: 'https://academy.langchain.com/courses/deep-agents-with-langgraph', icon: '🎓', tags: ['free', 'core'] },
    { name: 'HuggingFace Agents Course (+ free cert)', url: 'https://huggingface.co/learn/agents-course', icon: '🎓', tags: ['free', 'core'] },
    { name: 'DeepLearning.AI × Arize — Evaluating AI Agents', url: 'https://www.deeplearning.ai/courses/evaluating-ai-agents', icon: '🎓', tags: ['free', 'core'] },
    { name: 'MCP Official Site', url: 'https://modelcontextprotocol.io/', icon: '🔌', tags: ['free', 'core'], note: 'Under Linux Foundation (Dec 2025). 97M monthly SDK downloads.' },
    { name: 'MCP Blog', url: 'https://blog.modelcontextprotocol.io/', icon: '📰', tags: ['free'] },
    { name: 'OpenAI Agents SDK', url: 'https://platform.openai.com/docs/guides/agents', icon: '📖', tags: ['free'] },
    { name: 'Claude Agent SDK', url: 'https://docs.claude.com/en/api/agent-sdk/overview', icon: '📖', tags: ['free'] },
    { name: 'CrewAI', url: 'https://docs.crewai.com/', icon: '👥', tags: ['free', 'new'] },
    { name: 'AutoGen (now AG2)', url: 'https://docs.ag2.ai/', icon: '👥', tags: ['free', 'new'] },
    { name: 'DSPy — prompt optimization', url: 'https://dspy.ai/', icon: '🧪', tags: ['free', 'stretch', 'new'] },
    { name: 'Browserbase — browser-use agents', url: 'https://www.browserbase.com/', icon: '🌐', tags: ['paid', 'stretch', 'new'] },
    { name: 'OpenAI Realtime API (voice)', url: 'https://platform.openai.com/docs/guides/realtime', icon: '🎤', tags: ['free', 'stretch', 'new'] },
    { name: 'Latent Space podcast', url: 'https://www.latent.space/', icon: '🎧', tags: ['free'], note: 'Industry pulse. Listen during commute.' },
    { name: 'Yao et al. — ReAct paper (arXiv 2210.03629)', url: 'https://arxiv.org/abs/2210.03629', icon: '📄', tags: ['free', 'core', 'new'], note: 'The Thought→Action→Observation loop. Cite in your raw_agent_loop.py.' }
  ]
},

// ============== PHASE 4 — Production + Cloud AI ==============
{
  id: 'p4',
  number: '04',
  title: 'Production Hardening + Cloud AI',
  weeks: 'Wks 16–19',
  hours: 57.5,
  budget: '$50–80 (AWS Bedrock, RDS, ECS, Redis)',
  summary: 'Take one project and harden it for enterprise. Add observability, auth, rate-limits, Kubernetes basics, security depth, async jobs, and AWS Bedrock. Start MLA-C01 prep.',
  mvp: 'If short on time: must-do = W16 (containerization + observability) + W18 (Bedrock + cloud deploy). Defer K8s, load testing, self-hosting.',
  weekBlocks: [
    {
      week: 16,
      focus: 'Containerization + observability + prompt versioning',
      tasks: [
        { id: 'p4-w16-t1', text: 'Multi-stage Dockerfile for FastAPI (slim final image)', hours: 1.5 },
        { id: 'p4-w16-t2', text: 'Structured JSON logging (`loguru` or `structlog`)', hours: 1.5 },
        { id: 'p4-w16-t3', text: 'Prometheus metrics — `prometheus-fastapi-instrumentator`', hours: 1.5 },
        { id: 'p4-w16-t4', text: 'LangSmith production traces with project + env tags', hours: 1.5 },
        { id: 'p4-w16-t5', text: 'Read <a href="https://github.com/fastapi/full-stack-fastapi-template" target="_blank" rel="noopener">Full-Stack FastAPI Template</a> — copy patterns', hours: 2 },
        { id: 'p4-w16-t6', text: 'Prompt versioning — set up <a href="https://docs.langchain.com/langsmith/prompt-engineering" target="_blank" rel="noopener">LangSmith Prompt Hub</a> or PromptLayer', hours: 1.5 },
        { id: 'p4-w16-t7', text: 'Concept primer: vLLM / Ollama / TGI — what self-hosted LLM inference is and when teams use it (reading only, no setup). For interview literacy; appears in senior ML-platform JDs you won\'t target but should recognize. Read <a href="https://www.buildwithmatija.com/blog/vllm-vs-ollama-vs-tgi-choose-llm-inference-engine" target="_blank" rel="noopener">vLLM vs Ollama vs TGI (2026)</a>', hours: 0.5 }
      ]
    },
    {
      week: 17,
      focus: 'Auth, rate-limits, caching, async jobs',
      tasks: [
        { id: 'p4-w17-t1', text: 'JWT auth in FastAPI (`fastapi-users` or custom)', hours: 2.5 },
        { id: 'p4-w17-t2', text: 'Per-user rate limiting with Redis (`slowapi`)', hours: 2 },
        { id: 'p4-w17-t3', text: 'Semantic caching — Redis + embedding similarity', hours: 2.5 },
        { id: 'p4-w17-t4', text: 'Secrets via env + AWS Secrets Manager', hours: 1.5 },
        { id: 'p4-w17-t5', text: 'Async job queue — <a href="https://docs.celeryq.dev/" target="_blank" rel="noopener">Celery</a> + Redis for long-running LLM jobs', hours: 2 },
        { id: 'p4-w17-t6', text: 'Log token usage + dollar cost per request; add alerting on cost outliers. 2026 JDs increasingly state \'you own quality, latency, and cost\' — make cost a first-class metric in your app. Start with <a href="https://www.kdnuggets.com/the-beginners-guide-to-tracking-token-usage-in-llm-apps" target="_blank" rel="noopener">KDnuggets — Tracking Token Usage in LLM Apps</a>; for a 1-line proxy approach see <a href="https://docs.helicone.ai/guides/cookbooks/cost-tracking" target="_blank" rel="noopener">Helicone — Cost Tracking</a>', hours: 2 }
      ]
    },
    {
      week: 18,
      focus: 'AWS Bedrock + Kubernetes basics + self-hosting peek',
      tasks: [
        { id: 'p4-w18-t1', text: 'Complete <a href="https://catalog.workshops.aws/building-with-amazon-bedrock" target="_blank" rel="noopener">AWS Bedrock workshop</a>', hours: 4 },
        { id: 'p4-w18-t2', text: 'Migrate app to call Claude via Bedrock (not direct API)', hours: 2.5 },
        { id: 'p4-w18-t3', text: 'Deploy to ECS Fargate (or AppRunner)', hours: 2.5 },
        { id: 'p4-w18-t4', text: 'CloudWatch dashboards + cost alerts', hours: 1 },
        { id: 'p4-w18-t5', text: 'Kubernetes basics — <a href="https://killercoda.com/playgrounds/scenario/kubernetes" target="_blank" rel="noopener">Killercoda free playground</a> + deploy one pod (K8s appears in ~27% of AI-eng JDs)', hours: 2.5 },
        { id: 'p4-w18-t6', text: 'Self-hosting / local models — <a href="https://ollama.com/" target="_blank" rel="noopener">Ollama</a> local + run Llama or Qwen, then point one of your apps at it. Many take-home assignments mandate open-source / local models (no proprietary APIs) — be able to swap your LLM backend to local Ollama.', hours: 1.5 },
        { id: 'p4-w18-t7', text: 'Build ONE workflow in n8n (free tier) connecting an LLM to a trigger/action. Familiarity only — n8n/Zapier appear in Gulf/SME + freelance automation JDs. Do not go deeper; this is a fallback skill, not core. Follow <a href="https://docs.n8n.io/advanced-ai/intro-tutorial/" target="_blank" rel="noopener">n8n Docs — Build an AI workflow</a> (free Gemini-key template: <a href="https://n8n.io/workflows/6270-build-your-first-ai-agent/" target="_blank" rel="noopener">Build your first AI agent</a>)', hours: 2 }
      ]
    },
    {
      week: 19,
      focus: 'Eval-gated CI/CD + security + load testing + cert prep',
      tasks: [
        { id: 'p4-w19-t1', text: 'GitHub Actions workflow runs evals on every PR', hours: 2 },
        { id: 'p4-w19-t2', text: 'Red-team prompt-injection eval set', hours: 2 },
        { id: 'p4-w19-t3', text: 'Blue-green deploy (or canary) on ECS', hours: 2.5 },
        { id: 'p4-w19-t4', text: 'Start AWS MLA-C01 prep — Stephane Maarek or Adrian Cantrill course', hours: 2.5 },
        { id: 'p4-w19-t5', text: 'README section: "What I\'d improve at 10× scale"', hours: 1 },
        { id: 'p4-w19-t6', text: 'Load testing — <a href="https://locust.io/" target="_blank" rel="noopener">Locust</a> on your endpoint, document breakpoints', hours: 2 },
        { id: 'p4-w19-t7', text: 'Security deep-dive — PII redaction (<a href="https://microsoft.github.io/presidio/" target="_blank" rel="noopener">Presidio</a>), output filtering, prompt injection at scale', hours: 2.5 },
        { id: 'p4-w19-t8', text: 'Add a human_review_required flag pattern to your agent — gate high-stakes actions for human approval before execution. Signals human-in-the-loop design (required in healthcare/regulated AI JDs). Reference <a href="https://docs.langchain.com/oss/python/langchain/human-in-the-loop" target="_blank" rel="noopener">LangChain — Human-in-the-Loop</a>', hours: 1 }
      ]
    }
  ],
  project: {
    name: 'Hardened DocChat or Research Agent',
    description: 'Production-grade version: auth, rate-limits, semantic caching, prompt versioning, async jobs, K8s deployment, Bedrock backend, eval gate in CI, security depth, public status page.',
    deliverables: [
      { id: 'p4-d1', text: 'Production URL with auth + status page' },
      { id: 'p4-d2', text: 'CloudWatch dashboard screenshot in README' },
      { id: 'p4-d3', text: 'Eval gate visible in GH Actions runs' },
      { id: 'p4-d4', text: 'Cost report — actual $/month documented' },
      { id: 'p4-d5', text: 'Load test report showing handling target QPS' }
    ]
  },
  resources: [
    { name: 'AWS Bedrock Workshop', url: 'https://catalog.workshops.aws/building-with-amazon-bedrock', icon: '☁️', tags: ['free', 'core'] },
    { name: 'Full-Stack FastAPI Template', url: 'https://github.com/fastapi/full-stack-fastapi-template', icon: '⚡', tags: ['free', 'core'] },
    { name: 'AWS MLA-C01 Cert', url: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/', icon: '🏆', tags: ['paid', 'core'], note: '$300 exam. Documented salary lift.' },
    { name: 'The New Stack — Production AI Agents (RAG+FastAPI)', url: 'https://thenewstack.io/how-to-build-production-ready-ai-agents-with-rag-and-fastapi/', icon: '📰', tags: ['free'] },
    { name: 'Killercoda — Kubernetes playground', url: 'https://killercoda.com/playgrounds', icon: '☸️', tags: ['free', 'new'] },
    { name: 'Celery docs', url: 'https://docs.celeryq.dev/', icon: '🌿', tags: ['free', 'new'] },
    { name: 'Ollama (local LLM)', url: 'https://ollama.com/', icon: '🦙', tags: ['free', 'new'] },
    { name: 'vLLM (production serving)', url: 'https://docs.vllm.ai/', icon: '⚡', tags: ['free', 'stretch'] },
    { name: 'Locust load testing', url: 'https://locust.io/', icon: '🦗', tags: ['free', 'new'] },
    { name: 'Microsoft Presidio (PII)', url: 'https://microsoft.github.io/presidio/', icon: '🛡️', tags: ['free', 'new'] },
    { name: 'LangSmith Prompt Hub', url: 'https://docs.langchain.com/langsmith/prompt-engineering', icon: '🔖', tags: ['free', 'new'] },
    { name: 'Langfuse (open-source observability)', url: 'https://langfuse.com/', icon: '📊', tags: ['free'] }
  ]
},

// ============== BUFFER 2 — Cert + Polish + Mock Loops ==============
{
  id: 'buf2',
  number: 'B2',
  title: 'Buffer Week — Cert Exam + Mock Interviews',
  weeks: 'Wk 20',
  hours: 12,
  budget: '$300 (AWS MLA-C01 exam)',
  isBuffer: true,
  summary: 'Sit the cert. Polish portfolio to interview-ready. Run mock interview loops. By end of this week you should be in active applications.',
  mvp: 'Non-negotiable: t1 (sit exam) + t4 (3 mocks). Everything else is polish.',
  weekBlocks: [{
    week: 20,
    focus: 'Cert + portfolio polish + mock loops',
    tasks: [
      { id: 'buf2-t1', text: 'Sit AWS MLA-C01 exam (book it 2 weeks in advance)', hours: 3 },
      { id: 'buf2-t2', text: 'Polish all 4 portfolio projects — READMEs, demos, screenshots, deploy badges', hours: 3 },
      { id: 'buf2-t3', text: 'Final resume pass — 2 versions (PK/Gulf, US-remote). Get feedback from 2 senior engineers.', hours: 1.5 },
      { id: 'buf2-t4', text: 'Run 3 mock interviews — <a href="https://www.tryexponent.com/practice" target="_blank" rel="noopener">Exponent (formerly Pramp)</a> or <a href="https://interviewing.io/" target="_blank" rel="noopener">interviewing.io</a>', hours: 3 },
      { id: 'buf2-t5', text: 'System design practice — design a customer support agent at scale (write it up)', hours: 1.5 }
    ]
  }],
  project: {
    name: 'Interview readiness checkpoint',
    description: 'Not a build phase — this is the gate before serious applications. Cert in hand, portfolio polished, 3 mocks complete.',
    deliverables: [
      { id: 'buf2-d1', text: 'AWS MLA-C01 passed (or scheduled within 2 weeks)' },
      { id: 'buf2-d2', text: '3 mock interviews complete with notes on each' },
      { id: 'buf2-d3', text: 'Resume reviewed by 2 senior engineers' }
    ]
  },
  resources: [
    { name: 'Exponent Practice — peer mock interviews (formerly Pramp, free)', url: 'https://www.tryexponent.com/practice', icon: '🎤', tags: ['free', 'core'] },
    { name: 'interviewing.io', url: 'https://interviewing.io/', icon: '🎤', tags: ['paid'], note: 'Anonymous mocks with FAANG engineers.' },
    { name: 'AWS MLA-C01 Practice Exam (Tutorials Dojo)', url: 'https://portal.tutorialsdojo.com/courses/aws-certified-machine-learning-engineer-associate-practice-exams/', icon: '🏆', tags: ['paid', 'core'], note: 'The gold-standard practice tests.' }
  ]
},

// ============== PHASE 5 — Flutter + AI Micro-SaaS ==============
{
  id: 'p5',
  number: '05',
  title: 'Flagship — Flutter + AI Micro-SaaS',
  weeks: 'Wks 21–24',
  hours: 50,
  budget: '$80–120 (everything stays on + Flutter dev account + Stripe)',
  summary: 'Your unfair advantage. A Flutter app powered by your AI backend with on-device fallback, voice/vision, payments, and ASO. Ship to TestFlight + Play Store internal.',
  mvp: 'If short on time: must-do = W21 (pick + design) + W24 (ship to TestFlight). Drop voice/vision and Apple Foundation Models — keep them as stretch.',
  weekBlocks: [
    {
      week: 21,
      focus: 'Pick + design + connect backend',
      tasks: [
        { id: 'p5-w21-t1', text: 'Pick ONE: (a) Flutter Dev Assistant ★recommended, (b) Doc scanner that thinks, (c) Interview prep AI, (d) Urdu/Arabic voice journaling', hours: 1 },
        { id: 'p5-w21-t2', text: 'Write 1-page product spec — user, problem, MVP scope', hours: 2 },
        { id: 'p5-w21-t3', text: 'Sketch UI in Figma or pen-and-paper', hours: 2 },
        { id: 'p5-w21-t4', text: 'Set up Flutter project + connect to Phase 4 backend', hours: 2 },
        { id: 'p5-w21-t5', text: 'Read <a href="https://dasroot.net/posts/2026/03/flutter-local-llms-privacy-first-mobile-ai/" target="_blank" rel="noopener">Flutter + Local LLMs (March 2026)</a>', hours: 1 },
        { id: 'p5-w21-t6', text: 'Set up <a href="https://posthog.com/" target="_blank" rel="noopener">PostHog</a> free analytics', hours: 0.5 }
      ]
    },
    {
      week: 22,
      focus: 'Core AI features + on-device + voice/vision',
      tasks: [
        { id: 'p5-w22-t1', text: 'Integrate <a href="https://pub.dev/packages/flutter_ai_toolkit" target="_blank" rel="noopener">flutter_ai_toolkit</a> for chat UI', hours: 3 },
        { id: 'p5-w22-t2', text: 'Connect to Claude/GPT via your FastAPI backend with streaming', hours: 3 },
        { id: 'p5-w22-t3', text: 'On-device fallback via <a href="https://firebase.google.com/docs/ai-logic" target="_blank" rel="noopener">Firebase AI Logic</a> (Gemini Nano)', hours: 3 },
        { id: 'p5-w22-t4', text: '★ Camera + vision input — pick photo, send to Claude vision API', hours: 2 },
        { id: 'p5-w22-t5', text: '★ Voice input — Whisper API via backend (or on-device Whisper.cpp)', hours: 2 }
      ]
    },
    {
      week: 23,
      focus: 'Auth, payments, notifications, polish',
      tasks: [
        { id: 'p5-w23-t1', text: 'Sign-in with Google (Firebase Auth)', hours: 2 },
        { id: 'p5-w23-t2', text: 'Stripe or Paddle subscription ($9/mo plan)', hours: 4 },
        { id: 'p5-w23-t3', text: 'Per-user rate limit (free 5/day, paid unlimited)', hours: 2 },
        { id: 'p5-w23-t4', text: 'Polish UI — animations, empty/error states', hours: 2 },
        { id: 'p5-w23-t5', text: '★ Push notifications — FCM + AI summary trigger', hours: 2 }
      ]
    },
    {
      week: 24,
      focus: 'Ship + launch + recruit users',
      tasks: [
        { id: 'p5-w24-t1', text: 'Submit to TestFlight (iOS internal testing)', hours: 2 },
        { id: 'p5-w24-t2', text: 'Submit to Play Store Internal Track', hours: 2 },
        { id: 'p5-w24-t3', text: '3-min Loom demo for app store + portfolio', hours: 2 },
        { id: 'p5-w24-t4', text: 'Launch tweet thread + LinkedIn post + Show HN', hours: 2 },
        { id: 'p5-w24-t5', text: 'Get at least 1 paying/sign-up user from outside your network', hours: 3 },
        { id: 'p5-w24-t6', text: 'Update resume + LinkedIn headline with flagship', hours: 1 },
        { id: 'p5-w24-t7', text: 'ASO basics — keywords, screenshots, app description', hours: 1.5 },
        { id: 'p5-w24-t8', text: 'TestFlight beta recruiting — post in r/FlutterDev + Flutter Discord', hours: 1 }
      ]
    }
  ],
  project: {
    name: 'Your Flutter + AI Micro-SaaS (recommended: Flutter Dev Assistant)',
    description: 'A Flutter app that reviews Dart/Flutter code via Claude, uses your MCP server for repo access, falls back to Gemini Nano on-device when offline. Camera input for screenshots, voice input optional. You dogfood it every day.',
    deliverables: [
      { id: 'p5-d1', text: 'Live on TestFlight + Play Store internal' },
      { id: 'p5-d2', text: '3-min demo video' },
      { id: 'p5-d3', text: 'Launch post on HN/Twitter/LinkedIn' },
      { id: 'p5-d4', text: 'At least 1 external user signed up' },
      { id: 'p5-d5', text: 'Mobile + AI prominent on resume + LinkedIn' },
      { id: 'p5-d6', text: 'Analytics dashboard with first-week engagement data' }
    ]
  },
  resources: [
    { name: 'Flutter AI Toolkit (official)', url: 'https://pub.dev/packages/flutter_ai_toolkit', icon: '💙', tags: ['free', 'core'] },
    { name: 'Firebase AI Logic (Gemini in Flutter)', url: 'https://firebase.google.com/docs/ai-logic', icon: '🔥', tags: ['free', 'core'] },
    { name: 'Flutter + Local LLMs (dasroot.net, Mar 2026)', url: 'https://dasroot.net/posts/2026/03/flutter-local-llms-privacy-first-mobile-ai/', icon: '📝', tags: ['free'], note: 'Telosnex/fllama, netdur/llama_cpp_dart bindings.' },
    { name: 'flutter_gemma package', url: 'https://pub.dev/packages/flutter_gemma', icon: '💙', tags: ['free'] },
    { name: 'langchain.dart', url: 'https://pub.dev/packages/langchain', icon: '💙', tags: ['free'] },
    { name: 'Telosnex/fllama (llama.cpp Dart bindings)', url: 'https://github.com/Telosnex/fllama', icon: '💙', tags: ['free', 'stretch'] },
    { name: 'Stripe Flutter docs', url: 'https://docs.stripe.com/payments/accept-a-payment?platform=flutter', icon: '💳', tags: ['free'] },
    { name: 'PostHog (free analytics)', url: 'https://posthog.com/', icon: '📈', tags: ['free', 'new'] },
    { name: 'Apple Foundation Models (Apple Intelligence) docs', url: 'https://developer.apple.com/documentation/foundationmodels', icon: '🍎', tags: ['free', 'stretch', 'new'], note: 'iOS 18+ on-device. Wrap via platform channels for Flutter.' }
  ]
}

]; // end PLAN

// ==============================================================
// =============== PARALLEL TRACKS ==============================
// ==============================================================

const TRACKS = [
  {
    id: 'tr-networking',
    title: 'Visibility & Networking',
    emoji: '🔊',
    note: 'Always-on from W1. ~30 min/week.',
    color: '#60a5fa',
    activeWeeks: 'all',
    tasks: [
      { id: 'tr-net-1', text: 'LinkedIn headline → "Flutter Engineer → Building production AI apps | Python · LLM · RAG · LangGraph"' },
      { id: 'tr-net-2', text: 'GitHub bio + pin `karachi-ai-pivot` repo' },
      { id: 'tr-net-3', text: 'Follow 20 AI engineers on X (Hamel Husain, Eugene Yan, Harrison Chase, Simon Willison, Swyx, Chip Huyen, Karpathy, Jason Liu, Shreya Shankar, Andrej Karpathy)' },
      { id: 'tr-net-4', text: 'Weekly tweet — 1 learning + 1 build screenshot' },
      { id: 'tr-net-5', text: 'Bi-weekly LinkedIn post — project demos with measurable claims' },
      { id: 'tr-net-6', text: 'Publish 4 blog posts (one per major phase)' },
      { id: 'tr-net-7', text: 'Show HN — submit Project 3 and Project 5' },
      { id: 'tr-net-8', text: '1 merged PR to LangChain / LangGraph / Flutter AI Toolkit (even docs)' },
      { id: 'tr-net-9', text: 'Join AI Hub Pakistan + Karachi AI meetups + r/LocalLLaMA + LangChain Discord + Latent Space Discord' },
      { id: 'tr-net-10', text: '<b>Artifacts discipline</b> — maintain `/artifacts` directory in portfolio repo. Ship ≥1 reusable output per week (SKILL.md, prompt template, eval harness, CLI tool, code snippet, or blog draft). Goal: 25+ artifacts by W24. Steals the best idea from rohitg00\'s repo.' },
      { id: 'tr-net-11', text: 'Every project README documents your AI-assisted dev workflow (Cursor / Claude Code / MCP setup, configured how). 2026 JDs explicitly screen for \'AI fluency / agentic engineering mindset\' — make yours visible.' }
    ]
  },
  {
    id: 'tr-market',
    title: 'Market Intelligence',
    emoji: '📊',
    note: 'Always-on from W1. 1 hr/week.',
    color: '#a78bfa',
    activeWeeks: 'all',
    tasks: [
      { id: 'mi-1', text: 'Subscribe — Latent Space, AI Engineer Newsletter, Hamel\'s newsletter, Chip Huyen, Lenny\'s' },
      { id: 'mi-2', text: 'Set up "20 JDs/week" Notion or sheet — log skill mentions' },
      { id: 'mi-3', text: 'Weekly: read 20 JDs, tag skills, see what\'s trending' },
      { id: 'mi-4', text: 'Monthly: read HN "Who\'s Hiring" thread, save promising leads' },
      { id: 'mi-5', text: 'Build target company list — 50 companies, segment PK/remote/Gulf' },
      { id: 'mi-6', text: 'Track 10 salary data points/month — Levels.fyi + anonymous' },
      { id: 'mi-7', text: 'Subscribe to Latent Space podcast — listen on commute' },
      { id: 'mi-8', text: 'Read Chip Huyen "AI Engineering" book (free in O\'Reilly trial)' },
      { id: 'mi-9', text: 'Quarterly: see who got hired in your LinkedIn network — DM them' }
    ]
  },
  {
    id: 'tr-apply',
    title: 'Application Engine',
    emoji: '🎯',
    note: 'Starts W10 (Buffer 1). Volume = skill.',
    color: '#34d399',
    activeWeeks: Array.from({length:15},(_,i)=>i+10),
    tasks: [
      { id: 'tr-app-1', text: 'W10–12: 3-5 soft applications/week (PK-remote + 2-3 stretch remote)' },
      { id: 'tr-app-2', text: 'W13–17: 10-15 applications/week — YC, Turing, Crossover, Wellfound' },
      { id: 'tr-app-3', text: 'W18–24: 20+/week — add Gulf (G42, Mozn, Property Finder, Endless Studios)' },
      { id: 'tr-app-4', text: 'Build workatastartup.com profile' },
      { id: 'tr-app-5', text: 'Apply on Turing.com — LLM post-training, AI/ML engineer pipelines' },
      { id: 'tr-app-6', text: 'Apply on Crossover.com (publishes Karachi/Lahore AI roles)' },
      { id: 'tr-app-7', text: 'Set up Deel or Remote.com profile for contractor structure' },
      { id: 'tr-app-8', text: 'Get 3 senior AI engineers to roast your GitHub README before applying' },
      { id: 'tr-app-9', text: 'Practice technical English on Loom — 15 min/day for 60 days' },
      { id: 'tr-app-10', text: 'Resume bullet template: \'Integrated [LLM capability] into [existing system, e.g. CRM/ERP] using [framework], measured [outcome/metric].\' Most AI-engineer JDs describe the role as integration glue — use this framing even if a project isn\'t a literal enterprise integration.' }
    ]
  },
  {
    id: 'tr-interview',
    title: 'Interview Prep',
    emoji: '💼',
    note: 'Starts W10. Mostly weekends.',
    color: '#f472b6',
    activeWeeks: Array.from({length:15},(_,i)=>i+10),
    tasks: [
      { id: 'ip-1', text: 'Read Chip Huyen "Designing ML Systems" — relevant chapters on system design' },
      { id: 'ip-2', text: 'Write 6 STAR behavioral stories (failure, conflict, leadership, technical win, pivot, ambiguity)' },
      { id: 'ip-3', text: 'AI system design practice #1 — RAG-powered customer support tool' },
      { id: 'ip-4', text: 'AI system design practice #2 — Multi-agent orchestration platform' },
      { id: 'ip-5', text: 'Cost-modeling exercise — Claude/GPT for 1M users, calculate $/month' },
      { id: 'ip-6', text: 'Mock interview 1 — Pramp or interviewing.io (general)' },
      { id: 'ip-7', text: 'Mock interview 2 — system design focus' },
      { id: 'ip-8', text: 'Mock interview 3 — AI-engineering-specific case' },
      { id: 'ip-9', text: 'Take-home strategy — template approach for RAG/agent take-homes — and ALWAYS start by building the eval harness before the main logic; \'didn\'t start with evals\' is cited as the #1 take-home red flag.' },
      { id: 'ip-10', text: 'Build 2 proactive take-homes (use as portfolio if asked)' },
      { id: 'ip-11', text: 'Salary negotiation prep — read Patrick McKenzie "Negotiate" + watch Haseeb Qureshi talk' },
      { id: 'ip-12', text: 'Levels.fyi research — 10 data points for your target roles' }
    ]
  },
  {
    id: 'tr-cert',
    title: 'Certifications',
    emoji: '🏆',
    note: 'Only one is mandatory.',
    color: '#facc15',
    activeWeeks: [16,17,18,19,20],
    tasks: [
      { id: 'tr-cert-1', text: 'HuggingFace Agents Course certificate (free, take in Phase 3)' },
      { id: 'tr-cert-2', text: 'LangChain Academy completion certificates (free)' },
      { id: 'tr-cert-3', text: 'AWS MLA-C01 — Machine Learning Engineer Associate ($300, take in Buffer 2)' },
      { id: 'tr-cert-4', text: 'Skip: AWS AI Practitioner (AIF-C01) — too entry-level' },
      { id: 'tr-cert-5', text: 'Skip: Coursera long specializations — time-inefficient for your goal' }
    ]
  },
  {
    id: 'tr-decide',
    title: 'Decision Triggers',
    emoji: '🚦',
    note: 'Mark when you hit each milestone. These flip your strategy.',
    color: '#f87171',
    activeWeeks: 'all',
    tasks: [
      { id: 'tr-dec-1', text: 'W9 trigger: DocChat shipped with eval numbers → start applying NOW (don\'t wait for W10)' },
      { id: 'tr-dec-2', text: 'W14 trigger: 0 interview invites from 30+ applications → audit README + resume, get roasted' },
      { id: 'tr-dec-3', text: 'W17 trigger: PK-remote offer at $40K+ USD → consider taking it, keep learning in parallel' },
      { id: 'tr-dec-4', text: 'W20 trigger: passing screens but failing tech → 2-week evals deep-dive before more apps' },
      { id: 'tr-dec-5', text: 'W24 decision: accept best of {US-remote contractor $50–80K, PK-remote PKR 350-700K/mo, Gulf relocation AED 25-35K/mo}' }
    ]
  }
];

// ==============================================================
// =============== TIMELINE (visual grid) =======================
// ==============================================================

const TOTAL_WEEKS = 25; // W0 through W24

const TIMELINE_ROWS = [
  // Header
  { type: 'header', label: 'Phases (sequential)' },
  { type: 'phase', id: 'p0', label: 'P0 · Python Boot', color: '#f59e0b', activeWeeks: [0] },
  { type: 'phase', id: 'p1', label: 'P1 · Python+LLM', color: '#f59e0b', activeWeeks: [1,2,3,4] },
  { type: 'phase', id: 'p2', label: 'P2 · RAG', color: '#f59e0b', activeWeeks: [5,6,7,8,9] },
  { type: 'phase', id: 'buf1', label: 'B1 · Review', color: '#f472b6', activeWeeks: [10] },
  { type: 'phase', id: 'p3', label: 'P3 · Agents+MCP', color: '#f59e0b', activeWeeks: [11,12,13,14,15] },
  { type: 'phase', id: 'p4', label: 'P4 · Production', color: '#f59e0b', activeWeeks: [16,17,18,19] },
  { type: 'phase', id: 'buf2', label: 'B2 · Cert+Mocks', color: '#f472b6', activeWeeks: [20] },
  { type: 'phase', id: 'p5', label: 'P5 · Flutter SaaS', color: '#f59e0b', activeWeeks: [21,22,23,24] },
  // Separator
  { type: 'header', label: 'Parallel Tracks' },
  { type: 'track', id: 'tr-networking', label: 'Visibility', color: '#60a5fa', activeWeeks: 'all' },
  { type: 'track', id: 'tr-market', label: 'Market Intel', color: '#a78bfa', activeWeeks: 'all' },
  { type: 'track', id: 'tr-apply', label: 'Applications', color: '#34d399', activeWeeks: Array.from({length:15},(_,i)=>i+10) },
  { type: 'track', id: 'tr-interview', label: 'Interview Prep', color: '#f472b6', activeWeeks: Array.from({length:15},(_,i)=>i+10) },
  { type: 'track', id: 'tr-cert', label: 'Cert (MLA-C01)', color: '#facc15', activeWeeks: [16,17,18,19,20] }
];

// ==============================================================
// =============== STATE + STORAGE ==============================
// ==============================================================

const STORAGE_KEY = 'pivot-tracker-state-v1';
let state = {
  tasks: {},
  taskMeta: {},
  notes: {},
  expanded: {},
  startedAt: null,
  filter: 'all',
  timelineCollapsed: false
};

const storage = {
  available: !!(typeof window !== 'undefined' && window.storage && window.storage.get),
  async get(key) {
    try {
      if (this.available) {
        const r = await window.storage.get(key);
        return r ? r.value : null;
      } else if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(key);
      }
    } catch (e) { return null; }
    return null;
  },
  async set(key, value) {
    try {
      if (this.available) {
        await window.storage.set(key, value);
      } else if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, value);
      }
    } catch (e) { console.warn('storage set failed', e); }
  }
};

async function loadState() {
  const raw = await storage.get(STORAGE_KEY);
  if (raw) {
    try { state = Object.assign(state, JSON.parse(raw)); }
    catch (e) { console.warn('state parse failed'); }
  }
  if (!state.startedAt) {
    state.startedAt = Date.now();
    await saveState();
  }
}

let saveTimer = null;
async function saveState() {
  state.updatedAt = Date.now();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    await storage.set(STORAGE_KEY, JSON.stringify(state));
  }, 80);
  cloudPushDebounced();
}
async function saveStateNow() {
  state.updatedAt = Date.now();
  clearTimeout(saveTimer);
  await storage.set(STORAGE_KEY, JSON.stringify(state));
  cloudPushDebounced();
}

// ==============================================================
// =============== CLOUD SYNC (Supabase) ========================
// ==============================================================
const SUPABASE_URL = 'https://ymyvvjnyvztcjjqzutrv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_u_a6gdACxLB6tyDr32FWKw_qCZG75d2';

const cloud = {
  client: null,
  user: null,
  _pendingEmail: null,
  init() {
    if (this.client) return this.client;
    if (!SUPABASE_URL || !SUPABASE_KEY || !window.supabase) return null;
    try { this.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY); }
    catch (e) { console.warn('supabase init failed', e); this.client = null; }
    return this.client;
  },
  get enabled() { return !!this.client; },
  async refreshUser() {
    if (!this.enabled) return null;
    try { const { data } = await this.client.auth.getUser(); this.user = data ? data.user : null; }
    catch (e) { this.user = null; }
    return this.user;
  },
  sendCode(email) { return this.client.auth.signInWithOtp({ email, options: { shouldCreateUser: true } }); },
  async verifyCode(email, token) {
    const res = await this.client.auth.verifyOtp({ email, token, type: 'email' });
    if (!res.error) await this.refreshUser();
    return res;
  },
  async signOut() { try { await this.client.auth.signOut(); } catch (e) {} this.user = null; },
  async pull() {
    if (!this.user) return null;
    const { data, error } = await this.client
      .from('tracker_state').select('data, client_ts')
      .eq('user_id', this.user.id).maybeSingle();
    if (error) { console.warn('cloud pull', error); return null; }
    return data;
  },
  async push() {
    if (!this.user) return;
    const { error } = await this.client.from('tracker_state').upsert({
      user_id: this.user.id,
      data: state,
      client_ts: state.updatedAt || Date.now(),
      updated_at: new Date().toISOString()
    });
    if (error) console.warn('cloud push', error);
  }
};

let cloudPushTimer = null;
function cloudPushDebounced() {
  if (!cloud.enabled || !cloud.user) return;
  clearTimeout(cloudPushTimer);
  cloudPushTimer = setTimeout(() => cloud.push().then(updateSyncUI), 600);
}

// Pull remote; adopt if newer than local, otherwise push local up.
async function cloudSyncOnLoad() {
  if (!cloud.enabled) { updateSyncUI(); return; }
  await cloud.refreshUser();
  if (!cloud.user) { updateSyncUI(); return; }
  const remote = await cloud.pull();
  const localTs = state.updatedAt || 0;
  if (remote && remote.data && (remote.client_ts || 0) > localTs) {
    state = Object.assign(state, remote.data);
    await storage.set(STORAGE_KEY, JSON.stringify(state)); // local cache only — no bump/push
    fullRender();
    toast('Synced from cloud');
  } else {
    await cloud.push();
  }
  updateSyncUI();
}

function updateSyncUI() {
  const b = document.getElementById('btnSync');
  if (!b) return;
  if (cloud.enabled && cloud.user) {
    b.textContent = '☁ Synced';
    b.title = 'Signed in as ' + cloud.user.email;
    b.classList.add('synced');
  } else {
    b.textContent = '☁ Sync';
    b.title = cloud.enabled ? 'Sign in to sync across devices' : 'Sync unavailable';
    b.classList.remove('synced');
  }
}

const SYNC_INPUT_STYLE = 'width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-soft);color:var(--text);font-size:14px;margin-top:8px;box-sizing:border-box';

window.openSyncModal = async function() {
  if (!cloud.enabled) {
    showModal(`<h3>Cloud sync</h3><p>Sync isn't available right now (the Supabase library didn't load).</p><div class="modal-actions"><button class="primary" onclick="hideModal()">OK</button></div>`);
    return;
  }
  await cloud.refreshUser();
  if (cloud.user) {
    showModal(`<h3>Cloud sync</h3><p>Signed in as <b>${cloud.user.email}</b>. Your progress syncs automatically across devices.</p><div class="modal-actions"><button onclick="syncNow()">Sync now</button><button class="danger" onclick="syncSignOut()">Sign out</button><button class="primary" onclick="hideModal()">Done</button></div>`);
  } else {
    syncEmailStep();
  }
};
function syncEmailStep() {
  showModal(`<h3>Cloud sync</h3><p>Sign in with your email to sync progress across devices — we'll email you a 6-digit code.</p><input id="syncEmail" type="email" placeholder="you@example.com" style="${SYNC_INPUT_STYLE}" /><div class="modal-actions"><button onclick="hideModal()">Cancel</button><button class="primary" onclick="syncSendCode()">Send code</button></div>`);
  setTimeout(() => { const i = document.getElementById('syncEmail'); if (i) i.focus(); }, 50);
}
window.syncEmailStep = syncEmailStep;
window.syncSendCode = async function() {
  const email = (document.getElementById('syncEmail').value || '').trim();
  if (!email) { toast('Enter your email'); return; }
  cloud._pendingEmail = email;
  toast('Sending code…');
  const { error } = await cloud.sendCode(email);
  if (error) { toast('Error: ' + error.message); return; }
  showModal(`<h3>Enter your code</h3><p>We emailed a 6-digit code to <b>${email}</b>.</p><input id="syncCode" inputmode="numeric" autocomplete="one-time-code" placeholder="123456" style="${SYNC_INPUT_STYLE};font-size:18px;letter-spacing:4px;text-align:center" /><div class="modal-actions"><button onclick="syncEmailStep()">Back</button><button class="primary" onclick="syncVerify()">Verify</button></div>`);
  setTimeout(() => { const i = document.getElementById('syncCode'); if (i) i.focus(); }, 50);
};
window.syncVerify = async function() {
  const token = (document.getElementById('syncCode').value || '').trim();
  if (!token) { toast('Enter the code'); return; }
  toast('Verifying…');
  const { error } = await cloud.verifyCode(cloud._pendingEmail, token);
  if (error) { toast('Invalid or expired code'); return; }
  hideModal();
  toast('Signed in — syncing');
  await cloudSyncOnLoad();
};
window.syncNow = async function() { toast('Syncing…'); await cloudSyncOnLoad(); toast('Synced'); };
window.syncSignOut = async function() { await cloud.signOut(); hideModal(); updateSyncUI(); toast('Signed out'); };

// ==============================================================
// =============== AGGREGATIONS =================================
// ==============================================================

function allTaskIds() {
  const ids = [];
  PLAN.forEach(phase => {
    phase.weekBlocks.forEach(wb => wb.tasks.forEach(t => ids.push(t.id)));
    phase.project.deliverables.forEach(d => ids.push(d.id));
  });
  TRACKS.forEach(tr => tr.tasks.forEach(t => ids.push(t.id)));
  return ids;
}
function phaseTaskIds(phaseId) {
  const phase = PLAN.find(p => p.id === phaseId);
  if (!phase) return [];
  const ids = [];
  phase.weekBlocks.forEach(wb => wb.tasks.forEach(t => ids.push(t.id)));
  phase.project.deliverables.forEach(d => ids.push(d.id));
  return ids;
}
function phaseHours(phase) {
  let total = 0;
  phase.weekBlocks.forEach(wb => wb.tasks.forEach(t => {
    if (t.hours) total += t.hours;
  }));
  return total;
}
function trackTaskIds(trackId) {
  const t = TRACKS.find(x => x.id === trackId);
  return t ? t.tasks.map(x => x.id) : [];
}
function weekTaskIds(phaseId, weekNum) {
  const phase = PLAN.find(p => p.id === phaseId);
  if (!phase) return [];
  const wb = phase.weekBlocks.find(w => w.week === weekNum);
  return wb ? wb.tasks.map(t => t.id) : [];
}
function computeOverall() {
  const all = allTaskIds();
  const done = all.filter(id => state.tasks[id]).length;
  return { done, total: all.length, pct: all.length ? Math.round(done / all.length * 100) : 0 };
}
function computePhase(phaseId) {
  const ids = phaseTaskIds(phaseId);
  const done = ids.filter(id => state.tasks[id]).length;
  return { done, total: ids.length, pct: ids.length ? Math.round(done / ids.length * 100) : 0 };
}
function computeWeek(phaseId, weekNum) {
  const ids = weekTaskIds(phaseId, weekNum);
  const done = ids.filter(id => state.tasks[id]).length;
  return { done, total: ids.length, pct: ids.length ? done / ids.length : 0 };
}
function computeHoursDone() {
  let total = 0;
  PLAN.forEach(phase => {
    phase.weekBlocks.forEach(wb => wb.tasks.forEach(t => {
      if (state.tasks[t.id] && t.hours) total += t.hours;
    }));
  });
  return Math.round(total);
}
function daysSinceStart() {
  if (!state.startedAt) return 0;
  return Math.floor((Date.now() - state.startedAt) / (1000 * 60 * 60 * 24));
}
function currentWeek() {
  return Math.min(Math.floor(daysSinceStart() / 7), TOTAL_WEEKS - 1);
}
function computePace() {
  const cw = currentWeek();
  const dayInWeek = daysSinceStart() % 7;
  let expected = 0, done = 0;
  PLAN.forEach(phase => {
    phase.weekBlocks.forEach(wb => {
      if (wb.week < cw) {
        // Past weeks: fully expected; always count if done
        wb.tasks.forEach(t => {
          expected += 1;
          if (state.tasks[t.id]) done++;
        });
      } else if (wb.week === cw) {
        // Current week: pro-rated by day; count if done
        const fraction = dayInWeek / 7;
        wb.tasks.forEach(t => {
          expected += fraction;
          if (state.tasks[t.id]) done++;
        });
      } else {
        // Future weeks: not expected yet, but count completions as ahead-of-schedule bonus
        wb.tasks.forEach(t => {
          if (state.tasks[t.id]) done++;
        });
      }
    });
  });
  const roundedExpected = Math.round(expected);
  return { delta: done - roundedExpected, done, expected: roundedExpected, currentWeek: cw };
}

function getTargetDate() {
  return new Date((state.startedAt || Date.now()) + 25 * 7 * 86400000);
}

function formatTargetDate(d) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function updateTargetDateUI() {
  const btn = document.getElementById('targetDateBtn');
  if (!btn) return;
  const d = getTargetDate();
  const daysLeft = Math.ceil((d - Date.now()) / 86400000);
  const suffix = daysLeft > 0 ? ` · ${daysLeft}d left` : daysLeft === 0 ? ' · today!' : ` · ${Math.abs(daysLeft)}d overdue`;
  btn.textContent = formatTargetDate(d) + suffix;
}

window.openTargetDateEditor = function() {
  const d = getTargetDate();
  const iso = d.toISOString().split('T')[0];
  showModal(`
    <h3>Target completion date</h3>
    <p>Set your finish-line date. The pace and schedule calculations shift to match — all 25 weeks are anchored to this date.</p>
    <input type="date" id="targetDateInput" value="${iso}"
      style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-soft);color:var(--text);font-size:14px;margin-top:8px;box-sizing:border-box" />
    <div class="modal-actions">
      <button onclick="hideModal()">Cancel</button>
      <button class="primary" onclick="applyTargetDate()">Save</button>
    </div>
  `);
};

window.applyTargetDate = function() {
  const input = document.getElementById('targetDateInput');
  if (!input || !input.value) { toast('Pick a date'); return; }
  const d = new Date(input.value);
  if (isNaN(d)) { toast('Invalid date'); return; }
  state.startedAt = d.getTime() - 25 * 7 * 86400000;
  saveState();
  hideModal();
  fullRender();
  toast('Target date updated');
};

// ==============================================================
// =============== EL HELPER ====================================
// ==============================================================

function el(tag, attrs = {}, children = []) {
  const e = document.createElement(tag);
  for (const k in attrs) {
    if (k === 'class') e.className = attrs[k];
    else if (k === 'html') e.innerHTML = attrs[k];
    else if (k.startsWith('on')) e.addEventListener(k.substr(2), attrs[k]);
    else if (k === 'dataset') Object.assign(e.dataset, attrs[k]);
    else e.setAttribute(k, attrs[k]);
  }
  (Array.isArray(children) ? children : [children]).forEach(c => {
    if (c == null) return;
    if (typeof c === 'string') e.appendChild(document.createTextNode(c));
    else e.appendChild(c);
  });
  return e;
}

// ==============================================================
// =============== TIMELINE RENDER ==============================
// ==============================================================

function renderTimeline() {
  const grid = document.getElementById('timelineGrid');
  grid.innerHTML = '';

  // Header row with week numbers
  const headerRow = el('div', { class: 'tl-row header-row' });
  headerRow.appendChild(el('div', { class: 'tl-label-cell' }, ['']));
  const cw = currentWeek();
  for (let w = 0; w < TOTAL_WEEKS; w++) {
    const h = el('div', {
      class: 'tl-week-head' + (w === cw ? ' current' : '')
    }, ['W' + w]);
    headerRow.appendChild(h);
  }
  grid.appendChild(headerRow);

  TIMELINE_ROWS.forEach(row => {
    if (row.type === 'header') {
      const sep = el('div', { class: 'tl-row header-row' });
      sep.appendChild(el('div', { class: 'tl-label-cell' }, [row.label]));
      grid.appendChild(sep);
      return;
    }

    const rowEl = el('div', { class: 'tl-row' });
    const label = el('div', { class: 'tl-label-cell' });
    label.appendChild(el('span', { class: 'label-dot', style: `background:${row.color}` }));
    label.appendChild(document.createTextNode(row.label));
    label.addEventListener('click', () => scrollToSection(row.id, row.type));
    rowEl.appendChild(label);

    const activeSet = row.activeWeeks === 'all'
      ? new Set(Array.from({length: TOTAL_WEEKS}, (_, i) => i))
      : new Set(row.activeWeeks);

    for (let w = 0; w < TOTAL_WEEKS; w++) {
      const cell = el('div', { class: 'tl-cell', dataset: { week: w, row: row.id } });
      const isActive = activeSet.has(w);

      if (!isActive) {
        cell.classList.add('empty');
      } else {
        cell.style.background = row.color;
        if (row.type === 'phase') {
          // Brightness = completion of that week's tasks
          const { pct } = computeWeek(row.id, w);
          if (pct >= 0.999) cell.classList.add('done');
          else if (pct > 0.5) cell.classList.add('active');
          else if (pct > 0) cell.classList.add('medium');
          else cell.classList.add('active'); // not yet started but scheduled
        } else {
          // track row — show light
          cell.classList.add('light');
        }
      }

      if (w === cw && isActive) {
        cell.classList.add('current-week');
      }

      // Hover tooltip
      cell.addEventListener('mouseenter', (ev) => showTooltip(ev, row, w));
      cell.addEventListener('mouseleave', hideTooltip);
      cell.addEventListener('click', () => {
        if (isActive) scrollToSection(row.id, row.type);
      });

      rowEl.appendChild(cell);
    }
    grid.appendChild(rowEl);
  });
}

function updateTimelineRow(rowId) {
  const row = TIMELINE_ROWS.find(r => r.id === rowId);
  if (!row || row.type !== 'phase') return;
  const cw = currentWeek();
  document.querySelectorAll(`.tl-cell[data-row="${rowId}"]`).forEach(cell => {
    const w = parseInt(cell.dataset.week);
    const activeSet = row.activeWeeks === 'all'
      ? new Set(Array.from({length: TOTAL_WEEKS}, (_, i) => i))
      : new Set(row.activeWeeks);
    if (!activeSet.has(w)) return;
    const { pct } = computeWeek(rowId, w);
    cell.classList.remove('done', 'active', 'medium');
    if (pct >= 0.999) cell.classList.add('done');
    else if (pct > 0.5) cell.classList.add('active');
    else if (pct > 0) cell.classList.add('medium');
    else cell.classList.add('active');
  });
}

function showTooltip(ev, row, week) {
  const tt = document.getElementById('tlTooltip');
  let txt = `${row.label} · W${week}`;
  if (row.type === 'phase') {
    const { done, total } = computeWeek(row.id, week);
    if (total > 0) txt += ` · ${done}/${total} tasks`;
  }
  tt.textContent = txt;
  const rect = ev.target.getBoundingClientRect();
  tt.style.left = (rect.left + rect.width / 2 - 80) + 'px';
  tt.style.top = (rect.top - 32) + 'px';
  tt.classList.add('show');
}
function hideTooltip() {
  document.getElementById('tlTooltip').classList.remove('show');
}

function scrollToSection(id, type) {
  let target;
  if (type === 'phase') {
    target = document.querySelector(`[data-phase-id="${id}"]`);
    if (target) {
      if (!state.expanded[id]) {
        state.expanded[id] = true;
        target.classList.add('open');
        saveState();
      }
    }
  } else if (type === 'track') {
    target = document.querySelector(`[data-track-id="${id}"]`);
  }
  if (target) {
    const yOffset = -100;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// ==============================================================
// =============== TASK/PHASE/TRACK RENDER ======================
// ==============================================================

// ==============================================================
// =============== TASK TIMING (interval model) =================
// ==============================================================
// state.taskMeta[id] = { intervals: [{s, e}], completedAt }
// status: done (state.tasks[id]===true) | running (open interval) |
//         paused (closed intervals, not done) | todo (nothing)
function taskMetaOf(id) { return state.taskMeta && state.taskMeta[id]; }
function ensureMeta(id) {
  state.taskMeta = state.taskMeta || {};
  if (!state.taskMeta[id]) state.taskMeta[id] = { intervals: [], completedAt: null };
  return state.taskMeta[id];
}
function hasTiming(id) { const m = taskMetaOf(id); return !!(m && m.intervals.length); }
function taskStatus(id) {
  if (state.tasks[id]) return 'done';
  const m = taskMetaOf(id);
  if (!m || !m.intervals.length) return 'todo';
  return m.intervals[m.intervals.length - 1].e == null ? 'running' : 'paused';
}
function taskActiveMs(id) {
  const m = taskMetaOf(id); if (!m) return 0;
  const now = Date.now();
  return m.intervals.reduce((t, iv) => t + ((iv.e == null ? now : iv.e) - iv.s), 0);
}
function runningTaskId() {
  if (!state.taskMeta) return null;
  for (const id in state.taskMeta) {
    if (state.tasks[id]) continue;
    const ivs = state.taskMeta[id].intervals;
    if (ivs.length && ivs[ivs.length - 1].e == null) return id;
  }
  return null;
}
function pauseRunning(except) {
  const r = runningTaskId();
  if (r && r !== except) {
    const ivs = taskMetaOf(r).intervals;
    ivs[ivs.length - 1].e = Date.now();
    refreshTaskRow(r);
  }
}
function startTask(id) {
  pauseRunning(id);            // only one task runs at a time
  const m = ensureMeta(id);
  const last = m.intervals[m.intervals.length - 1];
  if (!last || last.e != null) m.intervals.push({ s: Date.now(), e: null });
  state.tasks[id] = false;
  refreshTaskRow(id); renderActiveBar(); saveState();
}
function pauseTask(id) {
  const m = taskMetaOf(id); if (!m || !m.intervals.length) return;
  const last = m.intervals[m.intervals.length - 1];
  if (last.e == null) last.e = Date.now();
  refreshTaskRow(id); renderActiveBar(); saveState();
}
function completeTaskTiming(id) {
  const m = taskMetaOf(id);
  if (m && m.intervals.length) {
    const last = m.intervals[m.intervals.length - 1];
    if (last.e == null) last.e = Date.now();
    m.completedAt = Date.now();
  }
}
function uncompleteTaskTiming(id) {
  const m = taskMetaOf(id); if (m) m.completedAt = null;
}

function fmtDur(ms) {
  const mins = Math.round(ms / 60000);
  if (mins < 60) return mins + 'm';
  const h = Math.floor(mins / 60), mm = mins % 60;
  return h + 'h' + (mm ? ' ' + mm + 'm' : '');
}
function fmtClock(ms) {
  const s = Math.floor(ms / 1000), p = n => String(n).padStart(2, '0');
  return p(Math.floor(s / 3600)) + ':' + p(Math.floor((s % 3600) / 60)) + ':' + p(s % 60);
}
function fmtDay(ts) { return new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }); }

function getTaskObj(id) {
  for (const p of PLAN) {
    for (const wb of p.weekBlocks) { const t = wb.tasks.find(x => x.id === id); if (t) return t; }
    const d = p.project.deliverables.find(x => x.id === id); if (d) return d;
  }
  for (const tr of TRACKS) { const t = tr.tasks.find(x => x.id === id); if (t) return t; }
  return null;
}

function taskMetaHTML(task) {
  const id = task.id, status = taskStatus(id);
  const est = `~${task.hours}h est`;
  if (status === 'done') {
    if (hasTiming(id)) {
      const act = taskActiveMs(id), m = taskMetaOf(id);
      let cmp = '';
      if (task.hours > 0) {
        const pct = Math.round((act - task.hours * 3600000) / (task.hours * 3600000) * 100);
        if (pct !== 0) cmp = ` · <span class="${pct < 0 ? 'under' : 'over'}">${Math.abs(pct)}% ${pct < 0 ? 'under' : 'over'}</span>`;
      }
      return `${est} · <span class="act">${fmtDur(act)} actual</span>${cmp}${m.completedAt ? ' · done ' + fmtDay(m.completedAt) : ''}`;
    }
    return 'done · <span style="color:var(--text-faint)">time unknown</span>';
  }
  if (status === 'running' || status === 'paused') return `${est} · <span class="act">active ${fmtDur(taskActiveMs(id))}</span>`;
  return est;
}
function taskCtrlHTML(task) {
  const id = task.id, status = taskStatus(id);
  if (status === 'todo') return `<button class="tbtn start" data-act="start">▶ Start</button>`;
  if (status === 'running') return `<span class="live" data-live="${id}">● <span class="lt">${fmtClock(taskActiveMs(id))}</span></span><button class="tbtn pause" data-act="pause">⏸ Pause</button>`;
  if (status === 'paused') return `<span class="tpill paused">⏸ paused</span><button class="tbtn resume" data-act="resume">▶ Resume</button>`;
  return `<span class="tpill done">✓ done</span>`;
}
function refreshTaskRow(id) {
  const row = document.querySelector(`[data-task-id="${id}"]`);
  if (!row) return;
  const task = getTaskObj(id); if (!task || typeof task.hours !== 'number') { if (row) row.classList.toggle('done', !!state.tasks[id]); return; }
  row.classList.toggle('done', !!state.tasks[id]);
  const meta = row.querySelector('.task-hours'); if (meta) meta.innerHTML = taskMetaHTML(task);
  const ctrl = row.querySelector('.task-ctrl'); if (ctrl) ctrl.innerHTML = taskCtrlHTML(task);
}

function renderActiveBar() {
  const bar = document.getElementById('activeBar'); if (!bar) return;
  const id = runningTaskId();
  if (!id) { bar.classList.remove('show'); bar.dataset.activeId = ''; if (pipWindow) renderPiP(); return; }
  const t = getTaskObj(id);
  document.getElementById('activeBarName').textContent = t ? t.text.replace(/<[^>]+>/g, '').replace(/^★\s*/, '') : id;
  document.getElementById('activeBarTime').textContent = fmtClock(taskActiveMs(id));
  bar.dataset.activeId = id;
  const tb = document.querySelector('.topbar');
  bar.style.top = (tb ? tb.offsetHeight : 56) + 'px';
  bar.classList.add('show');
  if (pipWindow) renderPiP();
}

// ==============================================================
// =============== FLOATING TIMER (Document PiP) ================
// ==============================================================
let pipWindow = null, pipTaskId = null;
function pipSupported() { return 'documentPictureInPicture' in window; }

window.openTimerPiP = async function () {
  if (!pipSupported()) { toast('Floating timer needs Chrome or Edge'); return; }
  if (pipWindow) { try { pipWindow.focus(); } catch (e) {} return; }
  pipTaskId = runningTaskId() || pipTaskId;
  try {
    pipWindow = await documentPictureInPicture.requestWindow({ width: 240, height: 150 });
  } catch (e) { toast('Could not open floating timer'); return; }
  const style = pipWindow.document.createElement('style');
  style.textContent =
    'html,body{margin:0;height:100%;background:#0f1115;color:#e8eaf0;font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;-webkit-font-smoothing:antialiased;}' +
    '.pip{display:flex;flex-direction:column;height:100%;justify-content:center;gap:5px;padding:12px 14px;box-sizing:border-box;}' +
    '.pip-task{font-size:12px;color:#9da3b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;gap:6px;}' +
    '.pip-task .dot{color:#34d399;}' +
    '.pip-time{font-family:ui-monospace,Menlo,monospace;font-size:30px;font-weight:700;color:#34d399;font-variant-numeric:tabular-nums;letter-spacing:1px;}' +
    '.pip-time.paused{color:#f59e0b;}' +
    '.pip-meta{font-family:ui-monospace,Menlo,monospace;font-size:10px;color:#6b7080;}' +
    '.pip-btns{display:flex;gap:8px;margin-top:6px;}' +
    '.pip-btns button{flex:1;font-family:ui-monospace,Menlo,monospace;font-size:12px;padding:8px;border-radius:8px;border:1px solid #2a2f3d;background:#20242f;color:#e8eaf0;cursor:pointer;}' +
    '.pip-btns button.done{color:#34d399;border-color:rgba(52,211,153,.4);}' +
    '.pip-btns button.pause{color:#f59e0b;border-color:rgba(245,158,11,.4);}' +
    '.pip-idle{font-size:12px;color:#6b7080;text-align:center;line-height:1.5;}';
  pipWindow.document.head.appendChild(style);
  const root = pipWindow.document.createElement('div');
  root.id = 'pipRoot';
  pipWindow.document.body.appendChild(root);
  root.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-act]'); if (!b || !pipTaskId) return;
    const act = b.dataset.act;
    if (act === 'pause') pauseTask(pipTaskId);
    else if (act === 'resume') startTask(pipTaskId);
    else if (act === 'done') toggleTask(pipTaskId);
  });
  pipWindow.addEventListener('pagehide', () => { pipWindow = null; });
  renderPiP();
};

function renderPiP() {
  if (!pipWindow) return;
  const root = pipWindow.document.getElementById('pipRoot'); if (!root) return;
  const id = runningTaskId() || pipTaskId;
  if (!id) { root.innerHTML = '<div class="pip"><div class="pip-idle">No active task.<br>Start one in the tracker.</div></div>'; return; }
  pipTaskId = id;
  const t = getTaskObj(id), status = taskStatus(id);
  const name = escapeHtml(t ? t.text.replace(/<[^>]+>/g, '').replace(/^★\s*/, '') : id);
  let btns, timeCls = '', dot = '';
  if (status === 'running') { dot = '<span class="dot">●</span>'; btns = '<button class="pause" data-act="pause">⏸ Pause</button><button class="done" data-act="done">✓ Done</button>'; }
  else if (status === 'paused') { timeCls = ' paused'; btns = '<button data-act="resume">▶ Resume</button><button class="done" data-act="done">✓ Done</button>'; }
  else { btns = '<button data-act="resume">▶ Start again</button>'; }
  const meta = (t && typeof t.hours === 'number') ? `~${t.hours}h est · active ${fmtDur(taskActiveMs(id))}` : '';
  root.innerHTML = `<div class="pip"><div class="pip-task">${dot}<span>${name}</span></div>` +
    `<div class="pip-time${timeCls}" id="pipTime">${fmtClock(taskActiveMs(id))}</div>` +
    `<div class="pip-meta">${meta}</div><div class="pip-btns">${btns}</div></div>`;
}
function updatePiPTime() {
  if (!pipWindow) return;
  const id = runningTaskId(); if (!id) return;
  const el = pipWindow.document.getElementById('pipTime'); if (el) el.textContent = fmtClock(taskActiveMs(id));
}

// ==============================================================
// =============== ANALYTICS ====================================
// ==============================================================
function renderAnalyticsHTML() {
  const now = Date.now();
  const weekly = [];
  PLAN.forEach(p => p.weekBlocks.forEach(wb => wb.tasks.forEach(t => {
    if (typeof t.hours === 'number') weekly.push({ id: t.id, week: wb.week, hours: t.hours });
  })));

  let totalActive = 0, estSum = 0, actSum = 0, cycleSum = 0, cycleN = 0;
  const dayset = new Set();
  weekly.forEach(t => {
    const m = taskMetaOf(t.id);
    if (m) m.intervals.forEach(iv => {
      const e = iv.e == null ? now : iv.e;
      totalActive += e - iv.s;
      for (let d = new Date(iv.s).setHours(0, 0, 0, 0); d <= e; d += 86400000) dayset.add(new Date(d).toDateString());
    });
    if (state.tasks[t.id] && hasTiming(t.id)) {
      const a = taskActiveMs(t.id); actSum += a; estSum += t.hours * 3600000; cycleSum += a; cycleN++;
    }
  });
  const estAccuracy = estSum > 0 ? actSum / estSum : null;
  const avgCycle = cycleN ? cycleSum / cycleN : 0;

  // active-day streak
  let streak = 0;
  for (let d = new Date().setHours(0, 0, 0, 0); ; d -= 86400000) { if (dayset.has(new Date(d).toDateString())) streak++; else break; }

  // velocity + projection
  const allIds = allTaskIds();
  const doneTotal = allIds.filter(id => state.tasks[id]).length;
  const daysElapsed = Math.max(1, daysSinceStart());
  const tasksPerDay = doneTotal / daysElapsed;
  const remaining = allIds.length - doneTotal;
  const projFinish = tasksPerDay > 0 ? now + (remaining / tasksPerDay) * 86400000 : null;
  const target = getTargetDate().getTime();
  const finishDelta = projFinish != null ? Math.round((target - projFinish) / 86400000) : null;
  const hoursPerWk = (totalActive / 3600000) / daysElapsed * 7;

  // pace trend (completions last 7d vs prior 7d)
  const doneInRange = (a, b) => allIds.filter(id => { const m = taskMetaOf(id); return state.tasks[id] && m && m.completedAt >= a && m.completedAt < b; }).length;
  const last7 = doneInRange(now - 7 * 86400000, now + 1), prev7 = doneInRange(now - 14 * 86400000, now - 7 * 86400000);
  const trend = (last7 === 0 && prev7 === 0) ? '—' : last7 > prev7 ? '↑ speeding up' : last7 < prev7 ? '↓ slowing' : '→ steady';

  // per-week rows up to current week + 1
  const maxW = Math.min(currentWeek() + 1, TOTAL_WEEKS - 1);
  const byWeek = {};
  weekly.forEach(t => { (byWeek[t.week] = byWeek[t.week] || []).push(t); });
  const rows = Object.keys(byWeek).map(Number).filter(w => w <= maxW).sort((a, b) => a - b).map(w => {
    const ts = byWeek[w]; let starts = [], ends = [], done = 0, est = 0, act = 0, allDone = true;
    ts.forEach(t => {
      est += t.hours; const m = taskMetaOf(t.id);
      if (m && m.intervals.length) { starts.push(m.intervals[0].s); act += taskActiveMs(t.id); }
      if (state.tasks[t.id]) { done++; if (m && m.completedAt) ends.push(m.completedAt); } else allDone = false;
    });
    return { w, total: ts.length, done, est, act,
      started: starts.length ? Math.min(...starts) : null,
      ended: (allDone && ends.length) ? Math.max(...ends) : null, started_any: starts.length > 0, allDone };
  });

  // ---- build HTML ----
  const kpi = (v, l, cls = '', hot = false) => `<div class="an-kpi${hot ? ' hot' : ''}"><div class="v ${cls}">${v}</div><div class="l">${l}</div></div>`;
  const projStr = projFinish != null ? fmtFullDate(projFinish) : '—';
  const deltaStr = finishDelta != null ? (finishDelta >= 0 ? `${finishDelta}d ahead of target` : `${Math.abs(finishDelta)}d behind target`) : 'set timing to project';
  let accStr = '—', accLabel = 'no completed timed tasks yet';
  if (estAccuracy != null) { const pct = Math.round((estAccuracy - 1) * 100); accStr = estAccuracy.toFixed(2) + '×'; accLabel = pct > 0 ? `~${pct}% over estimate` : pct < 0 ? `~${Math.abs(pct)}% under estimate` : 'spot on'; }

  const kpis = `<div class="an-kpis">
    ${kpi(projStr, 'Projected finish · ' + deltaStr, finishDelta != null && finishDelta >= 0 ? 'g' : finishDelta != null ? 'a' : '')}
    ${kpi(trend, 'Pace trend (last 7d vs prior)', trend.startsWith('↑') ? 'g' : trend.startsWith('↓') ? 'a' : '')}
    ${kpi((tasksPerDay * 7).toFixed(1) + ' / wk', 'Velocity · ' + hoursPerWk.toFixed(1) + ' h/wk')}
    ${kpi(accStr, 'Est accuracy · ' + accLabel, estAccuracy != null && estAccuracy > 1 ? 'a' : 'g', true)}
    ${kpi(avgCycle ? fmtDur(avgCycle) : '—', 'Avg cycle time / task')}
    ${kpi(streak + (streak === 1 ? ' day' : ' days'), 'Active-day streak · ' + fmtDur(totalActive) + ' total')}
  </div>`;

  const rowsHTML = rows.map(r => {
    const dvp = r.allDone ? '<span class="ok">done</span>' : (r.done > 0 || r.started_any) ? 'in progress' : '<span class="warn">not started</span>';
    return `<tr><td>${r.w}</td>
      <td>${r.started ? fmtDay(r.started) : '—'}</td>
      <td>${r.ended ? fmtDay(r.ended) : (r.started_any ? 'in progress' : '—')}</td>
      <td>${dvp}</td><td>${r.done}/${r.total}</td><td>${r.est}</td>
      <td>${r.act ? (r.act / 3600000).toFixed(1) : '0'}</td></tr>`;
  }).join('');
  const table = `<table class="an-table"><tr><th>Wk</th><th>Started</th><th>Ended</th><th>Status</th><th>Tasks</th><th>Est h</th><th>Act h</th></tr>${rowsHTML}</table>`;

  const maxH = Math.max(1, ...rows.map(r => Math.max(r.est, r.act / 3600000)));
  const bars = rows.map(r => {
    const ah = (r.act / 3600000), eh = r.est;
    return `<div class="an-barwrap"><div class="an-bargrp">
      <div class="an-bar act" style="height:${Math.round(ah / maxH * 100)}%" title="${ah.toFixed(1)}h actual"></div>
      <div class="an-bar plan" style="height:${Math.round(eh / maxH * 100)}%" title="${eh}h est"></div>
    </div><div class="an-blab">W${r.w}</div></div>`;
  }).join('');
  const chart = `<div class="an-chart"><div class="an-chtitle">Hours per week — actual vs estimated</div>
    <div class="an-bars">${bars}</div>
    <div class="an-legend"><span><i style="background:var(--accent)"></i>Actual active hours</span><span><i style="background:var(--border)"></i>Estimated hours</span></div></div>`;

  const hint = totalActive === 0 ? `<div class="an-empty">No timing data yet — hit ▶ Start on a task and the projection, accuracy, and per-week numbers fill in automatically. Your ${doneTotal} earlier completions are counted as done but excluded from time charts.</div>` : '';

  return `<h3>Analytics</h3>${hint}${kpis}${table}${chart}<div class="modal-actions"><button class="primary" onclick="hideModal()">Close</button></div>`;
}
function fmtFullDate(ts) { return new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); }
window.openAnalytics = function () { showModal(renderAnalyticsHTML(), true); };

function renderTask(task) {
  const isDone = !!state.tasks[task.id];
  const isStretch = task.text && task.text.startsWith('★');
  const timed = typeof task.hours === 'number';
  const wrapper = el('li', {
    class: 'task' + (isDone ? ' done' : '') + (isStretch ? ' stretch' : ''),
    'data-task-id': task.id
  });
  const cb = el('div', { class: 'checkbox' });
  const body = el('div', { class: 'task-body' });
  // Strip leading "★ " so it doesn't double-display
  const cleanText = isStretch ? task.text.replace(/^★\s*/, '') : task.text;
  const text = el('div', { class: 'task-text', html: cleanText });
  body.appendChild(text);
  if (timed) {
    body.appendChild(el('div', { class: 'task-hours', html: taskMetaHTML(task) }));
  }
  wrapper.appendChild(cb);
  wrapper.appendChild(body);

  if (timed) {
    const ctrl = el('div', { class: 'task-ctrl', html: taskCtrlHTML(task) });
    ctrl.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const btn = ev.target.closest('[data-act]');
      if (!btn) return;
      const act = btn.dataset.act;
      if (act === 'start' || act === 'resume') startTask(task.id);
      else if (act === 'pause') pauseTask(task.id);
    });
    wrapper.appendChild(ctrl);
  }

  wrapper.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'A') return;
    if (ev.target.closest('.task-ctrl')) return;
    ev.preventDefault();
    toggleTask(task.id, wrapper);
  });
  return wrapper;
}

function renderResource(r) {
  const wrap = el('div', { class: 'resource' });
  wrap.appendChild(el('div', { class: 'resource-icon' }, [r.icon || '📎']));
  const body = el('div', { class: 'resource-body' });
  const name = el('div', { class: 'resource-name' });
  name.appendChild(el('a', { href: r.url, target: '_blank', rel: 'noopener' }, [r.name]));
  body.appendChild(name);
  if (r.tags && r.tags.length) {
    const meta = el('div', { class: 'resource-meta' });
    r.tags.filter(t => t !== 'new').forEach(tag => meta.appendChild(el('span', { class: 'tag ' + tag }, [tag])));
    body.appendChild(meta);
  }
  if (r.note) body.appendChild(el('div', { class: 'resource-note' }, [r.note]));
  wrap.appendChild(body);
  return wrap;
}

function isWeekOpen(key) {
  return state.weekExpanded ? state.weekExpanded[key] !== false : true;
}

function weekBadgeState(phaseId, weekNum) {
  const { done, total } = computeWeek(phaseId, weekNum);
  const complete = total > 0 && done === total;
  return { text: complete ? '✓ Done' : `${done}/${total}`, complete };
}

function renderPhase(phase) {
  const phaseEl = el('div', {
    class: 'phase' + (state.expanded[phase.id] ? ' open' : '') + (phase.isBuffer ? ' buffer' : ''),
    'data-phase-id': phase.id
  });

  const header = el('div', { class: 'phase-header' });
  header.appendChild(el('div', { class: 'phase-num' }, [phase.number]));

  const meta = el('div', { class: 'phase-meta' });
  meta.appendChild(el('div', { class: 'phase-name' }, [phase.title]));
  const badges = el('div', { class: 'phase-badges' });
  badges.appendChild(el('span', { class: 'badge weeks' }, [phase.weeks]));
  badges.appendChild(el('span', { class: 'badge hours' }, [`~${phaseHours(phase)}h`]));
  if (phase.budget) badges.appendChild(el('span', { class: 'badge budget' }, [phase.budget]));
  const taskBadge = el('span', { class: 'badge', 'data-phase-tasks': phase.id }, ['0/0 tasks']);
  badges.appendChild(taskBadge);
  meta.appendChild(badges);
  header.appendChild(meta);

  const ringColor = phase.isBuffer ? 'var(--pink)' : 'var(--accent)';
  const ring = el('div', { class: 'phase-progress-mini' });
  ring.innerHTML = `
    <svg width="56" height="56">
      <circle class="ring-bg" cx="28" cy="28" r="22" fill="none" stroke-width="4" />
      <circle class="ring-fg" cx="28" cy="28" r="22" fill="none" stroke-width="4"
        stroke="${ringColor}" stroke-dasharray="138.23" stroke-dashoffset="138.23" data-phase-ring="${phase.id}" />
    </svg>
    <div class="ring-pct" data-phase-ring-pct="${phase.id}">0%</div>
  `;
  header.appendChild(ring);
  header.appendChild(el('div', { class: 'chevron' }, ['›']));
  header.addEventListener('click', () => togglePhase(phase.id, phaseEl));
  phaseEl.appendChild(header);

  const body = el('div', { class: 'phase-body' });
  body.appendChild(el('div', { class: 'phase-summary' }, [phase.summary]));

  if (phase.mvp) {
    body.appendChild(el('div', { class: 'phase-mvp', html: `<strong>MINIMUM VIABLE PHASE:</strong> ${phase.mvp}` }));
  }

  body.appendChild(el('div', { class: 'section-label' }, ['Weekly Tasks']));
  phase.weekBlocks.forEach(wb => {
    const wkKey = phase.id + '-w' + wb.week;
    const wbEl = el('div', { class: 'week-block' + (isWeekOpen(wkKey) ? ' open' : '') });
    const head = el('div', { class: 'week-block-head' });
    head.appendChild(el('div', { class: 'week-caret' }, ['›']));
    head.appendChild(el('div', { class: 'week-num' }, [`WEEK ${wb.week}`]));
    head.appendChild(el('div', { class: 'week-focus' }, [wb.focus]));
    const ws = weekBadgeState(phase.id, wb.week);
    head.appendChild(el('span', { class: 'week-status' + (ws.complete ? ' done' : ''), 'data-week-status': wkKey }, [ws.text]));
    head.addEventListener('click', () => {
      const open = wbEl.classList.toggle('open');
      state.weekExpanded = state.weekExpanded || {};
      state.weekExpanded[wkKey] = open;
      saveState();
    });
    wbEl.appendChild(head);
    const list = el('ul', { class: 'tasks-list' });
    wb.tasks.forEach(t => list.appendChild(renderTask(t)));
    wbEl.appendChild(list);
    body.appendChild(wbEl);
  });

  body.appendChild(el('div', { class: 'section-label' }, ['Project Deliverables']));
  const project = el('div', { class: 'project' });
  project.appendChild(el('div', { class: 'project-name' }, [phase.project.name]));
  project.appendChild(el('div', { class: 'project-desc' }, [phase.project.description]));
  const dList = el('ul', { class: 'tasks-list' });
  phase.project.deliverables.forEach(d => dList.appendChild(renderTask(d)));
  project.appendChild(dList);
  body.appendChild(project);

  body.appendChild(el('div', { class: 'section-label' }, ['Resources']));
  const resGrid = el('div', { class: 'resources-grid' });
  phase.resources.forEach(r => resGrid.appendChild(renderResource(r)));
  body.appendChild(resGrid);

  body.appendChild(el('div', { class: 'section-label' }, ['Notes']));
  const notesWrap = el('div', { class: 'notes-wrap' });
  const ta = el('textarea', {
    class: 'notes',
    placeholder: 'Wins, blockers, links, ideas…',
    'data-phase-notes': phase.id
  });
  ta.value = state.notes[phase.id] || '';
  ta.addEventListener('input', () => onNotesInput(phase.id, ta));
  notesWrap.appendChild(ta);
  notesWrap.appendChild(el('div', { class: 'notes-saved', 'data-notes-saved': phase.id }, ['saved']));
  body.appendChild(notesWrap);

  phaseEl.appendChild(body);
  return phaseEl;
}

function renderTrack(tr) {
  const wrap = el('div', { class: 'track', 'data-track-id': tr.id });
  const header = el('div', { class: 'track-header' });
  const title = el('div', { class: 'track-title' });
  title.appendChild(el('span', { class: 'track-emoji' }, [tr.emoji]));
  title.appendChild(document.createTextNode(tr.title));
  header.appendChild(title);
  const ids = trackTaskIds(tr.id);
  const done = ids.filter(id => state.tasks[id]).length;
  header.appendChild(el('div', { class: 'track-count', 'data-track-count': tr.id }, [`${done}/${ids.length}`]));
  wrap.appendChild(header);
  if (tr.note) {
    wrap.appendChild(el('div', { style: 'font-size:12px;color:var(--text-faint);margin-bottom:10px;' }, [tr.note]));
  }
  const list = el('ul', { class: 'tasks-list' });
  tr.tasks.forEach(t => list.appendChild(renderTask(t)));
  wrap.appendChild(list);
  return wrap;
}

// ==============================================================
// =============== GRANULAR UPDATERS ============================
// ==============================================================

function updatePhaseUI(phaseId) {
  const { done, total, pct } = computePhase(phaseId);
  const phase = PLAN.find(p => p.id === phaseId);
  const ring = document.querySelector(`[data-phase-ring="${phaseId}"]`);
  const ringPct = document.querySelector(`[data-phase-ring-pct="${phaseId}"]`);
  const taskBadge = document.querySelector(`[data-phase-tasks="${phaseId}"]`);
  if (ring) {
    const circumference = 2 * Math.PI * 22;
    const offset = circumference - (pct / 100) * circumference;
    ring.setAttribute('stroke-dashoffset', offset);
    if (pct === 100) ring.setAttribute('stroke', 'var(--green)');
    else ring.setAttribute('stroke', phase && phase.isBuffer ? 'var(--pink)' : 'var(--accent)');
  }
  if (ringPct) {
    ringPct.textContent = pct + '%';
    ringPct.style.color = pct === 100 ? 'var(--green)' : 'var(--text)';
  }
  if (taskBadge) {
    taskBadge.textContent = `${done}/${total} tasks`;
    taskBadge.classList.toggle('done', done === total && total > 0);
  }
  if (phase) phase.weekBlocks.forEach(wb => {
    const badge = document.querySelector(`[data-week-status="${phaseId}-w${wb.week}"]`);
    if (badge) {
      const ws = weekBadgeState(phaseId, wb.week);
      badge.textContent = ws.text;
      badge.classList.toggle('done', ws.complete);
    }
  });
  updateTimelineRow(phaseId);
}

function updateTrackUI(trackId) {
  const ids = trackTaskIds(trackId);
  const done = ids.filter(id => state.tasks[id]).length;
  const c = document.querySelector(`[data-track-count="${trackId}"]`);
  if (c) c.textContent = `${done}/${ids.length}`;
}

function updatePaceUI() {
  const { delta, done, expected, currentWeek: cw } = computePace();
  const chip = document.getElementById('paceChip');
  const detail = document.getElementById('paceDetail');
  if (!chip || !detail) return;
  chip.className = 'pace-chip';
  if (delta > 0) {
    chip.classList.add('ahead');
    chip.textContent = `+${delta} task${delta !== 1 ? 's' : ''} ahead`;
  } else if (delta < 0) {
    chip.classList.add('behind');
    chip.textContent = `${Math.abs(delta)} task${Math.abs(delta) !== 1 ? 's' : ''} behind`;
  } else {
    chip.classList.add('on-track');
    chip.textContent = 'On track';
  }
  detail.textContent = `${done}/${expected} weekly tasks by W${cw}`;
}

function updateOverallUI() {
  const { done, total, pct } = computeOverall();
  document.getElementById('globalProgressFill').style.width = pct + '%';
  document.getElementById('topPct').textContent = pct + '%';
  document.getElementById('statDone').textContent = done;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statHours').textContent = computeHoursDone();
  document.getElementById('statDays').textContent = daysSinceStart();
  document.getElementById('currentWeekPill').textContent = 'W' + currentWeek();
  updatePaceUI();
  updateTargetDateUI();
}

function findPhaseIdForTask(taskId) {
  for (const phase of PLAN) {
    for (const wb of phase.weekBlocks) {
      if (wb.tasks.find(t => t.id === taskId)) return phase.id;
    }
    if (phase.project.deliverables.find(d => d.id === taskId)) return phase.id;
  }
  return null;
}
function findTrackIdForTask(taskId) {
  for (const tr of TRACKS) {
    if (tr.tasks.find(t => t.id === taskId)) return tr.id;
  }
  return null;
}

function toggleTask(taskId, taskEl) {
  const newVal = !state.tasks[taskId];
  state.tasks[taskId] = newVal;
  if (newVal) completeTaskTiming(taskId); else uncompleteTaskTiming(taskId);
  const row = taskEl || document.querySelector(`[data-task-id="${taskId}"]`);
  if (row) row.classList.toggle('done', newVal);
  refreshTaskRow(taskId);
  const phaseId = findPhaseIdForTask(taskId);
  if (phaseId) updatePhaseUI(phaseId);
  const trackId = findTrackIdForTask(taskId);
  if (trackId) updateTrackUI(trackId);
  updateOverallUI();
  renderActiveBar();
  applyFilterToTask(row);
  saveState();
}

function togglePhase(phaseId, phaseEl) {
  state.expanded[phaseId] = !state.expanded[phaseId];
  phaseEl.classList.toggle('open', state.expanded[phaseId]);
  saveState();
}

const notesTimers = {};
function onNotesInput(phaseId, ta) {
  state.notes[phaseId] = ta.value;
  clearTimeout(notesTimers[phaseId]);
  const savedIndicator = document.querySelector(`[data-notes-saved="${phaseId}"]`);
  if (savedIndicator) savedIndicator.classList.remove('show');
  notesTimers[phaseId] = setTimeout(async () => {
    await saveStateNow();
    if (savedIndicator) {
      savedIndicator.classList.add('show');
      setTimeout(() => savedIndicator.classList.remove('show'), 1200);
    }
  }, 500);
}

// ==============================================================
// =============== FILTER =======================================
// ==============================================================

function applyFilterToTask(taskEl) {
  if (!taskEl) return;
  const isDone = taskEl.classList.contains('done');
  if (state.filter === 'open' && isDone) taskEl.style.display = 'none';
  else if (state.filter === 'done' && !isDone) taskEl.style.display = 'none';
  else taskEl.style.display = '';
}
function applyFilter() {
  document.querySelectorAll('.task').forEach(applyFilterToTask);
  document.querySelectorAll('.filter-btn[data-filter]').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === state.filter);
  });
}

// ==============================================================
// =============== MODAL helpers ================================
// ==============================================================

function showModal(html, wide) {
  const m = document.getElementById('modalBody');
  const bg = document.getElementById('modalBg');
  m.innerHTML = html;
  m.classList.toggle('wide', !!wide);
  bg.classList.add('show');
}
function hideModal() {
  document.getElementById('modalBg').classList.remove('show');
}
document.getElementById('modalBg').addEventListener('click', (e) => {
  if (e.target.id === 'modalBg') hideModal();
});
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

function doExport() {
  const data = JSON.stringify(state, null, 2);
  showModal(`
    <h3>Export your progress</h3>
    <p>Copy this JSON and save it. Paste back into Import to restore.</p>
    <pre id="exportJson"></pre>
    <div class="modal-actions">
      <button onclick="navigator.clipboard.writeText(document.getElementById('exportJson').textContent); toast('Copied')">Copy</button>
      <button class="primary" onclick="hideModal()">Done</button>
    </div>
  `);
  document.getElementById('exportJson').textContent = data;
}
function doImport() {
  showModal(`
    <h3>Import progress</h3>
    <p>Paste your exported JSON below.</p>
    <textarea class="import-area" id="importJson" placeholder='{"tasks":{...},"notes":{...}}'></textarea>
    <div class="modal-actions">
      <button onclick="hideModal()">Cancel</button>
      <button class="primary" onclick="doImportConfirm()">Import</button>
    </div>
  `);
}
window.doImportConfirm = async function() {
  const txt = document.getElementById('importJson').value.trim();
  if (!txt) { toast('Empty input'); return; }
  try {
    const obj = JSON.parse(txt);
    state = Object.assign({ tasks: {}, taskMeta: {}, notes: {}, expanded: {}, filter: 'all', startedAt: Date.now() }, obj);
    await saveStateNow();
    hideModal();
    fullRender();
    toast('Imported — all good');
  } catch (e) { toast('Invalid JSON'); }
};
function doReset() {
  showModal(`
    <h3 style="color:var(--red)">Reset everything?</h3>
    <p>This clears all checkmarks, notes, and start date. Cannot be undone unless you exported.</p>
    <div class="modal-actions">
      <button onclick="hideModal()">Cancel</button>
      <button class="danger" onclick="doResetConfirm()">Reset all</button>
    </div>
  `);
}
window.doResetConfirm = async function() {
  state = { tasks: {}, taskMeta: {}, notes: {}, expanded: {}, startedAt: Date.now(), filter: 'all', timelineCollapsed: false };
  await saveStateNow();
  hideModal();
  fullRender();
  toast('Reset complete');
};

// ==============================================================
// =============== BOOT =========================================
// ==============================================================

function fullRender() {
  const phasesContainer = document.getElementById('phasesContainer');
  const tracksContainer = document.getElementById('tracksContainer');
  phasesContainer.innerHTML = '';
  tracksContainer.innerHTML = '';

  PLAN.forEach(phase => phasesContainer.appendChild(renderPhase(phase)));

  tracksContainer.appendChild(el('div', {
    class: 'section-label',
    style: 'margin: 0 0 8px;'
  }, ['Parallel Tracks']));
  TRACKS.forEach(tr => tracksContainer.appendChild(renderTrack(tr)));

  renderTimeline();

  PLAN.forEach(p => updatePhaseUI(p.id));
  TRACKS.forEach(tr => updateTrackUI(tr.id));
  updateOverallUI();
  applyFilter();
  renderActiveBar();
}

// ==============================================================
// =============== ARTIFACTS SIDEBAR ============================
// ==============================================================
// Artifacts are discovered live from the practice repo — every top-level
// folder that has a README.md becomes a card. Each README declares its
// tracker metadata in a hidden comment block at the top:
//
//   <!-- artifact
//   emoji: 🧱
//   tasks: p1-w2-t2
//   stack: Python, openai, groq, Pydantic
//   -->
//
// name ← first "# H1" heading · desc ← first paragraph after the H1.
const ARTIFACTS_OWNER = 'm67uzair';
const ARTIFACTS_NAME = 'ai-pivot-practice';
const ARTIFACTS_BRANCH = 'main';
const ARTIFACTS_REPO = `https://github.com/${ARTIFACTS_OWNER}/${ARTIFACTS_NAME}`;
const ARTIFACTS_CACHE_KEY = 'pivot-artifacts-cache-v1';
const ARTIFACTS_TTL = 5 * 60 * 1000; // 5 min

let ARTIFACTS = [];
let artifactsState = 'idle'; // idle | loading | ready | error

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function parseArtifactMeta(md, folder) {
  const meta = { emoji: '📦', name: folder, desc: '', stack: [], taskIds: [] };
  const block = md.match(/<!--\s*artifact\b([\s\S]*?)-->/i);
  if (block) {
    block[1].split('\n').forEach(line => {
      const m = line.match(/^\s*([a-zA-Z]+)\s*:\s*(.+?)\s*$/);
      if (!m) return;
      const key = m[1].toLowerCase(), val = m[2].trim();
      if (key === 'emoji') meta.emoji = val;
      else if (key === 'name') meta.name = val;
      else if (key === 'desc') meta.desc = val;
      else if (key === 'stack') meta.stack = val.split(',').map(s => s.trim()).filter(Boolean);
      else if (key === 'tasks' || key === 'task') meta.taskIds = val.split(',').map(s => s.trim()).filter(Boolean);
    });
  }
  const body = md.replace(/<!--[\s\S]*?-->/g, '');
  const h1 = body.match(/^#\s+(.+?)\s*$/m);
  if (h1 && meta.name === folder) meta.name = h1[1].trim();
  if (!meta.desc) {
    const afterH1 = h1 ? body.slice(body.indexOf(h1[0]) + h1[0].length) : body;
    const paras = afterH1.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
    let p = paras.find(x => !/^[#|\-*>]/.test(x) && !x.startsWith('```'));
    if (p) {
      p = p.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[`*_>#]/g, '').replace(/\s+/g, ' ').trim();
      if (p.length > 220) p = p.slice(0, 217) + '…';
      meta.desc = p;
    }
  }
  return meta;
}

function artifactSortKey(a) {
  const ids = allTaskIds();
  let min = Infinity;
  (a.taskIds || []).forEach(id => {
    const i = ids.indexOf(id);
    if (i >= 0 && i < min) min = i;
  });
  return min;
}

async function fetchArtifacts() {
  // Cache-buster: raw.githubusercontent.com caches files on a CDN for minutes,
  // so a freshly-pushed README can otherwise come back stale.
  const cb = `?cb=${Date.now()}`;
  const treeUrl = `https://api.github.com/repos/${ARTIFACTS_OWNER}/${ARTIFACTS_NAME}/git/trees/${ARTIFACTS_BRANCH}${cb}`;
  const res = await fetch(treeUrl, { cache: 'no-store' });
  if (!res.ok) throw new Error('tree fetch failed: ' + res.status);
  const data = await res.json();
  const dirs = (data.tree || []).filter(n =>
    n.type === 'tree' && !n.path.startsWith('.') && !n.path.startsWith('__'));
  const found = await Promise.all(dirs.map(async d => {
    try {
      const url = `https://raw.githubusercontent.com/${ARTIFACTS_OWNER}/${ARTIFACTS_NAME}/${ARTIFACTS_BRANCH}/${d.path}/README.md${cb}`;
      const r = await fetch(url, { cache: 'no-store' });
      if (!r.ok) return null; // no README → not an artifact
      const meta = parseArtifactMeta(await r.text(), d.path);
      meta.repo = `${ARTIFACTS_REPO}/tree/${ARTIFACTS_BRANCH}/${d.path}`;
      return meta;
    } catch (e) { return null; }
  }));
  return found.filter(Boolean).sort((a, b) => artifactSortKey(a) - artifactSortKey(b));
}

async function loadArtifacts(force) {
  const cachedRaw = await storage.get(ARTIFACTS_CACHE_KEY);
  let cached = null;
  if (cachedRaw) { try { cached = JSON.parse(cachedRaw); } catch (e) {} }
  if (cached && Array.isArray(cached.items) && !ARTIFACTS.length) {
    ARTIFACTS = cached.items;
    artifactsState = 'ready';
    renderArtifacts();
  }
  if (!force && cached && (Date.now() - (cached.ts || 0) < ARTIFACTS_TTL)) return;
  if (!ARTIFACTS.length) { artifactsState = 'loading'; renderArtifacts(); }
  try {
    const items = await fetchArtifacts();
    ARTIFACTS = items;
    artifactsState = 'ready';
    await storage.set(ARTIFACTS_CACHE_KEY, JSON.stringify({ ts: Date.now(), items }));
  } catch (e) {
    console.warn('artifacts fetch failed', e);
    if (!ARTIFACTS.length) artifactsState = 'error';
  }
  renderArtifacts();
}

function artifactStripHtml(s) {
  const tmp = document.createElement('div');
  tmp.innerHTML = s || '';
  return (tmp.textContent || '').replace(/\s+/g, ' ').trim();
}
function artifactTaskInfo(id) {
  for (const phase of PLAN) {
    for (const wb of phase.weekBlocks) {
      const t = wb.tasks.find(x => x.id === id);
      if (t) return { phaseId: phase.id, text: artifactStripHtml(t.text), done: !!state.tasks[id] };
    }
    const d = phase.project.deliverables.find(x => x.id === id);
    if (d) return { phaseId: phase.id, text: artifactStripHtml(d.text), done: !!state.tasks[id] };
  }
  return null;
}

function renderArtifacts() {
  const list = document.getElementById('artifactsList');
  if (!list) return;
  document.getElementById('artifactsCount').textContent = ARTIFACTS.length;
  list.innerHTML = '';

  if (!ARTIFACTS.length) {
    const msg = artifactsState === 'loading' ? 'Loading artifacts…'
      : artifactsState === 'error' ? "Couldn't reach GitHub — tap ↻ to retry."
      : 'No artifacts found yet.';
    list.appendChild(el('div', { style: 'color:var(--text-faint);font-size:12px;font-family:var(--mono);padding:10px;line-height:1.5;' }, [msg]));
    return;
  }

  ARTIFACTS.forEach(a => {
    const card = el('div', { class: 'artifact-card' });
    card.innerHTML =
      `<h3><span>${escapeHtml(a.emoji)}</span>${escapeHtml(a.name)}</h3>` +
      `<p>${escapeHtml(a.desc)}</p>` +
      `<div class="artifact-stack">${(a.stack || []).map(s => `<span>${escapeHtml(s)}</span>`).join('')}</div>` +
      `<div class="artifact-tasks"></div>`;
    const tasksWrap = card.querySelector('.artifact-tasks');
    (a.taskIds || []).forEach(id => {
      const info = artifactTaskInfo(id);
      if (!info) return;
      const txt = info.text.length > 54 ? info.text.slice(0, 53) + '…' : info.text;
      const btn = el('button', {
        class: 'artifact-task' + (info.done ? ' done' : ''),
        title: 'Jump to: ' + info.text,
        onclick: () => { closeArtifacts(); scrollToSection(info.phaseId, 'phase'); }
      });
      btn.innerHTML = `<span class="check">${info.done ? '✓' : ''}</span><span>${escapeHtml(txt)}</span>`;
      tasksWrap.appendChild(btn);
    });
    const link = el('a', { class: 'artifact-repo', href: a.repo, target: '_blank', rel: 'noopener' });
    link.textContent = '↗ view code';
    card.appendChild(link);
    list.appendChild(card);
  });
}

function openArtifacts() {
  renderArtifacts();
  loadArtifacts(); // TTL-guarded refresh when the panel is opened
  document.getElementById('artifactsPanel').classList.add('open');
  document.getElementById('artifactsPanel').setAttribute('aria-hidden', 'false');
  document.getElementById('artifactsBackdrop').classList.add('open');
}
function closeArtifacts() {
  document.getElementById('artifactsPanel').classList.remove('open');
  document.getElementById('artifactsPanel').setAttribute('aria-hidden', 'true');
  document.getElementById('artifactsBackdrop').classList.remove('open');
}
function setupArtifacts() {
  renderArtifacts();
  loadArtifacts();
  document.getElementById('artifactsTab').addEventListener('click', openArtifacts);
  document.getElementById('artifactsClose').addEventListener('click', closeArtifacts);
  document.getElementById('artifactsBackdrop').addEventListener('click', closeArtifacts);
  const refresh = document.getElementById('artifactsRefresh');
  if (refresh) refresh.addEventListener('click', () => { toast('Refreshing artifacts…'); loadArtifacts(true); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeArtifacts(); });
}

async function boot() {
  await loadState();
  fullRender();
  setupArtifacts();

  document.querySelectorAll('.filter-btn[data-filter]').forEach(b => {
    b.addEventListener('click', () => {
      state.filter = b.dataset.filter;
      saveState();
      applyFilter();
    });
  });

  let expandedAll = false;
  document.getElementById('expandAll').addEventListener('click', () => {
    expandedAll = !expandedAll;
    PLAN.forEach(p => {
      state.expanded[p.id] = expandedAll;
      const el = document.querySelector(`[data-phase-id="${p.id}"]`);
      if (el) el.classList.toggle('open', expandedAll);
    });
    document.getElementById('expandAll').textContent = expandedAll ? 'Collapse all' : 'Expand all';
    saveState();
  });

  const tlToggle = document.getElementById('timelineToggle');
  const tlScroller = document.getElementById('timelineScroller');
  if (state.timelineCollapsed) {
    tlScroller.classList.add('collapsed');
    tlToggle.textContent = 'expand';
  }
  tlToggle.addEventListener('click', () => {
    state.timelineCollapsed = !state.timelineCollapsed;
    tlScroller.classList.toggle('collapsed', state.timelineCollapsed);
    tlToggle.textContent = state.timelineCollapsed ? 'expand' : 'collapse';
    saveState();
  });

  document.getElementById('btnSync').addEventListener('click', openSyncModal);
  document.getElementById('btnExport').addEventListener('click', doExport);
  document.getElementById('btnImport').addEventListener('click', doImport);
  document.getElementById('btnAnalytics').addEventListener('click', openAnalytics);
  document.getElementById('btnReset').addEventListener('click', doReset);

  // Active-task bar controls
  document.getElementById('activeBarPause').addEventListener('click', () => {
    const id = document.getElementById('activeBar').dataset.activeId; if (id) pauseTask(id);
  });
  document.getElementById('activeBarDone').addEventListener('click', () => {
    const id = document.getElementById('activeBar').dataset.activeId; if (id) toggleTask(id);
  });
  const floatBtn = document.getElementById('activeBarFloat');
  if (pipSupported()) floatBtn.addEventListener('click', openTimerPiP);
  else floatBtn.style.display = 'none';
  // Live timer tick (display-only, not persisted)
  setInterval(() => {
    const id = runningTaskId(); if (!id) return;
    const ms = taskActiveMs(id);
    const lt = document.querySelector(`[data-live="${id}"] .lt`); if (lt) lt.textContent = fmtClock(ms);
    const bar = document.getElementById('activeBar');
    if (bar.classList.contains('show')) document.getElementById('activeBarTime').textContent = fmtClock(ms);
    updatePiPTime();
  }, 1000);

  cloud.init();
  updateSyncUI();
  cloudSyncOnLoad();
  let focusSyncTimer = null;
  window.addEventListener('focus', () => {
    if (!cloud.enabled || !cloud.user) return;
    clearTimeout(focusSyncTimer);
    focusSyncTimer = setTimeout(cloudSyncOnLoad, 400);
  });

  setInterval(updateOverallUI, 60000);
}

boot();
