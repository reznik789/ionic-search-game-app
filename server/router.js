const requestProxy = require("express-http-proxy");
const config = require("./config");

module.exports = function(app) {
  //Games route
  app.get("/games", requestProxy(config.apiUrl + "/games", {}));
  //Genres route
  app.get("/genres", requestProxy(config.apiUrl + "/genres", {}));
};
