:

💪 FitnessFreak

FitnessFreak is a modern fitness tracking web application that helps users monitor and manage their health habits including calories, workouts, water intake, sleep, and steps. Built with Next.js, Tailwind CSS, and MongoDB, the app offers secure authentication and a beautiful, responsive UI.

🚀 Tech Stack

⚛️ Next.js – App framework for SSR and fast rendering

🎨 Tailwind CSS – Utility-first CSS framework for styling

🗄️ MongoDB Atlas – Cloud database for storing fitness data

🔐 JWT Authentication – Secure login and user sessions

📦 React – Frontend interactivity

📽️ Workout GIF API – Adds visual workout demonstrations

✨ Features

🔐 Secure Authentication
JWT-based login system for protecting user data.

📊 Personalized Dashboards
Track daily:

🥗 Calories

🚶 Steps

💧 Water Intake

💤 Sleep

🏋️ Workouts

🧾 Full CRUD Operations
Manage workout plans and progress logs using MongoDB.

📱 Responsive Design
Mobile-first UI built with Tailwind CSS.

🏃 Interactive Workout GIFs
Visual guides help users follow workout routines more effectively.

🛠️ Getting Started

To get a local copy up and running, follow these steps:

Prerequisites

Make sure you have the following installed:

Node.js

MongoDB Atlas Account

Git

Installation
# Clone the repo
git clone https://github.com/Neha09V/Fitnessfreak.git

# Navigate to the project directory
cd Fitnessfreak

# Install dependencies
npm install
# or
yarn
# or
pnpm install

Run the Development Server
npm run dev
# or
yarn dev
# or
pnpm dev


Visit http://localhost:3000
 in your browser.

⚙️ Environment Variables

Create a .env.local file in the root of your project and add:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

🚀 Deployment

The easiest way to deploy your Next.js app is with Vercel
:

Push your project to GitHub.

Go to vercel.com/import
.

Connect your GitHub repository.

Set environment variables.

Click Deploy.

📚 Next.js Deployment Docs
