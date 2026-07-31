# 🛍️ ShopLite

A modern Full Stack E-Commerce application built with **Next.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

This project was created as a learning project to understand how a real-world MERN + Next.js application works, including authentication, protected routes, CRUD operations, image uploads, and API integration.

---

# 🚀 Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Authentication Context (React Context API)
- Persistent Login using localStorage
- Logout Functionality

### Products
- Display Products
- Add New Products
- Upload Product Images
- Store Image URLs
- Protected Product Management

### Frontend
- Next.js App Router
- React Components
- Client & Server Components
- Context API
- Responsive UI with Tailwind CSS
- Navigation with Next.js

### Backend
- Express.js REST API
- MongoDB + Mongoose
- JWT Authentication
- Middleware
- Multer
- Cloudinary Image Upload
- MVC Folder Structure

---

# 🛠️ Tech Stack

## Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- dotenv
- cors

---

# 📂 Project Structure

```
ShopLite/

├── frontend/
│   ├── app/
│   │   ├── login/
│   │   ├── home/
│   │   ├── products/
│   │   └── layout.tsx
│   │
│   ├── components/
│   ├── context/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication Flow

```
User

↓

Login

↓

Express API

↓

Verify Password (bcrypt)

↓

Generate JWT

↓

Frontend

↓

Save Token

↓

Protected Routes
```

---

# 📸 Image Upload Flow

```
User Selects Image

↓

FormData

↓

Multer

↓

Cloudinary

↓

Image URL

↓

MongoDB

↓

Display Image
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/ShopLite.git
```

Go into the project

```bash
cd ShopLite
```

---

# 📥 Install Dependencies

## Frontend

```bash
cd frontend
npm install
```

## Backend

```bash
cd backend
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

If your frontend uses an environment variable for the backend URL, create a `.env.local` file inside the **frontend** directory.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd backend
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on

```
http://localhost:3000
```

---

# 📡 API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## Products

### Get Products

```
GET /api/products
```

### Add Product

```
POST /api/products
```

---

# 🧠 Concepts Covered

This project demonstrates:

- React Fundamentals
- Next.js App Router
- Client Components
- Server Components
- Routing
- Layouts
- Context API
- Authentication
- JWT
- Password Hashing
- Protected Routes
- REST APIs
- CRUD Operations
- MongoDB
- Mongoose
- Express Middleware
- Multer
- Cloudinary
- Environment Variables
- File Uploads
- API Fetching
- Responsive UI

---

# 🎯 Learning Objectives

This project was built to understand how a production-style full-stack application works from frontend to backend.

Topics explored include:

- Authentication & Authorization
- API Development
- Database Design
- File Uploads
- State Management
- Full Stack Integration
- Secure Password Storage
- Route Protection
- Image Hosting
- Deployment Preparation

---

# 🚀 Future Improvements

- Google OAuth Login
- Refresh Tokens
- HttpOnly Cookies
- User Roles (Admin/User)
- Product Categories
- Search & Filtering
- Shopping Cart
- Wishlist
- Checkout
- Payment Integration
- Order Management
- Dashboard
- Pagination
- Dark Mode

---

# 👨‍💻 Author

**Bilal Ahmed**

Software Engineering Student | MERN Stack Developer

GitHub: https://github.com/Bilal-Ahmed35

LinkedIn: *(Add your LinkedIn profile here)*

---

# 📄 License

This project is intended for learning and educational purposes.