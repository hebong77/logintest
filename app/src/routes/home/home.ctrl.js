"use strict";

const output = {
    home : (req, res)=> {
        res.render("home/index");
    },
    
    login : function (req, res) {
        res.render("home/login");
    },
};

const users = {
    id: ["aaa", "bbb", "ccc"],
    password:["11", "22", "33"],
};

const process = {
    login : (req, res)=> {
        const id = req.body.id;
        const password = req.body.password;
        
        if( users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            console.log(`idx = %s, pass = %s`, idx, users.password[idx] );

            if( users.password[idx] == password) {
                return res.json( {
                     sucess : true,
                });
            }
        }

        return res.json({
            sucess: false,
            msg: "로그인에 실패",
        });
    },
};



module.exports = {
    output,
    process,
};


