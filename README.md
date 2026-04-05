# Finance Dashboard Backend

## Features

* User authentication (JWT)
* Transaction management
* Dashboard summary

## Tech Stack

* Node.js
* Express
* MongoDB

## Setup

1. Install dependencies:
   npm install

2. Create .env:
   MONGO_URI=your_uri
   JWT_SECRET=secret123

3. Run:
   npm run dev

## APIs
## API Testing (Postman)

All APIs were tested locally using Postman.

### Base URL
http://localhost:5000

### Endpoints

#### Register
POST /api/auth/register

#### Login
POST /api/auth/login

#### Create Transaction
POST /api/transactions

#### Get Transactions
GET /api/transactions

#### Summary
GET /api/summary

* POST /api/auth/register
* POST /api/auth/login
* POST /api/transactions
* GET /api/transactions
* GET /api/summary
