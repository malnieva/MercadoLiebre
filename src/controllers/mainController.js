/*const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "src");
app.use(express.static(publicPath));*/

const productos = require('../data/products.js')

const controller = {
    index: (req, res) => res.render('home', { productos }),
        /*res.sendFile(path.join(__dirname, "../", "views", "home.html"));
    },*/
    registro: (req, res) => res.render('../views/form_pages/register'),
    /*registro: (req, res) => {
        res.sendFile(path.join(__dirname, "../", "views", "form_pages", "register.html"));
    },*/
    login: (req, res) => res.render('../views/form_pages/login'),
    /*login: (req, res) => {
        res.sendFile(path.join(__dirname, "../", "views", "form_pages", "login.html"));
    },*/
    error: (req, res) => res.render('page_404'),
    /*error: (req, res) => {
        res.sendFile(path.join(__dirname, "../", "views", "page_404.html"));
    }*/
}

module.exports = controller;