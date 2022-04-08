import React from "react";
import { GoKey } from "react-icons/go";
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (

<div className="container">
  
  <div className="logo">
    <img alt="Mulher e logo 'conectaedu'" src={require('../../images/logodesign.png')} />
  </div>
  
  <div className="containerinput">
    <input className="input" placeholder="Login"/>
    <input className="input" placeholder="Senha"/>
  </div>
  
  <button className="enviar">
    <Link to="feed" className="enviar2">
    <GoKey/> Enviar 
    </Link>
  </button>
  
  <div className="links">
    <Link to="linkdireto"> Crie sua conta. </Link>
    <Link to="linkdireto">Esqueceu a senha? Clique aqui. </Link>
  </div>
  
</div>

    );

};

export default Login;