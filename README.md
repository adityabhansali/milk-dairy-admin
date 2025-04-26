# 🥛 Milk Dairy Management System

A simple web-based dashboard to manage milk dairy accounts and related modules, built with **Laravel**, **Inertia.js**, **React**, and **DataTables**.

---

## 🚀 Features

- 🔐 Authenticated dashboard layout
- 📊 DataTables integration for managing accounts
- 🧑 Milkman management
- 💸 Pricing module
- 🙋 Complaints section
- 👤 User profiles
- ✉️ User authentication (login, register, email verification)

---

## 🧰 Tech Stack

- **Backend**: Laravel 10+
- **Frontend**: React + Inertia.js
- **UI**: Tailwind CSS
- **Data Tables**: datatables.net
- **Authentication**: Laravel Breeze (assumed)
- **Routing**: Laravel Web Routes

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/milk-dairy.git
cd milk-dairy

composer install
npm install

cp .env.example .env
php artisan key:generate

php artisan migrate

php artisan serve
npm run dev
