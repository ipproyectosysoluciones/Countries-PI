const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
require( "dotenv" ).config();
const PORT = 3001;

conn.sync({ force: true }).then(() => {
  server.listen( PORT, () => {
    console.log( "%s listening at " + PORT );  // eslint-disable-line no-console
  });
}).catch( error => console.error( error ) );
