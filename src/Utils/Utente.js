import React from 'react';

export default class Utente extends React.Component{
    constructor(e,p){
        super();
        this.email = e;
        this.password = p;
    }
}
//const sha512 = require('js-sha512');
//const pass = sha512('password');
const pass = 'password123';
const email = 'admin@example.com';
const adminUser = new Utente(email,pass);
window.localStorage.setItem('adminUser',JSON.stringify(adminUser));
    


