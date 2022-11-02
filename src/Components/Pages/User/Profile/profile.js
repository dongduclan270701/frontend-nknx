import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import NavAccount from 'Components/Pages/NavAccountSetting/navAccount';
import './profile.css';
import Profiledata from './profiledata';
import Twofacterauthen from './twofacterauthen';
import Updatepass from './updatepass';
import Browsersession from './browsersession';
import Deleteaccount from './deleteaccount';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Profile = (props) => {
    const { profile } = props;
    const params = useParams();
    //console.log(params.id);
    //let {id} = useParams();
    const {state} = useLocation();
    //let navigate = useNavigate();
    
    if(state == null){
        //navigate(`/login`);
        return (<Link to='/login' id='account-notification' style={{color: 'blue'}} className='nav-account-item'>You are not login, please login here</Link>)
        
    }
    // nếu state == null thì cho login
    let {id, username, email, password} = state;

    id = id;
    //nếu id ở state khác với id ở params cho đăng nhập
       
    username = username;
    email = email;
    password = password;
    return (
        <>
            <div id='page-profile'>
                <NavAccount nav={profile} id={params.id}/>

                <div className='main-page-profile'>
                    <div className='profile-left'>
                        <Profiledata  username={username} email={email}/>
                        <Twofacterauthen />
                    </div>
                    <div className='profile-middle'>
                        <Updatepass id={id} password={password} />
                    </div>
                    <div className='profile-right'>
                        <Browsersession />
                        <Deleteaccount/>
                    </div>
                    {/* <Newspvkey/>
                     <Vpskeyr/> */}

                </div>

            </div>
        </>
    );
}

export default Profile;
