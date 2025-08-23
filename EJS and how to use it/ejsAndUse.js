// EJS :
//          - EJS is stands for Embedded JavaScript.
//          - EJS is a templating engine for Node.js and Express.
//          - It lets you embed JavaScript inside HTML.
//          - File extension: '.ejs'
//          - Instead of sending plain HTML, you can pass data to the view and EJS will render it dynamically.

import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.render("index.ejs",{                // use render method to insert "EJS" in html file
        place : "Tiruvannamali",
        role : "Full Stack Developer",
    });
});

app.listen(port,()=>{
    console.log("Hey buddy!!, I'm running.");
});