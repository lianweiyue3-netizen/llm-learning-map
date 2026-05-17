# LLM Thesis Tracker - Project Notes

## 1. Project Purpose / 项目目标

This project is a local, free-to-use website for learning CS thesis foundations in about 10 minutes per day. It supports selectable learning tracks for Large Language Models, Data Ingestion, Data Lake, and Blockchain Consensus.

Primary user goal:
- Learn LLM basics gradually.
- Compare LLM, Data Ingestion, Data Lake, and Blockchain Consensus as possible thesis directions.
- Learn data ingestion from scratch, including coding-wise pipeline basics and PDF-inspired data discovery ideas.
- Prepare for an easy computer science thesis.
- Find model-wise / algorithm-wise thesis topics.
- Track daily learning, quiz progress, notes, and thesis proposal readiness.

The app runs locally in the browser and stores progress in `localStorage`.

## 2. Current App URL / 本地运行地址

Current local preview:

```text
http://127.0.0.1:5173/
```

If the server is not running, start one from this project directory:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5173/
```

## 3. Main Files / 文件结构

```text
index.html
styles.css
data.js
app.js
assets/
  cs-thesis-roadmap-ai-v3.png
  cs-thesis-roadmap-ai-v2.png
  cs-thesis-roadmap-ai.png
  llm-roadmap-ai-labeled.png
  llm-roadmap-ai.png
  llm-learning-ai.png
  llm-learning-map.svg
```

### `index.html`

Defines the page structure:
- Sidebar summary and roadmap image.
- Top navigation tabs.
- Categories-first default view.
- Today lesson view.
- Roadmap tab.
- Categories tab.
- Thesis テーマ tab.
- Library tab.
- Builder tab.
- Notes tab.

Important sections:
- `#todayView`
- `#roadmapView`
- `#categoriesView`
- `#themesView`
- `#libraryView`
- `#builderView`
- `#notesView`

Script loading order matters:

```html
<script src="data.js"></script>
<script src="app.js"></script>
```

`data.js` must load before `app.js`.

### `styles.css`

Controls the visual design and responsive layout.

Important style areas:
- Sidebar and roadmap image: `.sidebar`, `.stack-visual`
- Lesson layout: `.today-layout`, `.lesson-panel`, `.note-panel`
- Study content: `.study-panel`
- Mini lab: `.lab-panel`
- Code reading under Daily note: `.code-task-panel`
- Quiz: `.quiz-panel`, `.choice-button`
- Review queue: `.review-panel`
- Daily checklist: `.checklist-panel`
- Thesis builder: `.builder-layout`, `.builder-form`, `.readiness-panel`

Responsive behavior:
- At `max-width: 1200px`, Today view collapses to one column.
- At `max-width: 920px`, the sidebar stacks above the main content.
- At `max-width: 680px`, cards and grids become single-column.

### `data.js`

Contains static app data.

Main exported globals:
- `lessons`
- `studyMaterials`
- `quizzes`
- `dataLakeLessons`
- `dataLakeStudyMaterials`
- `dataLakeQuizzes`
- `dataIngestionLessons`
- `dataIngestionStudyMaterials`
- `dataIngestionQuizzes`
- `dataIngestionCodeTasks`
- `blockchainConsensusLessons`
- `blockchainConsensusStudyMaterials`
- `blockchainConsensusQuizzes`
- `categoryTracks`
- `tracks`
- `themes`
- `library`

Current learning path:
- LLM: 42 lessons over 6 weeks.
- Data Ingestion: 35 lessons over 5 weeks.
- Data Lake: 28 lessons over 4 weeks.
- Blockchain Consensus: 35 lessons over 5 weeks.
- 10-minute structure per lesson.

Theme focus:
- Easy CS thesis topics.
- Model-wise and algorithm-wise topics.
- RAG, prompting, embeddings, LoRA, BERT, code evaluation, tokenizer behavior.

Category track focus:
- LLM: tokenization, transformers, prompting, RAG, evaluation.
- Data Ingestion: CSV/JSON ingestion, schema validation, idempotency, incremental loads, CDC, streaming, profiling, data discovery, and sampling-based maintenance.
- Data Lake: object storage, Parquet, partitioning, metadata, lakehouse table formats.
- Blockchain Consensus: blocks, forks, finality, PoW, PoS, BFT, safety and liveness.
- Each track also owns its own `library`, `libraryTitle`, and `libraryIntro`.
- Data Ingestion also owns `codeTasks`, one small Python-style code reading example plus explanation per lesson.

### `app.js`

Contains app state, rendering, event handling, localStorage, and exports.

Important responsibilities:
- Load and save progress.
- Choose today’s lesson.
- Render study material.
- Render quiz.
- Render mini CS lab.
- Render review queue.
- Enforce daily checklist before completion.
- Render category tracks.
- Render thesis readiness score.
- Save thesis builder fields.
- Export notes and thesis proposal.

## 4. Features / 当前功能

### Daily Lesson

Each lesson includes:
- Lesson focus.
- In-app study material.
- Key terms.
- CS angle.
- 2 / 5 / 3 minute task cards.
- Mini CS lab.
- Code reading panel for Data Ingestion lessons.
- Mini quiz.
- Review queue.
- Daily checklist.
- Optional external reading link.

### Categories

The Categories tab provides four selectable beginner-friendly thesis directions:
- Large Language Model.
- Data Ingestion.
- Data Lake.
- Blockchain Consensus.

Selecting a category changes:
- Today lesson.
- Roadmap.
- Study material.
- Mini quiz.
- Mini CS lab.
- Code reading panel, when the selected category provides one.
- Daily notes.
- Completion progress.
- Review queue.
- Readiness score.
- Library sources.

### Completion Rules

A lesson can only be marked done after:
1. User checks `I read the study material`.
2. User answers the quiz correctly.
3. User writes a daily note with at least 2 sentences.

The completion button is disabled until these are ready.

### Review Queue

The review queue shows recent completed lessons, excluding the active lesson.

Purpose:
- Lightweight spaced review.
- Keeps old quiz concepts active.

Review answers are stored separately from the main quiz answers.

### Thesis Builder

Builder tab fields:
- Working title.
- Research question.
- Model / algorithm.
- Dataset / material.
- Evaluation metric.
- Expected contribution.
- Limitations / risks.

The builder autosaves to `localStorage`.

It can export a Markdown file:

```text
llm-thesis-proposal.md
```

### Thesis Readiness Score

Readiness combines:
- 70% lesson completion progress.
- 30% builder field completeness.

Skill groups:
- LLM basics
- Transformers
- Prompting & alignment
- RAG & systems
- Research method
- Writing
- Proposal fields

### Notes

Daily notes autosave in the browser.

Notes export file:

```text
llm-thesis-notes.txt
```

## 5. localStorage Keys / 浏览器保存数据

Current keys:

```text
llm-thesis-v2:start-date
llm-thesis-v4:track-start-dates
llm-thesis-v2:completed
llm-thesis-v2:completed-on
llm-thesis-v2:completed-dates
llm-thesis-v2:notes
llm-thesis-v3:quiz-answers
llm-thesis-v2:review-answers
llm-thesis-v2:study-read
llm-thesis-v2:builder
llm-thesis-v4:active-track
llm-thesis-v2:active-lesson
llm-thesis-v4:active-lesson-by-track
llm-thesis-v2:last-opened-date
```

Important behavior:
- `active-track` stores the selected category.
- `active-lesson-by-track` stores the selected lesson for each category.
- Track-specific progress is keyed as `trackId:lessonId`, for example `data-lake:1`.
- Old LLM-only numeric lesson IDs are normalized internally to `llm:<id>`.
- `last-opened-date` prevents the app from staying on yesterday’s active lesson.
- On a new day, the app resets the active lesson to today’s lesson.
- Completed lesson dates are tracked by lesson ID in `completed-on`.

## 6. Important Implementation Details / 实现细节

### Today’s Lesson Logic

`getTodayLesson()` calculates the day based on:
- selected track start date
- current local date
- active track lesson count

It loops through the active track lessons using modulo.

### Completion State

`getCompletionState(lesson)` checks:
- study material read
- quiz correct
- note ready

The note is considered ready if:
- it has at least 2 detected sentences, or
- it has enough word count to count as meaningful writing.

### Builder Recommendation

The recommended thesis direction is chosen using simple keyword matching from builder fields:
- selected Data Ingestion track -> ingestion pipeline plus profiler direction.
- selected Data Lake track -> partition strategy comparison direction.
- selected Blockchain Consensus track -> small consensus simulation direction.
- `code` or `program` -> code explanation / unit test generation.
- `lora`, `fine`, or `bert` -> model comparison / fine-tuning direction.
- `japanese` or `token` -> tokenizer behavior.
- default -> RAG chunk size comparison.

This is intentionally simple and transparent.

### User-provided PDF Context

The user provided `C:/Users/lianw/Downloads/discovery-1.pdf`.

Extracted foundation:
- Title: `Aurum: A Data Discovery System`.
- Core direction: data discovery through an Enterprise Knowledge Graph.
- Useful Data Ingestion tie-in: ingestion can produce profiles, signatures, lineage, and relationship metadata while data is already being read.
- PDF-inspired thesis ideas in the app include ingestion-time profiling, column similarity, signatures/sketches, and sampling-based re-profiling.

## 7. Assets / 图片资源

Current active sidebar image:

```text
assets/cs-thesis-roadmap-ai-v3.png
```

Description:
- AI-generated roadmap-style image.
- Main CS thesis roadmap with a neutral CS Topics start branching equally into LLM, Data Ingestion, Data Lake, and Consensus, then Quiz and Thesis.

Previous or unused assets:

```text
assets/cs-thesis-roadmap-ai.png
assets/cs-thesis-roadmap-ai-v2.png
assets/llm-roadmap-ai-labeled.png
assets/llm-roadmap-ai.png
assets/llm-learning-ai.png
assets/llm-learning-map.svg
```

These can be kept as backup unless cleanup is requested.

Generated preview screenshots in the root folder are verification artifacts. They are not required for the app to run.

## 8. Verification / 检查步骤

Use these checks after edits:

```powershell
node --check data.js
node --check app.js
```

Then load:

```text
http://127.0.0.1:5173/
```

Manual checks:
- App opens to Categories by default.
- Today tab loads.
- Study material appears.
- Mini CS lab appears.
- Quiz appears.
- Category selector switches Today/Roadmap/study material/quiz between LLM, Data Ingestion, Data Lake, and Blockchain Consensus.
- Library tab changes sources when the selected category changes.
- Daily checklist appears.
- Builder tab opens.
- Readiness score renders.
- No console errors.
- Mobile layout does not overflow horizontally.

## 9. Known Tradeoffs / 已知取舍

### Static site only

The app is intentionally static:
- no backend
- no login
- no database
- no build step

This keeps it easy to run and free to use, but data stays only in the current browser.

### localStorage persistence

Progress is browser-local. If the browser data is cleared, progress is lost unless notes/proposal were exported.

Possible future addition:
- import/export full progress as JSON.

### Simple recommendation logic

The thesis recommendation is rule-based, not AI-based.

Reason:
- transparent
- fast
- no API dependency
- good enough for beginner thesis direction

Possible future addition:
- richer recommendation scoring based on completed lessons and selected interests.

## 10. Good Future Additions / 次に追加すると良いもの

High-value additions:
1. Full progress export/import as JSON.
2. Theme bookmarking.
3. “Choose my thesis direction” wizard.
4. Built-in glossary tab.
5. Small interactive token counter.
6. RAG experiment worksheet.
7. Calendar reminder or streak calendar.
8. Print-friendly proposal export.

Recommended next priority:

```text
Add full progress export/import as JSON.
```

Reason:
- current app depends on localStorage
- export/import protects the user’s progress
- useful before the user studies for many days

## 11. Development Rules for Future Agents

When editing this project:
- Keep it static unless the user explicitly asks for a backend.
- Keep beginner-friendly explanations.
- Keep thesis topics CS-focused and easy.
- Prefer model/algorithm comparisons over vague social topics.
- Validate with `node --check`.
- Do not remove user progress keys unless the user asks for reset/migration.
- Do not overwrite generated image assets unless explicitly requested.
- Use clear labels in UI. The user is learning from scratch.
- User workflow preference: after each completed project change, stage only relevant files, create a clear commit, and push to `origin/main`.
- Leave unrelated local or untracked files alone unless the user explicitly asks to include them.

## 12. Current Project Status

Status:

```text
Working local static website.
Multi-track learning tracker complete.
LLM, Data Ingestion, Data Lake, and Blockchain Consensus each have lessons, study material, quizzes, labs, notes, roadmap, and progress.
Thesis-prep features added.
Ready for daily use.
```
