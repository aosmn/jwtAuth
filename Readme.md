# JWT MERN Boilerplate

This is a boilerplate project for authentication using JWT with MERN stack

## Steps for usage

1. Clone the project
2. cd into the project and run `npm i` in the root folder
3. Run `npm i` in client folder
4. Create `.env` files
5. Run `npm run dev` to start the server and client

## Required environmental variables

### **Client**

`REACT_APP_SERVER_URL` URL to the express server.

### **Server**

- `NODE_ENV`
- `PORT`
- `MONGO_URI` url to mongo
- `JWT_SECRET`
- `SMTP_EMAIL` Email used to send password reset email
- `SMTP_PASSWORD` Password for SMTP Email
- `CLIENT_URL` Used for CORS allowed Origins
