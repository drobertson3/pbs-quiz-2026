# Preliminary Business Studies — Quiz Arena (student game)

Static site. Deploy with GitHub Pages: **Settings → Pages → branch `main`, folder `/root`**.

Students open the Pages URL, pick their name, set a 4-digit PIN, and play. Results
sync to Firebase, so nothing needs re-uploading when the class list changes.

## What's in here

| File | Purpose |
|---|---|
| `index.html` | The whole game — screens, styling and logic |
| `config.js` | Class list, Firebase project, XP settings |
| `syllabus.js` | Topic and sub-topic map |
| `data.js` | 100 Section I multiple-choice questions (2014, 2017, 2018, 2020, 2024) |
| `data-sa.js` | 66 Section II short-answer sub-questions + Section III report questions |
| `glossary.js` | 130 concept/term definitions |
| `syllabus-content.js` | 140 NESA syllabus dot points |
| `chains.js` | 65 cause-and-effect chains |
| `diagrams.js` | 12 labelled diagrams (SVG) |
| `syllabus-games.js` | The four Syllabus Drill games |
| `store.js` | Firebase/localStorage data layer, XP, badges |
| `*.png` | Scanned question and stimulus images |

## Game modes

**Exam practice** — Multiple Choice Quiz, Short Answer Quiz, Exam Simulation
(20 questions / 20 minutes), My Mistakes, Daily Challenge, Survival, Duels.

**Concept practice** — Syllabus Drills (four games on the NESA dot points),
Matching, Flashcards with spaced repetition, Definition Quiz, Chain Builder,
Diagram Labelling.

**Progress** — Peer Marking, My Answers, Leaderboard, My Progress.

## Notes

- `config.js` contains the Firebase web config. Those keys are designed to be
  public; access is controlled by Firestore rules, not by hiding them.
- The teacher dashboard is deployed as a **separate** repository so students
  can never reach it. Never add `quiz-teacher` to this repo.
- `.nojekyll` stops GitHub Pages running Jekyll over the files — leave it in place.

See `SETUP.md` in the project folder for full setup instructions.
