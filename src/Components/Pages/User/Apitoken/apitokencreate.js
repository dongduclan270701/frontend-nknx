import React, { useState } from 'react';

const Apitokencreate = () => {
    const [isCheck, setIsCheck] = useState(
        [
            {
                checked: 0,
                name: 'create'
            },
            {
                checked: 1,
                name: 'read'
            },
            {
                checked: 0,
                name: 'update'
            },
            {
                checked: 0,
                name: 'delete'
            },

        ]
    );
   
    return (
        <div className='new-vpskey'>
            <h3>Create API Token</h3>
            <hr></hr>
            <div className='text-sm'>API tokens allow third-party services to authenticate with our application on your behalf.
            </div>
            <form style={{ borderBottom: '1px solid #f5f5fa' }}>
                <div className='wrapper-control'>
                    <label className='title-newvpskey'>Name</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='text' className='input-blank' id='email' placeholder='My API token #1' onChange={(ev) => { }}></input>

                    <br></br>

                </div>
                <div className='permission'>
                    {
                        isCheck.map((item) => {
                            return (
                                <div className='permis-item'>
                                    {item.checked === 1 ?
                                        <input type={'checkbox'} name={item.name} className='checkbox-input' id='check-remember' defaultChecked={isCheck} onChange={() => !setIsCheck}></input>
                                        :
                                        <input type={'checkbox'} className='checkbox-input' id='check-remember'></input>
                                    }
                                    <label htmlFor="check-remember" className='checkbox-label checkbox-label-theme'></label>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                    {/* <div className='permis-item'>
                        <input type={'checkbox'} className='checkbox-input' id='check-remember' ></input>
                        <label htmlFor="check-remember" className='checkbox-label checkbox-label-theme'></label>
                        <span>create</span>
                    </div>
                    <div className='permis-item'>
                        <input type={'checkbox'} className='checkbox-input' id='check-remember' selected></input>
                        <label htmlFor="check-remember" className='checkbox-label checkbox-label-theme'></label>
                        <span>read</span>
                    </div>
                    <div className='permis-item'>
                        <input type={'checkbox'} className='checkbox-input' id='check-remember'></input>
                        <label htmlFor="check-remember" className='checkbox-label checkbox-label-theme'></label>
                        <span>update</span>
                    </div>
                    <div className='permis-item'>
                        <input type={'checkbox'} className='checkbox-input' id='check-remember'></input>
                        <label htmlFor="check-remember" className='checkbox-label checkbox-label-theme'></label>
                        <span>delete</span>
                    </div> */}
                </div>



            </form>
            <div className='vps-key'>
                <button>Create</button>
            </div>
        </div>
    );
}

export default Apitokencreate;
