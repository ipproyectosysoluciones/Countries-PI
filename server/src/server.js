const express = require( "express" );
const cookieParser = require( "cookie-parser" );
const bodyParser = require( "body-parser" );
const router = require( "./routes" );
const morgan = require( "morgan" );
const cors = require( "cors" );
const { saveCountriesToDB } = require("./utils/api.js");
require( "./db.js" );

const server = express();

server.use( bodyParser.urlencoded( { extended: true, limit: "50mb" } ) );
server.use( bodyParser.json( { limit: "50mb" } ) );
server.use( cookieParser() );
server.use( morgan("dev") );
server.use( express.json() );
server.use( cors() );

saveCountriesToDB();

server.use( router );

// Error catching endware.
server.use(( err, req, res, next ) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error( err );
  res.status( status ).send(message);
});

module.exports = server;
