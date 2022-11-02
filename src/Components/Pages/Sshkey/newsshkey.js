import React from 'react';

const Newsshkey = () => {
    return (
        <div className='new-sshkey'>
            <h3>New SSH Key</h3>
            <hr></hr>
            <div className='text-sm'>An SSH key is an access credential in the SSH protocol. It gets automatically added to each of your fastDeploy nodes you deploy through NKNx. This gives you a save access to your node's terminal in case you need it.
            </div>
            <form >
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>Name</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='text' className='input-blank' id='email' placeholder='SSH title' onChange={(ev) => { }}></input>
                    <br></br>

                </div><br></br>
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>Key</label>
                    <div>
                        <textarea type='text' row='3' placeholder="Begins with 'ssh-rsa', 'ecdsa-sha2-nistp256', 'ecdsa-sha2-nistp384', 'ecdsa-sha2-nistp521', 'ssh-ed25519', 'sk-ecdsa-sha2-nistp256@openssh.com', or 'sk-ssh-ed25519@openssh.com'"></textarea>
                    </div>

                    <br></br>

                </div>


            </form>
            <div className='deploy-create-footer'>
                <button>Add</button>
            </div>
        </div>
    );
}

export default Newsshkey;
