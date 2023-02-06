"use strict"

class UserStorage {
    static #users = {
        id: ["aaa", "bbb", "ccc"],
        password:["11", "22", "33"],
        name: ["에이", "비비", "시시"],
    };

    static getUsers(...fields) {

        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if( users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;

        }, {} );
    };
}

module.exports = UserStorage;