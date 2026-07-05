*EcoStay Connect – Week 5*
A full-stack eco-tourism stay listing platform built during the TBI-GEU AI Assisted Full Stack Web Development Internship.

*Tech Stack*
Frontend
Next.js
React
Tailwind CSS
Fetch API

*Backend*
Node.js
Express.js
MongoDB Atlas
Mongoose
CORS
Dotenv

*Why MongoDB?*
MongoDB was selected because EcoStay stores stay listings as flexible documents. It allows easy scaling and makes it convenient to store fields such as name, location, price, rating, and image URL.

*Database Schema*
Stay Collection

_id             ObjectId
name            String
location        String
price           Number
rating          Number
image           String
createdAt       Date
updatedAt       Date

![Schema Diagram](images/Schema Diagram.png)

*Project Structure*

ecostay-connect/
├── backend/
│ ├── models/
│ │ └── Stay.js
│ ├── middleware/
│ ├── routes/
│ ├── .env (ignored from Git)
│ ├── .env.example
│ ├── package.json
│ └── server.js
│
└── frontend/
├── public/
├── src/
├── package.json
└── ...

*Backend Setup*

1. Navigate to backend
cd backend

2. Install dependencies
npm install

3. Create a .env file
Copy .env.example and add your MongoDB Atlas connection string.

PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string

4. Start the backend
node server.js
The backend will run at http://localhost:5001.

*Frontend Setup*

1. Navigate to frontend
cd frontend

2. Install dependencies
npm install

3. Start the frontend
npm run dev
The frontend will run at http://localhost:3000.

*REST API Endpoints*
Method          Endpoint                           Description

GET             /api/stays                         Get all stays
GET             /api/stays/:id                     Get stay by ID
GET             /api/stays/search?q=keyword        Search stays
POST            /api/stays                         Create a new stay
PUT             /api/stays/:id                     Update a stay
DELETE          /api/stays/:id                     Delete a stay

*Features*

Modern eco-tourism stay listing UI.
MongoDB Atlas database integration.
Persistent data storage.
Full CRUD operations.
Search functionality.
Centralized error handling.
Environment variable configuration.
Responsive frontend with Tailwind CSS.
Admin dashboard for managing stays.

*Learning Outcomes*

Integrated a real cloud database (MongoDB Atlas)
Designed a Mongoose schema
Built persistent CRUD APIs
Connected frontend and backend end-to-end
Managed environment variables securely
Debugged API and database integration issues

*Author*
Developed as part of the TBI-GEU AI Assisted Full Stack Web Development Internship – Week 5