# 📚 BookCourier (React + Vite)

An online book delivery platform built with **React (Vite)** and **Node.js**, featuring role-based dashboards and secure payments.

---

## 🔗 Live Links
- **Live Site:** https://bookcourier-5fe9d.web.app/


---

## 🚀 Features

### 🔐 Authentication
- Email verification not required
- Strong password validation
- Profile image upload & update

### 🏠 Home Page
- Banner with 3 sliders
- Latest books section 
- Delivery coverage map
- Animated section + extra custom sections

### 📚 Books & Orders
- All Books page 
- Book Details page with order modal
- Order status: `pending`
- Payment status: `unpaid`

### 👤 Dashboards
- **User:** My Orders, Pay Now, Cancel Order, Profile, Invoices
- **Librarian:** Add/Edit books, Publish/Unpublish, Manage orders
- **Admin:** Manage users, Manage books, Delete books (cascade delete)

### 💳 Payments
- Stripe payment integration
- Secure checkout with automatic status updates

---

## 🧰 Tech Stack

### Frontend
- React + Vite
- React Router DOM
- Axios
- Tailwind CSS / DaisyUI
- SweetAlert2
- Material UI Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Stripe
- dotenv

---

## 📦 NPM Packages

### Client
```bash
npm install react-router-dom axios sweetalert2 @mui/icons-material
```
### Server 
```bash
npm install express mongodb cors dotenv stripe
```
### Run Locally
```bash
npm install
npm run dev
```
