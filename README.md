# EcoStay Connect – Week 6

A full-stack eco-tourism stay listing platform built during the **TBI-GEU AI Assisted Full Stack Web Development Internship**.

---

# Tech Stack

## Frontend
- Next.js
- React
- Tailwind CSS
- Fetch API
- NextAuth.js (Auth.js)

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- express-validator
- express-rate-limit
- CORS
- dotenv

---

# Why MongoDB?

MongoDB was selected because EcoStay stores stay listings as flexible documents. It allows easy scaling and makes it convenient to store fields such as:

- Stay Name
- Location
- Price
- Rating
- Image URL

It also stores user accounts securely for authentication.

---

# Database Schema

## Stay Collection

| Field | Type |
|-------|------|
| _id | ObjectId |
| name | String |
| location | String |
| price | Number |
| rating | Number |
| image | String |
| createdAt | Date |
| updatedAt | Date |

## User Collection

| Field | Type |
|-------|------|
| _id | ObjectId |
| email | String |
| password | String (bcrypt Hashed) |
| createdAt | Date |
| updatedAt | Date |

![Schema Diagram](images/Schema Diagram.png)

---

# Project Structure

```
ecostay-connect/

├── backend/
│
├── models/
│   ├── Stay.js
│   └── User.js
│
├── middleware/
│   └── verifyToken.js
│
├── routes/
│   ├── stays.js
│   └── auth.js
│
├── .env
├── .env.example
├── package.json
└── server.js

frontend/

├── src/
│
├── app/
│   ├── login/
│   ├── dashboard/
│   ├── admin/
│   └── api/auth/[...nextauth]/
│
├── components/
│
├── auth.js
├── .env.local
└── package.json
```

---

# Backend Setup

### 1. Navigate to backend

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

Copy `.env.example`

```
PORT=5001

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

### 4. Start backend

```bash
node server.js
```

Backend runs on:

```
http://localhost:5001
```

---

# Frontend Setup

### 1. Navigate to frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Authentication

Create `.env.local`

```
GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXTAUTH_SECRET=your_nextauth_secret

NEXTAUTH_URL=http://localhost:3000
```

### 4. Start frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

# REST API Endpoints

## Stay APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/stays | Get all stays |
| GET | /api/stays/:id | Get stay by ID |
| GET | /api/stays/search?q=keyword | Search stays |
| POST | /api/stays | Create stay (Protected) |
| PUT | /api/stays/:id | Update stay (Protected) |
| DELETE | /api/stays/:id | Delete stay |

---

## Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User & Generate JWT |

---

# Authentication Flow

### User Registration

- User submits email and password.
- Password is hashed using **bcrypt**.
- User is stored securely in MongoDB.

---

### User Login

- Credentials are verified.
- JWT token is generated.
- Token is returned to the frontend.
- JWT token is stored on the client after successful login.

---

### Protected APIs

Protected routes require:

```
Authorization

Bearer <JWT_TOKEN>
```

If no valid token is provided:

```
401 Unauthorized
```

is returned.

---

### Google OAuth Login

Implemented using **Auth.js (NextAuth v5)**.

Users can sign in securely using their Google account without creating a password.

---

# Security Features

- Password hashing using bcrypt
- JWT Authentication
- Protected API Routes
- Protected Frontend Routes
- Google OAuth Login
- Request Validation using express-validator
- Rate Limiting using express-rate-limit
- CORS Configuration
- Environment Variables
- Secure Password Storage

---

# Features

- Modern Eco-Tourism Stay Listing UI
- MongoDB Atlas Integration
- Full CRUD Operations
- Search Functionality
- Secure User Authentication
- JWT Protected Routes
- Google OAuth Login
- Input Validation
- Rate Limiting
- Admin Dashboard
- Responsive Design
- Centralized Error Handling
- Google OAuth Authentication using Auth.js

---

# Learning Outcomes

During Week 6 I learned how to:

- Implement secure user authentication
- Hash passwords using bcrypt
- Generate and verify JWT tokens
- Protect backend APIs using middleware
- Protect frontend routes
- Implement Google OAuth Login
- Validate API inputs using express-validator
- Apply rate limiting to authentication routes
- Secure environment variables
- Understand authentication and authorization concepts
- Integrated third-party authentication using Google OAuth (Auth.js)
---

# Future Improvements

- Role-Based Access Control (Admin/User)
- Refresh Tokens
- Password Reset via Email
- User Profile Management
- Booking System
- Payment Gateway Integration

---

# Author

Developed as part of the **TBI-GEU AI Assisted Full Stack Web Development Internship – Week 6**