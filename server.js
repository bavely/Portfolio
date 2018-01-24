var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var port = process.env.PORT || 8080;
var app = express();
// var nodemailer = require('nodemailer');
var mailgun = require("mailgun-js");
var api_key = 'key-ea4eaf7e61fbd658022867f6da600e4d';
var DOMAIN = 'sandbox303563f49dd84965831af9ad1e53d741.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// Cre­ate a trans­port object using nodemailer.
// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "bavelysamyport@gmail.com", // generated ethereal user
//         pass: "144000Bb" // generated ethereal password
//     }
// });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/api/emailme", function(req, res) {

    console.log(req.body.email + " " + req.body.name + "  " + req.body.text);
    // var mailOptions = {
    //     to: 'bavelysamyport@gmail.com',
    //     subject: req.body.name,
    //     html: `<p> Message :  ${req.body.text}  <br> Email :  ${req.body.email}</p>`,
    // };
    // transporter.sendMail(mailOptions, function(error, info) {
    //     if (error) {
    //         console.log(error);
    //         res.json({ Messageerr: "Sorry, Message Not Sent." });
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //         res.json({ Messagepass: "Thank You For Contacting Me." });
    //     }
    // });
    var data = {
        from: req.body.email,
        to: 'bavelysamyport@gmail.com',
        subject: req.body.name,
        text: req.body.text
    };

    mailgun.messages().send(data, function(error, body) {
        console.log(body);
    });

})



app.listen(port, function() {
    console.log("App listening on PORT " + port);
});