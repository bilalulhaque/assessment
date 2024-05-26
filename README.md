# ASSESSMENT

The task is to create a simple authentication functionality from scratch, using Nest.js and TypeScript for the backend, MongoDB for the database, and React.js for the frontend.

## Content

[1. Getting Started](#getting-started)  
&emsp;[1.1 Requirements](#requirements)  
[2. Download and Installation](#download-and-installation)    
[3. API Resources](#api-resources)  
&emsp;[3.1 Endpoints](#endpoints)  
[4. Technologies](#technologies)  

## Getting Started

The following instructions will help you get a copy of this project up and running on your local machine.

Below you will also find relevant information about the API resources available (its endpoints) as well as the main technologies used to build it.

### Requirements

You need to install the following technologies and run them locally:

- <https://nodejs.org/en/download/> - Node.js
- <https://www.mongodb.com/try/download/community> - MongoDB

Note: For MongoDB, you can use its Atlas service so you don't have to install it on your machine. You can access it on <https://www.mongodb.com/atlas/database>.

## Download and Installation

Make sure you have Git installed on your machine so you can clone this project by running the following command:

``` bash
git clone https://github.com/bilalulhaque/assessment.git
```

Alternatively, if you are reading this README after downloading the .zip file, you already have all the necessary files in the root folder so you can move along.


### For backend:
1. Open command prompt and enter cd backend/
2. Open the *'.env'* file and follow the instructions in it.

3. After setting up your environment variables, run ``` npm install ``` to install all dependencies.

4. ```npm run start:dev``` will start up the application using a nest.js script, running on port 3001. From this point on, you can starting sending requests.

### For frontend:
1. Open command prompt and enter cd frontend/
2. Run ``` npm install ``` to install all dependencies.

4. ```npm run start``` will start up the application using react.js script, running on port 3000. From this point on, you can start using the frontend of the application.


## API Resources

You can use an http client to send requests to this application, such as *Insomnia*, *Postman* or any other.

### Endpoints

BASE_URL = http://localhost:3001/api/v1

1. POST /auth/signup
This endpoint creates a user entry in the database and returns a jwt access token.

2. POST /auth/login
This endpoint retrieves data from the database and generates access token.

## Technologies  

Main technologies in this project:

- [Node.js](https://nodejs.org/en/) - *A JavaScript runtime built on Chrome's V8 JavaScript engine.*
- [Nest.js](https://nestjs.com/) - *A progressive Node.js framework to build highly scalable and testable applications.*
- [MongoDB](https://www.mongodb.com/) - *A document-oriented database program.*
- [Typescript](https://www.typescriptlang.org/) - *A strongly typed programming language that builds on JavaScript.*
- [ReactJS](https://react.dev/) - *A JavaScript library for building user interfaces*
