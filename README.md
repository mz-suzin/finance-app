# Personal Finance App
*Finance App with local backend.*
*Developed in conjunction with google Antigravity.*

Single Page Application (SPA) for managing personal finances locally and securely.

## Overview

This project provides a complete environment for recording and managing financial transactions, utilizing:
- **Frontend**: Angular 18 with modern, responsive styling
- **Backend**: Node.js & Express API
- **Database**: SQLite (local, file-based database for complete privacy)

The database file is strictly excluded from version control.

## Prerequisites
- Node.js (v18 or higher recommended)

## Getting Started

### 1. Backend Setup (Node.js API)
Navigate to the backend directory, install the required dependencies, and start the server:

```bash
cd backend
npm install
node index.js
```
*The Express server will start on `http://localhost:3000`.*
*Upon the first run, it will automatically generate a local `database.sqlite` file containing your financial schema.*

### 2. Frontend Setup (Angular App)
Open a new terminal, navigate to the frontend directory, install the dependencies, and launch the Angular development server:

```bash
cd frontend
npm install
npm start
```
*The application UI will start on `http://localhost:4200`.*

---
