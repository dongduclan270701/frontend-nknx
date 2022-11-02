import React from 'react';

const Browsersession = () => {
    const logoutBrowserSession = () => {
        document.getElementById('browser-session-confirm').style.display = 'block';

    }

    const exitConfirm = () => {
        document.getElementById('browser-session-confirm').style.display = 'none';
    }
    const handleChangePassword = () => {
        //alert('Enabled');
    }
    return (
        <div id='browser-sessions'>
            <div className='title-profile'>
                <h3>Browser Sessions</h3>
                <hr></hr>

            </div>
            <div className='text-sm'>If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.

            </div>
            <div style={{ width: '100%', borderBottom: '1px solid #f5f5fa', paddingBottom: '20px' }}>
                <div className='device-browser-session'>
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-500"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div>
                        <div className='name-browser'>
                            Windows - Chrome
                        </div>
                        <div className='ip-device'>
                            42.115.38.32, This device
                        </div>
                    </div>
                </div>
                <div className='device-browser-session'>
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-500"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div>
                        <div className='name-browser'>
                            Windows - Chrome
                        </div>
                        <div className='ip-device'>
                            42.115.38.32, Last active 45 minutes ago
                        </div>
                    </div>
                </div>
            </div>
            <div className='notify-button'>
            {/* onClick={() => logoutBrowserSession()} */}
                <button style={{cursor: 'not-allowed'}} id='two-facter-button'>
                    Log Out Other Browser Sessions
                </button>
            </div>
            <div id='browser-session-confirm' className='confirm'>
                <div className='main-content'>
                    <div className='confirm-title'>
                        <div className='title'>
                            <span>Browser Sessions</span>
                            <h3>Log Out Other Browser Sessions</h3>
                        </div>
                        <div className='exit-confirm' onClick={() => exitConfirm()}>
                            <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" class="modal-card__close-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.167 6.37a.95.95 0 010 1.371l-18 17.452a1.022 1.022 0 01-1.414 0 .949.949 0 010-1.371l18-17.452a1.022 1.022 0 011.414 0z" fill="#4A4A68"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.753 6.37a1.022 1.022 0 011.414 0l18 17.452c.39.378.39.992 0 1.37a1.022 1.022 0 01-1.414 0l-18-17.45a.949.949 0 010-1.372z" fill="#4A4A68"></path></svg>
                        </div>
                    </div>
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
    );
}

export default Browsersession;
