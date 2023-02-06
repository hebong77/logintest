"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home : (req, res)=> {
        res.render("home/index");
    },
    
    login : function (req, res) {
        res.render("home/login");
    },
};



const process = {
    login : (req, res)=> {
        const id = req.body.id;
        const password = req.body.password;
        
        users = UserStorage.getUsers("id", "password");

        const response = {};

        if( users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            console.log(`idx = %s, pass = %s`, idx, users.password[idx] );

            if( users.password[idx] == password) {
                response.sucess = true;
                return res.json(response);
            }
        }

        response.sucess = false;
        response.msg = "로그인 실패";
        return res.json(response);
    }
};



module.exports = {
    output,
    process,
};


