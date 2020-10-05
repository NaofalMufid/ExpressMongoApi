# REST API with Node, Express & MongoDB

## Table of Contents
+ [About](#about)
+ [Getting Started](#getting_started)
+ [Usage](#usage)
+ [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>
We’ll do this by coding a REST API that lets users interact with our Youtube database by defining what info our database will accept and how it goes about manipulating that data depending on what a user would like to do.

Details tutorial [this](https://dev.to/beznet/build-a-rest-api-with-node-express-mongodb-4ho4)

### API Available
```
http://localhost:3000/subscribers = GET, POST, 
http://localhost:3000/subscribers/:id = GET, PATCH, DELETE
```

## Getting Started <a name = "getting_started"></a>
Important Prerequisite: Make sure you already have MongoDB installed and setup on your machine before starting this tutorial. Here is a link to a guide that MongoDB provides on their website: [MongoDB Installation](https://docs.mongodb.com/manual/administration/install-community/)

### Prerequisites
- install [nodejs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- install [npm](https://docs.npmjs.com/cli/install)
- isntall [mongodb](https://docs.mongodb.com/manual/administration/install-community/) 

### Installing

To get started with the app, clone the repo and then install the needed

Clone the repo

```
git clone git@github.com:NaofalMufid/ExpressPostgresApi.git
```

move to project directory

```
cd ExpressPostgresApi
```

install package
```
npm install
npm i --save-dev
```

create file .env type 
```
DATABASE_URL=mongodb://localhost/subscribers
```

running mongo on terminal type
```
mongod
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>
```
node server.js

or

nodemon server.js
```
