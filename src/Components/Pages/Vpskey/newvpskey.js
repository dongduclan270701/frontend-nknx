import React, { useState } from 'react';

const Newspvkey = () => {

    const [itemId, setItemId] = useState([
        {
            id: 1,
            name: 'DigitalOcean'
        },
        {
            id: 2,
            name: 'AWS'
        },
        {
            id: 3,
            name: 'Vultr'
        },
        {
            id: 4,
            name: 'Hetzner'
        }
    ]);

    const showProfileItem = () => {
        if (document.getElementById('vps-profile-list').style.display === 'none') {
            document.getElementById('vps-profile-list').style.display = 'block';
            document.getElementById('vps-select').style.border = '1px solid #5769df';
        }
        else {
            document.getElementById('vps-profile-list').style.display = 'none';
            document.getElementById('vps-select').style.border = '1px solid #ebedf1';
        }
    }
    const getProfileItem = (v) => {

        document.getElementById('vps-profile-list').style.display = 'none';
        document.getElementById('vps-select').style.border = '1px solid #ebedf1';
        document.getElementById('select-value').innerHTML = v;

    }
    return (
        <div className='new-vpskey'>
            <h3>New VPS Key</h3>
            <hr></hr>
            <div className='text-sm'>VPS Keys allows NKNx deploy your nodes automatically via FastDeploy.
            </div>
            <form style={{borderBottom: '1px solid #f5f5fa'}}>
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>Profile List</label>
                    <br></br>
                    <div className='vps-select' id='vps-select' onClick={() => showProfileItem()}>
                        <div className='select-value' id='select-value'>
                            {itemId[0].name}
                        </div>
                        <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="select__toggle"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.316 4.94c.17-.17.448-.17.618 0L7 9.007l4.066-4.065a.438.438 0 01.618.618L7.31 9.934a.438.438 0 01-.618 0L2.316 5.56a.438.438 0 010-.618z" fill="#4A4A68"></path></svg>
                    </div>
                    <div className='vps-profile-list' id='vps-profile-list'>
                        {itemId.map((item) => {
                            return (
                                <div className='profile-item' value={item.name} id={item.id} onClick={(e) => {
                                    const value = document.getElementById(item.id).getAttribute('value');
                                    getProfileItem(value);
                                }}>
                                    {item.name}
                                </div>
                            )
                        })}

                    </div>
                    <br></br>

                </div><br></br>
                <div className='wrapper-control'>
                    <label className='title-newvpskey'>Profile Name</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='text' className='input-blank' id='email' placeholder='Personal' onChange={(ev) => { }}></input>

                    <br></br>

                </div>
                <div className='wrapper-control'>
                    <label className='title-newvpskey'>API Token</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='text' className='input-blank' id='email' placeholder='Enter your AWS API Token' onChange={(ev) => { }}></input>

                    <br></br>

                </div>
                <div className='wrapper-control'>
                    <label className='title-newvpskey'>API Secret</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='text' className='input-blank' id='email' placeholder='Enter your AWS API secret key' onChange={(ev) => { }}></input>

                    <br></br>

                </div>


            </form>
            <div className='vps-key'>
                <button>Add</button>
            </div>
        </div>
    );
}

export default Newspvkey;
