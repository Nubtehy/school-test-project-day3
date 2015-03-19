var users = require("../lib/users");
var ect = require("ect");
var renderer = ect({ root : __dirname + '/../views' });
var data = { title : 'User list!' };
var allusers = [];
module.exports = {
    getAction: function(request, response, next){
        /* next(null) */
        setTimeout(function(next){
            response.statusCode = 200;
            try{
                response.write(renderer.render('viewusers.ect', {
                    data: data,
                    message: allusers
                }));
                next();
            }catch(e){
                next(e);
            }
        }, 500, next)
    },
    postAction: function(request, response, next){
        var postData = "";
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
        });
        request.addListener("end", function() {

            try{
                var newpostData;

                newpostData = JSON.parse(postData);
                var name = newpostData['name'];
                var mail = newpostData['e-mail'];
                var description = newpostData['descriptio'];
                var age = newpostData['age'];
                allusers.push(new User(name,mail,description,age));

                response.statusCode = 200;
                next();

            }catch(e){
                next(e);
            }
        });
    }
};
