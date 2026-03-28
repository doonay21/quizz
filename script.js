const STORAGE_KEYS = {
  quiz: "quizownia-turbo.quiz",
  session: "quizownia-turbo.session",
  history: "quizownia-turbo.history"
};

const STIMULUS_LABELS = {
  calm: "Spokojny",
  standard: "Standard",
  turbo: "Turbo"
};

const REQUIRED_MASTERY_HITS = 2;
const BASE_CORRECT_SCORE = 10;
const STREAK_BONUS_STEP = 1;
const MAX_STREAK_BONUS = 2;
const STREAK_PENALTY_ON_MISTAKE = 1;

const exampleQuiz = {
  title: "Kosmiczna misja",
  description: "Krotka runda z pytaniami o planetach i gwiazdach.",
  settings: {
    sessionSize: 4,
    stimulusMode: "standard",
    shuffleQuestions: false,
    shuffleOptions: false
  },
  items: [
    {
      question: "Ktora planeta jest nazywana Czerwona Planeta?",
      options: ["Mars", "Wenus", "Jowisz", "Merkury"],
      correctAnswer: "Mars",
      hint: "To czwarta planeta od Slonca."
    },
    {
      question: "Co daje Ziemi swiatlo i cieplo?",
      options: ["Ksiezyc", "Slonce", "Saturn", "Kometa"],
      correctAnswer: "Slonce",
      hint: "To gwiazda w centrum naszego ukladu."
    },
    {
      question: "Ktora planeta slynie z pierscieni?",
      options: ["Saturn", "Neptun", "Mars", "Uran"],
      correctAnswer: "Saturn",
      hint: "Jest wielka i gazowa."
    },
    {
      question: "Ktora planeta jest najblizej Slonca?",
      options: ["Merkury", "Wenus", "Mars", "Neptun"],
      correctAnswer: "Merkury",
      hint: "To mala planeta bardzo blisko gwiazdy."
    }
  ]
};

const state = {
  quiz: null,
  session: null,
  history: [],
  activeScene: "builder"
};

const elements = {
  builderScene: document.querySelector("#builderScene"),
  quizScene: document.querySelector("#quizScene"),
  backToBuilderButton: document.querySelector("#backToBuilderButton"),
  quizTitleInput: document.querySelector("#quizTitleInput"),
  sessionSizeInput: document.querySelector("#sessionSizeInput"),
  stimulusModeSelect: document.querySelector("#stimulusModeSelect"),
  quizJsonInput: document.querySelector("#quizJsonInput"),
  builderMessage: document.querySelector("#builderMessage"),
  saveQuizButton: document.querySelector("#saveQuizButton"),
  replaceQuizButton: document.querySelector("#replaceQuizButton"),
  loadExampleButton: document.querySelector("#loadExampleButton"),
  resetAllButton: document.querySelector("#resetAllButton"),
  restartSessionButton: document.querySelector("#restartSessionButton"),
  clearSessionButton: document.querySelector("#clearSessionButton"),
  activeQuizName: document.querySelector("#activeQuizName"),
  scoreValue: document.querySelector("#scoreValue"),
  streakValue: document.querySelector("#streakValue"),
  bestStreakValue: document.querySelector("#bestStreakValue"),
  reviewCountValue: document.querySelector("#reviewCountValue"),
  stimulusModeValue: document.querySelector("#stimulusModeValue"),
  progressLabel: document.querySelector("#progressLabel"),
  progressBar: document.querySelector("#progressBar"),
  quizProgressLabel: document.querySelector("#quizProgressLabel"),
  quizProgressBar: document.querySelector("#quizProgressBar"),
  historyList: document.querySelector("#historyList"),
  historyItemTemplate: document.querySelector("#historyItemTemplate"),
  quizHeading: document.querySelector("#quizHeading"),
  quizDescription: document.querySelector("#quizDescription"),
  questionIndex: document.querySelector("#questionIndex"),
  questionText: document.querySelector("#questionText"),
  hintText: document.querySelector("#hintText"),
  answerGrid: document.querySelector("#answerGrid"),
  feedbackText: document.querySelector("#feedbackText"),
  showHintButton: document.querySelector("#showHintButton"),
  nextQuestionButton: document.querySelector("#nextQuestionButton"),
  questionCard: document.querySelector("#questionCard"),
  rewardPill: document.querySelector("#rewardPill")
};

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function shuffleArray(items) {
  const clone = items.slice();
  let index;
  let swapIndex;
  let temp;

  for (index = clone.length - 1; index > 0; index -= 1) {
    swapIndex = Math.floor(Math.random() * (index + 1));
    temp = clone[index];
    clone[index] = clone[swapIndex];
    clone[swapIndex] = temp;
  }

  return clone;
}

function normalizeStimulusMode(value) {
  if (value === "calm" || value === "turbo") {
    return value;
  }

  return "standard";
}

function normalizeSessionSize(value, itemCount) {
  const parsed = Number.parseInt(value, 10);
  const safeCount = itemCount || 5;
  const fallback = Math.min(5, Math.max(3, safeCount));
  const candidate = Number.isFinite(parsed) ? parsed : fallback;
  return clamp(candidate, 3, Math.max(3, Math.min(10, safeCount)));
}

function normalizeQuiz(rawQuiz, fallbackTitle, overrides) {
  const source = rawQuiz || {};
  const opts = overrides || {};
  const settingsSource = source.settings || {};
  let items;

  if (!source || typeof source !== "object") {
    throw new Error("JSON musi opisywac obiekt quizu.");
  }

  if (!Array.isArray(source.items) || source.items.length === 0) {
    throw new Error("Quiz musi miec tablice items z co najmniej jednym pytaniem.");
  }

  items = source.items.map(function mapItem(item, index) {
    const question = String(item.question || "").trim();
    const correctAnswer = String(item.correctAnswer || "").trim();
    const sourceOptions = Array.isArray(item.options) ? item.options : [];
    const options = [];

    sourceOptions.forEach(function pushOption(option) {
      const value = String(option).trim();
      if (value && options.indexOf(value) === -1) {
        options.push(value);
      }
    });

    if (!question) {
      throw new Error("Pytanie " + (index + 1) + " nie ma tresci.");
    }

    if (!correctAnswer) {
      throw new Error("Pytanie " + (index + 1) + " nie ma correctAnswer.");
    }

    if (options.indexOf(correctAnswer) === -1) {
      options.push(correctAnswer);
    }

    if (options.length < 2) {
      throw new Error("Pytanie " + (index + 1) + " musi miec przynajmniej 2 odpowiedzi.");
    }

    return {
      question: question,
      options: settingsSource.shuffleOptions ? shuffleArray(options) : options,
      correctAnswer: correctAnswer,
      hint: String(item.hint || "").trim()
    };
  });

  return {
    title: String(source.title || fallbackTitle || "Moj quiz").trim(),
    description: String(source.description || "Quiz zapisany lokalnie w przegladarce.").trim(),
    settings: {
      sessionSize: normalizeSessionSize(
        typeof opts.sessionSize !== "undefined" ? opts.sessionSize : settingsSource.sessionSize,
        items.length
      ),
      stimulusMode: normalizeStimulusMode(
        typeof opts.stimulusMode !== "undefined" ? opts.stimulusMode : settingsSource.stimulusMode
      ),
      shuffleQuestions: Boolean(settingsSource.shuffleQuestions),
      shuffleOptions: Boolean(settingsSource.shuffleOptions)
    },
    items: items
  };
}

function createQuestionProgress(items) {
  return items.map(function createProgress() {
    return {
      resolved: false,
      needsReinforcement: true,
      successfulReviewMoments: 0
    };
  });
}

function createSession(quiz) {
  const indexes = quiz.items.map(function mapIndex(_, index) {
    return index;
  });
  const ordered = quiz.settings.shuffleQuestions ? shuffleArray(indexes) : indexes;
  const targetCount = Math.min(quiz.settings.sessionSize, ordered.length);

  return {
    quizTitle: quiz.title,
    queue: ordered.slice(0, targetCount),
    totalQuestions: targetCount,
    currentStep: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    correctCount: 0,
    answeredCount: 0,
    reviewCount: 0,
    questionProgress: createQuestionProgress(quiz.items),
    selectedAnswer: null,
    eliminatedAnswers: [],
    attemptCountForCurrent: 0,
    lastAnswerCorrect: null,
    lastFeedback: "",
    lastEncouragement: "",
    lastGain: 0,
    completed: false,
    revealHint: false
  };
}

function loadFromStorage() {
  state.quiz = readJson(STORAGE_KEYS.quiz, null);
  state.session = readJson(STORAGE_KEYS.session, null);
  state.history = readJson(STORAGE_KEYS.history, []);
}

function saveToStorage() {
  if (state.quiz) {
    localStorage.setItem(STORAGE_KEYS.quiz, JSON.stringify(state.quiz));
  }

  if (state.session) {
    localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(state.session));
  } else {
    localStorage.removeItem(STORAGE_KEYS.session);
  }

  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.history));
}

function setBuilderMessage(message, isError) {
  elements.builderMessage.textContent = message;
  elements.builderMessage.style.color = isError ? "#d72659" : "#355070";
}

function showScene(sceneName) {
  state.activeScene = sceneName;
  elements.builderScene.classList.toggle("is-active", sceneName === "builder");
  elements.quizScene.classList.toggle("is-active", sceneName === "quiz");
}

function applyStimulusMode(mode) {
  document.body.dataset.stimulus = normalizeStimulusMode(mode);
}

function getCurrentItem() {
  const queueIndex = state.session.queue[state.session.currentStep];
  return state.quiz.items[queueIndex];
}

function getSafeQuiz() {
  return state.quiz || normalizeQuiz(exampleQuiz, exampleQuiz.title);
}

function updateBuilderFields() {
  const quiz = getSafeQuiz();
  elements.quizTitleInput.value = quiz.title || "";
  elements.sessionSizeInput.value = String(quiz.settings.sessionSize);
  elements.stimulusModeSelect.value = quiz.settings.stimulusMode;
  elements.quizJsonInput.value = JSON.stringify(
    {
      title: quiz.title,
      description: quiz.description,
      settings: quiz.settings,
      items: quiz.items
    },
    null,
    2
  );
}

function getRewardLabel(session) {
  if (!session) {
    return "Gotowe";
  }

  if (session.completed) {
    return "Runda zakonczona";
  }

  if (session.selectedAnswer) {
    if (session.lastAnswerCorrect) {
      return session.lastEncouragement || ("+" + (session.lastGain || 0) + " pkt");
    }

    return "Powtorka";
  }

  if (session.lastAnswerCorrect) {
    return session.lastEncouragement || ("+" + (session.lastGain || 0) + " pkt");
  }

  return "Wynik: " + session.score;
}

function celebrate() {
  const mode = state.quiz ? state.quiz.settings.stimulusMode : "standard";
  const quizPanel = elements.questionCard.closest(".quiz-panel");
  let colors;
  let pieces;
  let index;

  quizPanel.classList.remove("celebrate");
  void elements.questionCard.offsetWidth;
  quizPanel.classList.add("celebrate");

  if (mode === "calm") {
    return;
  }

  colors = ["#2f80ff", "#6dc7ff", "#8ee3b0", "#8fd8ff", "#ff6e8d"];
  pieces = mode === "turbo" ? 16 : 8;

  for (index = 0; index < pieces; index += 1) {
    const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.style.left = 18 + Math.random() * 64 + "%";
    confetti.style.top = 18 + Math.random() * 12 + "%";
    confetti.style.background = colors[index % colors.length];
    confetti.style.animationDelay = Math.random() * 0.18 + "s";
    document.body.append(confetti);
    window.setTimeout(function removePiece() {
      confetti.remove();
    }, mode === "turbo" ? 1250 : 950);
  }
}

function renderStatus() {
  const quiz = state.quiz;
  const session = state.session;
  const total = session ? session.totalQuestions : (quiz ? quiz.items.length : 0);
  const answered = session ? session.correctCount : 0;
  const progress = total ? Math.round((answered / total) * 100) : 0;
  const mode = quiz ? quiz.settings.stimulusMode : "standard";

  elements.activeQuizName.textContent = quiz ? quiz.title : "Brak aktywnego";
  elements.scoreValue.textContent = String(session ? session.score : 0);
  elements.streakValue.textContent = String(session ? session.streak : 0);
  elements.bestStreakValue.textContent = String(session ? session.bestStreak : 0);
  elements.reviewCountValue.textContent = String(session ? getPendingReviewCount(session) : 0);
  elements.stimulusModeValue.textContent = STIMULUS_LABELS[mode];
  elements.progressLabel.textContent = answered + " / " + total;
  elements.progressBar.style.width = progress + "%";
  elements.quizProgressLabel.textContent = answered + " / " + total;
  elements.quizProgressBar.style.width = progress + "%";
  elements.rewardPill.textContent = getRewardLabel(session);
  applyStimulusMode(mode);
}

function renderHistory() {
  elements.historyList.innerHTML = "";

  if (!state.history.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "history-item";
    emptyItem.innerHTML = "<strong>Brak zapisanych rund</strong><span class='history-meta'>Historia pojawi sie tutaj po ukonczeniu quizu.</span>";
    elements.historyList.append(emptyItem);
    return;
  }

  state.history.slice(0, 6).forEach(function renderEntry(entry) {
    const node = elements.historyItemTemplate.content.firstElementChild.cloneNode(true);
    const label = STIMULUS_LABELS[entry.stimulusMode] || "Standard";
    node.querySelector(".history-title").textContent = entry.quizTitle;
    node.querySelector(".history-meta").textContent =
      entry.score + " pkt • " + entry.correct + "/" + entry.total + " • " + label;
    elements.historyList.append(node);
  });
}

function renderAnswers(item) {
  const eliminatedAnswers = Array.isArray(state.session.eliminatedAnswers)
    ? state.session.eliminatedAnswers
    : [];

  elements.answerGrid.innerHTML = "";

  item.options.forEach(function renderOption(option) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = option;

    if (state.session.selectedAnswer) {
      if (option === state.session.selectedAnswer) {
        button.classList.add("selected");
        button.classList.add(state.session.lastAnswerCorrect ? "correct" : "wrong");
      }

      if (!state.session.lastAnswerCorrect && option === item.correctAnswer) {
        button.classList.add("correct");
      }

      button.disabled = true;
    } else if (eliminatedAnswers.indexOf(option) !== -1) {
      button.classList.add("wrong");
      button.disabled = true;
    } else {
      button.addEventListener("click", function onClick() {
        submitAnswer(option);
      });
    }

    elements.answerGrid.append(button);
  });
}

function buildSummaryText(session) {
  if (session.correctCount === session.totalQuestions && session.reviewCount === 0) {
    return "Brawo. Runda zakonczona bez pomylek. Zdobywasz " + session.score + " pkt.";
  }

  return (
    "Koniec rundy. Masz " +
    session.score +
    " pkt, " +
    session.correctCount +
    "/" +
    session.totalQuestions +
    " zaliczonych pytan i " +
    session.reviewCount +
    " dodatkowych powrotow do pytan."
  );
}

function renderQuestion() {
  const quiz = state.quiz;
  const session = state.session;
  let item;

  if (!quiz || !session) {
    elements.quizHeading.textContent = "Najpierw wczytaj quiz";
    elements.quizDescription.textContent = "Aplikacja czeka na zapisany zestaw pytan.";
    elements.questionIndex.textContent = "Pytanie 0";
    elements.questionText.textContent = "Tutaj pojawi sie pytanie.";
    elements.hintText.textContent = "";
    elements.feedbackText.textContent = "";
    elements.answerGrid.innerHTML = "";
    elements.showHintButton.disabled = true;
    elements.nextQuestionButton.disabled = true;
    return;
  }

  elements.quizHeading.textContent = quiz.title;
  elements.quizDescription.textContent = quiz.description + " Runda: " + session.totalQuestions + " pytan.";

  if (session.completed) {
    elements.questionIndex.textContent = "Runda zakonczona";
    elements.questionText.textContent = buildSummaryText(session);
    elements.hintText.textContent = "";
    elements.feedbackText.textContent = session.lastFeedback + " Mozesz rozpoczec nowa runde albo wrocic do ustawien.";
    elements.answerGrid.innerHTML = "";
    elements.showHintButton.disabled = true;
    elements.nextQuestionButton.disabled = true;
    return;
  }

  item = getCurrentItem();

  elements.questionIndex.textContent = "Pytanie " + (session.currentStep + 1);
  elements.questionText.textContent = item.question;
  elements.hintText.textContent = session.revealHint
    ? "Podpowiedz: " + (item.hint || "Odrzuc zla odpowiedz i sprobuj jeszcze raz.")
    : "";
  elements.feedbackText.textContent = session.lastFeedback || "";
  elements.showHintButton.disabled = !item.hint || Boolean(session.selectedAnswer);
  elements.nextQuestionButton.disabled = !session.selectedAnswer;
  renderAnswers(item);
}

function render() {
  renderStatus();
  renderHistory();
  renderQuestion();
}

function enqueueReview(currentIndex) {
  state.session.queue.push(currentIndex);
  state.session.reviewCount += 1;
}

function getPendingReviewCount(session) {
  return Math.max(0, session.queue.length - Math.max(session.totalQuestions, session.currentStep + 1));
}

function getQuestionProgress(questionIndex) {
  if (!state.session || !Array.isArray(state.session.questionProgress)) {
    return null;
  }

  return state.session.questionProgress[questionIndex] || null;
}

function registerMistake(questionIndex) {
  const progress = getQuestionProgress(questionIndex);

  if (!progress) {
    return;
  }

  progress.resolved = false;
  progress.needsReinforcement = true;
  progress.successfulReviewMoments = 0;
}

function getCorrectAnswerScore(streak) {
  return BASE_CORRECT_SCORE + Math.min(streak, MAX_STREAK_BONUS) * STREAK_BONUS_STEP;
}

function applyMistakeStreakPenalty() {
  state.session.streak = Math.max(0, state.session.streak - STREAK_PENALTY_ON_MISTAKE);
}

function getQuestionEncouragement(progress) {
  const hits = progress ? progress.successfulReviewMoments : 0;

  if (progress && progress.resolved) {
    return "To pytanie opanowane";
  }

  if (hits > 0) {
    return (
      "To pytanie masz juz " +
      hits +
      "/" +
      REQUIRED_MASTERY_HITS +
      ". Jeszcze jedno trafienie i umiesz"
    );
  }

  return "";
}

function markQuestionResolved(questionIndex) {
  const progress = getQuestionProgress(questionIndex);

  if (!progress || progress.resolved) {
    return;
  }

  progress.resolved = true;
  progress.needsReinforcement = false;
  progress.successfulReviewMoments = 0;
  state.session.correctCount += 1;
}

function submitAnswer(option) {
  const item = getCurrentItem();
  const currentIndex = state.session.queue[state.session.currentStep];
  const questionProgress = getQuestionProgress(currentIndex);
  const attemptCount = state.session.attemptCountForCurrent || 0;
  const isCorrect = option === item.correctAnswer;
  const masteredHits = questionProgress ? questionProgress.successfulReviewMoments : 0;
  const wasAwaitingReinforcement = Boolean(
    questionProgress && questionProgress.needsReinforcement && masteredHits > 0
  );
  let encouragement = "";
  let gainedScore;

  if (isCorrect) {
    state.session.selectedAnswer = option;
    state.session.lastAnswerCorrect = true;
    state.session.answeredCount += 1;
    gainedScore = getCorrectAnswerScore(state.session.streak);
    state.session.score += gainedScore;
    state.session.streak += 1;
    state.session.bestStreak = Math.max(state.session.bestStreak, state.session.streak);
    state.session.lastGain = gainedScore;

    if (questionProgress && attemptCount === 0) {
      questionProgress.successfulReviewMoments += 1;
      questionProgress.needsReinforcement =
        questionProgress.successfulReviewMoments < REQUIRED_MASTERY_HITS;
    }

    if (questionProgress && questionProgress.successfulReviewMoments >= REQUIRED_MASTERY_HITS) {
      markQuestionResolved(currentIndex);
    } else if (questionProgress) {
      enqueueReview(currentIndex);
    }

    encouragement = getQuestionEncouragement(questionProgress);
    state.session.lastEncouragement = encouragement;
    state.session.lastFeedback =
      (
        attemptCount > 0
          ? "Poprawna odpowiedz po podpowiedzi: "
          : wasAwaitingReinforcement
            ? "Poprawna odpowiedz w powtorce: "
            : "Poprawna odpowiedz: "
      ) +
      item.correctAnswer +
      "." +
      (encouragement ? " " + encouragement + "." : "") +
      " +" +
      gainedScore +
      " pkt." +
      (state.session.streak > 1 ? " Seria daje tylko lekki bonus." : "") +
      (
        questionProgress && questionProgress.needsReinforcement
          ? " To pytanie wroci jeszcze, dopoki nie utrwalisz go " +
            REQUIRED_MASTERY_HITS +
            " poprawnymi odpowiedziami w osobnych podejsciach bez podpowiedzi."
          : ""
      );
    celebrate();
  } else if (attemptCount === 0) {
    registerMistake(currentIndex);
    applyMistakeStreakPenalty();
    state.session.attemptCountForCurrent = 1;
    state.session.eliminatedAnswers = [option];
    state.session.revealHint = true;
    state.session.lastAnswerCorrect = false;
    state.session.lastEncouragement = "";
    state.session.lastGain = 0;
    state.session.lastFeedback = item.hint
      ? "To nie ta odpowiedz. Sprawdz podpowiedz i sprobuj jeszcze raz."
      : "To nie ta odpowiedz. Sprobuj jeszcze raz.";
    saveToStorage();
    render();
    return;
  } else {
    registerMistake(currentIndex);
    applyMistakeStreakPenalty();
    state.session.selectedAnswer = option;
    state.session.lastAnswerCorrect = false;
    state.session.answeredCount += 1;
    state.session.lastEncouragement = "";
    state.session.lastGain = 0;
    state.session.lastFeedback =
      "To jeszcze nie ta odpowiedz. Poprawna odpowiedz: " +
      item.correctAnswer +
      ". Wrocimy do tego pytania za chwile.";
    enqueueReview(currentIndex);
  }

  if (state.session.currentStep >= state.session.queue.length - 1) {
    finishSession();
    return;
  }

  saveToStorage();
  render();
}

function finishSession() {
  state.session.completed = true;
  state.session.selectedAnswer = null;
  state.session.eliminatedAnswers = [];
  state.session.attemptCountForCurrent = 0;
  state.session.lastAnswerCorrect = null;
  state.session.lastEncouragement = "";
  state.session.revealHint = false;
  state.history.unshift({
    quizTitle: state.quiz.title,
    score: state.session.score,
    correct: state.session.correctCount,
    total: state.session.totalQuestions,
    reviewCount: state.session.reviewCount,
    stimulusMode: state.quiz.settings.stimulusMode,
    createdAt: new Date().toISOString()
  });
  state.history = state.history.slice(0, 12);
  saveToStorage();
  render();
}

function goToNextQuestion() {
  if (!state.session || !state.session.selectedAnswer) {
    return;
  }

  if (state.session.currentStep >= state.session.queue.length - 1) {
    finishSession();
    return;
  }

  state.session.currentStep += 1;
  state.session.selectedAnswer = null;
  state.session.eliminatedAnswers = [];
  state.session.attemptCountForCurrent = 0;
  state.session.lastAnswerCorrect = null;
  state.session.lastFeedback = "";
  state.session.lastEncouragement = "";
  state.session.lastGain = 0;
  state.session.revealHint = false;
  saveToStorage();
  render();
}

function restartSession() {
  if (!state.quiz) {
    setBuilderMessage("Najpierw zapisz quiz.", true);
    return;
  }

  state.session = createSession(state.quiz);
  saveToStorage();
  render();
  showScene("quiz");
  setBuilderMessage("Nowa runda jest gotowa.", false);
}

function clearSessionOnly() {
  state.session = state.quiz ? createSession(state.quiz) : null;
  saveToStorage();
  render();
  setBuilderMessage("Sesja zostala wyczyszczona.", false);
}

function replaceActiveQuiz() {
  try {
    const parsedQuiz = JSON.parse(elements.quizJsonInput.value);
    state.quiz = normalizeQuiz(parsedQuiz, elements.quizTitleInput.value, {
      sessionSize: elements.sessionSizeInput.value,
      stimulusMode: elements.stimulusModeSelect.value
    });
    state.session = createSession(state.quiz);
    saveToStorage();
    render();
    showScene("quiz");
    setBuilderMessage("Quiz zostal zapisany.", false);
  } catch (error) {
    setBuilderMessage(error.message, true);
  }
}

function resetAllData() {
  localStorage.removeItem(STORAGE_KEYS.quiz);
  localStorage.removeItem(STORAGE_KEYS.session);
  localStorage.removeItem(STORAGE_KEYS.history);
  state.quiz = null;
  state.session = null;
  state.history = [];
  updateBuilderFields();
  render();
  showScene("builder");
  setBuilderMessage("Dane lokalne zostaly wyczyszczone.", false);
}

function loadExampleIntoEditor() {
  const quiz = normalizeQuiz(exampleQuiz, exampleQuiz.title);
  elements.quizTitleInput.value = quiz.title;
  elements.sessionSizeInput.value = String(quiz.settings.sessionSize);
  elements.stimulusModeSelect.value = quiz.settings.stimulusMode;
  elements.quizJsonInput.value = JSON.stringify(exampleQuiz, null, 2);
  setBuilderMessage("Przykladowy quiz zostal wczytany.", false);
}

function showHint() {
  if (!state.session) {
    return;
  }

  state.session.revealHint = true;
  saveToStorage();
  render();
}

function attachEvents() {
  elements.saveQuizButton.addEventListener("click", replaceActiveQuiz);
  elements.replaceQuizButton.addEventListener("click", replaceActiveQuiz);
  elements.loadExampleButton.addEventListener("click", loadExampleIntoEditor);
  elements.resetAllButton.addEventListener("click", resetAllData);
  elements.restartSessionButton.addEventListener("click", restartSession);
  elements.clearSessionButton.addEventListener("click", clearSessionOnly);
  elements.backToBuilderButton.addEventListener("click", function backToBuilder() {
    showScene("builder");
  });
  elements.showHintButton.addEventListener("click", showHint);
  elements.nextQuestionButton.addEventListener("click", goToNextQuestion);
}

function migrateStoredState() {
  if (state.quiz) {
    try {
      state.quiz = normalizeQuiz(state.quiz, state.quiz.title);
    } catch (error) {
      state.quiz = null;
    }
  }

  if (!state.session || !Array.isArray(state.session.queue)) {
    state.session = null;
  }

  if (state.session && !Number.isInteger(state.session.totalQuestions)) {
    state.session.totalQuestions = Math.max(1, state.session.queue.length - (state.session.reviewCount || 0));
  }

  if (state.session && !Array.isArray(state.session.eliminatedAnswers)) {
    state.session.eliminatedAnswers = [];
  }

  if (state.session && !Number.isInteger(state.session.attemptCountForCurrent)) {
    state.session.attemptCountForCurrent = 0;
  }

  if (state.session && !Number.isInteger(state.session.reviewCount)) {
    state.session.reviewCount = 0;
  }

  if (state.session && typeof state.session.lastEncouragement !== "string") {
    state.session.lastEncouragement = "";
  }

  if (state.session && state.quiz) {
    if (
      !Array.isArray(state.session.questionProgress) ||
      state.session.questionProgress.length !== state.quiz.items.length
    ) {
      const restoredProgress = createQuestionProgress(state.quiz.items);
      state.session.questionProgress = restoredProgress;
    }

    state.session.correctCount = state.session.questionProgress.filter(function countResolved(progress) {
      return Boolean(progress && progress.resolved);
    }).length;
  }

  if (state.quiz && !state.session) {
    state.session = createSession(state.quiz);
  }
}

function init() {
  loadFromStorage();
  migrateStoredState();
  attachEvents();
  updateBuilderFields();
  render();
  showScene("builder");
  saveToStorage();
}

init();
