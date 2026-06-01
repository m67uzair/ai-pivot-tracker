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
        { id: 'p1-w2-t2', text: 'Implement structured outputs with Pydantic + OpenAI JSON mode', hours: 2 },
        { id: 'p1-w2-t3', text: 'Try <a href="https://python.useinstructor.com/" target="_blank" rel="noopener">Instructor library</a> — easier path to structured outputs (rapidly adopted in 2026 JDs)', hours: 1.5 },
        { id: 'p1-w2-t4', text: 'Function/tool calling — build a weather-fetch agent', hours: 2 },
        { id: 'p1-w2-t5', text: '<a href="https://docs.claude.com/en/docs/build-with-claude/prompt-caching" target="_blank" rel="noopener">Anthropic prompt caching</a> — biggest cost lever in 2026; implement on a long system prompt', hours: 1.5 },
        { id: 'p1-w2-t6', text: '🔥 <b>Tokenizer Day</b> — work through <a href="https://github.com/rasbt/LLMs-from-scratch/blob/main/ch02/05_bpe-from-scratch/bpe-from-scratch.ipynb" target="_blank" rel="noopener">Raschka BPE-from-scratch notebook</a> end-to-end. Output: blog post "Why my Urdu prompts cost 3× English" → Gulf-market-relevant portfolio piece + interview talking point.', hours: 6 }
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
    { name: 'Anthropic Interactive Prompt Engineering Tutorial', url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial', icon: '🎓', tags: ['free', 'core'], note: 'Canonical starting point. 9 chapters.' },
    { name: 'Anthropic Courses (GitHub)', url: 'https://github.com/anthropics/courses', icon: '📚', tags: ['free', 'core'] },
    { name: 'DeepLearning.AI — ChatGPT Prompt Eng for Devs', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', icon: '🎓', tags: ['free', 'core'] },
    { name: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', icon: '📖', tags: ['free', 'core'] },
    { name: 'FastAPI Tutorial', url: 'https://fastapi.tiangolo.com/tutorial/', icon: '⚡', tags: ['free', 'core'] },
    { name: 'Instructor Library', url: 'https://python.useinstructor.com/', icon: '🔧', tags: ['free', 'core', 'new'], note: 'Rapidly adopted 2026 structured-output lib. Easier than raw JSON mode.' },
    { name: 'LiteLLM', url: 'https://docs.litellm.ai/', icon: '🔌', tags: ['free', 'core', 'new'], note: 'Provider abstraction. Appears in many production JDs.' },
    { name: 'Anthropic Prompt Caching Guide', url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-caching', icon: '💰', tags: ['free', 'core', 'new'], note: 'Cost-reduction lever. Up to 90% savings on long contexts.' },
    { name: 'Chip Huyen — "AI Engineering" book (O\'Reilly, Dec 2024)', url: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/', icon: '📕', tags: ['paid', 'core'], note: 'The canonical book. Read alongside the plan.' },
    { name: 'Raschka — Build a Large Language Model (From Scratch)', url: 'https://www.manning.com/books/build-a-large-language-model-from-scratch', icon: '📕', tags: ['paid', 'stretch', 'new'], note: 'Read Ch 2 (BPE) + Ch 3 (attention) only. Skip the rest unless ahead of schedule.' },
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
  hours: 67,
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
        { id: 'p2-w5-t3', text: 'Embeddings — try OpenAI text-embedding-3-small vs <a href="https://docs.cohere.com/v2/docs/embed-3" target="_blank" rel="noopener">Cohere v3</a> vs <a href="https://huggingface.co/BAAI/bge-large-en-v1.5" target="_blank" rel="noopener">BGE</a> — quality vs cost', hours: 2 },
        { id: 'p2-w5-t4', text: 'Install Chroma locally, ingest 5 PDFs you care about', hours: 2 },
        { id: 'p2-w5-t5', text: '3 chunking strategies — fixed, recursive, semantic. Compare retrieval quality.', hours: 2 },
        { id: 'p2-w5-t6', text: '🔥 <b>Self-Attention Day</b> — read <a href="https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html" target="_blank" rel="noopener">Raschka — Self-Attention from Scratch</a> + watch first 45min of <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" target="_blank" rel="noopener">Karpathy — Let\'s Build GPT</a>. Output: 500-word note in portfolio repo explaining attention in your own words, citing <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">Vaswani et al.</a>', hours: 6 },
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
        { id: 'p2-w7-t3', text: '<a href="https://docs.cohere.com/v2/docs/rerank-2" target="_blank" rel="noopener">Cohere Rerank</a> API (free tier) or cross-encoder reranker', hours: 2 },
        { id: 'p2-w7-t4', text: 'HyDE — Hypothetical Document Embeddings (improves recall)', hours: 2 },
        { id: 'p2-w7-t5', text: 'Multi-query retrieval + query rewriting', hours: 2 },
        { id: 'p2-w7-t6', text: 'Benchmark latency p50/p95 with/without reranking', hours: 1 }
      ]
    },
    {
      week: 8,
      focus: 'EVALS — the single most important week of this plan',
      tasks: [
        { id: 'p2-w8-t1', text: 'Read <a href="https://hamel.dev/blog/posts/evals/" target="_blank" rel="noopener">Hamel — Your AI Product Needs Evals</a>', hours: 1 },
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
        { id: 'p2-w9-t6', text: 'Write blog post — "What I learned building production RAG"', hours: 3 }
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
      { id: 'p2-d5', text: 'Blog post live (dev.to / Medium / personal site)' }
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
    { name: 'DeepLearning.AI × Arize — Evaluating AI Agents', url: 'https://www.deeplearning.ai/courses/evaluating-ai-agents', icon: '🎓', tags: ['free', 'core'] },
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
  hours: 10,
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
      { id: 'buf1-t6', text: 'First mock system design — "Design a RAG-powered customer support tool" (record yourself)', hours: 1.5 }
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
  mvp: 'If short on time: must-do = W13 (MCP — the 16.9% of postings premium skill) + W14 (ship). Skim DSPy and CrewAI comparisons.',
  weekBlocks: [
    {
      week: 11,
      focus: 'Agent fundamentals + framework comparison',
      tasks: [
        { id: 'p3-w10-t1', text: 'Read <a href="https://www.anthropic.com/research/building-effective-agents" target="_blank" rel="noopener">Anthropic — Building Effective Agents</a>', hours: 2 },
        { id: 'p3-w10-t2', text: '🔥 <b>Raw Agent Loop Day</b> — Build ~60-line ReAct loop with raw Anthropic SDK + tool_use (Thought → Action → Observation). No frameworks. Reference <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">Yao et al. ReAct paper</a>. Push as `raw_agent_loop.py` to portfolio — this is your "explain agents to me" interview artifact.', hours: 6 },
        { id: 'p3-w10-t3', text: 'HuggingFace <a href="https://huggingface.co/learn/agents-course" target="_blank" rel="noopener">Agents Course</a> — Unit 1', hours: 2 },
        { id: 'p3-w10-t4', text: 'Read <a href="https://platform.openai.com/docs/guides/agents" target="_blank" rel="noopener">OpenAI Agents SDK docs</a>', hours: 1 },
        { id: 'p3-w10-t5', text: '30-min hands-on with <a href="https://docs.crewai.com/" target="_blank" rel="noopener">CrewAI</a> + scan <a href="https://docs.ag2.ai/" target="_blank" rel="noopener">AutoGen</a> docs — know when each is named in JDs', hours: 1.5 }
      ]
    },
    {
      week: 12,
      focus: 'LangGraph state machines + budgets',
      tasks: [
        { id: 'p3-w11-t1', text: 'DeepLearning.AI — <a href="https://www.deeplearning.ai/courses/ai-agents-in-langgraph" target="_blank" rel="noopener">AI Agents in LangGraph</a>', hours: 3 },
        { id: 'p3-w11-t2', text: 'LangChain Academy — <a href="https://academy.langchain.com/courses/intro-to-langgraph" target="_blank" rel="noopener">Introduction to LangGraph</a>', hours: 4 },
        { id: 'p3-w11-t3', text: 'Build simple LangGraph state graph with conditional routing', hours: 2 },
        { id: 'p3-w11-t4', text: 'Add checkpoint persistence (SQLite checkpointer)', hours: 1.5 },
        { id: 'p3-w11-t5', text: 'Agent budgets — implement token + step caps. Runaway agents = $$$', hours: 1 }
      ]
    },
    {
      week: 13,
      focus: 'Memory, multi-agent, optimization paradigms',
      tasks: [
        { id: 'p3-w12-t1', text: 'DeepLearning.AI — <a href="https://www.deeplearning.ai/courses/long-term-agentic-memory-with-langgraph" target="_blank" rel="noopener">Long-Term Agentic Memory</a>', hours: 2 },
        { id: 'p3-w12-t2', text: 'LangChain Academy — <a href="https://academy.langchain.com/courses/deep-agents-with-langgraph" target="_blank" rel="noopener">Deep Agents with LangGraph</a>', hours: 3 },
        { id: 'p3-w12-t3', text: 'Implement supervisor + worker multi-agent pattern', hours: 2.5 },
        { id: 'p3-w12-t4', text: 'Human-in-the-loop interrupts with LangGraph', hours: 1.5 },
        { id: 'p3-w12-t5', text: '<a href="https://dspy.ai/" target="_blank" rel="noopener">DSPy</a> 30-min intro — prompt optimization as compilation', hours: 1 }
      ]
    },
    {
      week: 14,
      focus: 'MCP — the must-learn 2026 protocol',
      tasks: [
        { id: 'p3-w13-t1', text: 'Read <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener">MCP spec overview</a> + <a href="https://modelcontextprotocol.io/quickstart" target="_blank" rel="noopener">Quickstart</a>', hours: 1.5 },
        { id: 'p3-w13-t2', text: 'Build first MCP server with FastMCP — exposes 2–3 tools', hours: 3 },
        { id: 'p3-w13-t3', text: 'Connect MCP server to Claude Desktop + test', hours: 1.5 },
        { id: 'p3-w13-t4', text: 'MCP client → call your server from a LangGraph agent', hours: 3 },
        { id: 'p3-w13-t5', text: 'Read <a href="https://blog.modelcontextprotocol.io/" target="_blank" rel="noopener">MCP blog</a> — latest patterns (sampling, notifications)', hours: 1 },
        { id: 'p3-w13-t6', text: 'Tool-call accuracy evals — measure when your agent picks the WRONG tool', hours: 1.5 }
      ]
    },
    {
      week: 15,
      focus: 'Ship Project 3 + new agent surfaces',
      tasks: [
        { id: 'p3-w14-t1', text: 'Build Research Agent — given topic, search via Tavily, summarize, cite', hours: 4 },
        { id: 'p3-w14-t2', text: 'Add self-critique loop before final output', hours: 2 },
        { id: 'p3-w14-t3', text: 'Custom MCP server for your Notion / PDF library', hours: 3 },
        { id: 'p3-w14-t4', text: 'Test prompt injection + add guardrails', hours: 2 },
        { id: 'p3-w14-t5', text: 'Deploy to <a href="https://fly.io" target="_blank" rel="noopener">Fly.io</a>, post blog + Show HN', hours: 2.5 },
        { id: 'p3-w14-t6', text: '★ Browser-use agent primer — try <a href="https://www.browserbase.com/" target="_blank" rel="noopener">Browserbase</a> or Playwright + LLM (one of hottest 2026 categories)', hours: 1.5 },
        { id: 'p3-w14-t7', text: '★ Voice agent primer — <a href="https://platform.openai.com/docs/guides/realtime" target="_blank" rel="noopener">OpenAI Realtime API</a> hello-world', hours: 1.5 }
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
  hours: 52,
  budget: '$50–80 (AWS Bedrock, RDS, ECS, Redis)',
  summary: 'Take one project and harden it for enterprise. Add observability, auth, rate-limits, Kubernetes basics, security depth, async jobs, and AWS Bedrock. Start MLA-C01 prep.',
  mvp: 'If short on time: must-do = W15 (containerization + observability) + W17 (Bedrock + cloud deploy). Defer K8s, load testing, self-hosting.',
  weekBlocks: [
    {
      week: 16,
      focus: 'Containerization + observability + prompt versioning',
      tasks: [
        { id: 'p4-w15-t1', text: 'Multi-stage Dockerfile for FastAPI (slim final image)', hours: 1.5 },
        { id: 'p4-w15-t2', text: 'Structured JSON logging (`loguru` or `structlog`)', hours: 1.5 },
        { id: 'p4-w15-t3', text: 'Prometheus metrics — `prometheus-fastapi-instrumentator`', hours: 1.5 },
        { id: 'p4-w15-t4', text: 'LangSmith production traces with project + env tags', hours: 1.5 },
        { id: 'p4-w15-t5', text: 'Read <a href="https://github.com/fastapi/full-stack-fastapi-template" target="_blank" rel="noopener">Full-Stack FastAPI Template</a> — copy patterns', hours: 2 },
        { id: 'p4-w15-t6', text: 'Prompt versioning — set up <a href="https://docs.smith.langchain.com/old/prompt_engineering" target="_blank" rel="noopener">LangSmith Prompt Hub</a> or PromptLayer', hours: 1.5 }
      ]
    },
    {
      week: 17,
      focus: 'Auth, rate-limits, caching, async jobs',
      tasks: [
        { id: 'p4-w16-t1', text: 'JWT auth in FastAPI (`fastapi-users` or custom)', hours: 2.5 },
        { id: 'p4-w16-t2', text: 'Per-user rate limiting with Redis (`slowapi`)', hours: 2 },
        { id: 'p4-w16-t3', text: 'Semantic caching — Redis + embedding similarity', hours: 2.5 },
        { id: 'p4-w16-t4', text: 'Secrets via env + AWS Secrets Manager', hours: 1.5 },
        { id: 'p4-w16-t5', text: 'Async job queue — <a href="https://docs.celeryq.dev/" target="_blank" rel="noopener">Celery</a> + Redis for long-running LLM jobs', hours: 2 }
      ]
    },
    {
      week: 18,
      focus: 'AWS Bedrock + Kubernetes basics + self-hosting peek',
      tasks: [
        { id: 'p4-w17-t1', text: 'Complete <a href="https://catalog.workshops.aws/building-with-amazon-bedrock" target="_blank" rel="noopener">AWS Bedrock workshop</a>', hours: 4 },
        { id: 'p4-w17-t2', text: 'Migrate app to call Claude via Bedrock (not direct API)', hours: 2.5 },
        { id: 'p4-w17-t3', text: 'Deploy to ECS Fargate (or AppRunner)', hours: 2.5 },
        { id: 'p4-w17-t4', text: 'CloudWatch dashboards + cost alerts', hours: 1 },
        { id: 'p4-w17-t5', text: '★ Kubernetes basics — <a href="https://killercoda.com/playgrounds/scenario/kubernetes" target="_blank" rel="noopener">Killercoda free playground</a> + deploy one pod (K8s is 27% of agentic JDs)', hours: 2.5 },
        { id: 'p4-w17-t6', text: '★ Self-hosting peek — <a href="https://ollama.com/" target="_blank" rel="noopener">Ollama</a> local + try Llama or Qwen', hours: 1 }
      ]
    },
    {
      week: 19,
      focus: 'Eval-gated CI/CD + security + load testing + cert prep',
      tasks: [
        { id: 'p4-w18-t1', text: 'GitHub Actions workflow runs evals on every PR', hours: 2 },
        { id: 'p4-w18-t2', text: 'Red-team prompt-injection eval set', hours: 2 },
        { id: 'p4-w18-t3', text: 'Blue-green deploy (or canary) on ECS', hours: 2.5 },
        { id: 'p4-w18-t4', text: 'Start AWS MLA-C01 prep — Stephane Maarek or Adrian Cantrill course', hours: 2.5 },
        { id: 'p4-w18-t5', text: 'README section: "What I\'d improve at 10× scale"', hours: 1 },
        { id: 'p4-w18-t6', text: 'Load testing — <a href="https://locust.io/" target="_blank" rel="noopener">Locust</a> on your endpoint, document breakpoints', hours: 2 },
        { id: 'p4-w18-t7', text: 'Security deep-dive — PII redaction (<a href="https://microsoft.github.io/presidio/" target="_blank" rel="noopener">Presidio</a>), output filtering, prompt injection at scale', hours: 2.5 }
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
    { name: 'LangSmith Prompt Hub', url: 'https://docs.smith.langchain.com/old/prompt_engineering', icon: '🔖', tags: ['free', 'new'] },
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
      { id: 'buf2-t4', text: 'Run 3 mock interviews — <a href="https://www.pramp.com/" target="_blank" rel="noopener">Pramp</a> or <a href="https://interviewing.io/" target="_blank" rel="noopener">interviewing.io</a>', hours: 3 },
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
    { name: 'Pramp (peer mock interviews, free)', url: 'https://www.pramp.com/', icon: '🎤', tags: ['free', 'core'] },
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
  mvp: 'If short on time: must-do = W19 (pick + design) + W22 (ship to TestFlight). Drop voice/vision and Apple Foundation Models — keep them as stretch.',
  weekBlocks: [
    {
      week: 21,
      focus: 'Pick + design + connect backend',
      tasks: [
        { id: 'p5-w19-t1', text: 'Pick ONE: (a) Flutter Dev Assistant ★recommended, (b) Doc scanner that thinks, (c) Interview prep AI, (d) Urdu/Arabic voice journaling', hours: 1 },
        { id: 'p5-w19-t2', text: 'Write 1-page product spec — user, problem, MVP scope', hours: 2 },
        { id: 'p5-w19-t3', text: 'Sketch UI in Figma or pen-and-paper', hours: 2 },
        { id: 'p5-w19-t4', text: 'Set up Flutter project + connect to Phase 4 backend', hours: 2 },
        { id: 'p5-w19-t5', text: 'Read <a href="https://dasroot.net/posts/2026/03/flutter-local-llms-privacy-first-mobile-ai/" target="_blank" rel="noopener">Flutter + Local LLMs (March 2026)</a>', hours: 1 },
        { id: 'p5-w19-t6', text: 'Set up <a href="https://posthog.com/" target="_blank" rel="noopener">PostHog</a> free analytics', hours: 0.5 }
      ]
    },
    {
      week: 22,
      focus: 'Core AI features + on-device + voice/vision',
      tasks: [
        { id: 'p5-w20-t1', text: 'Integrate <a href="https://pub.dev/packages/flutter_ai_toolkit" target="_blank" rel="noopener">flutter_ai_toolkit</a> for chat UI', hours: 3 },
        { id: 'p5-w20-t2', text: 'Connect to Claude/GPT via your FastAPI backend with streaming', hours: 3 },
        { id: 'p5-w20-t3', text: 'On-device fallback via <a href="https://firebase.google.com/docs/ai-logic" target="_blank" rel="noopener">Firebase AI Logic</a> (Gemini Nano)', hours: 3 },
        { id: 'p5-w20-t4', text: '★ Camera + vision input — pick photo, send to Claude vision API', hours: 2 },
        { id: 'p5-w20-t5', text: '★ Voice input — Whisper API via backend (or on-device Whisper.cpp)', hours: 2 }
      ]
    },
    {
      week: 23,
      focus: 'Auth, payments, notifications, polish',
      tasks: [
        { id: 'p5-w21-t1', text: 'Sign-in with Google (Firebase Auth)', hours: 2 },
        { id: 'p5-w21-t2', text: 'Stripe or Paddle subscription ($9/mo plan)', hours: 4 },
        { id: 'p5-w21-t3', text: 'Per-user rate limit (free 5/day, paid unlimited)', hours: 2 },
        { id: 'p5-w21-t4', text: 'Polish UI — animations, empty/error states', hours: 2 },
        { id: 'p5-w21-t5', text: '★ Push notifications — FCM + AI summary trigger', hours: 2 }
      ]
    },
    {
      week: 24,
      focus: 'Ship + launch + recruit users',
      tasks: [
        { id: 'p5-w22-t1', text: 'Submit to TestFlight (iOS internal testing)', hours: 2 },
        { id: 'p5-w22-t2', text: 'Submit to Play Store Internal Track', hours: 2 },
        { id: 'p5-w22-t3', text: '3-min Loom demo for app store + portfolio', hours: 2 },
        { id: 'p5-w22-t4', text: 'Launch tweet thread + LinkedIn post + Show HN', hours: 2 },
        { id: 'p5-w22-t5', text: 'Get at least 1 paying/sign-up user from outside your network', hours: 3 },
        { id: 'p5-w22-t6', text: 'Update resume + LinkedIn headline with flagship', hours: 1 },
        { id: 'p5-w22-t7', text: 'ASO basics — keywords, screenshots, app description', hours: 1.5 },
        { id: 'p5-w22-t8', text: 'TestFlight beta recruiting — post in r/FlutterDev + Flutter Discord', hours: 1 }
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
      { id: 'tr-net-10', text: '<b>Artifacts discipline</b> — maintain `/artifacts` directory in portfolio repo. Ship ≥1 reusable output per week (SKILL.md, prompt template, eval harness, CLI tool, code snippet, or blog draft). Goal: 25+ artifacts by W24. Steals the best idea from rohitg00\'s repo.' }
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
      { id: 'tr-app-9', text: 'Practice technical English on Loom — 15 min/day for 60 days' }
    ]
  },
  {
    id: 'tr-interview',
    title: 'Interview Prep',
    emoji: '💼',
    note: 'Starts W10. Mostly weekends. NEW in v1.1.',
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
      { id: 'ip-9', text: 'Take-home strategy — template approach for RAG/agent take-homes' },
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

function renderTask(task) {
  const isDone = !!state.tasks[task.id];
  const isStretch = task.text && task.text.startsWith('★');
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
  if (task.hours) {
    body.appendChild(el('div', { class: 'task-hours' }, [`~${task.hours}h`]));
  }
  wrapper.appendChild(cb);
  wrapper.appendChild(body);

  wrapper.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'A') return;
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
    r.tags.forEach(tag => meta.appendChild(el('span', { class: 'tag ' + tag }, [tag])));
    body.appendChild(meta);
  }
  if (r.note) body.appendChild(el('div', { class: 'resource-note' }, [r.note]));
  wrap.appendChild(body);
  return wrap;
}

function isWeekOpen(key) {
  return state.weekExpanded ? state.weekExpanded[key] !== false : true;
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
  badges.appendChild(el('span', { class: 'badge hours' }, [`~${phase.hours}h`]));
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
  updateTimelineRow(phaseId);
}

function updateTrackUI(trackId) {
  const ids = trackTaskIds(trackId);
  const done = ids.filter(id => state.tasks[id]).length;
  const c = document.querySelector(`[data-track-count="${trackId}"]`);
  if (c) c.textContent = `${done}/${ids.length}`;
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
  if (taskEl) taskEl.classList.toggle('done', newVal);
  else {
    const found = document.querySelector(`[data-task-id="${taskId}"]`);
    if (found) found.classList.toggle('done', newVal);
  }
  const phaseId = findPhaseIdForTask(taskId);
  if (phaseId) updatePhaseUI(phaseId);
  const trackId = findTrackIdForTask(taskId);
  if (trackId) updateTrackUI(trackId);
  updateOverallUI();
  applyFilterToTask(taskEl || document.querySelector(`[data-task-id="${taskId}"]`));
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

function showModal(html) {
  const m = document.getElementById('modalBody');
  const bg = document.getElementById('modalBg');
  m.innerHTML = html;
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
    state = Object.assign({ tasks: {}, notes: {}, expanded: {}, filter: 'all', startedAt: Date.now() }, obj);
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
  state = { tasks: {}, notes: {}, expanded: {}, startedAt: Date.now(), filter: 'all', timelineCollapsed: false };
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
}

// ==============================================================
// =============== ARTIFACTS SIDEBAR ============================
// ==============================================================
const ARTIFACTS_REPO = 'https://github.com/m67uzair/ai-pivot-practice';
const ARTIFACTS = [
  {
    name: 'Pokémon CLI', emoji: '🔴',
    desc: 'Fetches the PokéAPI, parses the response into typed Pydantic models, and prints it.',
    repo: ARTIFACTS_REPO + '/tree/main/pokemon-cli',
    stack: ['Python', 'httpx', 'Pydantic'],
    taskIds: ['p0-w0-t8']
  },
  {
    name: 'Multi-Provider Chat Completion', emoji: '💬',
    desc: 'Sends one prompt to Gemini, Groq (Llama 3.3) and OpenRouter, then prints the responses side-by-side to compare.',
    repo: ARTIFACTS_REPO + '/tree/main/chat-completion-script',
    stack: ['Python', 'google-genai', 'groq', 'openai'],
    taskIds: ['p1-w1-t3']
  }
];

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
  ARTIFACTS.forEach(a => {
    const card = el('div', { class: 'artifact-card' });
    card.innerHTML =
      `<h3><span>${a.emoji}</span>${a.name}</h3>` +
      `<p>${a.desc}</p>` +
      `<div class="artifact-stack">${a.stack.map(s => `<span>${s}</span>`).join('')}</div>` +
      `<div class="artifact-tasks"></div>`;
    const tasksWrap = card.querySelector('.artifact-tasks');
    a.taskIds.forEach(id => {
      const info = artifactTaskInfo(id);
      if (!info) return;
      const txt = info.text.length > 54 ? info.text.slice(0, 53) + '…' : info.text;
      const btn = el('button', {
        class: 'artifact-task' + (info.done ? ' done' : ''),
        title: 'Jump to: ' + info.text,
        onclick: () => { closeArtifacts(); scrollToSection(info.phaseId, 'phase'); }
      });
      btn.innerHTML = `<span class="check">${info.done ? '✓' : ''}</span><span>${txt}</span>`;
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
  document.getElementById('artifactsTab').addEventListener('click', openArtifacts);
  document.getElementById('artifactsClose').addEventListener('click', closeArtifacts);
  document.getElementById('artifactsBackdrop').addEventListener('click', closeArtifacts);
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
  document.getElementById('btnReset').addEventListener('click', doReset);

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
