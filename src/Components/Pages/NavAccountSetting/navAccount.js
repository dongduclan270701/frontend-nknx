import React from 'react';
import './navAccount.css';
import { Link } from 'react-router-dom';
const NavAccount = (props) => {
    const { nav } = props;
    const {id} = props;
    
    return (
        <>
            <h1 id='account-setting'>Account Settings</h1>

            <div id='nav-account'>
                <div>
                {nav === 'profile' ?
                        <Link to='/user/profile/:id' id='account-general' className='nav-account-item' style={{ opacity: 1, borderBottom: '2px solid #5769df', paddingBottom: '11px' }}>General</Link>
                        :
                        <Link to='/user/profile/:id' id='account-notification' className='nav-account-item'>General</Link>}
                    
                </div>
                <div>
                {nav === 'notification' ?
                        <Link to='/user-profile-notifications' id='account-notification' className='nav-account-item' style={{ opacity: 1, borderBottom: '2px solid #5769df', paddingBottom: '11px' }}>Notification Settings</Link>
                        :
                        <Link to='/user-profile-notifications' id='account-notification' className='nav-account-item'>Notification Settings</Link>}
                </div>
                <div>
                    {nav === 'vps' ?
                        <Link to='/vps-keys' id='account-vpskey' className='nav-account-item' style={{ opacity: 1, borderBottom: '2px solid #5769df', paddingBottom: '11px' }}>VPS Keys</Link>
                        :
                        <Link to='/vps-keys' id='account-vpskey' className='nav-account-item'>VPS Keys</Link>}
                </div>
                <div>
                    {nav === 'token' ?
                        <Link to='/user/api-tokens' id='account-apitoken' className='nav-account-item' style={{ opacity: 1, borderBottom: '2px solid #5769df', paddingBottom: '11px' }}>API Tokens</Link>
                        :
                        <Link to='/user/api-tokens' id='account-apitoken' className='nav-account-item'>API Tokens</Link>}
                    
                </div>
                <div>
                    {nav === 'ssh' ?
                        <Link to='/ssh-keys' id='account-sshkey' className='nav-account-item' style={{ opacity: 1, borderBottom: '2px solid #5769df', paddingBottom: '11px' }}>SSH Keys</Link>
                        :
                        <Link to='/ssh-keys' id='account-sshkey' className='nav-account-item'>SSH Keys</Link>}

                </div>

            </div>
        </>
    );
}

export default NavAccount;
