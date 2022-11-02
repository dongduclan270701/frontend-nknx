import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { useQuery, gql, useMutation } from '@apollo/client';

const Updatepass = (props) => {

    const [id, setId] = useState(props.id);
    //console.log(id);
    const [user, setUser] = useState(
        {
            password: props.password
        }
    );
    const [errorMessageCurrentPassword, setErrorMessageCurrentPassword] = useState('');
    const [errorMessageNewPassword, setErrorMessageNewPassword] = useState(' ');
    const [errorMessageConfirm, setErrorMessageConfirm] = useState(' ');
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isUpdate, setIsUpdated] = useState(false);
    const updatePassQuery = gql`
    mutation{
        updateUsersPermissionsUser(id: 1
        data:{
          username:"Duoc1"
        }){
          data{
            id
            attributes{
              email
              username
            }
          }
        }
      }
    `
    const [mutateFunction, { data, loading, error }] = useMutation(updatePassQuery);
    useEffect(() => {
        mutateFunction();


    }, [isUpdate]);
    // console.log(isUpdate);
    // console.log(data);
    // console.log(error);
    // if (data) {
    //     // setIsLogged(true);

    //     // setJwt(data.login.jwt);
    //     // setEmail(email);
    //     // setPassword(password);
    //     // setId(data.login.user.id);
    //     // setUsername(data.login.user.username);
    // }

    const ValiDateCurrentPassword = (password) => {
        setCurrentPass(password);
        if (!validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1, minNumbers: 1, minUppercase: 1, minSymbols: 1
        })) {
            setErrorMessageCurrentPassword('Password invalid');
        }
        else {
            setErrorMessageCurrentPassword('');
        }
    }
    const ValiDateNewPassword = (password) => {
        setNewPass(password);
        if (!validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1, minNumbers: 1, minUppercase: 1, minSymbols: 1
        })) {
            setErrorMessageNewPassword('Password invalid');
        }
        else {
            setErrorMessageNewPassword('');
        }
    }
    const ValiDateConfirmPassword = (ev) => {

        if (ev !== newPass) {
            setErrorMessageConfirm("Password not equal");
        }
        else {
            setErrorMessageConfirm('');
        }
    }

    const submitNewPass = () => {
        //alert('Submited');
        if (currentPass === '' || errorMessageCurrentPassword !== '') {
            alert('Current password invalid');
            return 0;
        }
        if (newPass === '' || errorMessageCurrentPassword !== '') {
            alert('New password invalid');
            return 0;
        }
        if (errorMessageConfirm !== errorMessageNewPassword) {
            alert('Password confirm not correct');
            return 0;
        }
        if (currentPass !== user.password) {
            alert('Current password not correct');
            return 0;
        }

        //
        alert("Updated");
        setIsUpdated = true;
    }
    return (
        <div id='update-pass'>
            <div className='title-profile'>
                <h3>Update Password</h3>
                <hr></hr>

            </div>
            <form style={{ borderBottom: '1px solid #f5f5fa' }}>
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>Current Password</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='password' className='input-blank' id='email' placeholder='Enter current password' onChange={(ev) => { ValiDateCurrentPassword(ev.target.value) }}></input>
                    <br></br>
                </div><br></br>
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>New Password</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='password' className='input-blank' id='password' placeholder='Enter new password' onChange={(ev) => { ValiDateNewPassword(ev.target.value) }}></input>
                    <br></br>
                </div><br></br>
                {errorMessageNewPassword === '' ? '' :
                    <span style={{ fontWeight: 'bold', color: 'red' }}>{errorMessageNewPassword}</span>
                }
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>Confirm Password</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='password' className='input-blank' id='confirm-password' placeholder='Enter password confirmation' onChange={(ev) => { ValiDateConfirmPassword(ev.target.value) }}></input>
                    <br></br>
                    {errorMessageConfirm === '' ? '' :
                        <span style={{ fontWeight: 'bold', color: 'red' }}>{errorMessageConfirm}</span>
                    }
                </div>
            </form>
            <div className='notify-button'>
                <button onClick={() => submitNewPass()} id='notify-button'>
                    Update
                </button>
            </div>
        </div>
    );
}

export default Updatepass;
