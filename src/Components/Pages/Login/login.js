import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import swal from 'sweetalert';

import './login.css';
import { useQuery, gql, useMutation } from '@apollo/client';

const Login = () => {
    let navigate = useNavigate();
 
    // const GET_CURRENT_USER = gql`
    // query{
    //     me{
    //       id
    //       username
    //       email
    //     }
    //   }`
    // const data1 = useQuery(GET_CURRENT_USER);
    // console.log(data1);
    // if(data1){
    //     navigate(`/user/profile`);
    // }

    
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const [id, setId] = useState(-1);
    const [username, setUsername] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');
    const [clickLogin, setClickLogin] = useState(false);
    const queryLogin = gql`
        mutation{
            login(
            input: {
                identifier: "${email}",
                password: "${password}",
                provider: "local"
            }
            ) {
            jwt
            user {
                id
                username
                email
            }
            }
        } 
        `;
    const [loginFunction, { data, loading, error }] = useMutation(queryLogin);  

    // const ValiDateEmail = (email) => {
    //     setEmail(email);
    //     if (!validator.isEmail(email)) {
    //         setErrorMessageEmail('Email Invalid');
    //     }
    //     else {
    //         setErrorMessageEmail('');
    //     }
    // }
    const handleChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    // const ValiDatePassword = (password) => {
    //     setPassword(password);
    //     if (!validator.isStrongPassword(password, {
    //         minLength: 8, minLowercase: 1, minNumbers: 1, minUppercase: 1
    //     })) {
    //         setErrorMessagePassword('Password invalid');

    //     }
    //     else {
    //         setErrorMessagePassword('');
    //     }
    // }
    const handleChangePass = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    const submitDataLogin = (e) => {

        e.preventDefault();
        setClickLogin(!clickLogin);
        loginFunction()
        .then(result => {
                window.localStorage.setItem('token', result.data.login.jwt)
                console.log(localStorage.getItem('token'));
                window.location.reload();
        })
        .catch(error => {swal("Error!", "Wrong email or password", "error");}) 
    }
   
    return (
        <div id='page-login'>
            <div className='page-main'>
                <h3 className='card-title'>Sign In</h3>
                <form >
                    <div className='wrapper-control'>
                        <label className='title-login'>Email</label>
                        <br></br>
                        <input type='text' className='input-blank' id='email' placeholder='user@gmail.com' onChange={(ev) => handleChangeEmail(ev)}></input>
                        <br></br>
                        {errorMessageEmail === '' ? '' :
                            <span style={{ fontWeight: 'bold', color: 'red' }}>{errorMessageEmail}</span>
                        }
                    </div><br></br>
                    <div className='wrapper-control'>
                        <label className='title-login'>Password</label>
                        <br></br>
                        <input type='password' className='input-blank' id='password' placeholder='Enter your data' onChange={(ev) => handleChangePass(ev)}></input>
                        <br></br>
                        {errorMessagePassword === '' ? '' :
                            <span style={{ fontWeight: 'bold', color: 'red' }}>{errorMessagePassword}</span>
                        }
                    </div>
                    <Link to='/login' id='forgot-pass'>Forgot your password?</Link>
                    <div className='checkbox checkbox-control'>
                        <input type={'checkbox'} className='checkbox-input' id='check-remember'></input>
                        <label htmlFor="check-remember" className='checkbox-label checkbox-label-theme'></label>
                        <span>Remember me</span>
                        <div className='modal-content-footer'>
                            <button className='button-theme-primary' onClick={(e) => submitDataLogin(e)}>Login</button>
                            <br></br>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;