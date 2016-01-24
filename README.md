Express & ES6 REST API Boilerplate
==================================

A simple boilerplate for building RESTful APIs with ES6 ( Babel ) and Express. Docker-support, es6 generators, 
JSON Web Token, error-handling, logging etc. Express app, Redis and mongo dockerized with docker-compose.

**Note: This project is under development.**

## Features
    
  * Docker and Docker-compose
  * ES6 support via [babel](https://babeljs.io)
  * ES6 modules ( transpiled with babel )
  * ES6 generators in routes and middlewares via co and co-express
  * Express.js: <http://expressjs.com/>
  * Moongoose.js (for MongoDB interaction): <http://mongoosejs.com/>
  * JSON Web Token ([JWT](http://jwt.io)) authentication
  
## Install
  
  ```bash
  $ git clone https://github.com/ddellamico/express-rest-api-es6
  ```
  
  Run `docker-compose up` to create and start the container. 
  The app should then be running on your docker daemon on port 3000 (On OS X you can use boot2docker ip to find out the IP address).
  
  **NOTE:** [dotenv](https://github.com/motdotla/dotenv) is used to manage environment variables from a `.env` file.
  Place in root project a `.env` file and "overwrite" the default values. ES:
  
  NODE_PORT=3000
  NODE_ENV=development
  MONGO_DB_NAME=your-mongo-db-name
  TOKEN_SECRET=secret