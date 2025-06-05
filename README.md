
# 💸 AI-Powered Personal Finance Advisor

An intelligent, full-stack personal finance dashboard that helps users manage their transactions, forecast expenses, and receive AI-powered budgeting advice. Built with Django (DRF) on the backend and React + TypeScript + TailwindCSS on the frontend.

---

## ⚙️ Tech Stack

### Frontend:
- React 19 (Vite + TypeScript)
- TailwindCSS (with glassmorphism styling)
- React Router
- Axios

### Backend:
- Django 5.x + Django Rest Framework
- MySQL (or PostgreSQL)
- JWT Authentication (SimpleJWT)

---

## 📦 Features

- 🔐 User registration & login via JWT
- 📊 Track transactions by amount, category, and date
- 🌐 Token-based secure APIs
- 🧠 Modular React components with reusable layouts
- 🎨 Clean, futuristic UI (glassmorphism + Tailwind)
- 🧠 (Planned) AI forecasts & spending recommendations

---

## 🚀 Getting Started

### 🔧 Backend Setup (Django)
```bash
cd finance-backend
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

> You must configure MySQL/PostgreSQL credentials in `settings.py`

---

### 💻 Frontend Setup (React + Vite)
```bash
cd finance-frontend
npm install
npm run dev
```

---

## 🔑 API Endpoints

### 🔐 Auth
- `POST /api/register/` — User registration
- `POST /api/token/` — Get access & refresh token

### 📦 Transactions
- `GET /api/transactions/` — List logged-in user's transactions
- `POST /api/transactions/` — Add a new transaction

> Requires JWT token in `Authorization: Bearer <token>` header.

---

## 📈 Roadmap

- [x] User auth (register/login)
- [x] Transaction management
- [ ] AddTransactionForm component
- [ ] AI-based monthly forecast (LSTM or Prophet)
- [ ] Budget assistant chatbot (NLP)
- [ ] Export CSV, add filters

---

## 📄 License

MIT License
