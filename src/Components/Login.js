import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";
import './Login.css';

export function Login() {

    const cookieUsr = new Cookies();
    const adminUsr = JSON.parse(window.localStorage.getItem('adminUser'));
    const passDB = adminUsr['password'];
    const emailDB = adminUsr['email'];
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        console.log(email + '' +password);
        evt.preventDefault();
        
        if(email === '' || email === undefined){
            alert('Email non valida');
            evt.preventDefault();
        }else if(password === '' || password === undefined){
            alert('Password non valida o mancante');
            evt.preventDefault();
        }else{ 
            
            //va tutto bene? dobbiamo verificare che la mail e la pass(criptata) inserita dall utente combacino con quelle salvate nel localStorage(DB)
            if(email === emailDB && password === passDB){
                console.log(emailDB + ' ' + passDB  + 'Benvenuto');
                cookieUsr.set('loggedUser',password);
                alert('benvenuto');
                history.push('/home');
            }else{
                console.log(emailDB + ' ' + passDB );
                alert('Wrong Email or Password');
                evt.preventDefault();
            }
        }
    }

    return (
        <>
            <div className="login-home">
                <div className="welcome">
                    <h1>
                        MyWatchList
                    </h1>
                    <p>
                        Track your watch list in a second
                    </p>
                    <p>
                        Log in with your account
                    </p>
                </div>
                <div className="centreForm">
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="col-12 inputs">
                            <label>
                                Email
                            </label>
                                <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Insert your email"
                                required
                                />
                        </div>
                        <div className="col-12 inputs">
                            <label>
                                Password
                            </label>
                                <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Insert your password"
                                required
                                />
                        </div>
                    <input className="btn" type="submit" value="Login" />
                    </form>
                </div>
                <div className="welcome">
                    <p>
                        Don't have an account? Register <a href="https://starshiftvoyage.000webhostapp.com/">here</a>
                    </p>
                </div>
            </div>    
        </>
    );
}


export default Login;
