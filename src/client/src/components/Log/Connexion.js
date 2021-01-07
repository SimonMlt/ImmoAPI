import React, {useState} from 'react';
import axios from "axios";

const Connexion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        axios({
            method: "post",
            url: `${process.env.REACT_APP_HOST_API}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.data.errors){
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    window.location = '/';
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <form action="" onSubmit={handlelogin} id="inscription-form">
            <label htmlFor="email">Email</label><br/>
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
            <div className="email error"></div><br/>
            <label htmlFor="password">Mot de passe</label><br/>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <div className="password error"></div><br/>
            <input type="submit" value="Se connecter"/>
        </form>
    );
};

export default Connexion;
