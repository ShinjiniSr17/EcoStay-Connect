# EcoStay Connect – Week 4

## Tech Stack

* Frontend: Next.js
* Backend: Node.js + Express

## Project Structure

```
ecostay-connect/
│
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── data/
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```

## Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs at:

```
http://localhost:5001
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

## Implemented APIs

* GET `/api/stays`
* GET `/api/stays/:id`
* GET `/api/stays/search?q=keyword`
* POST `/api/stays`
* PUT `/api/stays/:id`
* DELETE `/api/stays/:id`

## Features

* REST APIs
* CRUD Operations
* Search Functionality
* Error Handling Middleware
* Environment Variables
* Live Frontend using Fetch API
* Loading and Error States
