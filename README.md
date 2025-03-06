# ABAAS Web Application

## Overview

ABAAS rents is a marketplace for rooms and apartments and basically any houses renting.

## Setup Guide

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL (or any other supported database)

### Step-by-Step Setup

#### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/abaas.git
cd abaas
```

#### 2. Setup Environment Variables

Create a `.env` file in both the `server` and `client` directories by copying the provided `.env.example` files.

```sh
cp server/.env.example server/.env
cp client/.env.example client/.env
```

#### 3. Install Dependencies

Navigate to both the `server` and `client` directories and install the required dependencies.

```sh
cd server
npm install
cd ../client
npm install
```

#### 4. Configure Database

Make sure your PostgreSQL server is running and create a new database. Update the database connection settings in the `server/.env` file.

#### 5. Run Migrations

Navigate to the `server` directory and run the database migrations.

```sh
cd server
npx prisma migrate dev
```

#### 6. Start the Development Servers

Start the backend server:

```sh
cd server
npm run dev
```

Start the frontend server:

```sh
cd client
npm start
```

#### 7. Access the Application

Open your browser and navigate to `http://localhost:3000` to access the frontend. The backend server will be running on `http://localhost:5000`.

### Running with Docker

#### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/abaas.git
cd abaas
```

#### 2. Setup Environment Variables

Create a `.env` file in both the `server` and `client` directories by copying the provided `.env.example` files.

```sh
cp server/.env.example server/.env
cp client/.env.example client/.env
```

#### 3. Build and Run Docker Containers

Use Docker Compose to build and run the containers.

```sh
docker-compose up --build
```

#### 4. Access the Application

Open your browser and navigate to `http://localhost:5173` to access the frontend. The backend server will be running on `http://localhost:3000`.

