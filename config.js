// ====================================================================
// Preliminary Business Studies Quiz — Configuration
// Edit this file, save, and refresh the page. See SETUP.md for help.
// ====================================================================

// 1. YOUR CLASS LIST — one name per line, inside the quotes.
//    Students pick their name and set their own PIN on first login.
//    (You can also add/remove students later from the teacher dashboard.)
const CLASS_LIST = [
  "Demo Student",
  // "Add your students here...",
];

// 1b. CLASS NAME — this is a single-class build (no class battle). This label
//     is only used internally; students are never asked to pick a class.
const CLASSES = ["Business Studies"];

// 2. FIREBASE — paste your own project's config here (see SETUP.md, ~10 minutes).
//    Leave apiKey empty ("") to run in device-only practice mode: every
//    student's results are then saved only in the browser they played in.
//    Both this file and quiz-teacher/config.js must point at the SAME project.
//    Use a NEW Firebase project (e.g. "pbs-quiz-2026") — don't reuse the
//    Preliminary Economics or HSC Economics quiz's Firebase project.
const firebaseConfig = {
  apiKey: "AIzaSyD6bUrUPu3Q9q66UfLMQx0bNN9mhNfgV2U",
  authDomain: "pbs-quiz-2026.firebaseapp.com",
  projectId: "pbs-quiz-2026",
  storageBucket: "pbs-quiz-2026.firebasestorage.app",
  messagingSenderId: "1012576309143",
  appId: "1:1012576309143:web:0b6d799ba3c3df039b3ed2"
};

// 3. Options
const QUIZ_OPTIONS = {
  secondsPerQuestion: 90,   // timer pace when the timer is switched on
  xpPerCorrect: 10,         // base XP per correct answer
  xpPerMark: 10,            // base XP per mark; short answers earn 3x this (30 per mark)
  xpPerMatch: 5,            // XP per pair matched first try in the Matching game
};

// 4. SHORT ANSWER MARKING
//    Students type their Section II answers and hand them in; you mark them from
//    the Teacher Dashboard. The AI marking assistant (optional) lives in the
//    dashboard's config.js so your API key is never served to students.
