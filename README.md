# Login page recuitment task

## Table of content
* [General info](#general-info)
* [Task list](#task-list)
* [Setup](#setup)
* [Technologies](#technologies)
* [Features](#features)

## General info

This project aims to create a secure login system using React using the Next.js framework for the frontend and Nest.js for the backend. The system includes a login screen with email and password fields, a Nest.js API to handle login requests, database integration for storing login data that is based on Prisma operations and SQLite for data storage, and user data modeling with hashed passwords. Implementing authentication with provided credentials was implemented with NextAuth.

To login you can sign up and create a new account or use the credentials below:
- Email: **janusz@gmail.com**
- password: **abecadlo**

## Task list

1. **Login Screen in React:**
   - Implement a login screen based on the design from Figma in React.
   - Create a form with email and password fields.

2. **Nest.js API for Login:**
   - Develop a new API in Nest.js to handle POST requests sent from React after login.
   - Set up endpoints to receive login information.

3. **Database Connection in Nest.js:**
   - Configure a connection to a database (any database) in Nest.js.
   - Enable the application to save login data. Registration is not required; data can be artificially added during application startup.

4. **User Data Model in Nest.js:**
   - Prepare a data model for users in Nest.js.
   - The user model should include email and hashed password fields.

5. **Login Logic in Nest.js:**
   - Implement logic in Nest.js to verify if the provided email and password are correct.
   - Return an appropriate status based on the verification result.

6. **CORS Configuration in Nest.js:**
   - Configure CORS in Nest.js to allow requests from React.
   - Ensure seamless communication between the frontend and backend.

7. **Github Repository:**
   - Place the completed project on GitHub.
   - Set the repository to private.

## Setup

### Cloning repository

To run this project, clone my repository:

```
git clone https://github.com/KrzysztofSnopek/Login-page-recruitment-task
```

### Starting backend and frontend

After downloading the dependencies (requires Node.js v18.17.0 or newer) you need to open both frontend and backend separately:

#### Backend

```

$ cd backend
$ npm install
$ npm run start:dev

```
#### Frontend

```
$ cd frontend
$ npm install
$ npm run dev

```

## Technologies

Project is created with:

### Frontend
* React v18.2.0
* Next.js v14.0.4
* Typescript v^5
* NextAuth v4.24.5
* Tailwindcss v3.3.0
* Material UI v5.15.4

### Backend
* Nest.js v10.0.0
* Prisma v^5.7.1
* Bcrypt v^5.1.1

## Features

### Database

- **User Model with Email and Hashed Passwords:**
  - Crafted a user model with fields for email and password.
  - Implemented password hashing using bcrypt.
  - Integrated Prisma to store user data in an SQLite database.

  ![User Model](screenshots/user_model.png)

### Nest.js APIs

- **User Management APIs:**
  - Created APIs for user management, including user creation and checking for existing email addresses.
  - Implemented login functionality with secure password verification.
  - Integrated Prisma to store user data in an SQLite database.

![POST login](https://github.com/KrzysztofSnopek/Login-page-recruitment-task/assets/108864848/60120711-368c-400a-81ea-0c09351eebfd)
![database](https://github.com/KrzysztofSnopek/Login-page-recruitment-task/assets/108864848/f49dba35-bb0e-4f68-a14a-b3bc575041af)


### Login Page

- **Login Page from Figma Design:**
  - Developed a login page based on the Figma design.
  - Utilized Tailwind CSS and Material UI inputs for styling.
  - Implemented an alert to notify users when input credentials are incorrect.

![login page](https://github.com/KrzysztofSnopek/Login-page-recruitment-task/assets/108864848/4e9e54c8-858f-43cc-9e3d-af0c976f3719)

![Alert invalid credentials](https://github.com/KrzysztofSnopek/Login-page-recruitment-task/assets/108864848/ad2270fc-5ae3-43a4-ad6f-f0240a3508c7)

### Sign Up Form

- **User Registration Form:**
  - Created a sign-up form allowing users to create a new account.

![sign up form](https://github.com/KrzysztofSnopek/Login-page-recruitment-task/assets/108864848/fbbeedac-0dde-46d5-aea6-ee5f6d1ed51b)

### Access to User Information and Log Out

- **User Data Display Screen:**
  - Designed a screen displaying retrieved user data.
  - Implemented a log-out button for user session termination.

 ![inside](https://github.com/KrzysztofSnopek/Login-page-recruitment-task/assets/108864848/8adb90e7-72c0-4775-8326-f50f6dd1b546)

- **Authentication Status Check:**
  - Checked authentication status and displayed messages accordingly.
  - Implemented a button to redirect users to the login page if not authenticated.





