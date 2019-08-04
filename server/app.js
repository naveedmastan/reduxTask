var express = require('express');
var app = express();
var fs = require("fs");

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    
    next();
});

var server = app.listen(8081, function () {
    var port = server.address().port
    console.log("App listening at http://", port)
})

app.get('/allUsers', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        
        res.end(data);
    });
})

app.get('/getProducts', function (req, res) {
    fs.readFile(__dirname + "/products.json", 'utf8', function (err, data) {
        
        res.end(data);
    });
})

app.post('/addUser', function (req, res) {

    // res.setHeader('Access-Control-Allow-Origin', '*');
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);


        userData = req.body.data;
        let flag = true;
        for (let user of data) {
            if (user.userName === userData.userName) {
                flag = false;
                res.end(JSON.stringify({ err: "User already exists" }))
            }
        }
        if (flag) {
            userData["id"] = Math.random().toString(36).slice(2);;
            data.push(userData);
            res.end(JSON.stringify(data));

            fs.writeFile(__dirname + "/users.json", JSON.stringify(data), function (err) {
                if (err) throw err;


            });
        }


    });
})


app.post('/validateUser', function (req, res) {

    // res.setHeader('Access-Control-Allow-Origin', '*');
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);


        userData = req.body.data;
        let flag = true;

        for (let user of data) {
            if (user.userName === userData.userName && user.password === userData.password) {
                flag = false;
                res.end(JSON.stringify(user));
            }
        }
        if (flag) {
            res.end(JSON.stringify({ err: "err" }))
        }


    });
})

app.post('/updateUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == req.body.id) {

                data[i] = req.body.data;
                fs.writeFile(__dirname + "/users.json", JSON.stringify(data), function (err) {
                    if (err) throw err;
                    res.end(JSON.stringify({ users: data, user: data[i] }));
                });

            }
        }
    });
})




app.post('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == req.body.id) {
                delete data[i];
                data = data.filter(e => e !== undefined);
                //delete data["user" + req.body.id];

                //data["user" + req.body.id] = data["user" + (req.body.id+1)];
                fs.writeFile(__dirname + "/users.json", JSON.stringify(data), function (err) {
                    if (err) throw err;
                 
                    res.end(JSON.stringify({ success: "success" }))
                });
            }
        }
    });
})