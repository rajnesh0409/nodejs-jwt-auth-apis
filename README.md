# demoProj

# NodeJS , MongoDB, JWT authentication, CRUD operations -

MongodB database connectivity
Collection creation and schemas building
Mongoose CRUD queries
JWT authentication and authorization

# CRUD Operations -

- signup: (CREATE) (POST)

Check email and userId duplication in records
Registered users
   
- signin: (POST)

Find username in database, if it exists
compare password with password in database using bcrypt, if it is correct
generate a token using jsonwebtoken
return user information & access Token

- getUsersList (READ) (GET)

Get all users list

- getUsersByID (READ) (GET)

Get user by its Id

- UpdateUser (UPDATE) (PUT)

Update user details

- DeleteUser (DELETE) (DELETE)

Delete specific user

