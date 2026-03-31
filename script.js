const STORAGE_KEYS = {
  quiz: "quizz.quiz",
  session: "quizz.session",
  history: "quizz.history",
  ui: "quizz.ui"
};

const THEME_STORAGE_VERSION = 2;

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
const DEFAULT_QUIZ_PATH = "./data.json";
const LAYOUT_DENSITIES = ["regular", "compact", "tight", "ultra"];
const DEFAULT_SOUND_ENABLED = true;
const TRUE_FALSE_OPTIONS = ["Prawda", "Fałsz"];
const DEFAULT_THEME_SELECTION = {
  background: "sunrise",
  surface: "cloud",
  accent: "ocean",
  answers: "bubbles",
  feedback: "mint"
};
const THEME_OPTION_ORDER = ["background", "surface", "accent", "answers", "feedback"];
const THEME_OPTIONS = {
  background: {
    label: "Tło",
    description: "Duże tło za całą aplikacją",
    previewHint: "Zmienia tło całego ekranu",
    options: [
      {
        id: "sunrise",
        label: "Wschód słońca",
        swatches: ["#fff6d8", "#dff4ff", "#69d5ff"],
        vars: {
          "--bg-top": "#fff6d8",
          "--bg-bottom": "#dff4ff",
          "--bg-glow-top": "rgba(255, 255, 255, 0.98)",
          "--bg-glow-accent": "rgba(47, 140, 255, 0.18)",
          "--bg-glow-sun": "rgba(255, 212, 90, 0.24)",
          "--blob-a": "rgba(105, 213, 255, 0.28)",
          "--blob-b": "rgba(255, 212, 90, 0.24)",
          "--calm-bg-top": "#fdf8e8",
          "--calm-bg-bottom": "#eef8ff"
        }
      },
      {
        id: "meadow",
        label: "Łąka",
        swatches: ["#f4ffd8", "#dfffea", "#7ad7a2"],
        vars: {
          "--bg-top": "#f4ffd8",
          "--bg-bottom": "#dfffea",
          "--bg-glow-top": "rgba(255, 255, 255, 0.98)",
          "--bg-glow-accent": "rgba(122, 215, 162, 0.2)",
          "--bg-glow-sun": "rgba(255, 209, 111, 0.22)",
          "--blob-a": "rgba(108, 209, 165, 0.28)",
          "--blob-b": "rgba(255, 209, 111, 0.22)",
          "--calm-bg-top": "#f7ffec",
          "--calm-bg-bottom": "#ebfff4"
        }
      },
      {
        id: "berry",
        label: "Jagodowa chmurka",
        swatches: ["#ffe4f2", "#e6efff", "#ff9fcd"],
        vars: {
          "--bg-top": "#ffe4f2",
          "--bg-bottom": "#e6efff",
          "--bg-glow-top": "rgba(255, 255, 255, 0.98)",
          "--bg-glow-accent": "rgba(255, 159, 205, 0.2)",
          "--bg-glow-sun": "rgba(135, 181, 255, 0.22)",
          "--blob-a": "rgba(255, 159, 205, 0.24)",
          "--blob-b": "rgba(135, 181, 255, 0.24)",
          "--calm-bg-top": "#fff0f7",
          "--calm-bg-bottom": "#eef3ff"
        }
      },
      {
        id: "space",
        label: "Kosmos",
        swatches: ["#e6ebff", "#d8f4ff", "#7d93ff"],
        vars: {
          "--bg-top": "#e6ebff",
          "--bg-bottom": "#d8f4ff",
          "--bg-glow-top": "rgba(255, 255, 255, 0.96)",
          "--bg-glow-accent": "rgba(125, 147, 255, 0.2)",
          "--bg-glow-sun": "rgba(114, 224, 255, 0.22)",
          "--blob-a": "rgba(125, 147, 255, 0.24)",
          "--blob-b": "rgba(114, 224, 255, 0.24)",
          "--calm-bg-top": "#edf0ff",
          "--calm-bg-bottom": "#e8f8ff"
        }
      },
      {
        id: "lavender",
        label: "Lawenda",
        swatches: ["#f6ecff", "#edf5ff", "#b896ff"],
        vars: {
          "--bg-top": "#f6ecff",
          "--bg-bottom": "#edf5ff",
          "--bg-glow-top": "rgba(255, 255, 255, 0.98)",
          "--bg-glow-accent": "rgba(184, 150, 255, 0.22)",
          "--bg-glow-sun": "rgba(121, 218, 255, 0.18)",
          "--blob-a": "rgba(184, 150, 255, 0.24)",
          "--blob-b": "rgba(121, 218, 255, 0.22)",
          "--calm-bg-top": "#fbf5ff",
          "--calm-bg-bottom": "#f0f6ff"
        }
      },
      {
        id: "lilac",
        label: "Bez",
        swatches: ["#f9efff", "#f3e8ff", "#c88cff"],
        vars: {
          "--bg-top": "#f9efff",
          "--bg-bottom": "#f3e8ff",
          "--bg-glow-top": "rgba(255, 255, 255, 0.98)",
          "--bg-glow-accent": "rgba(200, 140, 255, 0.22)",
          "--bg-glow-sun": "rgba(255, 198, 120, 0.16)",
          "--blob-a": "rgba(200, 140, 255, 0.24)",
          "--blob-b": "rgba(143, 213, 255, 0.18)",
          "--calm-bg-top": "#fcf5ff",
          "--calm-bg-bottom": "#f6efff"
        }
      },
      {
        id: "citrus",
        label: "Cytrusy",
        swatches: ["#fff8d8", "#f0ffe1", "#8fdc88"],
        vars: {
          "--bg-top": "#fff8d8",
          "--bg-bottom": "#f0ffe1",
          "--bg-glow-top": "rgba(255, 255, 255, 0.98)",
          "--bg-glow-accent": "rgba(143, 220, 136, 0.22)",
          "--bg-glow-sun": "rgba(255, 198, 93, 0.22)",
          "--blob-a": "rgba(143, 220, 136, 0.24)",
          "--blob-b": "rgba(255, 198, 93, 0.2)",
          "--calm-bg-top": "#fffbe8",
          "--calm-bg-bottom": "#f5ffeb"
        }
      },
      {
        id: "aurora",
        label: "Aurora",
        swatches: ["#0f1730", "#1a2e52", "#6ef7d4"],
        vars: {
          "--bg-top": "#0f1730",
          "--bg-bottom": "#1a2e52",
          "--bg-glow-top": "rgba(137, 184, 255, 0.2)",
          "--bg-glow-accent": "rgba(110, 247, 212, 0.18)",
          "--bg-glow-sun": "rgba(255, 125, 193, 0.16)",
          "--blob-a": "rgba(110, 247, 212, 0.16)",
          "--blob-b": "rgba(125, 155, 255, 0.14)",
          "--calm-bg-top": "#10172f",
          "--calm-bg-bottom": "#162645"
        }
      },
      {
        id: "midnight",
        label: "Północ",
        swatches: ["#090b16", "#161226", "#8ea7ff"],
        vars: {
          "--bg-top": "#090b16",
          "--bg-bottom": "#161226",
          "--bg-glow-top": "rgba(99, 117, 196, 0.2)",
          "--bg-glow-accent": "rgba(142, 167, 255, 0.18)",
          "--bg-glow-sun": "rgba(255, 214, 102, 0.12)",
          "--blob-a": "rgba(98, 114, 191, 0.18)",
          "--blob-b": "rgba(255, 214, 102, 0.12)",
          "--calm-bg-top": "#0d1020",
          "--calm-bg-bottom": "#181933"
        }
      },
      {
        id: "eclipse",
        label: "Zaćmienie",
        swatches: ["#050814", "#101a31", "#58d6ff"],
        vars: {
          "--bg-top": "#050814",
          "--bg-bottom": "#101a31",
          "--bg-glow-top": "rgba(96, 133, 255, 0.14)",
          "--bg-glow-accent": "rgba(88, 214, 255, 0.16)",
          "--bg-glow-sun": "rgba(255, 122, 168, 0.12)",
          "--blob-a": "rgba(88, 214, 255, 0.14)",
          "--blob-b": "rgba(120, 140, 255, 0.12)",
          "--calm-bg-top": "#07101f",
          "--calm-bg-bottom": "#111c34"
        }
      },
      {
        id: "abyss",
        label: "Otchłań",
        swatches: ["#07141c", "#102734", "#4fd2b4"],
        vars: {
          "--bg-top": "#07141c",
          "--bg-bottom": "#102734",
          "--bg-glow-top": "rgba(70, 106, 160, 0.14)",
          "--bg-glow-accent": "rgba(79, 210, 180, 0.16)",
          "--bg-glow-sun": "rgba(255, 177, 102, 0.1)",
          "--blob-a": "rgba(79, 210, 180, 0.14)",
          "--blob-b": "rgba(80, 145, 196, 0.12)",
          "--calm-bg-top": "#091720",
          "--calm-bg-bottom": "#122b38"
        }
      }
    ]
  },
  surface: {
    label: "Karty",
    description: "Panele, plansze i kolor bazowy tekstu",
    previewHint: "Zmienia kartę z pytaniem i główny tekst",
    options: [
      {
        id: "cloud",
        label: "Chmurki",
        swatches: ["#ffffff", "#f8fbff", "#dfefff"],
        vars: {
          "--ink": "#14324f",
          "--muted": "#4d6482",
          "--panel": "rgba(255, 255, 255, 0.94)",
          "--panel-strong": "#ffffff",
          "--surface-soft": "rgba(255, 255, 255, 0.88)",
          "--surface-card-start": "#ffffff",
          "--surface-card-end": "#f8fbff",
          "--surface-raised-start": "#f6fbff",
          "--surface-raised-end": "#eef7ff",
          "--surface-summary-start": "#ffffff",
          "--surface-summary-end": "#f5faff",
          "--line": "rgba(20, 50, 79, 0.16)",
          "--card-line": "rgba(20, 50, 79, 0.06)",
          "--input-border": "rgba(20, 50, 79, 0.14)",
          "--shadow": "0 22px 44px rgba(21, 94, 201, 0.14)"
        }
      },
      {
        id: "pearl",
        label: "Perła",
        swatches: ["#fffef8", "#fff7df", "#f4ead2"],
        vars: {
          "--ink": "#4f3a1f",
          "--muted": "#7d6a4e",
          "--panel": "rgba(255, 252, 244, 0.94)",
          "--panel-strong": "#fffef8",
          "--surface-soft": "rgba(255, 250, 238, 0.9)",
          "--surface-card-start": "#fffef8",
          "--surface-card-end": "#fff7df",
          "--surface-raised-start": "#fffdf5",
          "--surface-raised-end": "#fdf1d3",
          "--surface-summary-start": "#fffef9",
          "--surface-summary-end": "#fff6e4",
          "--line": "rgba(96, 75, 27, 0.14)",
          "--card-line": "rgba(96, 75, 27, 0.08)",
          "--input-border": "rgba(96, 75, 27, 0.14)",
          "--shadow": "0 22px 44px rgba(158, 122, 34, 0.12)"
        }
      },
      {
        id: "candy",
        label: "Landrynka",
        swatches: ["#fff8fc", "#fff0f7", "#ffe0ef"],
        vars: {
          "--ink": "#5a2b49",
          "--muted": "#8b6580",
          "--panel": "rgba(255, 248, 252, 0.95)",
          "--panel-strong": "#fff9fc",
          "--surface-soft": "rgba(255, 245, 250, 0.92)",
          "--surface-card-start": "#fffafe",
          "--surface-card-end": "#fff0f7",
          "--surface-raised-start": "#fff8fd",
          "--surface-raised-end": "#ffeaf4",
          "--surface-summary-start": "#fffafe",
          "--surface-summary-end": "#fff1f7",
          "--line": "rgba(145, 67, 113, 0.14)",
          "--card-line": "rgba(145, 67, 113, 0.08)",
          "--input-border": "rgba(145, 67, 113, 0.14)",
          "--shadow": "0 22px 44px rgba(208, 103, 157, 0.14)"
        }
      },
      {
        id: "frost",
        label: "Szron",
        swatches: ["#f7fcff", "#eef8ff", "#d9ebff"],
        vars: {
          "--ink": "#183a58",
          "--muted": "#5a7895",
          "--panel": "rgba(246, 251, 255, 0.93)",
          "--panel-border": "rgba(255, 255, 255, 0.88)",
          "--panel-strong": "#fafdff",
          "--surface-soft": "rgba(244, 250, 255, 0.86)",
          "--surface-card-start": "#fbfeff",
          "--surface-card-end": "#eef8ff",
          "--surface-raised-start": "#f8fcff",
          "--surface-raised-end": "#e6f2ff",
          "--surface-summary-start": "#fcfeff",
          "--surface-summary-end": "#edf6ff",
          "--line": "rgba(58, 95, 138, 0.14)",
          "--card-line": "rgba(58, 95, 138, 0.08)",
          "--input-border": "rgba(58, 95, 138, 0.14)",
          "--field-bg": "rgba(255, 255, 255, 0.92)",
          "--field-bg-soft": "rgba(244, 250, 255, 0.78)",
          "--ghost-bg": "rgba(250, 253, 255, 0.96)",
          "--ghost-border": "rgba(58, 95, 138, 0.12)",
          "--ghost-inset": "rgba(255, 255, 255, 0.5)",
          "--progress-track-bg": "rgba(52, 89, 132, 0.08)",
          "--theme-swatch-border": "rgba(255, 255, 255, 0.9)",
          "--shadow": "0 22px 44px rgba(80, 136, 196, 0.16)"
        }
      },
      {
        id: "slate",
        label: "Grafit",
        swatches: ["#16213d", "#223056", "#8bb9ff"],
        vars: {
          "--ink": "#eef4ff",
          "--muted": "#b9c6e2",
          "--panel": "rgba(14, 21, 39, 0.88)",
          "--panel-border": "rgba(148, 179, 255, 0.18)",
          "--panel-strong": "#16213d",
          "--surface-soft": "rgba(22, 33, 61, 0.82)",
          "--surface-card-start": "#1a2746",
          "--surface-card-end": "#223056",
          "--surface-raised-start": "#1b294b",
          "--surface-raised-end": "#26365f",
          "--surface-summary-start": "#172241",
          "--surface-summary-end": "#223058",
          "--line": "rgba(187, 206, 255, 0.18)",
          "--card-line": "rgba(192, 213, 255, 0.08)",
          "--input-border": "rgba(174, 198, 255, 0.22)",
          "--field-bg": "rgba(9, 15, 29, 0.78)",
          "--field-bg-soft": "rgba(16, 24, 44, 0.72)",
          "--ghost-bg": "rgba(18, 29, 54, 0.92)",
          "--ghost-border": "rgba(174, 198, 255, 0.18)",
          "--ghost-inset": "rgba(255, 255, 255, 0.05)",
          "--progress-track-bg": "rgba(219, 229, 255, 0.12)",
          "--theme-swatch-border": "rgba(255, 255, 255, 0.28)",
          "--shadow": "0 24px 50px rgba(3, 8, 20, 0.4)"
        }
      },
      {
        id: "cocoa",
        label: "Kakao",
        swatches: ["#2b1d1a", "#3f2b24", "#f0b277"],
        vars: {
          "--ink": "#fff1e6",
          "--muted": "#d7b9a3",
          "--panel": "rgba(33, 23, 20, 0.88)",
          "--panel-border": "rgba(255, 203, 155, 0.16)",
          "--panel-strong": "#2b1d1a",
          "--surface-soft": "rgba(48, 34, 29, 0.82)",
          "--surface-card-start": "#32221e",
          "--surface-card-end": "#3f2b24",
          "--surface-raised-start": "#34231f",
          "--surface-raised-end": "#472f28",
          "--surface-summary-start": "#2e201d",
          "--surface-summary-end": "#3d2a24",
          "--line": "rgba(255, 219, 193, 0.16)",
          "--card-line": "rgba(255, 224, 201, 0.08)",
          "--input-border": "rgba(255, 201, 159, 0.2)",
          "--field-bg": "rgba(23, 15, 12, 0.78)",
          "--field-bg-soft": "rgba(32, 21, 18, 0.72)",
          "--ghost-bg": "rgba(46, 32, 27, 0.92)",
          "--ghost-border": "rgba(255, 201, 159, 0.18)",
          "--ghost-inset": "rgba(255, 255, 255, 0.05)",
          "--progress-track-bg": "rgba(255, 228, 203, 0.12)",
          "--theme-swatch-border": "rgba(255, 247, 239, 0.24)",
          "--shadow": "0 24px 50px rgba(14, 7, 5, 0.4)"
        }
      },
      {
        id: "obsidian",
        label: "Obsydian",
        swatches: ["#0f172a", "#17233d", "#8bc5ff"],
        vars: {
          "--ink": "#edf4ff",
          "--muted": "#b2c1db",
          "--panel": "rgba(10, 16, 30, 0.9)",
          "--panel-border": "rgba(144, 184, 255, 0.18)",
          "--panel-strong": "#10192e",
          "--surface-soft": "rgba(17, 25, 46, 0.84)",
          "--surface-card-start": "#13203a",
          "--surface-card-end": "#1a2948",
          "--surface-raised-start": "#152440",
          "--surface-raised-end": "#1c2d4e",
          "--surface-summary-start": "#111d36",
          "--surface-summary-end": "#1a2946",
          "--line": "rgba(190, 214, 255, 0.18)",
          "--card-line": "rgba(190, 214, 255, 0.08)",
          "--input-border": "rgba(167, 199, 255, 0.24)",
          "--field-bg": "rgba(7, 12, 25, 0.78)",
          "--field-bg-soft": "rgba(12, 20, 36, 0.72)",
          "--ghost-bg": "rgba(17, 28, 50, 0.94)",
          "--ghost-border": "rgba(167, 199, 255, 0.18)",
          "--ghost-inset": "rgba(255, 255, 255, 0.05)",
          "--progress-track-bg": "rgba(220, 232, 255, 0.12)",
          "--theme-swatch-border": "rgba(255, 255, 255, 0.26)",
          "--shadow": "0 24px 52px rgba(2, 6, 18, 0.44)"
        }
      },
      {
        id: "pine-night",
        label: "Nocny las",
        swatches: ["#13231f", "#1c332d", "#8ce0c4"],
        vars: {
          "--ink": "#eefcf8",
          "--muted": "#b7d6cd",
          "--panel": "rgba(11, 24, 21, 0.9)",
          "--panel-border": "rgba(140, 224, 196, 0.16)",
          "--panel-strong": "#142621",
          "--surface-soft": "rgba(21, 38, 33, 0.84)",
          "--surface-card-start": "#173029",
          "--surface-card-end": "#204038",
          "--surface-raised-start": "#19352d",
          "--surface-raised-end": "#24453c",
          "--surface-summary-start": "#152b25",
          "--surface-summary-end": "#1f3c34",
          "--line": "rgba(194, 242, 226, 0.16)",
          "--card-line": "rgba(194, 242, 226, 0.08)",
          "--input-border": "rgba(140, 224, 196, 0.22)",
          "--field-bg": "rgba(8, 18, 16, 0.78)",
          "--field-bg-soft": "rgba(12, 25, 22, 0.72)",
          "--ghost-bg": "rgba(23, 42, 37, 0.94)",
          "--ghost-border": "rgba(140, 224, 196, 0.18)",
          "--ghost-inset": "rgba(255, 255, 255, 0.05)",
          "--progress-track-bg": "rgba(220, 255, 244, 0.1)",
          "--theme-swatch-border": "rgba(240, 255, 250, 0.24)",
          "--shadow": "0 24px 52px rgba(2, 10, 8, 0.42)"
        }
      }
    ]
  },
  accent: {
    label: "Akcje",
    description: "Przyciski, wyróżnienia i pasek postępu",
    previewHint: "Zmienia przyciski i akcenty",
    options: [
      {
        id: "ocean",
        label: "Ocean",
        swatches: ["#2f8cff", "#155ec9", "#69d5ff"],
        vars: {
          "--primary": "#2f8cff",
          "--primary-deep": "#155ec9",
          "--sky": "#69d5ff",
          "--sun": "#ffd45a",
          "--primary-button-start": "#58a8ff",
          "--primary-button-end": "#155ec9",
          "--primary-shadow": "rgba(21, 94, 201, 0.22)",
          "--secondary-button-start": "#fff0a8",
          "--secondary-button-end": "#ffd45a",
          "--secondary-button-ink": "#5d4300",
          "--reward-start": "#fff0ad",
          "--reward-end": "#ffd76a",
          "--reward-ink": "#6b4c00"
        }
      },
      {
        id: "forest",
        label: "Las",
        swatches: ["#38a86b", "#18744a", "#83dfab"],
        vars: {
          "--primary": "#38a86b",
          "--primary-deep": "#18744a",
          "--sky": "#83dfab",
          "--sun": "#ffd36a",
          "--primary-button-start": "#5dd18a",
          "--primary-button-end": "#18744a",
          "--primary-shadow": "rgba(24, 116, 74, 0.22)",
          "--secondary-button-start": "#fff0a8",
          "--secondary-button-end": "#ffd36a",
          "--secondary-button-ink": "#5f4700",
          "--reward-start": "#e8ffd3",
          "--reward-end": "#a4e27a",
          "--reward-ink": "#325d10"
        }
      },
      {
        id: "coral",
        label: "Koral",
        swatches: ["#ff7b7b", "#db4d67", "#ffb596"],
        vars: {
          "--primary": "#ff7b7b",
          "--primary-deep": "#db4d67",
          "--sky": "#ffb596",
          "--sun": "#ffd666",
          "--primary-button-start": "#ff9f92",
          "--primary-button-end": "#db4d67",
          "--primary-shadow": "rgba(219, 77, 103, 0.22)",
          "--secondary-button-start": "#ffe7a6",
          "--secondary-button-end": "#ffd666",
          "--secondary-button-ink": "#6b4300",
          "--reward-start": "#ffd9a8",
          "--reward-end": "#ff9c7f",
          "--reward-ink": "#6b300d"
        }
      },
      {
        id: "lavender-pop",
        label: "Lawendowy błysk",
        swatches: ["#8a63ff", "#5a33d1", "#c2b2ff"],
        vars: {
          "--primary": "#8a63ff",
          "--primary-deep": "#5a33d1",
          "--sky": "#c2b2ff",
          "--sun": "#ffd36a",
          "--primary-button-start": "#a282ff",
          "--primary-button-end": "#5a33d1",
          "--primary-shadow": "rgba(90, 51, 209, 0.24)",
          "--secondary-button-start": "#fff0b0",
          "--secondary-button-end": "#ffd36a",
          "--secondary-button-ink": "#5e4400",
          "--secondary-shadow": "rgba(255, 211, 106, 0.24)",
          "--reward-start": "#f1e2ff",
          "--reward-end": "#c7a9ff",
          "--reward-ink": "#4b2d8f",
          "--reward-shadow": "rgba(138, 99, 255, 0.2)"
        }
      },
      {
        id: "ember",
        label: "Żar",
        swatches: ["#ff8a4c", "#d65a22", "#ffc06f"],
        vars: {
          "--primary": "#ff8a4c",
          "--primary-deep": "#d65a22",
          "--sky": "#ffc06f",
          "--sun": "#ffe08a",
          "--primary-button-start": "#ffab72",
          "--primary-button-end": "#d65a22",
          "--primary-shadow": "rgba(214, 90, 34, 0.24)",
          "--secondary-button-start": "#fff1b8",
          "--secondary-button-end": "#ffe08a",
          "--secondary-button-ink": "#6b4a10",
          "--secondary-shadow": "rgba(255, 214, 120, 0.24)",
          "--reward-start": "#ffe4bf",
          "--reward-end": "#ffb274",
          "--reward-ink": "#6c3714",
          "--reward-shadow": "rgba(255, 138, 76, 0.22)"
        }
      },
      {
        id: "moonlight",
        label: "Blask księżyca",
        swatches: ["#7ab8ff", "#4f86ff", "#93e4ff"],
        vars: {
          "--primary": "#7ab8ff",
          "--primary-deep": "#4f86ff",
          "--sky": "#93e4ff",
          "--sun": "#ffd970",
          "--primary-button-start": "#8dc5ff",
          "--primary-button-end": "#4f86ff",
          "--primary-shadow": "rgba(79, 134, 255, 0.28)",
          "--secondary-button-start": "#344675",
          "--secondary-button-end": "#516ca8",
          "--secondary-button-ink": "#eef4ff",
          "--secondary-shadow": "rgba(79, 134, 255, 0.2)",
          "--reward-start": "#24345f",
          "--reward-end": "#4967a4",
          "--reward-ink": "#eef4ff",
          "--reward-shadow": "rgba(79, 134, 255, 0.24)"
        }
      },
      {
        id: "neon",
        label: "Neon",
        swatches: ["#5ef2c0", "#16b989", "#79d2ff"],
        vars: {
          "--primary": "#5ef2c0",
          "--primary-deep": "#16b989",
          "--sky": "#79d2ff",
          "--sun": "#ffe36f",
          "--primary-button-start": "#7ff6ce",
          "--primary-button-end": "#16b989",
          "--primary-shadow": "rgba(22, 185, 137, 0.28)",
          "--secondary-button-start": "#29485a",
          "--secondary-button-end": "#3a6580",
          "--secondary-button-ink": "#eefcf9",
          "--secondary-shadow": "rgba(121, 210, 255, 0.18)",
          "--reward-start": "#1b4d4c",
          "--reward-end": "#267c77",
          "--reward-ink": "#edfffb",
          "--reward-shadow": "rgba(22, 185, 137, 0.22)"
        }
      },
      {
        id: "starlight",
        label: "Gwiezdny chłód",
        swatches: ["#7fd0ff", "#4b78ff", "#8ef1ff"],
        vars: {
          "--primary": "#7fd0ff",
          "--primary-deep": "#4b78ff",
          "--sky": "#8ef1ff",
          "--sun": "#ffd56f",
          "--primary-button-start": "#9bdeff",
          "--primary-button-end": "#4b78ff",
          "--primary-shadow": "rgba(75, 120, 255, 0.28)",
          "--secondary-button-start": "#2f3f67",
          "--secondary-button-end": "#465c93",
          "--secondary-button-ink": "#f0f6ff",
          "--secondary-shadow": "rgba(92, 141, 255, 0.22)",
          "--reward-start": "#1f3258",
          "--reward-end": "#355991",
          "--reward-ink": "#eef5ff",
          "--reward-shadow": "rgba(75, 120, 255, 0.24)"
        }
      },
      {
        id: "ruby-night",
        label: "Rubinowa noc",
        swatches: ["#ff7aa5", "#d84678", "#ffb37e"],
        vars: {
          "--primary": "#ff7aa5",
          "--primary-deep": "#d84678",
          "--sky": "#ffb37e",
          "--sun": "#ffd978",
          "--primary-button-start": "#ff9cbc",
          "--primary-button-end": "#d84678",
          "--primary-shadow": "rgba(216, 70, 120, 0.28)",
          "--secondary-button-start": "#4a2d44",
          "--secondary-button-end": "#6e4264",
          "--secondary-button-ink": "#fff1f7",
          "--secondary-shadow": "rgba(255, 122, 165, 0.2)",
          "--reward-start": "#5b2f2b",
          "--reward-end": "#92513d",
          "--reward-ink": "#fff5ec",
          "--reward-shadow": "rgba(255, 179, 126, 0.2)"
        }
      },
      {
        id: "violet-dream",
        label: "Fioletowy blask",
        swatches: ["#c587ff", "#8c4dff", "#ead1ff"],
        vars: {
          "--primary": "#c587ff",
          "--primary-deep": "#8c4dff",
          "--sky": "#ead1ff",
          "--sun": "#ffd97d",
          "--primary-button-start": "#d8acff",
          "--primary-button-end": "#8c4dff",
          "--primary-shadow": "rgba(140, 77, 255, 0.24)",
          "--secondary-button-start": "#fff1bc",
          "--secondary-button-end": "#ffd97d",
          "--secondary-button-ink": "#5d4400",
          "--secondary-shadow": "rgba(255, 217, 125, 0.22)",
          "--reward-start": "#f5e7ff",
          "--reward-end": "#d3adff",
          "--reward-ink": "#51258f",
          "--reward-shadow": "rgba(197, 135, 255, 0.22)"
        }
      },
      {
        id: "plum-night",
        label: "Śliwkowa noc",
        swatches: ["#b88cff", "#6a36d9", "#2d214f"],
        vars: {
          "--primary": "#b88cff",
          "--primary-deep": "#6a36d9",
          "--sky": "#d8beff",
          "--sun": "#ffc97f",
          "--primary-button-start": "#c7a0ff",
          "--primary-button-end": "#6a36d9",
          "--primary-shadow": "rgba(106, 54, 217, 0.28)",
          "--secondary-button-start": "#352654",
          "--secondary-button-end": "#52397f",
          "--secondary-button-ink": "#f7efff",
          "--secondary-shadow": "rgba(184, 140, 255, 0.18)",
          "--reward-start": "#2d214f",
          "--reward-end": "#4d3890",
          "--reward-ink": "#f4eeff",
          "--reward-shadow": "rgba(106, 54, 217, 0.24)"
        }
      }
    ]
  },
  answers: {
    label: "Odpowiedzi",
    description: "Kafelki odpowiedzi oraz stany poprawna i błędna",
    previewHint: "Zmienia zwykłe, zaznaczone, poprawne i błędne odpowiedzi",
    options: [
      {
        id: "bubbles",
        label: "Bańki",
        swatches: ["#ffffff", "#eaf5ff", "#d8ecff"],
        vars: {
          "--answer-start": "#ffffff",
          "--answer-end": "#eaf5ff",
          "--answer-hover-end": "#dff0ff",
          "--answer-selected-end": "#d8ecff",
          "--answer-border": "rgba(47, 140, 255, 0.22)",
          "--answer-border-hover": "rgba(47, 140, 255, 0.52)",
          "--answer-border-selected": "rgba(47, 140, 255, 0.95)",
          "--answer-shadow": "rgba(47, 140, 255, 0.12)",
          "--answer-shadow-hover": "rgba(47, 140, 255, 0.18)",
          "--answer-shadow-selected": "rgba(47, 140, 255, 0.24)",
          "--answer-correct-start": "#ffffff",
          "--answer-correct-end": "#e4fff0",
          "--answer-correct-border": "#2fa965",
          "--answer-correct-ink": "#0f5b31",
          "--answer-correct-shadow": "rgba(85, 203, 132, 0.22)",
          "--answer-wrong-start": "#ffffff",
          "--answer-wrong-end": "#fff0f4",
          "--answer-wrong-border": "#de4b6e",
          "--answer-wrong-ink": "#8c2440",
          "--answer-wrong-shadow": "rgba(239, 91, 123, 0.18)"
        }
      },
      {
        id: "lemonade",
        label: "Lemoniada",
        swatches: ["#fffef2", "#fff3bf", "#ffe68b"],
        vars: {
          "--answer-start": "#fffef2",
          "--answer-end": "#fff3bf",
          "--answer-hover-end": "#ffeda2",
          "--answer-selected-end": "#ffe68b",
          "--answer-border": "rgba(222, 172, 27, 0.3)",
          "--answer-border-hover": "rgba(222, 172, 27, 0.52)",
          "--answer-border-selected": "rgba(208, 149, 14, 0.9)",
          "--answer-shadow": "rgba(222, 172, 27, 0.12)",
          "--answer-shadow-hover": "rgba(222, 172, 27, 0.18)",
          "--answer-shadow-selected": "rgba(222, 172, 27, 0.24)",
          "--answer-correct-start": "#fffef2",
          "--answer-correct-end": "#ecffcc",
          "--answer-correct-border": "#8bb739",
          "--answer-correct-ink": "#496110",
          "--answer-correct-shadow": "rgba(139, 183, 57, 0.22)",
          "--answer-wrong-start": "#fffef2",
          "--answer-wrong-end": "#ffe3c6",
          "--answer-wrong-border": "#d98832",
          "--answer-wrong-ink": "#7a4313",
          "--answer-wrong-shadow": "rgba(217, 136, 50, 0.2)"
        }
      },
      {
        id: "strawberry",
        label: "Truskawka",
        swatches: ["#fff6fb", "#ffe0ef", "#ffc7df"],
        vars: {
          "--answer-start": "#fff6fb",
          "--answer-end": "#ffe0ef",
          "--answer-hover-end": "#ffd5e8",
          "--answer-selected-end": "#ffc7df",
          "--answer-border": "rgba(230, 92, 150, 0.26)",
          "--answer-border-hover": "rgba(230, 92, 150, 0.5)",
          "--answer-border-selected": "rgba(204, 58, 126, 0.92)",
          "--answer-shadow": "rgba(230, 92, 150, 0.12)",
          "--answer-shadow-hover": "rgba(230, 92, 150, 0.18)",
          "--answer-shadow-selected": "rgba(230, 92, 150, 0.24)",
          "--answer-correct-start": "#fff6fb",
          "--answer-correct-end": "#dff7e9",
          "--answer-correct-border": "#43a86b",
          "--answer-correct-ink": "#165533",
          "--answer-correct-shadow": "rgba(67, 168, 107, 0.22)",
          "--answer-wrong-start": "#fff6fb",
          "--answer-wrong-end": "#ffd6e6",
          "--answer-wrong-border": "#cf5288",
          "--answer-wrong-ink": "#7a214d",
          "--answer-wrong-shadow": "rgba(207, 82, 136, 0.22)"
        }
      },
      {
        id: "lagoon",
        label: "Laguna",
        swatches: ["#f2fffc", "#d8fff4", "#b6f5eb"],
        vars: {
          "--answer-start": "#f2fffc",
          "--answer-end": "#d8fff4",
          "--answer-hover-end": "#c9fbef",
          "--answer-selected-end": "#b6f5eb",
          "--answer-border": "rgba(62, 195, 166, 0.26)",
          "--answer-border-hover": "rgba(62, 195, 166, 0.48)",
          "--answer-border-selected": "rgba(27, 163, 136, 0.9)",
          "--answer-shadow": "rgba(62, 195, 166, 0.12)",
          "--answer-shadow-hover": "rgba(62, 195, 166, 0.18)",
          "--answer-shadow-selected": "rgba(62, 195, 166, 0.24)",
          "--answer-correct-start": "#f2fffc",
          "--answer-correct-end": "#d8fff4",
          "--answer-correct-border": "#1ba388",
          "--answer-correct-ink": "#115445",
          "--answer-correct-shadow": "rgba(27, 163, 136, 0.22)",
          "--answer-wrong-start": "#f2fffc",
          "--answer-wrong-end": "#ffe1ea",
          "--answer-wrong-border": "#d95b82",
          "--answer-wrong-ink": "#7f2447",
          "--answer-wrong-shadow": "rgba(217, 91, 130, 0.22)"
        }
      },
      {
        id: "velvet",
        label: "Aksamit",
        swatches: ["#1d2850", "#2a3a72", "#7c96ff"],
        vars: {
          "--answer-start": "#1d2850",
          "--answer-end": "#2a3a72",
          "--answer-hover-end": "#314485",
          "--answer-selected-end": "#3a52a2",
          "--answer-border": "rgba(150, 174, 255, 0.3)",
          "--answer-border-hover": "rgba(150, 174, 255, 0.56)",
          "--answer-border-selected": "rgba(178, 196, 255, 0.94)",
          "--answer-shadow": "rgba(8, 13, 32, 0.24)",
          "--answer-shadow-hover": "rgba(8, 13, 32, 0.3)",
          "--answer-shadow-selected": "rgba(8, 13, 32, 0.36)",
          "--answer-correct-start": "#182544",
          "--answer-correct-end": "#214f45",
          "--answer-correct-border": "#62d8bb",
          "--answer-correct-ink": "#d9fff4",
          "--answer-correct-shadow": "rgba(8, 13, 32, 0.32)",
          "--answer-wrong-start": "#241a33",
          "--answer-wrong-end": "#5e2645",
          "--answer-wrong-border": "#ff96be",
          "--answer-wrong-ink": "#ffe5ef",
          "--answer-wrong-shadow": "rgba(8, 13, 32, 0.32)"
        }
      },
      {
        id: "ember-grid",
        label: "Rozżarzone",
        swatches: ["#3a241d", "#59352a", "#ff9d6c"],
        vars: {
          "--answer-start": "#3a241d",
          "--answer-end": "#59352a",
          "--answer-hover-end": "#6a4031",
          "--answer-selected-end": "#85503d",
          "--answer-border": "rgba(255, 173, 129, 0.28)",
          "--answer-border-hover": "rgba(255, 173, 129, 0.5)",
          "--answer-border-selected": "rgba(255, 197, 164, 0.92)",
          "--answer-shadow": "rgba(18, 10, 7, 0.24)",
          "--answer-shadow-hover": "rgba(18, 10, 7, 0.3)",
          "--answer-shadow-selected": "rgba(18, 10, 7, 0.36)",
          "--answer-correct-start": "#233323",
          "--answer-correct-end": "#446842",
          "--answer-correct-border": "#9fdd8d",
          "--answer-correct-ink": "#efffe8",
          "--answer-correct-shadow": "rgba(18, 10, 7, 0.3)",
          "--answer-wrong-start": "#3a1e27",
          "--answer-wrong-end": "#7a3345",
          "--answer-wrong-border": "#ffb0c2",
          "--answer-wrong-ink": "#fff0f4",
          "--answer-wrong-shadow": "rgba(18, 10, 7, 0.3)"
        }
      },
      {
        id: "nightfall",
        label: "Zmrok",
        swatches: ["#162241", "#23335f", "#87c8ff"],
        vars: {
          "--answer-start": "#162241",
          "--answer-end": "#23335f",
          "--answer-hover-end": "#2b3f75",
          "--answer-selected-end": "#35508f",
          "--answer-border": "rgba(142, 194, 255, 0.28)",
          "--answer-border-hover": "rgba(142, 194, 255, 0.52)",
          "--answer-border-selected": "rgba(181, 219, 255, 0.92)",
          "--answer-shadow": "rgba(5, 10, 24, 0.24)",
          "--answer-shadow-hover": "rgba(5, 10, 24, 0.3)",
          "--answer-shadow-selected": "rgba(5, 10, 24, 0.36)",
          "--answer-correct-start": "#172d2d",
          "--answer-correct-end": "#1f554c",
          "--answer-correct-border": "#6de6c2",
          "--answer-correct-ink": "#e6fff7",
          "--answer-correct-shadow": "rgba(5, 10, 24, 0.32)",
          "--answer-wrong-start": "#2a1b32",
          "--answer-wrong-end": "#683052",
          "--answer-wrong-border": "#ffa4c8",
          "--answer-wrong-ink": "#fff0f6",
          "--answer-wrong-shadow": "rgba(5, 10, 24, 0.32)"
        }
      },
      {
        id: "deep-forest",
        label: "Głęboki las",
        swatches: ["#183027", "#25453a", "#8fe0bc"],
        vars: {
          "--answer-start": "#183027",
          "--answer-end": "#25453a",
          "--answer-hover-end": "#2d5748",
          "--answer-selected-end": "#38715e",
          "--answer-border": "rgba(151, 234, 198, 0.26)",
          "--answer-border-hover": "rgba(151, 234, 198, 0.48)",
          "--answer-border-selected": "rgba(196, 247, 222, 0.92)",
          "--answer-shadow": "rgba(5, 14, 11, 0.24)",
          "--answer-shadow-hover": "rgba(5, 14, 11, 0.3)",
          "--answer-shadow-selected": "rgba(5, 14, 11, 0.36)",
          "--answer-correct-start": "#163226",
          "--answer-correct-end": "#2d6847",
          "--answer-correct-border": "#9aefaf",
          "--answer-correct-ink": "#f0fff2",
          "--answer-correct-shadow": "rgba(5, 14, 11, 0.3)",
          "--answer-wrong-start": "#351f24",
          "--answer-wrong-end": "#774049",
          "--answer-wrong-border": "#ffb0bc",
          "--answer-wrong-ink": "#fff1f3",
          "--answer-wrong-shadow": "rgba(5, 14, 11, 0.3)"
        }
      }
    ]
  },
  feedback: {
    label: "Komunikaty tekstowe",
    description: "Podpowiedzi, pola informacji i teksty statusu",
    previewHint: "Zmienia podpowiedzi, pola informacji i komunikaty zapisu",
    options: [
      {
        id: "mint",
        label: "Mięta",
        swatches: ["#55cb84", "#e4fff0", "#ef5b7b"],
        vars: {
          "--green": "#55cb84",
          "--green-soft": "#e4fff0",
          "--green-deep": "#2fa965",
          "--green-ink": "#0f5b31",
          "--danger": "#ef5b7b",
          "--danger-soft": "#fff0f4",
          "--danger-deep": "#de4b6e",
          "--danger-ink": "#8c2440",
          "--hint-bg": "#fff6d9",
          "--hint-border": "rgba(255, 212, 90, 0.5)",
          "--feedback-bg": "#edf6ff",
          "--feedback-border": "rgba(47, 140, 255, 0.22)",
          "--message-error": "#d72659",
          "--message-success": "#355070"
        }
      },
      {
        id: "jungle",
        label: "Dżungla",
        swatches: ["#3bb273", "#e5ffec", "#ff9f5a"],
        vars: {
          "--green": "#3bb273",
          "--green-soft": "#e5ffec",
          "--green-deep": "#218452",
          "--green-ink": "#145232",
          "--danger": "#ff9f5a",
          "--danger-soft": "#fff0e4",
          "--danger-deep": "#db7b2f",
          "--danger-ink": "#824310",
          "--hint-bg": "#eefbdd",
          "--hint-border": "rgba(89, 176, 81, 0.36)",
          "--feedback-bg": "#e7fff4",
          "--feedback-border": "rgba(59, 178, 115, 0.22)",
          "--message-error": "#bf6a24",
          "--message-success": "#2f6d47"
        }
      },
      {
        id: "galaxy",
        label: "Galaktyka",
        swatches: ["#7b84ff", "#eef0ff", "#ff8fb7"],
        vars: {
          "--green": "#7b84ff",
          "--green-soft": "#eef0ff",
          "--green-deep": "#5a62da",
          "--green-ink": "#30378f",
          "--danger": "#ff8fb7",
          "--danger-soft": "#fff0f7",
          "--danger-deep": "#de5e90",
          "--danger-ink": "#8d2854",
          "--hint-bg": "#f5f1ff",
          "--hint-border": "rgba(123, 132, 255, 0.34)",
          "--feedback-bg": "#f2f4ff",
          "--feedback-border": "rgba(123, 132, 255, 0.22)",
          "--message-error": "#c64076",
          "--message-success": "#4752b3"
        }
      },
      {
        id: "sunset",
        label: "Zachód",
        swatches: ["#ff9f6e", "#fff0de", "#ff7297"],
        vars: {
          "--green": "#ff9f6e",
          "--green-soft": "#fff0de",
          "--green-deep": "#dd7447",
          "--green-ink": "#7a3d20",
          "--danger": "#ff7297",
          "--danger-soft": "#ffe9f0",
          "--danger-deep": "#dc4c74",
          "--danger-ink": "#8d244a",
          "--hint-bg": "#fff4d8",
          "--hint-border": "rgba(255, 188, 107, 0.42)",
          "--feedback-bg": "#fff2ea",
          "--feedback-border": "rgba(255, 140, 94, 0.24)",
          "--message-error": "#c2456d",
          "--message-success": "#9c552a"
        }
      },
      {
        id: "polar",
        label: "Polarna",
        swatches: ["#59c6da", "#e9fbff", "#6a95ff"],
        vars: {
          "--green": "#59c6da",
          "--green-soft": "#e9fbff",
          "--green-deep": "#2595aa",
          "--green-ink": "#13576b",
          "--danger": "#6a95ff",
          "--danger-soft": "#ecf1ff",
          "--danger-deep": "#4169dc",
          "--danger-ink": "#233d87",
          "--hint-bg": "#eefaff",
          "--hint-border": "rgba(89, 198, 218, 0.34)",
          "--feedback-bg": "#ebf6ff",
          "--feedback-border": "rgba(106, 149, 255, 0.24)",
          "--message-error": "#3a5bc9",
          "--message-success": "#227b91"
        }
      },
      {
        id: "nocturne",
        label: "Nokturn",
        swatches: ["#62e6c6", "#18333a", "#ff8ca8"],
        vars: {
          "--green": "#62e6c6",
          "--green-soft": "#112f31",
          "--green-deep": "#2fb494",
          "--green-ink": "#d6fff5",
          "--danger": "#ff8ca8",
          "--danger-soft": "#341522",
          "--danger-deep": "#f06587",
          "--danger-ink": "#ffe2e9",
          "--hint-bg": "#282b48",
          "--hint-border": "rgba(154, 166, 255, 0.32)",
          "--feedback-bg": "#152b39",
          "--feedback-border": "rgba(98, 230, 198, 0.22)",
          "--message-error": "#ffb2c6",
          "--message-success": "#8df3da"
        }
      },
      {
        id: "signal",
        label: "Sygnał",
        swatches: ["#7bd5ff", "#1a2f48", "#ff9f87"],
        vars: {
          "--green": "#7bd5ff",
          "--green-soft": "#142538",
          "--green-deep": "#4da8db",
          "--green-ink": "#eaf7ff",
          "--danger": "#ff9f87",
          "--danger-soft": "#3a211f",
          "--danger-deep": "#ed7c63",
          "--danger-ink": "#fff0eb",
          "--hint-bg": "#213650",
          "--hint-border": "rgba(123, 213, 255, 0.3)",
          "--feedback-bg": "#16283d",
          "--feedback-border": "rgba(123, 213, 255, 0.24)",
          "--message-error": "#ffc3b4",
          "--message-success": "#9be4ff"
        }
      },
      {
        id: "afterglow",
        label: "Poświata",
        swatches: ["#ffc274", "#3a2331", "#ff87b2"],
        vars: {
          "--green": "#ffc274",
          "--green-soft": "#3c2b1e",
          "--green-deep": "#e09840",
          "--green-ink": "#fff4e6",
          "--danger": "#ff87b2",
          "--danger-soft": "#391b2b",
          "--danger-deep": "#e3618f",
          "--danger-ink": "#ffeaf2",
          "--hint-bg": "#42324f",
          "--hint-border": "rgba(255, 194, 116, 0.3)",
          "--feedback-bg": "#2d223c",
          "--feedback-border": "rgba(255, 135, 178, 0.22)",
          "--message-error": "#ffbfd5",
          "--message-success": "#ffd59a"
        }
      }
    ]
  }
};
const SOUND_EVENT_CONFIG = {
  correct: {
    calm: { volume: 0.12, stepMs: 74, duration: 0.28 },
    standard: { volume: 0.14, stepMs: 68, duration: 0.3 },
    turbo: { volume: 0.17, stepMs: 62, duration: 0.32 }
  },
  mastered: {
    calm: { volume: 0.17, stepMs: 80, duration: 0.56 },
    standard: { volume: 0.2, stepMs: 72, duration: 0.6 },
    turbo: { volume: 0.24, stepMs: 64, duration: 0.64 }
  },
  wrong: {
    calm: { volume: 0.11, stepMs: 110, duration: 0.34 },
    standard: { volume: 0.13, stepMs: 100, duration: 0.36 },
    turbo: { volume: 0.15, stepMs: 92, duration: 0.38 }
  },
  hint: {
    calm: { volume: 0.09, stepMs: 90, duration: 0.3 },
    standard: { volume: 0.11, stepMs: 84, duration: 0.32 },
    turbo: { volume: 0.13, stepMs: 76, duration: 0.34 }
  },
  next: {
    calm: { volume: 0.07, stepMs: 70, duration: 0.18 },
    standard: { volume: 0.08, stepMs: 62, duration: 0.2 },
    turbo: { volume: 0.09, stepMs: 54, duration: 0.22 }
  },
  complete: {
    calm: { volume: 0.17, stepMs: 88, duration: 0.78 },
    standard: { volume: 0.2, stepMs: 76, duration: 0.82 },
    turbo: { volume: 0.24, stepMs: 66, duration: 0.86 }
  },
  toggleOn: {
    calm: { volume: 0.08, stepMs: 65, duration: 0.2 },
    standard: { volume: 0.09, stepMs: 58, duration: 0.22 },
    turbo: { volume: 0.1, stepMs: 52, duration: 0.24 }
  },
  toggleOff: {
    calm: { volume: 0.06, stepMs: 80, duration: 0.18 },
    standard: { volume: 0.07, stepMs: 74, duration: 0.2 },
    turbo: { volume: 0.08, stepMs: 66, duration: 0.22 }
  }
};

const exampleQuiz = {
  title: "Kosmiczna misja",
  description: "Krótka runda z pytaniami o planetach i gwiazdach.",
  settings: {
    sessionSize: 4,
    stimulusMode: "calm",
    trueFalsePercent: 25,
    shuffleQuestions: false,
    shuffleOptions: false
  },
  items: [
    {
      question: "Która planeta jest nazywana Czerwoną Planetą?",
      options: ["Mars", "Wenus", "Jowisz", "Merkury"],
      correctAnswer: "Mars",
      hint: "To czwarta planeta od Słońca."
    },
    {
      question: "Co daje Ziemi światło i ciepło?",
      options: ["Księżyc", "Słońce", "Saturn", "Kometa"],
      correctAnswer: "Słońce",
      hint: "To gwiazda w centrum naszego układu."
    },
    {
      question: "Która planeta słynie z pierścieni?",
      options: ["Saturn", "Neptun", "Mars", "Uran"],
      correctAnswer: "Saturn",
      hint: "Jest wielka i gazowa."
    },
    {
      question: "Która planeta jest najbliżej Słońca?",
      options: ["Merkury", "Wenus", "Mars", "Neptun"],
      correctAnswer: "Merkury",
      hint: "To mała planeta bardzo blisko gwiazdy."
    }
  ]
};

const state = {
  quiz: null,
  session: null,
  history: [],
  activeScene: "builder",
  ui: {
    soundEnabled: DEFAULT_SOUND_ENABLED,
    themeSelection: Object.assign({}, DEFAULT_THEME_SELECTION)
  },
  themeDraftSelection: null
};

const elements = {
  appShell: document.querySelector(".app-shell"),
  builderScene: document.querySelector("#builderScene"),
  quizScene: document.querySelector("#quizScene"),
  themeScene: document.querySelector("#themeScene"),
  builderFitFrame: document.querySelector("#builderFitFrame"),
  builderFitContent: document.querySelector("#builderFitContent"),
  statusFitFrame: document.querySelector("#statusFitFrame"),
  statusFitContent: document.querySelector("#statusFitContent"),
  quizFitFrame: document.querySelector("#quizFitFrame"),
  quizFitContent: document.querySelector("#quizFitContent"),
  themeFitFrame: document.querySelector("#themeFitFrame"),
  themeFitContent: document.querySelector("#themeFitContent"),
  questionContent: document.querySelector("#questionContent"),
  schemaBox: document.querySelector("#schemaBox"),
  fullscreenToggleButton: document.querySelector("#fullscreenToggleButton"),
  backToBuilderButton: document.querySelector("#backToBuilderButton"),
  openThemeEditorButton: document.querySelector("#openThemeEditorButton"),
  closeThemeEditorButton: document.querySelector("#closeThemeEditorButton"),
  quizTitleInput: document.querySelector("#quizTitleInput"),
  sessionSizeInput: document.querySelector("#sessionSizeInput"),
  stimulusModeSelect: document.querySelector("#stimulusModeSelect"),
  trueFalsePercentInput: document.querySelector("#trueFalsePercentInput"),
  quizJsonInput: document.querySelector("#quizJsonInput"),
  builderMessage: document.querySelector("#builderMessage"),
  saveQuizButton: document.querySelector("#saveQuizButton"),
  replaceQuizButton: document.querySelector("#replaceQuizButton"),
  loadExampleButton: document.querySelector("#loadExampleButton"),
  resetAllButton: document.querySelector("#resetAllButton"),
  saveThemeButton: document.querySelector("#saveThemeButton"),
  resetThemeButton: document.querySelector("#resetThemeButton"),
  themeOptionsGrid: document.querySelector("#themeOptionsGrid"),
  themeMessage: document.querySelector("#themeMessage"),
  resumeSessionButton: document.querySelector("#resumeSessionButton"),
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
  rewardPill: document.querySelector("#rewardPill"),
  summaryView: document.querySelector("#summaryView"),
  summaryMasteredValue: document.querySelector("#summaryMasteredValue"),
  summaryPendingValue: document.querySelector("#summaryPendingValue"),
  summaryScoreValue: document.querySelector("#summaryScoreValue"),
  summaryRemainingValue: document.querySelector("#summaryRemainingValue"),
  summaryComparisonText: document.querySelector("#summaryComparisonText"),
  summaryRemainingText: document.querySelector("#summaryRemainingText"),
  soundToggleButtons: Array.from(document.querySelectorAll("[data-sound-toggle]"))
};

let adaptiveLayoutFrame = 0;
let audioContext = null;
let audioMasterGain = null;
let audioCompressor = null;
let audioCleanupTimer = 0;
const THEME_VAR_KEYS = Array.from(
  new Set(
    THEME_OPTION_ORDER.flatMap(function collectGroupVars(groupKey) {
      return THEME_OPTIONS[groupKey].options.flatMap(function collectOptionVars(option) {
        return Object.keys(option.vars);
      });
    })
  )
);
let defaultThemeVarsCache = null;

function getStoredUiState() {
  return readJson(STORAGE_KEYS.ui, {});
}

function normalizeThemeSelection(themeSelection) {
  const nextSelection = {};

  THEME_OPTION_ORDER.forEach(function normalizeGroup(groupKey) {
    const group = THEME_OPTIONS[groupKey];
    const requestedId = themeSelection && typeof themeSelection[groupKey] === "string"
      ? themeSelection[groupKey]
      : DEFAULT_THEME_SELECTION[groupKey];
    const matchedOption = group.options.find(function findOption(option) {
      return option.id === requestedId;
    });

    nextSelection[groupKey] = matchedOption
      ? matchedOption.id
      : DEFAULT_THEME_SELECTION[groupKey];
  });

  return nextSelection;
}

function getThemeSelection() {
  return normalizeThemeSelection(
    state.ui && state.ui.themeSelection
      ? state.ui.themeSelection
      : DEFAULT_THEME_SELECTION
  );
}

function getThemeDraftSelection() {
  return normalizeThemeSelection(
    state.themeDraftSelection || getThemeSelection()
  );
}

function isThemeEditorOpen() {
  return state.activeScene === "theme";
}

function getDisplayedThemeSelection() {
  return isThemeEditorOpen()
    ? getThemeDraftSelection()
    : getThemeSelection();
}

function getThemeOption(groupKey, optionId) {
  const group = THEME_OPTIONS[groupKey];

  if (!group) {
    return null;
  }

  return group.options.find(function findOption(option) {
    return option.id === optionId;
  }) || null;
}

function getMergedThemeVars(selection) {
  const mergedVars = {
    "--theme-version": String(THEME_STORAGE_VERSION)
  };

  THEME_OPTION_ORDER.forEach(function mergeGroup(groupKey) {
    const option = getThemeOption(groupKey, selection[groupKey]);

    if (!option) {
      return;
    }

    Object.assign(mergedVars, option.vars);
  });

  return mergedVars;
}

function getDefaultThemeVars() {
  if (defaultThemeVarsCache) {
    return defaultThemeVarsCache;
  }

  const computedStyle = getComputedStyle(document.documentElement);

  defaultThemeVarsCache = THEME_VAR_KEYS.reduce(function collectDefaults(defaults, key) {
    defaults[key] = computedStyle.getPropertyValue(key).trim();
    return defaults;
  }, {
    "--theme-version": String(THEME_STORAGE_VERSION)
  });

  return defaultThemeVarsCache;
}

function applyThemeSelection(themeSelection) {
  const selection = normalizeThemeSelection(themeSelection);
  const themeVars = Object.assign({}, getDefaultThemeVars(), getMergedThemeVars(selection));

  Object.keys(themeVars).forEach(function applyVar(key) {
    document.documentElement.style.setProperty(key, themeVars[key]);
  });
}

function getCurrentStimulusMode() {
  return state.quiz ? normalizeStimulusMode(state.quiz.settings.stimulusMode) : "calm";
}

function getSoundConfig(eventName) {
  const eventConfig = SOUND_EVENT_CONFIG[eventName] || SOUND_EVENT_CONFIG.next;
  return eventConfig[getCurrentStimulusMode()] || eventConfig.calm;
}

function isSoundEnabled() {
  return Boolean(state.ui && state.ui.soundEnabled);
}

function scheduleAudioNodeCleanup() {
  if (audioCleanupTimer) {
    window.clearTimeout(audioCleanupTimer);
  }

  audioCleanupTimer = window.setTimeout(function cleanupAudio() {
    if (!audioContext) {
      return;
    }

    if (audioContext.state === "running") {
      return;
    }

    audioContext.close().catch(function ignoreCloseError() {
      return null;
    });
    audioContext = null;
    audioMasterGain = null;
    audioCompressor = null;
  }, 18000);
}

function ensureAudioEngine() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;

  if (!AudioCtor) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioCtor();
    audioMasterGain = audioContext.createGain();
    audioMasterGain.gain.value = 0.72;
    audioCompressor = audioContext.createDynamicsCompressor();
    audioCompressor.threshold.value = -20;
    audioCompressor.knee.value = 22;
    audioCompressor.ratio.value = 3;
    audioCompressor.attack.value = 0.003;
    audioCompressor.release.value = 0.16;
    audioMasterGain.connect(audioCompressor);
    audioCompressor.connect(audioContext.destination);
  }

  scheduleAudioNodeCleanup();
  return audioContext;
}

function resumeAudioEngine() {
  const context = ensureAudioEngine();

  if (!context) {
    return Promise.resolve(null);
  }

  if (context.state === "suspended") {
    return context.resume().then(function onResume() {
      scheduleAudioNodeCleanup();
      return context;
    }).catch(function ignoreResumeError() {
      return null;
    });
  }

  return Promise.resolve(context);
}

function createTone(context, options) {
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const filterNode = context.createBiquadFilter();
  const now = options.startTime;
  const duration = options.duration;
  const peakGain = options.gain;

  oscillator.type = options.type;
  oscillator.frequency.setValueAtTime(options.frequency, now);
  filterNode.type = options.filterType || "lowpass";
  filterNode.frequency.setValueAtTime(options.filterFrequency || 2400, now);
  filterNode.Q.value = options.filterQ || 0.0001;

  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.linearRampToValueAtTime(peakGain, now + Math.min(0.03, duration * 0.3));
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(filterNode);
  filterNode.connect(gainNode);
  gainNode.connect(audioMasterGain);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.03);
}

function playSoundEvent(eventName, forcePlayback) {
  const config = getSoundConfig(eventName);

  if (!forcePlayback && !isSoundEnabled()) {
    return;
  }

  resumeAudioEngine().then(function onReady(context) {
    let startTime;
    let step;

    if (!context || !audioMasterGain) {
      return;
    }

    startTime = context.currentTime + 0.01;
    step = config.stepMs / 1000;

    if (eventName === "correct") {
      createTone(context, {
        startTime: startTime,
        duration: config.duration * 0.88,
        frequency: 659.25,
        gain: config.volume,
        type: "triangle",
        filterFrequency: 2200
      });
      createTone(context, {
        startTime: startTime + step,
        duration: config.duration,
        frequency: 783.99,
        gain: config.volume * 0.9,
        type: "sine",
        filterFrequency: 2500
      });
      return;
    }

    if (eventName === "mastered") {
      createTone(context, {
        startTime: startTime,
        duration: config.duration * 0.46,
        frequency: 523.25,
        gain: config.volume,
        type: "triangle",
        filterFrequency: 2100
      });
      createTone(context, {
        startTime: startTime + step,
        duration: config.duration * 0.48,
        frequency: 659.25,
        gain: config.volume * 0.92,
        type: "triangle",
        filterFrequency: 2300
      });
      createTone(context, {
        startTime: startTime + step * 2,
        duration: config.duration * 0.52,
        frequency: 783.99,
        gain: config.volume * 0.9,
        type: "triangle",
        filterFrequency: 2500
      });
      createTone(context, {
        startTime: startTime + step * 3,
        duration: config.duration * 0.76,
        frequency: 1046.5,
        gain: config.volume,
        type: "sine",
        filterFrequency: 2900
      });
      return;
    }

    if (eventName === "wrong") {
      createTone(context, {
        startTime: startTime,
        duration: config.duration * 0.56,
        frequency: 329.63,
        gain: config.volume,
        type: "sine",
        filterFrequency: 1200
      });
      createTone(context, {
        startTime: startTime + step,
        duration: config.duration * 0.68,
        frequency: 246.94,
        gain: config.volume * 0.92,
        type: "triangle",
        filterFrequency: 980
      });
      return;
    }

    if (eventName === "hint") {
      createTone(context, {
        startTime: startTime,
        duration: config.duration,
        frequency: 587.33,
        gain: config.volume * 0.78,
        type: "sine",
        filterFrequency: 2600
      });
      createTone(context, {
        startTime: startTime + step,
        duration: config.duration * 0.92,
        frequency: 880,
        gain: config.volume,
        type: "triangle",
        filterFrequency: 3000
      });
      return;
    }

    if (eventName === "next") {
      createTone(context, {
        startTime: startTime,
        duration: config.duration,
        frequency: 493.88,
        gain: config.volume,
        type: "triangle",
        filterFrequency: 1800
      });
      return;
    }

    if (eventName === "complete") {
      [523.25, 659.25, 783.99, 1046.5].forEach(function playFrequency(frequency, index) {
        createTone(context, {
          startTime: startTime + step * index,
          duration: config.duration * (index === 3 ? 0.72 : 0.48),
          frequency: frequency,
          gain: config.volume * (index === 3 ? 1 : 0.86),
          type: index < 2 ? "triangle" : "sine",
          filterFrequency: 2400 + index * 220
        });
      });
      return;
    }

    if (eventName === "toggleOn") {
      createTone(context, {
        startTime: startTime,
        duration: config.duration * 0.72,
        frequency: 493.88,
        gain: config.volume * 0.82,
        type: "triangle",
        filterFrequency: 2000
      });
      createTone(context, {
        startTime: startTime + step,
        duration: config.duration,
        frequency: 659.25,
        gain: config.volume,
        type: "sine",
        filterFrequency: 2500
      });
      return;
    }

    createTone(context, {
      startTime: startTime,
      duration: config.duration,
      frequency: 293.66,
      gain: config.volume,
      type: "sine",
      filterFrequency: 1200
    });
  });
}

function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    null
  );
}

function getFullscreenTarget() {
  return document.querySelector(".app-shell");
}

function supportsFullscreen() {
  const target = getFullscreenTarget();

  return Boolean(
    target &&
    (target.requestFullscreen || target.webkitRequestFullscreen)
  );
}

function updateFullscreenButton() {
  const isFullscreen = Boolean(getFullscreenElement());

  if (!elements.fullscreenToggleButton) {
    return;
  }

  elements.fullscreenToggleButton.textContent = isFullscreen ? "Wyłącz pełny ekran" : "Pełny ekran";
  elements.fullscreenToggleButton.setAttribute("aria-pressed", String(isFullscreen));
  elements.fullscreenToggleButton.title = isFullscreen
    ? "Wyłącz tryb pełnoekranowy"
    : "Włącz tryb pełnoekranowy";
}

async function toggleFullscreen() {
  const target = getFullscreenTarget();

  if (!target || !supportsFullscreen()) {
    setBuilderMessage("Ta przeglądarka nie obsługuje trybu pełnoekranowego.", true);
    return;
  }

  try {
    if (getFullscreenElement()) {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else if (target.requestFullscreen) {
      await target.requestFullscreen({ navigationUI: "hide" });
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    }
  } catch (error) {
    console.error("Fullscreen error:", error);
    setBuilderMessage("Nie udało się przełączyć trybu pełnoekranowego.", true);
  } finally {
    updateFullscreenButton();
  }
}

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

function hashString(value) {
  let hash = 2166136261;
  let index;

  for (index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function getStableShuffledOptions(question, options) {
  const seed = question + "::" + options.join("::");

  return options
    .map(function mapOption(option, index) {
      return {
        option: option,
        index: index,
        order: hashString(seed + "::" + option + "::" + index)
      };
    })
    .sort(function sortOptions(left, right) {
      if (left.order === right.order) {
        return left.index - right.index;
      }

      return left.order - right.order;
    })
    .map(function pickOption(entry) {
      return entry.option;
    });
}

function normalizeStimulusMode(value) {
  if (value === "calm" || value === "standard" || value === "turbo") {
    return value;
  }

  return "calm";
}

function normalizeSessionSize(value, itemCount) {
  const parsed = Number.parseInt(value, 10);
  const safeCount = itemCount || 5;
  const fallback = Math.min(5, Math.max(3, safeCount));
  const candidate = Number.isFinite(parsed) ? parsed : fallback;
  return clamp(candidate, 3, Math.max(3, Math.min(10, safeCount)));
}

function normalizeTrueFalsePercent(value) {
  const parsed = Number.parseInt(value, 10);
  const candidate = Number.isFinite(parsed) ? parsed : 0;
  return clamp(candidate, 0, 100);
}

function getQueueEntryQuestionIndex(entry) {
  if (Number.isInteger(entry)) {
    return entry;
  }

  if (entry && Number.isInteger(entry.questionIndex)) {
    return entry.questionIndex;
  }

  return -1;
}

function buildTrueFalsePrompt(item, quizSettings) {
  const falseOptions = item.options.filter(function filterIncorrect(option) {
    return option !== item.correctAnswer;
  });
  const useTrueStatement = falseOptions.length === 0 || Math.random() >= 0.5;
  const proposedAnswer = useTrueStatement
    ? item.correctAnswer
    : falseOptions[Math.floor(Math.random() * falseOptions.length)];
  const options = quizSettings.shuffleOptions
    ? getStableShuffledOptions(item.question + "::true-false::" + proposedAnswer, TRUE_FALSE_OPTIONS)
    : TRUE_FALSE_OPTIONS.slice();

  return {
    answerMode: "boolean",
    displayQuestion: "Prawda czy fałsz?",
    statementText: "Na pytanie \"" + item.question + "\" poprawna odpowiedź to \"" + proposedAnswer + "\".",
    options: options,
    correctAnswer: useTrueStatement ? "Prawda" : "Fałsz"
  };
}

function createPromptEntry(questionIndex, quiz, forcedMode) {
  const item = quiz.items[questionIndex];
  const trueFalsePercent = quiz.settings.trueFalsePercent || 0;
  const choiceOptions = quiz.settings.shuffleOptions
    ? getStableShuffledOptions(item.question + "::choice", item.options)
    : item.options.slice();
  const useBooleanMode = forcedMode
    ? forcedMode === "boolean"
    : (trueFalsePercent > 0 && Math.random() * 100 < trueFalsePercent);

  if (useBooleanMode) {
    return Object.assign(
      {
        questionIndex: questionIndex
      },
      buildTrueFalsePrompt(item, quiz.settings)
    );
  }

  return {
    questionIndex: questionIndex,
    answerMode: "choice",
    displayQuestion: item.question,
    statementText: "",
    options: choiceOptions,
    correctAnswer: item.correctAnswer
  };
}

function normalizeQuiz(rawQuiz, fallbackTitle, overrides) {
  const source = rawQuiz || {};
  const opts = overrides || {};
  const settingsSource = source.settings || {};
  let items;

  if (!source || typeof source !== "object") {
    throw new Error("JSON musi opisywać obiekt quizu.");
  }

  if (!Array.isArray(source.items) || source.items.length === 0) {
    throw new Error("Quiz musi mieć tablicę items z co najmniej jednym pytaniem.");
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
      throw new Error("Pytanie " + (index + 1) + " nie ma treści.");
    }

    if (!correctAnswer) {
      throw new Error("Pytanie " + (index + 1) + " nie ma correctAnswer.");
    }

    if (options.indexOf(correctAnswer) === -1) {
      options.push(correctAnswer);
    }

    if (options.length < 2) {
      throw new Error("Pytanie " + (index + 1) + " musi mieć przynajmniej 2 odpowiedzi.");
    }

    return {
      question: question,
      options: getStableShuffledOptions(question, options),
      correctAnswer: correctAnswer,
      hint: String(item.hint || "").trim()
    };
  });

  return {
    title: String(source.title || fallbackTitle || "Mój quiz").trim(),
    description: String(source.description || "Quiz zapisany lokalnie w przeglądarce.").trim(),
    settings: {
      sessionSize: normalizeSessionSize(
        typeof opts.sessionSize !== "undefined" ? opts.sessionSize : settingsSource.sessionSize,
        items.length
      ),
      stimulusMode: normalizeStimulusMode(
        typeof opts.stimulusMode !== "undefined" ? opts.stimulusMode : settingsSource.stimulusMode
      ),
      trueFalsePercent: normalizeTrueFalsePercent(
        typeof opts.trueFalsePercent !== "undefined"
          ? opts.trueFalsePercent
          : settingsSource.trueFalsePercent
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

function cloneQuestionProgress(quiz, sourceProgress) {
  const fallback = createQuestionProgress(quiz.items);

  if (!Array.isArray(sourceProgress) || sourceProgress.length !== quiz.items.length) {
    return fallback;
  }

  return sourceProgress.map(function cloneProgress(progress, index) {
    const base = fallback[index];

    if (!progress || typeof progress !== "object") {
      return base;
    }

    return {
      resolved: Boolean(progress.resolved),
      needsReinforcement: typeof progress.needsReinforcement === "boolean"
        ? progress.needsReinforcement
        : !Boolean(progress.resolved),
      successfulReviewMoments: Number.isInteger(progress.successfulReviewMoments)
        ? Math.max(0, progress.successfulReviewMoments)
        : 0
    };
  });
}

function countResolvedQuestions(questionProgress) {
  if (!Array.isArray(questionProgress)) {
    return 0;
  }

  return questionProgress.filter(function countResolved(progress) {
    return Boolean(progress && progress.resolved);
  }).length;
}

function getRoundQueue(quiz, questionProgress) {
  const unresolvedIndexes = quiz.items
    .map(function mapIndex(_, index) {
      return index;
    })
    .filter(function onlyUnresolved(index) {
      const progress = questionProgress[index];
      return !(progress && progress.resolved);
    });
  const ordered = quiz.settings.shuffleQuestions ? shuffleArray(unresolvedIndexes) : unresolvedIndexes;
  const roundIndexes = ordered.slice(0, Math.min(quiz.settings.sessionSize, ordered.length));
  const booleanCount = Math.min(
    roundIndexes.length,
    Math.round((roundIndexes.length * (quiz.settings.trueFalsePercent || 0)) / 100)
  );
  const booleanIndexes = {};

  if (booleanCount > 0) {
    shuffleArray(roundIndexes).slice(0, booleanCount).forEach(function markBoolean(questionIndex) {
      booleanIndexes[questionIndex] = true;
    });
  }

  return roundIndexes.map(function mapPrompt(questionIndex) {
    return createPromptEntry(questionIndex, quiz, booleanIndexes[questionIndex] ? "boolean" : "choice");
  });
}

function createSession(quiz, previousSession) {
  const questionProgress = cloneQuestionProgress(
    quiz,
    previousSession && previousSession.questionProgress
  );
  const roundQueue = getRoundQueue(quiz, questionProgress);
  const masteredCount = countResolvedQuestions(questionProgress);

  return {
    quizTitle: quiz.title,
    queue: roundQueue,
    totalQuestions: roundQueue.length,
    currentStep: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    correctCount: masteredCount,
    answeredCount: 0,
    reviewCount: 0,
    questionProgress: questionProgress,
    selectedAnswer: null,
    eliminatedAnswers: [],
    attemptCountForCurrent: 0,
    lastAnswerCorrect: null,
    lastFeedback: "",
    lastEncouragement: "",
    lastGain: 0,
    completed: roundQueue.length === 0,
    revealHint: false
  };
}

function loadFromStorage() {
  state.quiz = readJson(STORAGE_KEYS.quiz, null);
  state.session = readJson(STORAGE_KEYS.session, null);
  state.history = readJson(STORAGE_KEYS.history, []);
  state.ui = Object.assign(
    {},
    state.ui,
    getStoredUiState()
  );
  state.ui.soundEnabled = typeof state.ui.soundEnabled === "boolean"
    ? state.ui.soundEnabled
    : DEFAULT_SOUND_ENABLED;
  state.activeScene = state.ui.activeScene || "builder";
}

async function loadDefaultQuiz() {
  const response = await fetch(DEFAULT_QUIZ_PATH, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Nie udało się wczytać domyślnego pliku data.json.");
  }

  return response.json();
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
  localStorage.setItem(
    STORAGE_KEYS.ui,
    JSON.stringify({
      activeScene: state.activeScene,
      soundEnabled: isSoundEnabled(),
      themeSelection: getThemeSelection(),
      themeVersion: THEME_STORAGE_VERSION
    })
  );
}

function setBuilderMessage(message, isError) {
  elements.builderMessage.textContent = message;
  elements.builderMessage.style.color = isError
    ? "var(--message-error)"
    : "var(--message-success)";
}

function setThemeMessage(message, isError) {
  if (!elements.themeMessage) {
    return;
  }

  elements.themeMessage.textContent = message;
  elements.themeMessage.style.color = isError
    ? "var(--message-error)"
    : "var(--message-success)";
}

function setDensity(level) {
  if (level === "regular") {
    delete document.body.dataset.density;
    return;
  }

  document.body.dataset.density = level;
}

function resetFitScale(element, propertyName) {
  if (!element) {
    return;
  }

  element.style.setProperty(propertyName, "1");
}

function getFitScale(frame, content) {
  const safeFrameHeight = Math.max(frame.clientHeight, 1);
  const safeFrameWidth = Math.max(frame.clientWidth, 1);
  const safeContentHeight = Math.max(content.scrollHeight, 1);
  const safeContentWidth = Math.max(content.scrollWidth, 1);
  const verticalScale = safeFrameHeight / safeContentHeight;
  const horizontalScale = safeFrameWidth / safeContentWidth;

  return Math.min(1, verticalScale, horizontalScale);
}

function applyFitScale(frame, content) {
  let scale;

  if (!frame || !content) {
    return 1;
  }

  resetFitScale(content, "--content-scale");
  scale = getFitScale(frame, content);
  content.style.setProperty("--content-scale", String(Math.max(0.7, scale - 0.01)));
  return scale;
}

function getElementScale(element, propertyName) {
  const rawValue = element ? Number.parseFloat(element.style.getPropertyValue(propertyName)) : 1;

  if (!Number.isFinite(rawValue) || rawValue <= 0) {
    return 1;
  }

  return rawValue;
}

function getActiveScene() {
  if (state.activeScene === "quiz") {
    return elements.quizScene;
  }

  if (state.activeScene === "theme") {
    return elements.themeScene;
  }

  return elements.builderScene;
}

function sceneFits(scene) {
  const builderFits = state.activeScene !== "builder" || (
    elements.builderFitFrame &&
    elements.builderFitContent &&
    elements.statusFitFrame &&
    elements.statusFitContent &&
    (elements.builderFitContent.scrollHeight * getElementScale(elements.builderFitContent, "--content-scale"))
      <= elements.builderFitFrame.clientHeight + 2 &&
    (elements.statusFitContent.scrollHeight * getElementScale(elements.statusFitContent, "--content-scale"))
      <= elements.statusFitFrame.clientHeight + 2
  );
  const quizFits = state.activeScene !== "quiz" || (
    elements.quizFitFrame &&
    elements.quizFitContent &&
    (elements.quizFitContent.scrollHeight * getElementScale(elements.quizFitContent, "--content-scale"))
      <= elements.quizFitFrame.clientHeight + 2
  );
  const themeFits = state.activeScene !== "theme" || (
    elements.themeFitFrame &&
    elements.themeFitContent &&
    (elements.themeFitContent.scrollHeight * getElementScale(elements.themeFitContent, "--content-scale"))
      <= elements.themeFitFrame.clientHeight + 2
  );

  if (!scene) {
    return true;
  }

  return (
    builderFits &&
    quizFits &&
    themeFits &&
    scene.scrollHeight <= scene.clientHeight + 2 &&
    scene.scrollWidth <= scene.clientWidth + 2
  );
}

function fitActiveSceneContent() {
  if (state.activeScene === "quiz") {
    applyFitScale(elements.quizFitFrame, elements.quizFitContent);
    return;
  }
}

function applyAdaptiveLayout() {
  const scene = getActiveScene();
  let levelIndex;
  let sceneScale;

  if (!scene || !elements.appShell) {
    return;
  }

  if (state.activeScene !== "quiz") {
    setDensity("regular");
    scene.style.setProperty("--scene-scale", "1");
    return;
  }

  scene.style.setProperty("--scene-scale", "1");

  for (levelIndex = 0; levelIndex < LAYOUT_DENSITIES.length; levelIndex += 1) {
    setDensity(LAYOUT_DENSITIES[levelIndex]);
    scene.style.setProperty("--scene-scale", "1");
    fitActiveSceneContent();

    if (sceneFits(scene)) {
      return;
    }
  }

  fitActiveSceneContent();
  sceneScale = Math.min(
    1,
    scene.clientHeight / Math.max(scene.scrollHeight, 1),
    scene.clientWidth / Math.max(scene.scrollWidth, 1)
  );
  scene.style.setProperty("--scene-scale", String(Math.max(0.7, sceneScale - 0.01)));
}

function scheduleAdaptiveLayout() {
  if (adaptiveLayoutFrame) {
    window.cancelAnimationFrame(adaptiveLayoutFrame);
  }

  adaptiveLayoutFrame = window.requestAnimationFrame(function onFrame() {
    adaptiveLayoutFrame = 0;
    applyAdaptiveLayout();
  });
}

function showScene(sceneName) {
  state.activeScene = sceneName;
  document.body.dataset.activeScene = sceneName;
  elements.builderScene.classList.toggle("is-active", sceneName === "builder");
  elements.quizScene.classList.toggle("is-active", sceneName === "quiz");
  elements.themeScene.classList.toggle("is-active", sceneName === "theme");
  saveToStorage();
  scheduleAdaptiveLayout();
}

function updateSoundToggleButtons() {
  const enabled = isSoundEnabled();

  elements.soundToggleButtons.forEach(function syncSoundButton(button) {
    button.textContent = enabled ? "Dźwięk: włączony" : "Dźwięk: wyłączony";
    button.setAttribute("aria-pressed", String(enabled));
    button.classList.toggle("is-muted", !enabled);
  });
}

function toggleSound() {
  const nextEnabled = !isSoundEnabled();

  if (nextEnabled) {
    state.ui.soundEnabled = true;
    updateSoundToggleButtons();
    saveToStorage();
    playSoundEvent("toggleOn");
  } else {
    playSoundEvent("toggleOff", true);
    state.ui.soundEnabled = false;
    updateSoundToggleButtons();
    saveToStorage();
  }
}

function applyStimulusMode(mode) {
  document.body.dataset.stimulus = normalizeStimulusMode(mode);
}

function getCurrentItem() {
  const queueIndex = getQueueEntryQuestionIndex(state.session.queue[state.session.currentStep]);
  return state.quiz.items[queueIndex];
}

function getCurrentPrompt() {
  const entry = state.session.queue[state.session.currentStep];
  const questionIndex = getQueueEntryQuestionIndex(entry);
  const item = state.quiz.items[questionIndex];

  if (!item) {
    return null;
  }

  if (entry && typeof entry === "object" && Array.isArray(entry.options) && typeof entry.correctAnswer === "string") {
    return entry;
  }

  return createPromptEntry(questionIndex, state.quiz, "choice");
}

function getSafeQuiz() {
  return state.quiz || normalizeQuiz(exampleQuiz, exampleQuiz.title);
}

function hasResumableSession() {
  return Boolean(
    state.quiz &&
      state.session &&
      !state.session.completed &&
      Array.isArray(state.session.queue) &&
      state.session.queue.length &&
      Number.isInteger(state.session.currentStep) &&
      state.session.currentStep >= 0 &&
      state.session.currentStep < state.session.queue.length
  );
}

function updateBuilderFields() {
  const quiz = getSafeQuiz();
  elements.quizTitleInput.value = quiz.title || "";
  elements.sessionSizeInput.value = String(quiz.settings.sessionSize);
  elements.stimulusModeSelect.value = quiz.settings.stimulusMode;
  elements.trueFalsePercentInput.value = String(quiz.settings.trueFalsePercent || 0);
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
    return getRemainingQuestionCount(session) > 0 ? "Kolejna runda" : "Całość opanowana";
  }

  if (session.selectedAnswer) {
    if (session.lastAnswerCorrect) {
      return session.lastEncouragement || ("+" + (session.lastGain || 0) + " pkt");
    }

    return "Powtórka";
  }

  if (session.lastAnswerCorrect) {
    return session.lastEncouragement || ("+" + (session.lastGain || 0) + " pkt");
  }

  return "Wynik: " + session.score;
}

function celebrate() {
  const mode = state.quiz ? state.quiz.settings.stimulusMode : "calm";
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
  const total = quiz ? quiz.items.length : 0;
  const answered = session ? session.correctCount : 0;
  const progress = total ? Math.round((answered / total) * 100) : 0;
  const mode = quiz ? quiz.settings.stimulusMode : "calm";

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
  elements.resumeSessionButton.disabled = !hasResumableSession();
  applyStimulusMode(mode);
}

function renderHistory() {
  elements.historyList.innerHTML = "";

  if (!state.history.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "history-item";
    emptyItem.innerHTML = "<strong>Brak zapisanych rund</strong><span class='history-meta'>Historia pojawi się tutaj po ukończeniu quizu.</span>";
    elements.historyList.append(emptyItem);
    return;
  }

  state.history.slice(0, 6).forEach(function renderEntry(entry) {
    const node = elements.historyItemTemplate.content.firstElementChild.cloneNode(true);
    const label = STIMULUS_LABELS[entry.stimulusMode] || "Spokojny";
    node.querySelector(".history-title").textContent = entry.quizTitle;
    node.querySelector(".history-meta").textContent =
      "Opanowane: " +
      (entry.masteredCount || 0) +
      "/" +
      entry.total +
      " • Do pracy: " +
      (entry.pendingCount || 0) +
      " • " +
      label +
      " • " +
      entry.score +
      " pkt";
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

function getRoundQuestionIndexes(session) {
  const seen = {};

  if (!session || !Array.isArray(session.queue)) {
    return [];
  }

  return session.queue.slice(0, session.totalQuestions).map(getQueueEntryQuestionIndex).filter(function filterUnique(questionIndex) {
    if (questionIndex < 0) {
      return false;
    }

    if (seen[questionIndex]) {
      return false;
    }

    seen[questionIndex] = true;
    return true;
  });
}

function getSessionMasteryStats(session) {
  const roundIndexes = getRoundQuestionIndexes(session);
  let masteredCount = 0;

  roundIndexes.forEach(function countMastered(questionIndex) {
    const progress = session.questionProgress && session.questionProgress[questionIndex];

    if (progress && progress.resolved) {
      masteredCount += 1;
    }
  });

  return {
    totalCount: roundIndexes.length,
    masteredCount: masteredCount,
    pendingCount: Math.max(0, roundIndexes.length - masteredCount)
  };
}

function buildProgressComparison(currentStats, previousEntry) {
  const previousMastered = previousEntry ? (previousEntry.masteredCount || 0) : 0;
  const previousPending = previousEntry ? (previousEntry.pendingCount || 0) : 0;
  const masteredDelta = currentStats.masteredCount - previousMastered;
  const pendingDelta = currentStats.pendingCount - previousPending;

  if (!previousEntry) {
    return "To pierwsza zapisana runda. Po następnej pokażemy porównanie postępu.";
  }

  if (masteredDelta > 0 && pendingDelta < 0) {
    return "To postęp względem poprzedniej rundy: więcej pytań opanowanych i mniej do dalszej pracy.";
  }

  if (masteredDelta > 0) {
    return "To postęp względem poprzedniej rundy: opanowano o " + masteredDelta + " pytań więcej.";
  }

  if (pendingDelta < 0) {
    return "To postęp względem poprzedniej rundy: o " + Math.abs(pendingDelta) + " pytań mniej wymaga dalszej pracy.";
  }

  if (masteredDelta < 0 && pendingDelta > 0) {
    return "Ta runda wypadła słabiej niż poprzednia: mniej pytań zostało opanowanych.";
  }

  return "Wynik opanowania jest taki sam jak w poprzedniej rundzie.";
}

function getSummaryData(session) {
  const stats = getSessionMasteryStats(session);
  const previousEntry = state.history[1] || null;
  const remainingCount = getRemainingQuestionCount(session);
  const remainingText = remainingCount > 0
    ? "Do opanowania w całym zestawie zostało jeszcze " + remainingCount + " pytań."
    : "W tym zestawie nie ma już pytań do dalszej pracy.";

  return {
    stats: stats,
    remainingCount: remainingCount,
    comparisonText: buildProgressComparison(stats, previousEntry),
    remainingText: remainingText
  };
}

function setSummaryView(summaryData) {
  elements.summaryView.hidden = false;
  elements.summaryMasteredValue.textContent =
    summaryData.stats.masteredCount + " / " + summaryData.stats.totalCount;
  elements.summaryPendingValue.textContent = String(summaryData.stats.pendingCount);
  elements.summaryScoreValue.textContent = String(state.session.score);
  elements.summaryRemainingValue.textContent = String(summaryData.remainingCount);
  elements.summaryComparisonText.textContent = summaryData.comparisonText;
  elements.summaryRemainingText.textContent = summaryData.remainingText;
}

function hideSummaryView() {
  elements.summaryView.hidden = true;
}

function renderQuestion() {
  const quiz = state.quiz;
  const session = state.session;
  let item;
  let prompt;

  if (!quiz || !session) {
    hideSummaryView();
    elements.quizHeading.textContent = "Najpierw wczytaj quiz";
    elements.quizDescription.textContent = "Aplikacja czeka na zapisany zestaw pytań.";
    elements.questionIndex.textContent = "Pytanie 0";
    elements.questionText.textContent = "Tutaj pojawi się pytanie.";
    elements.hintText.textContent = "";
    elements.feedbackText.textContent = "";
    elements.answerGrid.innerHTML = "";
    elements.showHintButton.disabled = true;
    elements.nextQuestionButton.disabled = true;
    return;
  }

  elements.quizHeading.textContent = quiz.title;
  elements.quizDescription.textContent =
    quiz.description +
    " Runda: " +
    session.totalQuestions +
    " pytań. Opanowane łącznie: " +
    session.correctCount +
    "/" +
    quiz.items.length +
    ".";

  if (session.completed) {
    const summaryData = getSummaryData(session);

    elements.questionIndex.textContent = "Runda zakończona";
    elements.questionText.textContent = "Podsumowanie rundy";
    setSummaryView(summaryData);
    elements.hintText.textContent = "";
    elements.feedbackText.textContent = "";
    elements.answerGrid.innerHTML = "";
    elements.showHintButton.disabled = true;
    elements.nextQuestionButton.disabled = summaryData.remainingCount === 0;
    elements.nextQuestionButton.textContent = summaryData.remainingCount > 0
      ? "Kolejna runda"
      : "Cały materiał opanowany";
    return;
  }

  hideSummaryView();
  item = getCurrentItem();
  prompt = getCurrentPrompt();
  elements.nextQuestionButton.textContent = "Następne pytanie";

  elements.questionIndex.textContent =
    "Pytanie " +
    (session.currentStep + 1) +
    (prompt && prompt.answerMode === "boolean" ? " • prawda/fałsz" : "");
  elements.questionText.textContent = prompt && prompt.answerMode === "boolean"
    ? prompt.statementText
    : item.question;
  elements.hintText.textContent = session.revealHint
    ? (item.hint ? "Podpowiedź: " + item.hint : "")
    : "";
  elements.feedbackText.textContent = session.lastFeedback || "";
  elements.showHintButton.disabled = !item.hint || Boolean(session.selectedAnswer);
  elements.nextQuestionButton.disabled = !session.selectedAnswer;
  renderAnswers(prompt || item);
}

function createThemeOptionButton(groupKey, option, selectedId) {
  const button = document.createElement("button");
  const swatches = document.createElement("span");
  const copy = document.createElement("span");
  const title = document.createElement("strong");
  const description = document.createElement("span");

  button.type = "button";
  button.className = "theme-choice-button";
  button.setAttribute("data-theme-group", groupKey);
  button.setAttribute("data-theme-option", option.id);
  button.setAttribute("aria-pressed", String(option.id === selectedId));
  button.classList.toggle("is-active", option.id === selectedId);

  swatches.className = "theme-choice-swatches";
  option.swatches.forEach(function appendSwatch(color) {
    const swatch = document.createElement("span");
    swatch.className = "theme-choice-swatch";
    swatch.style.background = color;
    swatches.append(swatch);
  });

  copy.className = "theme-choice-copy";
  title.textContent = option.label;
  description.textContent = option.id === selectedId ? "Wybrane teraz" : "Podmień w podglądzie";
  copy.append(title, description);
  button.append(swatches, copy);
  return button;
}

function setThemePreviewFocus(groupKey) {
  if (!elements.themeScene) {
    return;
  }

  if (groupKey) {
    elements.themeScene.setAttribute("data-theme-preview-focus", groupKey);
    return;
  }

  elements.themeScene.removeAttribute("data-theme-preview-focus");
}

function renderThemeEditor() {
  const selection = getDisplayedThemeSelection();

  if (!elements.themeOptionsGrid) {
    return;
  }

  elements.themeOptionsGrid.innerHTML = "";

  THEME_OPTION_ORDER.forEach(function renderThemeGroup(groupKey) {
    const group = THEME_OPTIONS[groupKey];
    const section = document.createElement("section");
    const header = document.createElement("div");
    const choices = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const hint = document.createElement("p");

    section.className = "theme-group";
    section.setAttribute("data-preview-target", groupKey);
    header.className = "theme-group-header";
    choices.className = "theme-choice-list";
    title.textContent = group.label;
    description.textContent = group.description;
    hint.className = "theme-group-selection";
    hint.textContent = "Teraz: " + (getThemeOption(groupKey, selection[groupKey]) || { label: "Domyślne" }).label + ". " + group.previewHint;
    header.append(title, description, hint);

    section.addEventListener("mouseenter", function onThemeGroupEnter() {
      setThemePreviewFocus(groupKey);
    });
    section.addEventListener("mouseleave", function onThemeGroupLeave() {
      setThemePreviewFocus("");
    });
    section.addEventListener("focusin", function onThemeGroupFocus() {
      setThemePreviewFocus(groupKey);
    });
    section.addEventListener("focusout", function onThemeGroupBlur(event) {
      if (!section.contains(event.relatedTarget)) {
        setThemePreviewFocus("");
      }
    });

    group.options.forEach(function renderOption(option) {
      const button = createThemeOptionButton(groupKey, option, selection[groupKey]);
      button.addEventListener("click", function onThemeChoice() {
        const nextSelection = Object.assign({}, getThemeDraftSelection(), {
          [groupKey]: option.id
        });

        state.themeDraftSelection = nextSelection;
        applyThemeSelection(nextSelection);
        render();
        setThemeMessage("Podgląd został zmieniony. Kliknij Zapisz wygląd, aby zachować motyw.", false);
      });
      choices.append(button);
    });

    section.append(header, choices);
    elements.themeOptionsGrid.append(section);
  });
}

function render() {
  renderStatus();
  renderHistory();
  renderQuestion();
  renderThemeEditor();
  scheduleAdaptiveLayout();
}

function enqueueReview(currentIndex) {
  state.session.queue.push(createPromptEntry(currentIndex, state.quiz));
  state.session.reviewCount += 1;
}

function getPendingReviewCount(session) {
  return Math.max(0, session.queue.length - Math.max(session.totalQuestions, session.currentStep + 1));
}

function getRemainingQuestionCount(session) {
  if (!session || !Array.isArray(session.questionProgress)) {
    return 0;
  }

  return Math.max(0, session.questionProgress.length - countResolvedQuestions(session.questionProgress));
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
      "To pytanie masz już " +
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
  const prompt = getCurrentPrompt();
  const currentIndex = getQueueEntryQuestionIndex(state.session.queue[state.session.currentStep]);

  if (!prompt || currentIndex < 0) {
    return;
  }

  const questionProgress = getQuestionProgress(currentIndex);
  const attemptCount = state.session.attemptCountForCurrent || 0;
  const isCorrect = option === prompt.correctAnswer;
  let resolvedNow = false;
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
      resolvedNow = true;
    } else if (questionProgress) {
      enqueueReview(currentIndex);
    }

    encouragement = getQuestionEncouragement(questionProgress);
    state.session.lastEncouragement = encouragement;
    state.session.lastFeedback = "Dobrze.";
    celebrate();
    playSoundEvent(resolvedNow ? "mastered" : "correct");
  } else if (attemptCount === 0) {
    registerMistake(currentIndex);
    applyMistakeStreakPenalty();
    state.session.attemptCountForCurrent = 1;
    state.session.eliminatedAnswers = [option];
    state.session.revealHint = true;
    state.session.lastAnswerCorrect = false;
    state.session.lastEncouragement = "";
    state.session.lastGain = 0;
    state.session.lastFeedback = "Spróbuj ponownie.";
    playSoundEvent("wrong");
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
    state.session.lastFeedback = "Jeszcze nie.";
    enqueueReview(currentIndex);
    playSoundEvent("wrong");
  }

  if (state.session.currentStep >= state.session.queue.length - 1) {
    finishSession();
    return;
  }

  saveToStorage();
  render();
}

function finishSession() {
  const stats = getSessionMasteryStats(state.session);

  state.session.completed = true;
  state.session.selectedAnswer = null;
  state.session.eliminatedAnswers = [];
  state.session.attemptCountForCurrent = 0;
  state.session.lastAnswerCorrect = null;
  state.session.lastEncouragement = "";
  state.session.lastFeedback = "";
  state.session.revealHint = false;
  state.history.unshift({
    quizTitle: state.quiz.title,
    score: state.session.score,
    correct: state.session.correctCount,
    total: state.session.totalQuestions,
    masteredCount: stats.masteredCount,
    pendingCount: stats.pendingCount,
    reviewCount: state.session.reviewCount,
    stimulusMode: state.quiz.settings.stimulusMode,
    createdAt: new Date().toISOString()
  });
  state.history = state.history.slice(0, 12);
  playSoundEvent("complete");
  saveToStorage();
  render();
}

function goToNextQuestion() {
  if (!state.session) {
    return;
  }

  if (state.session.completed) {
    restartSession();
    return;
  }

  if (!state.session.selectedAnswer) {
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
  playSoundEvent("next");
  saveToStorage();
  render();
}

function restartSession() {
  if (!state.quiz) {
    setBuilderMessage("Najpierw zapisz quiz.", true);
    return;
  }

  state.session = createSession(state.quiz, state.session);
  render();
  showScene("quiz");
  if (state.session.totalQuestions === 0) {
    setBuilderMessage("Cały materiał z aktywnego JSON-a jest już opanowany.", false);
  } else {
    setBuilderMessage("Kolejna runda jest gotowa.", false);
  }
}

function clearSessionOnly() {
  state.session = state.quiz ? createSession(state.quiz, null) : null;
  render();
  showScene("builder");
  setBuilderMessage("Sesja i postęp tej nauki zostały wyczyszczone.", false);
}

function openThemeEditor() {
  state.themeDraftSelection = getThemeSelection();
  applyThemeSelection(state.themeDraftSelection);
  showScene("theme");
  render();
  setThemeMessage("Wybierz kolory dla różnych części ekranu.", false);
}

function closeThemeEditor() {
  state.themeDraftSelection = null;
  applyThemeSelection(getThemeSelection());
  showScene("builder");
  render();
  setThemeMessage("");
}

function saveThemePreferences() {
  state.ui.themeSelection = getThemeDraftSelection();
  state.themeDraftSelection = Object.assign({}, state.ui.themeSelection);
  applyThemeSelection(state.ui.themeSelection);
  saveToStorage();
  setThemeMessage("Motyw zapisany. Po odświeżeniu zostanie taki sam.", false);
  render();
}

function resetThemePreferences() {
  state.themeDraftSelection = Object.assign({}, DEFAULT_THEME_SELECTION);
  applyThemeSelection(state.themeDraftSelection);
  render();
  setThemeMessage("Przywrócono domyślny wygląd w podglądzie. Kliknij Zapisz wygląd, aby go zachować.", false);
}

function replaceActiveQuiz() {
  try {
    const parsedQuiz = JSON.parse(elements.quizJsonInput.value);
    state.quiz = normalizeQuiz(parsedQuiz, elements.quizTitleInput.value, {
      sessionSize: elements.sessionSizeInput.value,
      stimulusMode: elements.stimulusModeSelect.value,
      trueFalsePercent: elements.trueFalsePercentInput.value
    });
    state.session = createSession(state.quiz);
    render();
    showScene("quiz");
    setBuilderMessage("Quiz został zapisany.", false);
  } catch (error) {
    setBuilderMessage(error.message, true);
  }
}

async function resetAllData() {
  localStorage.removeItem(STORAGE_KEYS.quiz);
  localStorage.removeItem(STORAGE_KEYS.session);
  localStorage.removeItem(STORAGE_KEYS.history);
  localStorage.removeItem(STORAGE_KEYS.ui);
  state.history = [];
  state.activeScene = "builder";
  state.ui = {
    soundEnabled: DEFAULT_SOUND_ENABLED,
    themeSelection: Object.assign({}, DEFAULT_THEME_SELECTION)
  };
  applyThemeSelection(state.ui.themeSelection);
  showScene("builder");
  await restoreDefaultQuiz(true);
  saveToStorage();
}

function loadExampleIntoEditor() {
  const quiz = normalizeQuiz(exampleQuiz, exampleQuiz.title);
  elements.quizTitleInput.value = quiz.title;
  elements.sessionSizeInput.value = String(quiz.settings.sessionSize);
  elements.stimulusModeSelect.value = quiz.settings.stimulusMode;
  elements.trueFalsePercentInput.value = String(quiz.settings.trueFalsePercent || 0);
  elements.quizJsonInput.value = JSON.stringify(exampleQuiz, null, 2);
  setBuilderMessage("Przykładowy quiz został wczytany.", false);
}

async function restoreDefaultQuiz(isAfterReset) {
  try {
    const rawQuiz = await loadDefaultQuiz();
    state.quiz = normalizeQuiz(rawQuiz, rawQuiz.title);
    state.session = createSession(state.quiz);
    updateBuilderFields();
    render();
    setBuilderMessage(
      isAfterReset
        ? "Dane lokalne zostały wyczyszczone. Wczytano domyślny quiz z data.json."
        : "Wczytano domyślny quiz z data.json.",
      false
    );
  } catch (error) {
    state.quiz = normalizeQuiz(exampleQuiz, exampleQuiz.title);
    state.session = createSession(state.quiz);
    updateBuilderFields();
    render();
    setBuilderMessage(
      "Nie udało się wczytać data.json, więc użyto przykładowego quizu. " + error.message,
      true
    );
  }
}

function showHint() {
  if (!state.session) {
    return;
  }

  state.session.revealHint = true;
  playSoundEvent("hint");
  saveToStorage();
  render();
}

function resumeSession() {
  if (!hasResumableSession()) {
    setBuilderMessage("Brak przerwanej sesji do wznowienia.", true);
    return;
  }

  render();
  showScene("quiz");
  setBuilderMessage("Wznowiono przerwaną sesję.", false);
}

function attachEvents() {
  if (elements.fullscreenToggleButton) {
    elements.fullscreenToggleButton.addEventListener("click", toggleFullscreen);
  }

  elements.saveQuizButton.addEventListener("click", replaceActiveQuiz);
  elements.replaceQuizButton.addEventListener("click", replaceActiveQuiz);
  elements.loadExampleButton.addEventListener("click", loadExampleIntoEditor);
  elements.resetAllButton.addEventListener("click", function onResetClick() {
    resetAllData();
  });
  elements.openThemeEditorButton.addEventListener("click", openThemeEditor);
  elements.closeThemeEditorButton.addEventListener("click", closeThemeEditor);
  elements.saveThemeButton.addEventListener("click", saveThemePreferences);
  elements.resetThemeButton.addEventListener("click", resetThemePreferences);
  elements.resumeSessionButton.addEventListener("click", resumeSession);
  elements.restartSessionButton.addEventListener("click", restartSession);
  elements.clearSessionButton.addEventListener("click", clearSessionOnly);
  elements.backToBuilderButton.addEventListener("click", function backToBuilder() {
    showScene("builder");
  });
  elements.soundToggleButtons.forEach(function bindSoundToggle(button) {
    button.addEventListener("click", toggleSound);
  });
  elements.showHintButton.addEventListener("click", showHint);
  elements.nextQuestionButton.addEventListener("click", goToNextQuestion);
  document.addEventListener("fullscreenchange", updateFullscreenButton);
  document.addEventListener("webkitfullscreenchange", updateFullscreenButton);
  window.addEventListener("resize", scheduleAdaptiveLayout);

  if (elements.schemaBox) {
    elements.schemaBox.addEventListener("toggle", scheduleAdaptiveLayout);
  }
}

function migrateStoredState() {
  if (!state.ui || typeof state.ui !== "object") {
    state.ui = {
      soundEnabled: DEFAULT_SOUND_ENABLED,
      themeSelection: Object.assign({}, DEFAULT_THEME_SELECTION)
    };
  }

  state.themeDraftSelection = null;

  if (typeof state.ui.soundEnabled !== "boolean") {
    state.ui.soundEnabled = DEFAULT_SOUND_ENABLED;
  }

  state.ui.themeSelection = normalizeThemeSelection(state.ui.themeSelection);

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

  if (state.session && Array.isArray(state.session.queue)) {
    state.session.queue = state.session.queue.map(function migrateQueueEntry(entry) {
      const questionIndex = getQueueEntryQuestionIndex(entry);

      if (questionIndex < 0 || !state.quiz || !state.quiz.items[questionIndex]) {
        return null;
      }

      if (
        entry &&
        typeof entry === "object" &&
        (entry.answerMode === "choice" || entry.answerMode === "boolean") &&
        Array.isArray(entry.options) &&
        typeof entry.correctAnswer === "string"
      ) {
        return Object.assign({}, entry, {
          questionIndex: questionIndex
        });
      }

      return createPromptEntry(questionIndex, state.quiz, "choice");
    }).filter(Boolean);
  }

  if (state.session && !Number.isInteger(state.session.totalQuestions)) {
    state.session.totalQuestions = Math.max(1, state.session.queue.length - (state.session.reviewCount || 0));
  }

  if (state.session) {
    state.session.totalQuestions = clamp(state.session.totalQuestions || 0, 0, state.session.queue.length);
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

  if (state.session && !Number.isInteger(state.session.currentStep)) {
    state.session.currentStep = 0;
  }

  if (state.session) {
    state.session.currentStep = clamp(state.session.currentStep, 0, Math.max(0, state.session.queue.length - 1));
  }

  if (state.session && typeof state.session.completed !== "boolean") {
    state.session.completed = false;
  }

  if (state.session && typeof state.session.revealHint !== "boolean") {
    state.session.revealHint = false;
  }

  if (state.session && typeof state.session.lastEncouragement !== "string") {
    state.session.lastEncouragement = "";
  }

  if (state.session && typeof state.session.lastFeedback !== "string") {
    state.session.lastFeedback = "";
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

  if (state.activeScene !== "builder" && state.activeScene !== "quiz" && state.activeScene !== "theme") {
    state.activeScene = "builder";
  }

  if (!hasResumableSession() && state.activeScene === "quiz") {
    state.activeScene = "builder";
  }

  if (Array.isArray(state.history)) {
    state.history = state.history.map(function migrateHistoryEntry(entry) {
      const total = Number.isInteger(entry.total) ? entry.total : 0;
      const masteredCount = Number.isInteger(entry.masteredCount)
        ? entry.masteredCount
        : (Number.isInteger(entry.correct) ? entry.correct : 0);
      const pendingCount = Number.isInteger(entry.pendingCount)
        ? entry.pendingCount
        : Math.max(0, total - masteredCount);

      return Object.assign({}, entry, {
        masteredCount: masteredCount,
        pendingCount: pendingCount
      });
    });
  }
}

async function init() {
  loadFromStorage();
  migrateStoredState();
  applyThemeSelection(getThemeSelection());
  attachEvents();

  if (!state.quiz) {
    await restoreDefaultQuiz(false);
  }

  updateBuilderFields();
  updateFullscreenButton();
  updateSoundToggleButtons();
  render();
  showScene(hasResumableSession() ? "quiz" : state.activeScene);
  saveToStorage();
}

init();
