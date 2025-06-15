 # IDEA explaination :

This guide will help you set up a complete browser-based coding IDE supporting **C++, Python, and Go**, using **Next.js + Monaco Editor + FastAPI + Judge0 API**.

---

## 💡 Project Idea: What Is This?

The goal is to build an intuitive, browser-based IDE designed specifically for **competitive programmers**, inspired by the fast, clean workflow of desktop tools like **Sublime Text**, but accessible from anywhere with just a browser.

### 🔧 What makes it different?

* **Multiple language support** out of the box (C++, Python, Go)
* **Tabbed file layout** for `main.cpp`, `input.txt`, and `output.txt` to simulate real CP setups
* Fast and minimal design with **Monaco Editor** (VSCode in the browser)
* **Run code instantly** via backend connected to Judge0 API
* Designed for flexibility: easily extendable to AI features later

### 👨‍💻 Use Case

* Practice on the go
* Replace bulky setups during travel or at cafes
* Run testcases quickly
* Later: Get code suggestions or auto-template for algorithms

---

## 🚀 Features for Phase 1

* Multi-language code editor (C++, Python, Go)
* Input/output tabs like Sublime Text for CP
* Backend using FastAPI to compile & run code via Judge0 API
* Monaco Editor (VSCode-like browser editor)

---

## 🧩 Tech Stack

| Layer     | Technology        |
| --------- | ----------------- |
| Frontend  | Next.js, React.js |
| Styling   | Tailwind CSS      |
| Editor    | Monaco Editor     |
| Backend   | FastAPI (Python)  |
| Execution | Judge0 API        |

<!-- ---

## 📁 Folder Structure

```
browser-ide/
├── frontend/        # Next.js + Monaco + Tailwind
└── backend/         # FastAPI server handling Judge0
```

---

## ⚙️ Prerequisites

* Node.js ≥ v18
* Python ≥ 3.9
* `pip` + `venv`
* Docker (optional for local code runner)

---

## 🛠️ Step-by-Step Setup

### 1. 📦 Frontend Setup (`frontend/`)

```bash
cd frontend
npx create-next-app@latest .
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. 🎨 Tailwind Setup

Update `tailwind.config.js`:

```js
content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
]
```

In `./styles/globals.css`, add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. 🧠 Monaco Editor Setup

```bash
npm install @monaco-editor/react
```

In your `pages/index.tsx`:

```tsx
import Editor from '@monaco-editor/react';
```

### 4. 🖥️ Editor Layout (Example UI)

* Code Tab
* Input Tab (`input.txt` like behavior)
* Output Tab (`output.txt` like behavior)
* Language Selector
* Run Button

### 5. 🧮 Backend Setup (`backend/`)

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn requests
```

Create `main.py`:

```python
from fastapi import FastAPI, Request
import requests

app = FastAPI()
JUDGE0_URL = "https://ce.judge0.com/submissions/?base64_encoded=false&wait=true"

@app.post("/run")
async def run_code(request: Request):
    data = await request.json()
    payload = {
        "source_code": data["code"],
        "language_id": data["language_id"],
        "stdin": data["input"]
    }
    resp = requests.post(JUDGE0_URL, json=payload)
    return resp.json()
```

Run server:

```bash
uvicorn main:app --reload --port 8000
```

### 6. 🌐 Connect Frontend to Backend

In your React code:

```ts
await fetch("http://localhost:8000/run", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ code, language_id, input })
});
```

Judge0 Language IDs:

| Language | ID |
| -------- | -- |
| C++      | 54 |
| Python   | 71 |
| Go       | 60 |

---

## 🧠 Suggested Improvements

* Add loading spinner and error state
* Add template per language
* Group files like Sublime (code, input, output)
* AI integration for later phase

---

## ✅ Done! You now have a CP-ready browser-based IDE.

Feel free to version control and deploy on Vercel (frontend) + Render/Railway (backend)! -->
