const storageKeys = {
  startDate: "llm-thesis-v2:start-date",
  trackStartDates: "llm-thesis-v4:track-start-dates",
  completed: "llm-thesis-v2:completed",
  completedOn: "llm-thesis-v2:completed-on",
  completedDates: "llm-thesis-v2:completed-dates",
  notes: "llm-thesis-v2:notes",
  quizAnswers: "llm-thesis-v3:quiz-answers",
  reviewAnswers: "llm-thesis-v2:review-answers",
  studyRead: "llm-thesis-v2:study-read",
  builder: "llm-thesis-v2:builder",
  activeTrack: "llm-thesis-v4:active-track",
  activeLesson: "llm-thesis-v2:active-lesson",
  activeLessonByTrack: "llm-thesis-v4:active-lesson-by-track",
  lastOpenedDate: "llm-thesis-v2:last-opened-date"
};

const defaultTrackId = "llm";
const urlParams = new URLSearchParams(window.location.search);

function getUrlTrackId() {
  const trackId = urlParams.get("track");
  return tracks[trackId] ? trackId : "";
}

function getStoredTrackId() {
  const urlTrackId = getUrlTrackId();
  if (urlTrackId) {
    localStorage.setItem(storageKeys.activeTrack, urlTrackId);
    return urlTrackId;
  }
  const stored = localStorage.getItem(storageKeys.activeTrack);
  return tracks[stored] ? stored : defaultTrackId;
}

function makeLessonKey(trackId, lessonId) {
  return `${trackId}:${lessonId}`;
}

function normalizeLessonKey(value) {
  const key = String(value);
  return key.includes(":") ? key : makeLessonKey(defaultTrackId, key);
}

function normalizeLessonSet(values) {
  return values.map((value) => normalizeLessonKey(value));
}

function normalizeLessonMap(map) {
  return Object.entries(map).reduce((acc, [key, value]) => {
    acc[normalizeLessonKey(key)] = value;
    return acc;
  }, {});
}

function getTrack(trackId = getStoredTrackId()) {
  return tracks[trackId] || tracks[defaultTrackId];
}

function getTrackLessons(trackId = getStoredTrackId()) {
  return getTrack(trackId).lessons;
}

function getInitialLessonId(trackId) {
  const todayKey = localDateKey();
  const lastOpened = localStorage.getItem(storageKeys.lastOpenedDate);
  const activeLessonsByTrack = readJson(storageKeys.activeLessonByTrack, {});
  if (lastOpened !== todayKey) {
    localStorage.setItem(storageKeys.lastOpenedDate, todayKey);
    activeLessonsByTrack[trackId] = getTodayLesson(trackId).id;
    writeJson(storageKeys.activeLessonByTrack, activeLessonsByTrack);
    if (trackId === defaultTrackId) {
      localStorage.setItem(storageKeys.activeLesson, String(getTodayLesson(trackId).id));
    }
    return getTodayLesson(trackId).id;
  }
  return Number(activeLessonsByTrack[trackId])
    || (trackId === defaultTrackId ? Number(localStorage.getItem(storageKeys.activeLesson)) : 0)
    || getTodayLesson(trackId).id;
}

const hasStoredTrackChoice = Boolean(localStorage.getItem(storageKeys.activeTrack));
const initialTrackId = getStoredTrackId();

const state = {
  completed: new Set(normalizeLessonSet(readJson(storageKeys.completed, []))),
  completedOn: normalizeLessonMap(readJson(storageKeys.completedOn, {})),
  completedDates: new Set(readJson(storageKeys.completedDates, [])),
  notes: normalizeLessonMap(readJson(storageKeys.notes, {})),
  quizAnswers: normalizeLessonMap(readJson(storageKeys.quizAnswers, {})),
  reviewAnswers: normalizeLessonMap(readJson(storageKeys.reviewAnswers, {})),
  studyRead: normalizeLessonMap(readJson(storageKeys.studyRead, {})),
  builder: readJson(storageKeys.builder, {}),
  activeTrack: initialTrackId,
  activeLessonId: getInitialLessonId(initialTrackId),
  activeFilter: "all",
  resetArmed: false
};

const elements = {
  completedCount: document.querySelector("#completedCount"),
  streakCount: document.querySelector("#streakCount"),
  progressPercent: document.querySelector("#progressPercent"),
  progressBar: document.querySelector("#progressBar"),
  todayTitle: document.querySelector("#todayTitle"),
  trackSelect: document.querySelector("#trackSelect"),
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
  codeTaskPanel: document.querySelector("#codeTaskPanel"),
  codeTaskTitle: document.querySelector("#codeTaskTitle"),
  codeTaskGoal: document.querySelector("#codeTaskGoal"),
  codeTaskSnippet: document.querySelector("#codeTaskSnippet"),
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
  categoryList: document.querySelector("#categoryList"),
  themeList: document.querySelector("#themeList"),
  libraryHeading: document.querySelector("#libraryHeading"),
  libraryIntro: document.querySelector("#libraryIntro"),
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

function getActiveTrackId() {
  return state.activeTrack || defaultTrackId;
}

function getStartDate(trackId = getActiveTrackId()) {
  const startDates = readJson(storageKeys.trackStartDates, {});
  let start = startDates[trackId];
  if (!start && trackId === defaultTrackId) {
    start = localStorage.getItem(storageKeys.startDate);
  }
  if (!start) {
    start = localDateKey();
  }
  startDates[trackId] = start;
  writeJson(storageKeys.trackStartDates, startDates);
  if (trackId === defaultTrackId && !localStorage.getItem(storageKeys.startDate)) {
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

function getTodayLesson(trackId = getActiveTrackId()) {
  const activeLessons = getTrackLessons(trackId);
  const index = daysBetween(getStartDate(trackId)) % activeLessons.length;
  return activeLessons[index];
}

function getLessonById(id, trackId = getActiveTrackId()) {
  const activeLessons = getTrackLessons(trackId);
  return activeLessons.find((lesson) => lesson.id === id) || activeLessons[0];
}

function getActiveTrack() {
  return getTrack(getActiveTrackId());
}

function getActiveLessons() {
  return getActiveTrack().lessons;
}

function getActiveQuizzes() {
  return getActiveTrack().quizzes;
}

function getActiveLibrary() {
  return getActiveTrack().library || library;
}

function getLessonKey(lesson, trackId = getActiveTrackId()) {
  return makeLessonKey(trackId, lesson.id);
}

function getStoredLessonValue(store, lesson, trackId = getActiveTrackId()) {
  return store[getLessonKey(lesson, trackId)];
}

function setStoredLessonValue(store, lesson, value, trackId = getActiveTrackId()) {
  store[getLessonKey(lesson, trackId)] = value;
}

function deleteStoredLessonValue(store, lesson, trackId = getActiveTrackId()) {
  delete store[getLessonKey(lesson, trackId)];
}

function isLessonCompleted(lesson, trackId = getActiveTrackId()) {
  return state.completed.has(getLessonKey(lesson, trackId));
}

function saveActiveLessonId() {
  const activeLessonsByTrack = readJson(storageKeys.activeLessonByTrack, {});
  activeLessonsByTrack[getActiveTrackId()] = state.activeLessonId;
  writeJson(storageKeys.activeLessonByTrack, activeLessonsByTrack);
  if (getActiveTrackId() === defaultTrackId) {
    localStorage.setItem(storageKeys.activeLesson, String(state.activeLessonId));
  }
}

function getStreak() {
  let streak = 0;
  const today = new Date();
  const activePrefix = `${getActiveTrackId()}:`;
  const trackDates = Object.entries(state.completedOn)
    .filter(([key]) => key.startsWith(activePrefix))
    .map(([, date]) => date);
  const completionDates = new Set(trackDates.length > 0 ? trackDates : [...state.completedDates]);
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
  const activeLessons = getActiveLessons();
  const completed = activeLessons.filter((lesson) => isLessonCompleted(lesson)).length;
  const percent = Math.round((completed / activeLessons.length) * 100);
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
  const quiz = getActiveQuizzes()[lesson.id];
  const quizCorrect = Number(getStoredLessonValue(state.quizAnswers, lesson)) === quiz.answer;
  const studyRead = Boolean(getStoredLessonValue(state.studyRead, lesson));
  const noteReady = countNoteSentences(getStoredLessonValue(state.notes, lesson) || "") >= 2;
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
  if (getActiveTrackId() === "data-ingestion") {
    if (lesson.id <= 7) {
      return {
        title: "Write the smallest ingestion script",
        steps: [
          "Create three records as dictionaries or rows.",
          "Check one required field and one data type.",
          "Print accepted records and rejected records separately."
        ]
      };
    }
    if (lesson.id <= 14) {
      return {
        title: "Make a batch job repeatable",
        steps: [
          "Read two small CSV files from a folder.",
          "Deduplicate by a stable key.",
          "Write a run summary with rows read, accepted, rejected, and duplicates."
        ]
      };
    }
    if (lesson.id <= 21) {
      return {
        title: "Sketch an ingestion DAG",
        steps: [
          "Draw extract, validate, load, profile, and notify tasks.",
          "Add one checkpoint or last-loaded timestamp.",
          "Write what should happen if the source fails halfway."
        ]
      };
    }
    if (lesson.id <= 28) {
      return {
        title: "Simulate stream reliability",
        steps: [
          "Treat a list of events as a stream.",
          "Store the last processed offset.",
          "Route one invalid event into a dead-letter list."
        ]
      };
    }
    return {
      title: "Turn ingestion into a research prototype",
      steps: [
        "Pick one problem: schema drift, duplicates, profiling, or sampling.",
        "Pick one metric: missing records, duplicate rate, runtime, precision, or recall.",
        "Write the baseline and the improved method you will compare."
      ]
    };
  }

  if (getActiveTrackId() === "data-lake") {
    if (lesson.id <= 7) {
      return {
        title: "Sketch a data lake pipeline",
        steps: [
          "Choose one small dataset, such as event logs.",
          "Write the raw file format and folder path.",
          "Write one query the future analyst needs."
        ]
      };
    }
    return {
      title: "Design a tiny data experiment",
      steps: [
        "Pick one variable: format, partition, or quality rule.",
        "Pick one metric: query time, files scanned, or errors found.",
        "Write what result would support your thesis."
      ]
    };
  }

  if (getActiveTrackId() === "blockchain-consensus") {
    if (lesson.id <= 7) {
      return {
        title: "Trace a consensus decision",
        steps: [
          "Draw four nodes.",
          "Choose one proposed block.",
          "Mark which nodes agree, disagree, or fail."
        ]
      };
    }
    return {
      title: "Plan a small consensus simulation",
      steps: [
        "Pick one variable: nodes, delay, difficulty, or faulty nodes.",
        "Pick one metric: fork count, commit latency, or message count.",
        "Write one assumption your simulation makes."
      ]
    };
  }

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

function renderCodeTask(lesson) {
  const task = getActiveTrack().codeTasks?.[lesson.id];
  elements.codeTaskPanel.hidden = !task;
  if (!task) return;
  elements.codeTaskTitle.textContent = task.title;
  elements.codeTaskGoal.textContent = task.explanation || task.goal;
  elements.codeTaskSnippet.textContent = task.code;
}

function getReviewLessons(activeLesson) {
  const activePrefix = `${getActiveTrackId()}:`;
  return [...state.completed]
    .filter((key) => key.startsWith(activePrefix))
    .map((key) => getLessonById(Number(key.split(":")[1])))
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
    return Number(getStoredLessonValue(state.reviewAnswers, lesson)) === getActiveQuizzes()[lesson.id].answer;
  }).length;

  elements.reviewStatus.textContent = `${correctCount}/${reviewLessons.length} refreshed`;
  elements.reviewList.innerHTML = reviewLessons.map((lesson) => {
    const quiz = getActiveQuizzes()[lesson.id];
    const savedAnswer = getStoredLessonValue(state.reviewAnswers, lesson);
    const selected = savedAnswer !== undefined ? Number(savedAnswer) : null;
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
  const done = isLessonCompleted(lesson);
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
  const study = getActiveTrack().studyMaterials[lesson.id] || {
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
  const quiz = getActiveQuizzes()[lesson.id];
  const savedAnswer = getStoredLessonValue(state.quizAnswers, lesson);
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
  const done = isLessonCompleted(lesson);
  const selectedIsToday = lesson.id === todayLesson.id;
  const activeTrackMeta = categoryTracks.find((track) => track.id === getActiveTrackId());

  elements.todayTitle.textContent = selectedIsToday ? lesson.title : `Review: ${lesson.title}`;
  elements.datePill.textContent = selectedIsToday
    ? `${activeTrackMeta.shortTitle} Day ${lesson.id}`
    : `${activeTrackMeta.shortTitle} Lesson ${lesson.id}`;
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
  elements.dailyNote.value = getStoredLessonValue(state.notes, lesson) || "";
  renderLab(lesson);
  renderCodeTask(lesson);
  renderQuiz(lesson);
  renderReviewQueue(lesson);
  renderChecklist(lesson);
  saveActiveLessonId();
}

function renderRoadmap() {
  const groups = getActiveLessons().reduce((acc, lesson) => {
    acc[lesson.week] = acc[lesson.week] || [];
    acc[lesson.week].push(lesson);
    return acc;
  }, {});

  elements.roadmapList.innerHTML = Object.entries(groups).map(([week, weekLessons]) => `
    <section class="week-group" aria-label="${week}">
      <h3 class="week-title">${week}</h3>
      ${weekLessons.map((lesson) => {
        const done = isLessonCompleted(lesson);
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

function renderTrackSelect() {
  elements.trackSelect.innerHTML = categoryTracks.map((track) => `
    <option value="${escapeHtml(track.id)}" ${track.id === getActiveTrackId() ? "selected" : ""}>${escapeHtml(track.title)}</option>
  `).join("");
}

function renderCategories() {
  elements.categoryList.innerHTML = categoryTracks.map((track) => {
    const trackLessons = getTrackLessons(track.id);
    const completed = trackLessons.filter((lesson) => isLessonCompleted(lesson, track.id)).length;
    const percent = Math.round((completed / trackLessons.length) * 100);
    const selected = track.id === getActiveTrackId();
    return `
    <article class="category-card ${selected ? "is-selected" : ""}">
      <div class="category-header">
        <div>
          <p class="eyebrow">${escapeHtml(track.shortTitle)}</p>
          <h3>${escapeHtml(track.title)}</h3>
        </div>
        <span class="tag">${escapeHtml(track.level)}</span>
      </div>

      <p class="category-summary">${escapeHtml(track.summary)}</p>

      <div class="concept-row" aria-label="${escapeHtml(track.title)} key concepts">
        ${track.concepts.map((concept) => `<span>${escapeHtml(concept)}</span>`).join("")}
      </div>

      <div class="category-progress">
        <div>
          <strong>${completed}/${trackLessons.length}</strong>
          <span>lessons done</span>
        </div>
        <div class="mini-track" aria-hidden="true">
          <div class="mini-bar" style="width: ${percent}%"></div>
        </div>
      </div>

      <p class="category-summary"><strong>Today's first lesson:</strong> ${escapeHtml(getTodayLesson(track.id).title)}</p>

      <button class="${selected ? "primary-button" : "secondary-button"} category-action" type="button" data-track-id="${escapeHtml(track.id)}">
        ${selected ? "Selected category" : `Start ${escapeHtml(track.shortTitle)}`}
      </button>
    </article>
  `;
  }).join("");
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
  const activeTrack = getActiveTrack();
  elements.libraryHeading.textContent = activeTrack.libraryTitle || "CS thesis library";
  elements.libraryIntro.textContent = activeTrack.libraryIntro || "Foundation sources for the selected thesis category.";
  elements.libraryList.innerHTML = getActiveLibrary().map((item) => `
    <article class="library-card">
      <div class="library-meta">
        <span class="tag">${escapeHtml(item.type)}</span>
        <span class="tag">${escapeHtml(item.source)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.use)}</p>
      <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Open source</a>
    </article>
  `).join("");
}

function renderNotes() {
  const noteEntries = getActiveLessons()
    .map((lesson) => ({ lesson, text: getStoredLessonValue(state.notes, lesson) }))
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
  if (getActiveTrackId() === "data-ingestion") {
    return "Try a small ingestion pipeline plus profiler. Ingest CSV or API data, validate schema changes, detect duplicates or missing values, and measure correctness plus runtime.";
  }
  if (getActiveTrackId() === "data-lake") {
    return "Try a Data Lake partition strategy comparison. It is systems-focused, measurable, and possible with a small CSV or Parquet dataset.";
  }
  if (getActiveTrackId() === "blockchain-consensus") {
    return "Try a small consensus simulation. Compare message count, commit latency, or fork frequency while changing node count or delay.";
  }
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

function getReadinessGroups() {
  if (getActiveTrackId() === defaultTrackId) return readinessGroups;
  const groups = getActiveLessons().reduce((acc, lesson) => {
    acc[lesson.week] = acc[lesson.week] || [];
    acc[lesson.week].push(lesson.id);
    return acc;
  }, {});
  return Object.entries(groups).map(([name, ids]) => ({ name, ids }));
}

function renderReadiness() {
  const groupScores = getReadinessGroups().map((group) => {
    const done = group.ids.filter((id) => isLessonCompleted(getLessonById(id))).length;
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
  const title = state.builder.title || "Untitled CS Thesis Proposal";
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
  link.download = "cs-thesis-proposal.md";
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
  renderTrackSelect();
  renderStats();
  renderToday();
  renderRoadmap();
  renderCategories();
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

function getCurrentViewName() {
  const activeView = document.querySelector(".view.is-active");
  return activeView ? activeView.id.replace(/View$/, "") : "today";
}

function setActiveTrack(trackId, targetView = "today") {
  if (!tracks[trackId]) return;
  state.activeTrack = trackId;
  localStorage.setItem(storageKeys.activeTrack, trackId);
  state.activeLessonId = getInitialLessonId(trackId);
  saveActiveLessonId();
  renderAll();
  setView(targetView);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector(".tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  setView(button.dataset.view);
});

elements.trackSelect.addEventListener("change", () => {
  setActiveTrack(elements.trackSelect.value, getCurrentViewName());
});

elements.categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-track-id]");
  if (!button) return;
  setActiveTrack(button.dataset.trackId, "today");
});

elements.completeButton.addEventListener("click", () => {
  const lesson = getLessonById(state.activeLessonId);
  const lessonKey = getLessonKey(lesson);
  if (isLessonCompleted(lesson)) {
    state.completed.delete(lessonKey);
    delete state.completedOn[lessonKey];
  } else {
    const completion = getCompletionState(lesson);
    if (!completion.isReady) {
      renderChecklist(lesson);
      return;
    }
    state.completed.add(lessonKey);
    state.completedOn[lessonKey] = localDateKey();
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
  setStoredLessonValue(state.quizAnswers, lesson, Number(button.dataset.choiceIndex));
  writeJson(storageKeys.quizAnswers, state.quizAnswers);
  renderToday();
});

elements.studyReadCheck.addEventListener("change", () => {
  const lesson = getLessonById(state.activeLessonId);
  setStoredLessonValue(state.studyRead, lesson, elements.studyReadCheck.checked);
  writeJson(storageKeys.studyRead, state.studyRead);
  renderChecklist(lesson);
});

elements.reviewList.addEventListener("change", (event) => {
  const select = event.target.closest("[data-review-lesson]");
  if (!select) return;
  const lesson = getLessonById(Number(select.dataset.reviewLesson));
  if (select.value === "") {
    deleteStoredLessonValue(state.reviewAnswers, lesson);
  } else {
    setStoredLessonValue(state.reviewAnswers, lesson, Number(select.value));
  }
  writeJson(storageKeys.reviewAnswers, state.reviewAnswers);
  renderReviewQueue(getLessonById(state.activeLessonId));
});

elements.dailyNote.addEventListener("input", () => {
  const lesson = getLessonById(state.activeLessonId);
  setStoredLessonValue(state.notes, lesson, elements.dailyNote.value);
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
  saveActiveLessonId();
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
  const notes = getActiveLessons()
    .filter((lesson) => getStoredLessonValue(state.notes, lesson))
    .map((lesson) => `Day ${lesson.id}: ${lesson.title}\n${getStoredLessonValue(state.notes, lesson)}`)
    .join("\n\n---\n\n");
  const blob = new Blob([notes || "No notes yet."], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${getActiveTrackId()}-thesis-notes.txt`;
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
  state.activeTrack = defaultTrackId;
  state.resetArmed = false;
  localStorage.setItem(storageKeys.activeTrack, defaultTrackId);
  state.activeLessonId = getTodayLesson(defaultTrackId).id;
  elements.resetButton.textContent = "Reset tracker";
  renderAll();
});

const validViews = ["categories", "today", "roadmap", "themes", "library", "builder", "notes"];
const requestedView = urlParams.get("view");

if (validViews.includes(requestedView)) {
  setView(requestedView);
} else if (window.location.hash === "#categories") {
  setView("categories");
} else if (window.location.hash === "#library") {
  setView("library");
} else if (window.location.hash === "#builder") {
  setView("builder");
} else if (window.location.hash === "#notes") {
  setView("notes");
} else {
  setView("categories");
}

renderAll();

