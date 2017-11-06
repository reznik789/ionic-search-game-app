const requestProxy = require("express-http-proxy");
const config = require("./config");

module.exports = function(app) {
  app.get(
    "/games",
    requestProxy(config.apiUrl+"/games", {
      proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        // you can update headers
        proxyReqOpts.headers["user-key"] = config.key;
        return proxyReqOpts;
      }
    })
  );
  app.get(
    "/genres",
    requestProxy(config.apiUrl+"/genres", {
      proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        // you can update headers
        proxyReqOpts.headers["user-key"] = config.key;
        return proxyReqOpts;
      }
    })
  );
};
