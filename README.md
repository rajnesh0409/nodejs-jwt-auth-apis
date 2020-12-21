# demoProj

# NodeJS , MongoDB, JWT authentication, CRUD operations -

MongodB database connectivity,
Collection creation and schemas building,
Mongoose CRUD queries,
JWT authentication and authorization

# CRUD Operations -

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

