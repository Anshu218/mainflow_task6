# Task 6 - Update & Search Products/Buyers

This project implements **search & update functionality** for Products/Buyers as per Task 6 requirements.

## Features
✅ Search products/buyers by keyword, category, location, or price  
✅ Case-insensitive & partial match search  
✅ Edit & update existing records  
✅ REST APIs (Express + MongoDB) + React frontend  

---

## Setup

### 1️⃣ Backend
```bash
cd backend
cp .env.example .env
npm install
npm start
```

### 2️⃣ Frontend
```bash
cd frontend
npm install
npm start
```

The frontend runs on **http://localhost:3000** and connects to backend **http://localhost:5000**

---

## API Endpoints
- `GET /api/items` → Search items  
- `PUT /api/items/:id` → Update item  

---

## How to Run
1. Start backend → `npm start` (port 5000)  
2. Start frontend → `npm start` (port 3000)  
3. Open **http://localhost:3000** and test search & update.
