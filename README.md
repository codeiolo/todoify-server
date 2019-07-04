# Todoify Server

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

Todoify Server, a simple to-do with categories, REST API built with NodeJS, [Express](https://github.com/expressjs/express/), [JWT](https://github.com/auth0/node-jsonwebtoken), and [Mongoose](https://github.com/Automattic/mongoose).
Authenticated users can only get and manipulate categories and to-do's that matches the authenticated user.

Stay tuned for updates in a near future! :D

**Features** 
* User
  * Registration
  * Authentication (login)
  * Get user info
  * Delete user
* Categories
  * Create new
  * Get all
  * Get one by id
  * Delete by id
* To-do's
  * Create new
  * Get all
  * Get one by id
  * Delete by id

Check [wiki](https://github.com/luxwarp/todoify-server/wiki) for change log and more information

## Requirements

* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [PM2](http://pm2.keymetrics.io/)

**Make sure you have PM2 installed globally**

```
npm install pm2 -g
```

## Install

Start off by downloading Todoify Server

```
git clone https://github.com/luxwarp/todoify-server.git
```

cd in to your todoify-server folder and copy .env.example to .env 

```
cp .env.example .env
```

edit your new .env file and change all information to match your own settings

```
nano .env 
```

save .env file and then install dependencies

```
npm install
```

**Make sure you have PM2 installed globally**

```
npm install pm2 -g
```

To start Todoify server in development mode

```
npm run dev
```

To start Todoify server in production mode

```
npm run production
```

You should now see in your console that Todoify server is running. Todoify server runs with help of [PM2](http://pm2.keymetrics.io/) so if the server crashes while running it restarts automatically, both in development and production mode.

If you don't want to start Todoify server with PM2 you can run

```
npm run single-start
```

or just 

```
node ./index.js
```

If Todoify server loses connection to your MongoDB server it will try to reconnect every 5 second until you kill the Todoify server manually or it gets connected again.

By default Todoify server does not use HTTPS, the easiest way to get your connection encrypted is by using a web server like Nginx or Apache and proxy your traffic from your domain via SSL and down to Todoify server that runs on it's own port.

## License

ISC © 2019 Copyright [Mikael Luxwarp Carlsson](https://luxwarp.info)

## Note

Feel free to contribute the way you want.