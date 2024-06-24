const express = require('express');
const connectMongo = require('./connnection');
const { log } = require('console');

const app = express();

connectMongo();  //monogdbconnection

app.get("/", (req, res) => {
    res.sendFile("/view/home.html",{root:__dirname});
});

app.get("/about", (req, res) => {
    res.sendFile("/view/about.html", {root:__dirname});
});

app.listen(5000, () => {
    console.log("Listening..");
});
