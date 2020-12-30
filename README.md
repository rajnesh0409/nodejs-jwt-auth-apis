# NodeJS, MongoDB, JWT authentication, CRUD operations, API testing with Mocha and Chai 

- MongodB database connectivity
- Collection creation and schemas building
- Mongoose CRUD queries
- JWT authentication and authorization
- REST APIs BDD testing with MOCHA framework and CHAI assertion library with SHOULD interface

# CRUD Operations 

- signUp: (CREATE) (POST)

Check email and userId duplication in records
and registered users
   
- signIn: (POST)

Find username in database, if it exists
compare the passwords using bcrypt, if it is correct
then generate a token using jsonwebtoken
and return user information & access Token.

- getUsersList (READ) (GET)

Get all users list

- getUsersByID (READ) (GET)

Get specific user details

- UpdateUser (UPDATE) (PUT)

Update specific user details

- DeleteUser (DELETE) (DELETE)

Delete specific user

# POSTMAN APIS COLLECTION

You can import the postman apis collection from below link.

https://www.getpostman.com/collections/451f1ea7111d37d964e6

# REST APIS testing with MOCHA framework and CHAI assertion library. 

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
      
 18 passing (12s)



