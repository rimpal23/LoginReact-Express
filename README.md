Simple Node.js server using Express that provides two API endpoints:

- /login: Returns JSON response with username and password.
- /users: Returns a list of users from users.JSON file when user logs in.

Setup and Installation:

- Install node.js (npm)
- clone the repo
- cd into project directory/frontend
- install all dependencies
- run server using npm start
- Enter below username and password at login page which is hardcoded.
  Username: test@example.com
  Password: password@24
- You will be directed to welcome page containing list of users retrieved from users endpoint.
- API Endpoints to test (I tested API using POSTMAN) - GET request : http://localhost:3000/login
  http://localhost:3000/users
