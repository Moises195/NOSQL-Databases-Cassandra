# Building an App with NoSQL Database Cassandra

## CRUD Application with Apache Cassandra
This project is a simple CRUD application that uses Apache Cassandra as a NoSQL database and Node.js for backend development. This step-by-step guide will help you clone, configure, and run the application in your local environment, as well as interact with the API to manage user data.

## Features
Apache Cassandra Database: Ideal for distributed and highly available applications.
RESTful API: Allows CRUD operations on user data.
Easy Setup: Simple and quick installation with Node.js and npm.

## Requirements
Before you begin, ensure you have the following components installed:

Node.js and npm.
Apache Cassandra, running locally or in a cluster.
Postman or curl (optional, for API testing).
Installation and Configuration

1. Clone the Repository
Clone the project to your local machine and navigate to the directory:

git clone https://github.com/your_username/repository_name.git
cd repository_name
2. Install Dependencies
Run the following command to install the project dependencies:

npm install

3. Configure the Cassandra Connection
Edit database.js and set the contactPoints and localDataCenter to match your Cassandra cluster configuration.

4. Create Keyspace and Table in Cassandra
Start the Cassandra shell (cqlsh) and run these commands to create the keyspace and the users table:

CREATE KEYSPACE IF NOT EXISTS social_app
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3'};

CREATE TABLE social_app.users (
  user_id UUID PRIMARY KEY,
  name TEXT,
  email TEXT,
  created_at TIMESTAMP
);
5. Start the Server
Run the following command to start the application server:

node server.js
The application will be available at http://localhost:3000.

API Usage
Available Endpoints
You can use tools like Postman or curl to interact with the API:

## Create a User
POST /users

{
  "name": "User Name",
  "email": "user@email.com"
}

## Get a User
GET /users/:id
Expected response:

{
  "user_id": "UUID",
  "name": "User Name",
  "email": "user@email.com",
  "created_at": "Creation Date"
}

## Update a User
PUT /users/:id

{
  "name": "New Name",
  "email": "new@email.com"
}

## Delete a User
DELETE /users/:id
