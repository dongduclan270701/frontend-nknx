import React from 'react';
import './vpskey.css'
import NavAccount from '../NavAccountSetting/navAccount';
import Newspvkey from './newvpskey';
import Vpskeyr from './vpskeyr';
const Vpskey = (props) => {
    const {vps} = props;
    return (
       <>
            <div id='page-vpskeys'>
                <NavAccount nav={vps} />

                <div className='main-page-sshkey'>
                   
                    <Newspvkey/>
                    <Vpskeyr/>
                  
                </div>

            </div>
       </>
    );
}

export default Vpskey;
