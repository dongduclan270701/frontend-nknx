import React from 'react';

const Deleteaccount = () => {
   

    const exitConfirm = () => {
        document.getElementById('delete-account-confirm').style.display = 'none';
    }
    const handleChangePassword = () => {
        //alert('Enabled');
    }
    const deleteMyAccount = () => {
        document.getElementById('delete-account-confirm').style.display = 'block';
    }
    return (
        <div id='danger-area'>
            <div className='title-profile'>
                <h3>Danger Area</h3>
                <hr></hr>
            </div>
            <div className='text-sm'>For us it is very important to keep your private data safe! If you don’t want to use NKNx anymore you can delete your account entirely. This will remove all your account data, including nodes, wallets, regular snapshots, everything!
            </div>
            <div className='notify-button'>
            {/* onClick={() => deleteMyAccount()} */}
                <button id='two-facter-button' style={{ border: '#d63649', backgroundColor: '#d63649', cursor: 'not-allowed' }}>
                    Delete My Account
                </button>
            </div>
            <div id='delete-account-confirm' className='confirm'>
                <div className='main-content'>
                    <div className='confirm-title'>
                        <div className='title'>
                            <span>Account Settings</span>
                            <h3>Delete Account</h3>
                        </div>
                        <div className='exit-confirm' onClick={() => exitConfirm()}>
                            <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" class="modal-card__close-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.167 6.37a.95.95 0 010 1.371l-18 17.452a1.022 1.022 0 01-1.414 0 .949.949 0 010-1.371l18-17.452a1.022 1.022 0 011.414 0z" fill="#4A4A68"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.753 6.37a1.022 1.022 0 011.414 0l18 17.452c.39.378.39.992 0 1.37a1.022 1.022 0 01-1.414 0l-18-17.45a.949.949 0 010-1.372z" fill="#4A4A68"></path></svg>
                        </div>
                    </div>
                    <div class="text-sm">Yes, I want to delete all of my account data - including nodes, wallets, regular snapshots and all the other stuff from NKNx.</div>
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

export default Deleteaccount;
