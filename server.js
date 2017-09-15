var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var port = process.env.PORT || 8080;
var app = express();
var nodemailer = require('nodemailer');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// Cre­ate a trans­port object using nodemailer.
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "bavelysamyport@gmail.com", // generated ethereal user
        pass: "144000Bb" // generated ethereal password
    }
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.get("/emailme", function(req, res) {
    console.log(req.query.email + " " + req.query.name + "  " + req.query.message);
    var mailOptions = {
        to: 'bavelysamyport@gmail.com',
        subject: req.query.name,
        html: `<p> Message :  ${req.query.message}  <br> Email :  ${req.query.email}</p>`,
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.redirect("/")
})



app.listen(port, function() {
    console.log("App listening on PORT " + port);
});