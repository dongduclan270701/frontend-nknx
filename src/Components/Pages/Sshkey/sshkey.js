import React from 'react';
import './sshkeys.css';
import NavAccount from '../NavAccountSetting/navAccount';
import Newsshkey from './newsshkey';
import Sshkeyr from './sshkeyr';
const Sshkey = (props) => {
    const {ssh} = props;
    return (
        <>
            <div id='page-sshkeys'>
                <NavAccount nav={ssh} />

                <div className='main-page-sshkey'>
                   
                    <Newsshkey/>
                    <Sshkeyr/>
                  
                </div>

            </div>
        </>
    );
}


export default Sshkey;
