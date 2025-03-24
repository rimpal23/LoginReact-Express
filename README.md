Simple Node.js server using Express that provides two API endpoints:

- /login: Returns JSON response with username and password.
- /users: Returns a list of users from users.JSON file when user logs in.

Setup and Installation:

- Install node.js (npm)
- clone the repo
- cd into project directory/frontend
- install all dependencies (express, dotenv, react, react-dom, react-router-dom, axios). Please refer to package.json file for dependencies.
- Create .env file and add below:
  PORT=3000
  USERNAME=test@example.com
  PASSWORD=password@24
- run server using npm start
- Enter username and password at login page from .env
- You will be directed to welcome page containing list of users retrieved from users endpoint.
- API Endpoints to test (I tested API using POSTMAN) - GET request : http://localhost:3000/login
  http://localhost:3000/users
