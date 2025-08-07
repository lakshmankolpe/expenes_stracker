# 💸 Full-Stack Expense Tracker

A full-stack **Expense Tracker** web application built using the **MERN** stack. This app allows users to add, view, and delete income and expense transactions with real-time balance updates and persistent storage in **MongoDB**.

![Add]()

---

## 🚀 Features

- ➕ Add income and expenses
- 🗑️ Delete individual transactions
- 📊 View total balance, income, and expenses
- 🌐 Backend REST API using Express.js & Node.js
- 💾 Persistent data with MongoDB
- ⚡ Responsive frontend using React
- 📬 API tested using Postman
- 🔐 Git for version control

---

## 🛠️ Tech Stack & Tools

| Technology     | Role / Use Case                                  |
|----------------|--------------------------------------------------|
| **React.js**   | Frontend library for building UI                 |
| **HTML5**      | Markup language for structuring pages            |
| **CSS3**       | Styling the application                          |
| **Node.js**    | Runtime environment for server-side logic        |
| **Express.js** | Framework for building REST APIs                 |
| **MongoDB**    | NoSQL database for storing transactions          |
| **Mongoose**   | ODM for interacting with MongoDB in Node.js      |
| **Axios**      | Handling HTTP requests from React to API         |
| **Postman**    | API testing and debugging                        |
| **Git**        | Version control                                  |
| **npm**        | Package manager for JavaScript libraries         |

---

## 📁 Project Structure

expense-tracker/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── server/ # Node + Express backend
│ ├── controllers/ # Route logic
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes
│ ├── config/ # DB connection
│ └── server.js # Entry point
│
├── .gitignore
├── README.md
└── package-lock.json

---

## 📌 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-lakshmankolpe/expense-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the backend server:

   ```bash
   npm run server
   ```

5. Start the frontend development server:
   ```bash
   npm run client
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## 📝 Contributing

Contributions are welcome! Feel free to submit issues, pull requests, or suggest new features.
