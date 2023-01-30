"use strict";

const home = (req, res)=> {
    res.render("home/index");
};

const login = function (req, res) {
    res.render("home/login");
}

module.exports = {
    home,
    login,
}


