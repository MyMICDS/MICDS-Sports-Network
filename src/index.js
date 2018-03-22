'use strict';

/**
 * @file Main file of the whole project.
 */

let config;
try {
	config = require(__dirname + '/libs/config.js');
} catch(e) {
	throw new Error('***PLEASE CREATE A CONFIG.JS ON YOUR LOCAL SYSTEM. REFER TO LIBS/CONFIG.EXAMPLE.JS***');
}

const port = process.env.PORT || config.port;

/*
 * General Libraries
 */

const bodyParser = require('body-parser');
const http = require('http');
const MongoClient = require('mongodb').MongoClient;

/*
 * Frameworks
 */

const express = require('express');
const app = express();
const server = http.Server(app);

/**
 * Express Middleware
 */

// Body Parser for POST Variables
app.use(bodyParser.json());     // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

/*
 * Routes
 */

// Connect to database
MongoClient.connect(config.mongodb.uri, (err, db) => {
	if(err) throw err;

	// Enable JWT authentication middleware
	app.use(jwt.authorize(db));
	app.use(jwt.fallback);
	app.use(jwt.catchUnauthorized);

	// Enable admin overrides
	app.use(api.adminOverride);

	// API Routes
	require(__dirname + '/routes/articlesAPI.js')(app, db);
});

/*
 * Initialize Server
 */

server.listen(port, () => {
	console.log('Server listening on *:' + port);
});

