# Job Application Integration (Full Stack)

## 📌 Project Overview

This project is a full-stack **Job Application System** where users can apply for a job by filling out a professional web form. The frontend is built using **React (Vite)** and the backend uses **Node.js, Express, and MongoDB**. Form data is sent to the backend via REST APIs and securely stored in the database.

The project demonstrates real-world concepts like form handling, API integration, database operations, and environment variable management.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* JavaScript
* CSS
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors

---

## 📂 Project Structure

```
job-application-form/
│
├── backend/
│   ├── models/
│   │   └── Application.js
│   ├── routes/
│   │   └── applicationRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd job-application-form
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/jobApplications
```

Start the backend server:

```bash
node server.js
```

Backend will run at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔄 API Endpoints

### Submit Job Application

* **POST** `/apply`
* Request Body (JSON):

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "position": "Backend Developer",
  "experience": 3,
  "resumeUrl": "https://example.com/resume.pdf",
  "coverLetter": "I am interested in this role"
}
```

---

## 🗄️ View Data Using mongosh

```bash
mongosh
use jobApplications
show collections
db.applications.find().pretty()
```

---

## 🚀 Features

* Modern job application UI
* REST API integration
* MongoDB data storage
* Backend validation
* Environment variable usage

---

## 📌 Future Enhancements

* Admin dashboard to view applications
* Resume upload (PDF)
* Authentication for admin
* Deployment (Netlify + Render)

---

## 👤 Author

Developed by **Umer Nafeel**

---

## 📄 License

This project is for learning and educational purposes.
