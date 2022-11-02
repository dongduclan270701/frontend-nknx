import React from 'react';

const Twofacterauthen = () => {
    const submitEnable = () => {
        document.getElementById('auth-confirm').style.display = 'block';
    }
    const exitConfirm = () => {
        document.getElementById('auth-confirm').style.display = 'none';
    }
    const handleChangePassword = () => {
        //alert('Enabled');
    }
    return (<>
        <div id='two-facter-authen'>
            <div className='title-profile'>
                <h3>Two Factor Authentication</h3>
                <hr></hr>

            </div>
            <div className='text-sm'>You have not enabled two factor authentication.
            </div>
            <div className='text-sm'>When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.
            </div>
            <div className='notify-button'>
            {/* onClick={() => submitEnable()} */}
                <button style={{cursor: 'not-allowed'}} id='two-facter-button'>
                    Enable
                </button>
            </div>
            <div id='auth-confirm' className='confirm'>
                <div className='main-content'>
                    <div className='confirm-title'>
                        <div className='title'>
                            <span>Auth</span>
                            <h3>Password confirmation</h3>
                        </div>
                        <div className='exit-confirm' onClick={() => exitConfirm()}>
                            <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" class="modal-card__close-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.167 6.37a.95.95 0 010 1.371l-18 17.452a1.022 1.022 0 01-1.414 0 .949.949 0 010-1.371l18-17.452a1.022 1.022 0 011.414 0z" fill="#4A4A68"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.753 6.37a1.022 1.022 0 011.414 0l18 17.452c.39.378.39.992 0 1.37a1.022 1.022 0 01-1.414 0l-18-17.45a.949.949 0 010-1.372z" fill="#4A4A68"></path></svg>
                        </div>
                    </div>
                    <div class="text-sm">This is a secure area of the application. Please confirm your password before continuing.</div>
                    <form style={{ borderBottom: '1px solid #f5f5fa' }}>
                        <div className='wrapper-control'>
                            <label className='title-deploy-create'>Password</label>
                            <br></br>
                            <input style={{ width: '90%' }} type='text' className='input-blank' id='email' placeholder='Enter your data' onChange={(ev) => handleChangePassword(ev)}></input>
                            <br></br>
                        </div>
                    </form>
                    
                    <div className='footer-confirm' >
                        <button className='footer-confirm-cancel' onClick={() => exitConfirm()}>
                            Cancel
                        </button>
                        <button className='footer-confirm-confirm'>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
    );
}

export default Twofacterauthen;
