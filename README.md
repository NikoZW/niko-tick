# Niko Tick

A simple, focused todo app — sign in once and manage your tasks. Todos are stored in the cloud and stay in sync across devices.

## Preview

---

## Tech Stack

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## How It Works

1. **Sign in or register** with your email and password via Supabase Auth (Log In / Register in the sidebar).
2. **Add a todo** — type in the “Add a todo” field and click **Add to list**.
3. **Tick off or delete** — mark items complete or remove them; changes sync to Supabase instantly.
4. **Your list, your account** — todos are stored per user and load when you sign in.

---

## Built With

- **Vite + React + TypeScript** main framework
- **Tailwind CSS** for styling
- **Supabase Auth** for user management
- **Supabase (PostgreSQL)** for storing todos 
- **React Context** for managing state globally

---

## Getting Started

Make sure you are using **Node.js 18+**.

### 1. Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```


### 2. Set up the database

Set up database the using SQL editor in Supabase

### 3. Install and run

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

---