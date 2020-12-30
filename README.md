
## NodeJS, MongoDB, JWT authentication, CRUD operations, REST API testing with Mocha and Chai 

## Feature implemented

- Develop REST APIS with basic CRUD operations.
- Implement JWT authentication mechanism to secure APIs. 
- REST APIs BDD testing.

## Technical implementation

- Build directory structure on top of expressJS framework to get started.
- Below is the list of some essential npm packages used in this project
  
    - "bcryptjs": "^2.4.3" - use to hash and compare passwords
    - "jsonwebtoken": "^8.5.1" - create and verify JWT tokens 
    - "mongoose": "^5.11.8" - write mongoDB queries
    - "uuid": "^8.3.2" - create unique ids
    - "chai": "^4.2.0" - assertion library to write test cases
    - "chai-http": "^4.3.0"-  assertion library to call REST API
    - "mocha": "^8.2.1" - used to write unit test cases
    
- Test database connectivity.
- MongoDB collection creation and schemas building
- Write mongoose CRUD queries.
- Protect REST APIs with JWT.
- Write test cases with the help of MOCHA framework and CHAI assertion library with SHOULD interface.

## CRUD Operations 

1. signUp API: (POST)

Check email and userId duplication in records
and registered users
   
2. signIn API: (POST) 

Find username in database, if user exists,
compare the passwords using bcrypt, if it is correct
then, generate a token using jsonwebtoken
and return user information & access Token.

3. getUsersList API (GET)

Get all users list

4. getUsersByID API (GET)

Get specific user details

5. updateUser API (PUT)

Update specific user details

6. deleteUser API (DELETE)

Delete specific user

## POSTMAN APIS COLLECTION

You can import the postman apis collection from below link.

https://www.getpostman.com/collections/451f1ea7111d37d964e6

## REST APIS testing with MOCHA framework and CHAI assertion library. 

Total test cases - 18

Users
   -  /POST registerUser
      - ✓ it should not able to register user without name, email and password (44ms)
      - ✓ it should not able to register with already registered emailId (4644ms)
      - ✓ it should able to register a new user (1624ms)
  -   /POST signIn
      - ✓ it should not able to signIn if user does not exist (399ms)
      - ✓ it should not able to signIn with wrong credentials (456ms)
      - ✓ it should able to signIn with valid credentials (409ms)
  -   /GET getUsersList
      - ✓ it should not allow to view users list without authorization token
      - ✓ it should not allow to view users list with expired authorization token
      - ✓ it should get all user list (356ms)
  -   GET /getUser/:userId
      - ✓ it should not allow to get user details for given userId without authorization token
      - ✓ it should not allow to get user details for given userId with expired authorization token
      - ✓ it should get user details for given userId (384ms)
   -  /PUT /updateUser/:userId
      - ✓ it should not allow to update the user details for given userId without authorization token
      - ✓ it should not allow to update the user details for given userId with expired authorization token
      - ✓ it should update the user details for given userId (3439ms)
   -  /DELETE /removeUser/:userId
      - ✓ it should not allow to delete a given UserId details without authorization token
      - ✓ it should not allow to delete a given UserId details with expired authorization token
      - ✓ it should delete a given UserId details
      
 Result - 18 passing (12s)
 
 ## Ready To Use 
 
 - Get a clone of the repository or simply download as zip and unwrap in your local directory.
 - Assuming you have already install nodeJS and mongoDB. 
 - For mongoDB you can have installed it locally or can use cloud storage such as mongoDB Atlas.
 - Navigate to app root folder in terminal.
 - commands
   
   > node app.js - to start the application
   
   > npm test - to test unit test-cases

 



