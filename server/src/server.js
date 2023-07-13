const express = require( "express" );
const cookieParser = require( "cookie-parser" );
const bodyParser = require( "body-parser" );
const routes = require( "./routes" );
const morgan = require( "morgan" );
const cors = require( "cors" );
const { saveCountriesToDB } = require("./utils/api.js");
require( "./db.js" );

const server = express();

server.name = "API";

server.use( bodyParser.urlencoded( { extended: true, limit: "50mb" } ) );
server.use( bodyParser.json( { limit: "50mb" } ) );
server.use( cookieParser() );
server.use( morgan( "dev" ) );
server.use( express.json() );
server.use( cors() );

saveCountriesToDB();

server.use( "/", routes );


module.exports = server;
