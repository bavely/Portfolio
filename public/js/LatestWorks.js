$(document).ready(function() {
    const proj = [{
            modaltitle: "PAWINPAW",
            imgurl: "img/13.PNG",
            text: "PAWINPAW a web application allow dogs owners in the same area to match their dogs to each other and they can communicate.<br/> <br> The application is under the update to adding more features and more sections.",
            tech: "Technologies used in PAWINPAW : <br>    Nodejs, MySQL, Sequelize, Crypto, Expressjs, Bootstrap and Reactjs."
        },
        {
            modaltitle: "DEVCONNECT",
            imgurl: "img/11.PNG",
            text: "DEVCONNECT a website helps students and new professionals in the coding fields to assist them with navigating the ever changing business environment that in the coding industry.",
            tech: "Technologies used in DEVCONNECT : <br>  Nodejs, Crypto, Expressjs, Express-handlebars, Method-override, <br> MySQL, npm-cli, Sequelize, Socket.io, JQuery and Bootstrap.",
        },
        {
            modaltitle: "NOTEPADBOOK",
            imgurl: "img/07.jpg",
            text: "NOTEPADBOOK a web application user can use to save daily notes which can access anywhere in addition to the user can grab any of his/her posts from facebook and save it to the NOTEPADBOOK.",
            tech: 'Technologies used in NOTEPADBOOK : <br>  Firebase "Database and Authentication", Facebook "Graph API", Quill Text Editor "JS Library", JQuery and Bootstrap.',
        },
        {
            modaltitle: "NYT Search",
            imgurl: "img/12.PNG",
            text: "NYT Search a web application allow users to search for an articles in new york times news paper with in a specific period.",
            tech: '<br>Technologies used in NYT Search : <br>  JQuery, Bootstrap, NodeJs, ReactJs, Express.js and Mongoose/MongoDB.',
        },
        {
            modaltitle: "blueskypouches.com",
            imgurl: "img/08.PNG",
            text: "blueskypouches.com is a commercial website where users can find a product and buy it online. <br> <br>blueskypouches.com built for blue sky pouches company for fabrication and selling pouches. ",
            tech: "Technologies used in blueskypouches.com : <br> Wordpress and Hosted By: www.ecowebhosting.co.uk.",
        },
        {
            modaltitle: "Eat-Da-Burger!",
            imgurl: "img/10.PNG",
            text: "Eat-Da-Burger! a web application built based on MySQL, Nodejs, Express, Handlebars and Sequelize ORM using MVC design pattern.",
            tech: "<br>Technologies used in Eat-Da-Burger! : <br> NodeJs, ExpressJs, Handlebars, MVC design pattern and Bootstrap.",
        },
        {
            modaltitle: "NEW COMERS GUIDE",
            imgurl: "img/14.PNG",
            text: "NEW COMERS GUIDE a website guide the new egyptians comers to USA. <br/> <br>Through the application, users can communicate and share experiences, news, and advertisements.<br/> <br> The application is a voluntary work for the egyptian community in california.",
            tech: "Technologies used in NEW COMERS GUIDE : <br>  Nodejs, MySQL, Sequelize, Crypto, Express, Bootstrap and Reactjs.",
        },
        {
            modaltitle: "Anime and Cartoons Stickers Search",
            imgurl: "img/06.jpg",
            text: "Anime and Cartoons Stickers Search a web application allow user to search for Gifs and stickers.",
            tech: '<br> Technologies used in Anime and Cartoons Stickers Search : <br>Giphy Api, "AJAX", JQuery and Bootstrap.',
        },
        {
            modaltitle: "s-badge.com",
            imgurl: "img/15.PNG",
            text: "s-badge.com is a website presents the products services provided by Global Net Solutions company.",
            tech: "<br> Technologies used in s-badge.com : <br> Wordpress and PHP.",
        }
    ];

    $(".modalt").on("click", function(event) {
        event.preventDefault();
        let id = $(this).attr("dataid");
        console.log("Here!!!")
        $(".modal-title").html(proj[id].modaltitle);
        let img = $("<img>");
        img.addClass("modalimg");
        img.attr("src", proj[id].imgurl);
        $(".imgspot").html(img);
        $(".modelp").html(proj[id].text);
        $(".tech").html(proj[id].tech);
    });


    $("#sbtn").on("click", function(event) {
        event.preventDefault();
        if (($("#inname").val().trim()) && ($("#inemail").val().trim()) && ($("#intext").val().trim())) {
            var data = {
                name: $("#inname").val(),
                email: $("#inemail").val(),
                text: $("#intext").val()
            }
            console.log(data)
            $.post("/api/emailme", data).done(function(res) {
                console.log(res);
                if (res.Messagepass) { $("#message").html('<div class="alert alert-success" role="alert">' + res.Messagepass); } else if (res.Messageerr) { $("#message").html('<div class="alert alert-warning" role="alert">' + res.Messageerr); } else { $("#message").html('<div class="alert alert-danger" role="alert">' + "Something Is Wrong, Please Try Again."); }

            });
        } else {
            $("#message").html('<div class="alert alert-danger" role="alert">' + "Please Fill Out All Fields.");
        }

    });
});