# E-Commerce Product Filter and Display

A full-stack web application to display and filter products by brand, category, and price.
Built with Next.js 14, Express.js, and MySQL.

## Installation

### Prerequisites

- Node.js installed — [Download Node.js](https://nodejs.org/)
- MySQL running locally (or use a cloud database)

 
### Steps to Install
Clone the Repository

- git clone https://github.com/IsmailKoormath/Products-List-Leapcodes.git
- cd Products-List-Leapcodes

### Install Dependencies
### Frontend
- cd frontend
- npm install

### Backend
- cd backend
- npm install

## Setting up Database
Create a .env file inside the backend/ folder with:

DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=productlist

- Start your MySQL server.

- Run the backend once — it will automatically:

 Create the productlist database (if it doesn't exist).
 Create the products table (if it doesn't exist).

## How to Run the App

### Start Backend
- cd backend
- npm run dev
Server runs at: http://localhost:5000

### Start Frontend
- cd frontend
- npm run dev
App runs at: http://localhost:3000

###Seed Products
To populate the database with sample products:
- npm run seed


