const requestProxy = require("express-request-proxy");
const config = require("./config");

module.exports = function (app) {
    app.get('/genres?*', requestProxy({
        url : config.apiUrl + "/genres?*",
        headers:{
            'user-key': config.key
        }
    }));

    app.get('/games?*', requestProxy({
        url : config.apiUrl + "/games?*",
        headers:{
            'user-key': config.key
        }
    }));
}