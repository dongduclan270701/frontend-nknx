import React from 'react';
import './apitoken.css'
import NavAccount from 'Components/Pages/NavAccountSetting/navAccount';
import Apitokencreate from './apitokencreate';
const Apitoken = (props) => {
    const { token } = props;
    return (
        <>
            <div id='page-apitoken'>
                <NavAccount nav={token} />

                <Apitokencreate/>

            </div>
        </>
    );
}

export default Apitoken;
