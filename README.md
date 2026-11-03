# 🏢 khvreddy Hostel & PG Management System

> A responsive, full-featured, and 100% offline-capable web application designed to digitize and automate all daily operations of a modern Hostel / PG facility.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Offline](https://img.shields.io/badge/offline-ready-success.svg)
![Tech Stack](https://img.shields.io/badge/stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange.svg)

---

## 📌 Project Overview

The **khvreddy Hostel & PG Management System** was developed to replace slow, error-prone manual paper registers with an automated digital platform. It features two dedicated portals:
1. **Admin / Hostel Owner Portal:** Comprehensive operational dashboard, visual room grid, automated resident registration, dynamic front-desk payment counter, tax management, checkout/vacating lifecycle, and revenue analytics.
2. **Resident / Student Portal:** Self-service profile, stay duration tracking, monthly fee schedules, payment history, and instant digital receipts.

---

## ✨ Key Features

### 👑 1. Admin & Hostel Owner Dashboard
* **Real-time KPI Metrics:** Track total rooms, bed capacity, occupied beds, vacant beds, active residents, pending dues, gross revenue, tax payable, and net post-tax revenue.
* **Visual Room Management (24 Rooms):** Visual grid across multiple floors/blocks showing bed-level occupancy (`Available`, `Partially Occupied`, `Full`, `Maintenance`).
* **Resident Onboarding & Allocation:** Automatically generates unique IDs (`HMS2026XXXX`) and allocates beds with strict capacity enforcement to prevent room overcrowding.
* **Payment Verifications:** Inspects uploaded bank UTR numbers and payment screenshots from residents to approve or reject submissions in real-time.
* **Front-Desk Cash & QR Counter:** Records instant spot cash or UPI payments and generates downloadable/printable official digital receipts.
* **Automated Vacating & Archive:** One-click checkout that calculates stay duration, outstanding dues, and refundable security deposits, frees the bed immediately, and archives records into a searchable database.
* **Tax & Net Revenue Calculator:** Configurable tax calculation (e.g., 10% GST/management tax) displaying net earnings across payment modes (UPI, Bank Transfer, Cash).

### 🎓 2. Resident / Student Portal
* **My Profile & Stay:** Displays room number, bed allocation, joining date, roommate details, and calculated stay duration.
* **Monthly Fee Ledger:** Transparent monthly statements showing fee due, amount paid, remaining balance, and next due dates.
* **Exact-Amount Dynamic QR Scanner:** Residents enter the exact fee amount they wish to pay; the QR scanner renders **strictly for that specific amount** (pre-configured with UPI ID, merchant name, and currency parameters for PhonePe, Google Pay, Paytm, and BHIM).
* **Payment Proof Submission:** Upload transaction UTR reference numbers and payment screenshots for admin review.
* **Official Digital Receipts:** One-click viewing and printing of authorized digital receipts for cleared payments.

---

## 🛠️ Built With (Tech Stack)

* **HTML5:** Semantic architecture, accessible forms, modal dialogs, and SVG emblem graphics.
* **CSS3:** Custom CSS variables, responsive CSS Grid & Flexbox layouts, modern glassmorphism styling, and `@media print` rules for digital receipts.
* **Vanilla JavaScript (ES6+):** Pure client-side business logic, state management, search/filter algorithms, and reactive DOM rendering.
* **HTML5 Canvas API:** Built-in offline mathematical QR matrix generator and 2D canvas visualization engine (requires zero external CDNs or network calls).
* **HTML5 LocalStorage:** Persistent browser-based database providing permanent storage across restarts.
* **Node.js (Optional):** Lightweight static web server (`server.js`) listening on ports 5173, 5000, and 3000.

---

## 🚀 Quick Start / How to Run

### Option 1: Direct Offline Browser Launch (Zero Installation)
Simply open `index.html` directly in any web browser:
```text
file:///C:/path/to/khvreddy-hostel-system/index.html
```

### Option 2: Run with Local Node.js Server
```bash
# Clone the repository
git clone https://github.com/khvreddy14/khvreddy-hostel-management-system.git

# Navigate into the project folder
cd khvreddy-hostel-management-system

# Start the local server
node server.js
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🔑 Demo Credentials

| Role | Username / ID | Password |
| :--- | :--- | :--- |
| **Admin / Hostel Owner** | `admin@khvreddy.com` | `admin123` |
| **Resident / Student** | `HMS20260001` (or `HMS20260002`) | `123456` |

---

## 📂 Project Structure

```text
khvreddy-hostel-system/
├── index.html       # Complete application UI (Admin & Resident Portals, Modals)
├── style.css        # Responsive stylesheet, themes, badges, and print CSS
├── script.js        # Core business logic, LocalStorage DB, QR engine, and controllers
├── server.js        # Optional Node.js multi-port HTTP server
└── README.md        # Comprehensive documentation
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---
**Developed for khvreddy PG & Hostel**  
📍 *Plot No. 42, Main Road, Near Metro Station, Madhapur, Hyderabad - 500081*
