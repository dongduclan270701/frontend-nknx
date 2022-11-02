import React, {useState} from 'react';
import validator from 'validator';
const Profiledata = (props) => {
    const [email, setEmail] = useState();
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [user, setUser] = useState(
        {
            username: props.username,
            email: props.email,
        }
    );
    
    const submitUpdate = () => {
        setTimeout(() => {
            document.getElementById('notify-button').style.transition = '0.2s';
            document.getElementById('notify-button').style.border = '1px solid rgb(191, 255, 191)';
            document.getElementById('notify-button').style.color = '#5769df';
            document.getElementById('notify-button').style.backgroundColor = 'rgb(191, 255, 191)';
            document.getElementById('notify-button').innerHTML = 'Updated';
            document.getElementById('confirm').style.display = 'block';
        }, 0);

        setTimeout(() => {

            document.getElementById('notify-button').style.transition = '1s';
            document.getElementById('notify-button').style.border = '1px solid #5769df';
            document.getElementById('notify-button').style.color = '#5769df';
            document.getElementById('notify-button').style.backgroundColor = '#fff';
            document.getElementById('notify-button').innerHTML = 'Update';
            document.getElementById('confirm').style.display = 'none';
        }, 1500)
    }
    return (
        <div id='profile-data'>
            <div className='title-profile'>
                <h3>Your Profile Data</h3>
                <hr></hr>

            </div>
            <form style={{ borderBottom: '1px solid #f5f5fa' }}>
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>Username</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='text' className='input-blank' id='email' value={user.username} placeholder=''></input>
                    <br></br>
                </div><br></br>
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>E-mail</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='text' className='input-blank' id='email' value={user.email} placeholder=''></input>
                    <br></br>
                    {/* onChange={(ev) => ValiDateEmail(ev.target.value)} */}
                    {/* {errorMessageEmail === '' ? '' :
                            <span style={{ fontWeight: 'bold', color: 'red' }}>{errorMessageEmail}</span>
                        } */}
                </div>
            </form>
            <div className='notify-button'>
                <button style={{cursor: 'not-allowed'}} id='notify-button'>
                    Update
                </button>
            </div>
        </div>
    );
}

export default Profiledata;
