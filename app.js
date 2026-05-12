const storageKeys = {
  startDate: "llm-thesis-v2:start-date",
  completed: "llm-thesis-v2:completed",
  completedOn: "llm-thesis-v2:completed-on",
  completedDates: "llm-thesis-v2:completed-dates",
  notes: "llm-thesis-v2:notes",
  quizAnswers: "llm-thesis-v3:quiz-answers",
  reviewAnswers: "llm-thesis-v2:review-answers",
  studyRead: "llm-thesis-v2:study-read",
  builder: "llm-thesis-v2:builder",
  activeLesson: "llm-thesis-v2:active-lesson",
  lastOpenedDate: "llm-thesis-v2:last-opened-date"
};

function getInitialLessonId() {
  const todayKey = localDateKey();
  const lastOpened = localStorage.getItem(storageKeys.lastOpenedDate);
  if (lastOpened !== todayKey) {
    localStorage.setItem(storageKeys.lastOpenedDate, todayKey);
    localStorage.setItem(storageKeys.activeLesson, String(getTodayLesson().id));
    return getTodayLesson().id;
  }
  return Number(localStorage.getItem(storageKeys.activeLesson)) || getTodayLesson().id;
}

const state = {
  completed: new Set(readJson(storageKeys.completed, [])),
  completedOn: readJson(storageKeys.completedOn, {}),
  completedDates: new Set(readJson(storageKeys.completedDates, [])),
  notes: readJson(storageKeys.notes, {}),
  quizAnswers: readJson(storageKeys.quizAnswers, {}),
  reviewAnswers: readJson(storageKeys.reviewAnswers, {}),
  studyRead: readJson(storageKeys.studyRead, {}),
  builder: readJson(storageKeys.builder, {}),
  activeLessonId: getInitialLessonId(),
  activeFilter: "all",
  resetArmed: false
};

const elements = {
  completedCount: document.querySelector("#completedCount"),
  streakCount: document.querySelector("#streakCount"),
  progressPercent: document.querySelector("#progressPercent"),
  progressBar: document.querySelector("#progressBar"),
  todayTitle: document.querySelector("#todayTitle"),
  datePill: document.querySelector("#datePill"),
  lessonWeek: document.querySelector("#lessonWeek"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonStatus: document.querySelector("#lessonStatus"),
  lessonFocus: document.querySelector("#lessonFocus"),
  studyText: document.querySelector("#studyText"),
  studyTerms: document.querySelector("#studyTerms"),
  studyCsAngle: document.querySelector("#studyCsAngle"),
  learnStep: document.querySelector("#learnStep"),
  practiceStep: document.querySelector("#practiceStep"),
  thesisStep: document.querySelector("#thesisStep"),
  lessonResource: document.querySelector("#lessonResource"),
  completeButton: document.querySelector("#completeButton"),
  quizStatus: document.querySelector("#quizStatus"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizChoices: document.querySelector("#quizChoices"),
  quizFeedback: document.querySelector("#quizFeedback"),
  labTime: document.querySelector("#labTime"),
  labTitle: document.querySelector("#labTitle"),
  labSteps: document.querySelector("#labSteps"),
  reviewStatus: document.querySelector("#reviewStatus"),
  reviewList: document.querySelector("#reviewList"),
  studyReadCheck: document.querySelector("#studyReadCheck"),
  quizCheckItem: document.querySelector("#quizCheckItem"),
  noteCheckItem: document.querySelector("#noteCheckItem"),
  checklistStatus: document.querySelector("#checklistStatus"),
  completionHint: document.querySelector("#completionHint"),
  dailyNote: document.querySelector("#dailyNote"),
  saveStatus: document.querySelector("#saveStatus"),
  roadmapList: document.querySelector("#roadmapList"),
  themeList: document.querySelector("#themeList"),
  libraryList: document.querySelector("#libraryList"),
  notesList: document.querySelector("#notesList"),
  resetButton: document.querySelector("#resetButton"),
  exportButton: document.querySelector("#exportButton"),
  thesisForm: document.querySelector("#thesisForm"),
  exportProposalButton: document.querySelector("#exportProposalButton"),
  readinessScore: document.querySelector("#readinessScore"),
  readinessList: document.querySelector("#readinessList"),
  themeRecommendation: document.querySelector("#themeRecommendation"),
  builderFields: {
    title: document.querySelector("#builderTitle"),
    question: document.querySelector("#builderQuestion"),
    algorithm: document.querySelector("#builderAlgorithm"),
    dataset: document.querySelector("#builderDataset"),
    metric: document.querySelector("#builderMetric"),
    contribution: document.querySelector("#builderContribution"),
    limitations: document.querySelector("#builderLimitations")
  }
};

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getStartDate() {
  let start = localStorage.getItem(storageKeys.startDate);
  if (!start) {
    start = localDateKey();
    localStorage.setItem(storageKeys.startDate, start);
  }
  return start;
}

function daysBetween(startKey, end = new Date()) {
  const [year, month, day] = startKey.split("-").map(Number);
  const start = new Date(year, month - 1, day);
  const current = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.max(0, Math.floor((current - start) / 86400000));
}

function getTodayLesson() {
  const index = daysBetween(getStartDate()) % lessons.length;
  return lessons[index];
}

function getLessonById(id) {
  return lessons.find((lesson) => lesson.id === id) || lessons[0];
}

function getStreak() {
  let streak = 0;
  const today = new Date();
  const completionDates = new Set(Object.values(state.completedOn).length > 0
    ? Object.values(state.completedOn)
    : [...state.completedDates]);
  for (let offset = 0; offset < 365; offset += 1) {
    const check = new Date(today);
    check.setDate(today.getDate() - offset);
    if (completionDates.has(localDateKey(check))) {
      streak += 1;
    } else if (offset === 0) {
      continue;
    } else {
      break;
    }
  }
  return streak;
}

function syncCompletedDates() {
  state.completedDates = new Set(Object.values(state.completedOn));
  writeJson(storageKeys.completedDates, [...state.completedDates]);
  writeJson(storageKeys.completedOn, state.completedOn);
}

function renderStats() {
  const completed = state.completed.size;
  const percent = Math.round((completed / lessons.length) * 100);
  elements.completedCount.textContent = String(completed);
  elements.streakCount.textContent = String(getStreak());
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressBar.style.width = `${percent}%`;
}

function countNoteSentences(text) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  const sentenceCount = trimmed.split(/[.!?。！？]+/).filter((part) => part.trim().length > 0).length;
  const wordCount = trimmed.split(/\s+/).filter(Boolean).length;
  return Math.max(sentenceCount, wordCount >= 18 ? 2 : 1);
}

function getCompletionState(lesson) {
  const quiz = quizzes[lesson.id];
  const quizCorrect = Number(state.quizAnswers[lesson.id]) === quiz.answer;
  const studyRead = Boolean(state.studyRead[lesson.id]);
  const noteReady = countNoteSentences(state.notes[lesson.id] || "") >= 2;
  const readyCount = [studyRead, quizCorrect, noteReady].filter(Boolean).length;
  return {
    quizCorrect,
    studyRead,
    noteReady,
    readyCount,
    isReady: readyCount === 3
  };
}

function getLabForLesson(lesson) {
  if (lesson.id <= 7) {
    return {
      title: "Trace the model input-output loop",
      steps: [
        "Write one short prompt.",
        "Underline the words that become context.",
        "Guess the next three likely words and compare with an LLM answer."
      ]
    };
  }
  if (lesson.id <= 14) {
    return {
      title: "Sketch the transformer pipeline",
      steps: [
        "Draw tokens as boxes.",
        "Connect related tokens with attention lines.",
        "Write one sentence explaining why the connection matters."
      ]
    };
  }
  if (lesson.id <= 21) {
    return {
      title: "Compare two prompt strategies",
      steps: [
        "Ask one question directly.",
        "Ask the same question with one example or step-by-step instruction.",
        "Record which answer is clearer and why."
      ]
    };
  }
  if (lesson.id <= 28) {
    return {
      title: "Test a tiny retrieval idea",
      steps: [
        "Pick a paragraph from your notes.",
        "Write a question that paragraph answers.",
        "Decide what chunk should be retrieved before the model answers."
      ]
    };
  }
  if (lesson.id <= 35) {
    return {
      title: "Turn a broad idea into an experiment",
      steps: [
        "Write the variable you will change.",
        "Write the metric you will measure.",
        "Write one limitation of the experiment."
      ]
    };
  }
  return {
    title: "Draft one proposal component",
    steps: [
      "Open the Builder tab.",
      "Fill one empty proposal field.",
      "Make the field specific enough to test or evaluate."
    ]
  };
}

function renderLab(lesson) {
  const lab = getLabForLesson(lesson);
  elements.labTitle.textContent = lab.title;
  elements.labSteps.innerHTML = lab.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
}

function getReviewLessons(activeLesson) {
  return [...state.completed]
    .map((id) => getLessonById(Number(id)))
    .filter((lesson) => lesson.id !== activeLesson.id)
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);
}

function renderReviewQueue(activeLesson) {
  const reviewLessons = getReviewLessons(activeLesson);
  if (reviewLessons.length === 0) {
    elements.reviewStatus.textContent = "After lesson 2";
    elements.reviewList.innerHTML = `<p class="empty-state">Finish a few lessons first. Review questions will appear here automatically.</p>`;
    return;
  }

  const correctCount = reviewLessons.filter((lesson) => {
    const key = String(lesson.id);
    return Number(state.reviewAnswers[key]) === quizzes[lesson.id].answer;
  }).length;

  elements.reviewStatus.textContent = `${correctCount}/${reviewLessons.length} refreshed`;
  elements.reviewList.innerHTML = reviewLessons.map((lesson) => {
    const quiz = quizzes[lesson.id];
    const selected = state.reviewAnswers[lesson.id] !== undefined ? Number(state.reviewAnswers[lesson.id]) : null;
    const correct = selected === quiz.answer;
    return `
      <article class="review-card">
        <small>Day ${lesson.id}: ${lesson.title}</small>
        <p>${escapeHtml(quiz.question)}</p>
        <select data-review-lesson="${lesson.id}" aria-label="Review answer for day ${lesson.id}">
          <option value="">Choose answer</option>
          ${quiz.choices.map((choice, index) => `<option value="${index}" ${selected === index ? "selected" : ""}>${escapeHtml(choice)}</option>`).join("")}
        </select>
        <small>${selected === null ? "Not answered yet." : correct ? quiz.explanation : "Not quite. Re-read the key terms for that lesson."}</small>
      </article>
    `;
  }).join("");
}

function renderChecklist(lesson) {
  const status = getCompletionState(lesson);
  const done = state.completed.has(lesson.id);
  elements.studyReadCheck.checked = status.studyRead;
  elements.quizCheckItem.classList.toggle("is-complete", status.quizCorrect);
  elements.noteCheckItem.classList.toggle("is-complete", status.noteReady);
  elements.checklistStatus.textContent = `${status.readyCount}/3 ready`;
  elements.completionHint.textContent = status.isReady
    ? "Ready to mark this lesson done."
    : "Complete the checklist before marking today done.";
  elements.completionHint.classList.toggle("is-ready", status.isReady);
  elements.completeButton.disabled = !done && !status.isReady;
}

function renderStudyMaterial(lesson) {
  const study = studyMaterials[lesson.id] || {
    text: [lesson.focus],
    terms: ["concept", "task", "metric"],
    cs: lesson.thesis
  };

  elements.studyText.innerHTML = study.text
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  elements.studyTerms.innerHTML = study.terms
    .map((term) => `<li>${escapeHtml(term)}</li>`)
    .join("");
  elements.studyCsAngle.textContent = study.cs;
}

function renderQuiz(lesson) {
  const quiz = quizzes[lesson.id];
  const savedAnswer = state.quizAnswers[lesson.id];
  const hasAnswer = savedAnswer !== undefined;
  const selected = hasAnswer ? Number(savedAnswer) : null;
  const isCorrect = hasAnswer && selected === quiz.answer;

  elements.quizQuestion.textContent = quiz.question;
  elements.quizStatus.textContent = isCorrect ? "Correct" : hasAnswer ? "Try again" : "Not answered";
  elements.quizStatus.classList.toggle("is-correct", isCorrect);
  elements.quizStatus.classList.toggle("is-wrong", hasAnswer && !isCorrect);
  elements.quizFeedback.textContent = isCorrect
    ? quiz.explanation
    : hasAnswer
      ? "Not quite. Try one more choice."
      : "Pick one answer after the lesson.";

  elements.quizChoices.innerHTML = quiz.choices.map((choice, index) => {
    const selectedClass = hasAnswer && selected === index
      ? index === quiz.answer ? "is-correct" : "is-wrong"
      : "";
    return `<button class="choice-button ${selectedClass}" type="button" data-choice-index="${index}" aria-pressed="${selected === index}">${choice}</button>`;
  }).join("");
}

function renderToday() {
  const todayLesson = getTodayLesson();
  const lesson = getLessonById(state.activeLessonId);
  const done = state.completed.has(lesson.id);
  const selectedIsToday = lesson.id === todayLesson.id;

  elements.todayTitle.textContent = selectedIsToday ? lesson.title : `Review: ${lesson.title}`;
  elements.datePill.textContent = selectedIsToday ? `Day ${lesson.id}` : `Lesson ${lesson.id}`;
  elements.lessonWeek.textContent = lesson.week;
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonFocus.textContent = lesson.focus;
  renderStudyMaterial(lesson);
  elements.learnStep.textContent = lesson.learn;
  elements.practiceStep.textContent = lesson.practice;
  elements.thesisStep.textContent = lesson.thesis;
  elements.lessonResource.textContent = `Reading: ${lesson.resource}`;
  elements.lessonResource.href = lesson.url;
  elements.lessonResource.title = "Optional source for today's short reading";
  elements.lessonResource.setAttribute("aria-label", `Open today's reading: ${lesson.resource}`);
  elements.lessonStatus.textContent = done ? "Done" : "Not done";
  elements.lessonStatus.classList.toggle("is-done", done);
  elements.completeButton.textContent = done ? "Done today" : "Mark done";
  elements.completeButton.classList.toggle("is-done", done);
  elements.dailyNote.value = state.notes[lesson.id] || "";
  renderLab(lesson);
  renderQuiz(lesson);
  renderReviewQueue(lesson);
  renderChecklist(lesson);
  localStorage.setItem(storageKeys.activeLesson, String(lesson.id));
}

function renderRoadmap() {
  const groups = lessons.reduce((acc, lesson) => {
    acc[lesson.week] = acc[lesson.week] || [];
    acc[lesson.week].push(lesson);
    return acc;
  }, {});

  elements.roadmapList.innerHTML = Object.entries(groups).map(([week, weekLessons]) => `
    <section class="week-group" aria-label="${week}">
      <h3 class="week-title">${week}</h3>
      ${weekLessons.map((lesson) => {
        const done = state.completed.has(lesson.id);
        return `
          <article class="lesson-card ${done ? "is-done" : ""}" data-lesson-id="${lesson.id}" tabindex="0" role="button" aria-label="Open lesson ${lesson.id}: ${lesson.title}">
            <span class="day-number">${lesson.id}</span>
            <div>
              <strong>${lesson.title}</strong>
              <p>${lesson.focus}</p>
            </div>
            <span class="status-badge ${done ? "is-done" : ""}">${done ? "Done" : "Open"}</span>
          </article>
        `;
      }).join("")}
    </section>
  `).join("");
}

function renderThemes() {
  const filtered = state.activeFilter === "all"
    ? themes
    : themes.filter((theme) => theme.tags.includes(state.activeFilter));

  elements.themeList.innerHTML = filtered.map((theme) => `
    <article class="theme-card">
      <div class="theme-meta">
        <span class="tag ${theme.level}">${theme.level}</span>
        ${theme.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <h3>${theme.title}</h3>
      <p><strong>Question:</strong> ${theme.question}</p>
      <p><strong>Method:</strong> ${theme.method}</p>
    </article>
  `).join("");
}

function renderLibrary() {
  elements.libraryList.innerHTML = library.map((item) => `
    <article class="library-card">
      <div class="library-meta">
        <span class="tag">${item.type}</span>
        <span class="tag">${item.source}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.use}</p>
      <a href="${item.url}" target="_blank" rel="noreferrer">Open source</a>
    </article>
  `).join("");
}

function renderNotes() {
  const noteEntries = lessons
    .map((lesson) => ({ lesson, text: state.notes[lesson.id] }))
    .filter((entry) => entry.text && entry.text.trim().length > 0);

  if (noteEntries.length === 0) {
    elements.notesList.innerHTML = `<p class="empty-state">No notes yet. Finish one daily lesson and write two sentences.</p>`;
    return;
  }

  elements.notesList.innerHTML = noteEntries.map(({ lesson, text }) => `
    <article class="note-card">
      <h3>Day ${lesson.id}: ${lesson.title}</h3>
      <p>${escapeHtml(text).replace(/\n/g, "<br>")}</p>
    </article>
  `).join("");
}

const readinessGroups = [
  { name: "LLM basics", ids: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Transformers", ids: [8, 9, 10, 11, 12, 13, 14] },
  { name: "Prompting & alignment", ids: [15, 16, 17, 18, 19, 20, 21] },
  { name: "RAG & systems", ids: [22, 23, 24, 25, 26, 27, 28] },
  { name: "Research method", ids: [29, 30, 31, 32, 33, 34, 35] },
  { name: "Writing", ids: [36, 37, 38, 39, 40, 41, 42] }
];

function getBuilderCompleteness() {
  const fields = ["title", "question", "algorithm", "dataset", "metric", "contribution", "limitations"];
  const filled = fields.filter((field) => (state.builder[field] || "").trim().length > 0).length;
  return Math.round((filled / fields.length) * 100);
}

function renderBuilderFields() {
  Object.entries(elements.builderFields).forEach(([key, field]) => {
    field.value = state.builder[key] || "";
  });
}

function getThemeRecommendation() {
  const text = Object.values(state.builder).join(" ").toLowerCase();
  if (text.includes("code") || text.includes("program")) {
    return "Start with code explanation or unit-test generation. It is CS-focused, easy to evaluate, and you can use small code snippets.";
  }
  if (text.includes("lora") || text.includes("fine") || text.includes("bert")) {
    return "Try BERT-style classifier vs LLM prompt classifier. It is model-wise, measurable, and easier than training a large LLM.";
  }
  if (text.includes("japanese") || text.includes("token")) {
    return "Try Japanese-English tokenizer behavior. It is beginner-friendly and gives clear measurable results like token count and answer quality.";
  }
  return "Try RAG chunk size comparison. It is algorithm-wise, practical, and easy to evaluate with recall@k and answer correctness.";
}

function renderReadiness() {
  const groupScores = readinessGroups.map((group) => {
    const done = group.ids.filter((id) => state.completed.has(id)).length;
    return {
      name: group.name,
      percent: Math.round((done / group.ids.length) * 100),
      done,
      total: group.ids.length
    };
  });

  const lessonAverage = Math.round(groupScores.reduce((sum, group) => sum + group.percent, 0) / groupScores.length);
  const builderScore = getBuilderCompleteness();
  const totalScore = Math.round((lessonAverage * 0.7) + (builderScore * 0.3));

  elements.readinessScore.textContent = `${totalScore}%`;
  elements.readinessList.innerHTML = [
    ...groupScores.map((group) => ({ ...group, display: `${group.done}/${group.total}` })),
    { name: "Proposal fields", percent: builderScore, display: `${builderScore}%` }
  ].map((item) => `
    <div class="readiness-item">
      <header>
        <span>${item.name}</span>
        <strong>${item.display}</strong>
      </header>
      <div class="mini-track" aria-hidden="true">
        <div class="mini-bar" style="width: ${item.percent}%"></div>
      </div>
    </div>
  `).join("");
  elements.themeRecommendation.textContent = getThemeRecommendation();
}

function renderBuilder() {
  renderBuilderFields();
  renderReadiness();
}

function exportProposal() {
  const title = state.builder.title || "Untitled LLM Thesis Proposal";
  const content = `# ${title}

## Research Question
${state.builder.question || ""}

## Model / Algorithm
${state.builder.algorithm || ""}

## Dataset / Material
${state.builder.dataset || ""}

## Evaluation Metric
${state.builder.metric || ""}

## Expected Contribution
${state.builder.contribution || ""}

## Limitations / Risks
${state.builder.limitations || ""}
`;
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "llm-thesis-proposal.md";
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAll() {
  renderStats();
  renderToday();
  renderRoadmap();
  renderThemes();
  renderLibrary();
  renderNotes();
  renderBuilder();
}

function setView(viewName) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === `${viewName}View`);
  });
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewName);
  });
}

document.querySelector(".tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  setView(button.dataset.view);
});

elements.completeButton.addEventListener("click", () => {
  const lesson = getLessonById(state.activeLessonId);
  if (state.completed.has(lesson.id)) {
    state.completed.delete(lesson.id);
    delete state.completedOn[lesson.id];
  } else {
    const completion = getCompletionState(lesson);
    if (!completion.isReady) {
      renderChecklist(lesson);
      return;
    }
    state.completed.add(lesson.id);
    state.completedOn[lesson.id] = localDateKey();
  }
  writeJson(storageKeys.completed, [...state.completed]);
  syncCompletedDates();
  renderAll();
});

elements.lessonResource.addEventListener("click", (event) => {
  const href = elements.lessonResource.getAttribute("href");
  if (href === "#library" || href === "#notes") {
    event.preventDefault();
    setView(href.slice(1));
  }
});

elements.quizChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice-index]");
  if (!button) return;
  const lesson = getLessonById(state.activeLessonId);
  state.quizAnswers[lesson.id] = Number(button.dataset.choiceIndex);
  writeJson(storageKeys.quizAnswers, state.quizAnswers);
  renderToday();
});

elements.studyReadCheck.addEventListener("change", () => {
  const lesson = getLessonById(state.activeLessonId);
  state.studyRead[lesson.id] = elements.studyReadCheck.checked;
  writeJson(storageKeys.studyRead, state.studyRead);
  renderChecklist(lesson);
});

elements.reviewList.addEventListener("change", (event) => {
  const select = event.target.closest("[data-review-lesson]");
  if (!select) return;
  const lessonId = select.dataset.reviewLesson;
  if (select.value === "") {
    delete state.reviewAnswers[lessonId];
  } else {
    state.reviewAnswers[lessonId] = Number(select.value);
  }
  writeJson(storageKeys.reviewAnswers, state.reviewAnswers);
  renderReviewQueue(getLessonById(state.activeLessonId));
});

elements.dailyNote.addEventListener("input", () => {
  const lesson = getLessonById(state.activeLessonId);
  state.notes[lesson.id] = elements.dailyNote.value;
  writeJson(storageKeys.notes, state.notes);
  elements.saveStatus.textContent = "Saved.";
  window.clearTimeout(window.noteSaveTimer);
  window.noteSaveTimer = window.setTimeout(() => {
    elements.saveStatus.textContent = "Autosaves in this browser.";
  }, 1200);
  renderChecklist(lesson);
  renderNotes();
});

elements.roadmapList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-lesson-id]");
  if (!card) return;
  state.activeLessonId = Number(card.dataset.lessonId);
  renderToday();
  setView("today");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.roadmapList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-lesson-id]");
  if (!card) return;
  event.preventDefault();
  card.click();
});

document.querySelector(".filter-row").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.filter === state.activeFilter);
  });
  renderThemes();
});

elements.exportButton.addEventListener("click", () => {
  const notes = lessons
    .filter((lesson) => state.notes[lesson.id])
    .map((lesson) => `Day ${lesson.id}: ${lesson.title}\n${state.notes[lesson.id]}`)
    .join("\n\n---\n\n");
  const blob = new Blob([notes || "No notes yet."], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "llm-thesis-notes.txt";
  link.click();
  URL.revokeObjectURL(url);
});

elements.thesisForm.addEventListener("input", (event) => {
  const entry = Object.entries(elements.builderFields).find(([, field]) => field === event.target);
  if (!entry) return;
  const [key, field] = entry;
  state.builder[key] = field.value;
  writeJson(storageKeys.builder, state.builder);
  renderReadiness();
});

elements.exportProposalButton.addEventListener("click", exportProposal);

elements.resetButton.addEventListener("click", () => {
  if (!state.resetArmed) {
    state.resetArmed = true;
    elements.resetButton.textContent = "Click again to reset";
    window.clearTimeout(window.resetTimer);
    window.resetTimer = window.setTimeout(() => {
      state.resetArmed = false;
      elements.resetButton.textContent = "Reset tracker";
    }, 3200);
    return;
  }

  window.clearTimeout(window.resetTimer);
  Object.values(storageKeys).forEach((key) => localStorage.removeItem(key));
  state.completed = new Set();
  state.completedOn = {};
  state.completedDates = new Set();
  state.notes = {};
  state.quizAnswers = {};
  state.reviewAnswers = {};
  state.studyRead = {};
  state.builder = {};
  state.resetArmed = false;
  state.activeLessonId = getTodayLesson().id;
  elements.resetButton.textContent = "Reset tracker";
  renderAll();
});

if (window.location.hash === "#library") {
  setView("library");
} else if (window.location.hash === "#builder") {
  setView("builder");
} else if (window.location.hash === "#notes") {
  setView("notes");
}

renderAll();

