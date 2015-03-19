
module.exports = {
    "get": {
        "/users": require("./controllers/usersController").getAction,
        "/hello": require("./controllers/helloController").getAction
    },
    "post": {
        "/users": require("./controllers/usersController").postAction
    }
};
