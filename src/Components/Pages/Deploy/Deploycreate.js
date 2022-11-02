import React from 'react';
import { Link } from 'react-router-dom';
const Deploycreate = () => {
    return (
        <div className='deploy-create'>
            <h3>Create FD Configuration</h3>
            <hr></hr>
            <p>Feel free to read the guide on <Link to='' style={{ textDecoration: 'none' }}>Medium</Link></p>
            <form >
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>Label</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='text' className='input-blank' id='email' placeholder='Configuration label' onChange={(ev) => { }}></input>
                    <br></br>

                </div><br></br>
                <div className='wrapper-control'>
                    <label className='title-deploy-create'>Beneficiary Address</label>
                    <br></br>
                    <input style={{ width: '90%' }} type='password' className='input-blank' id='password' placeholder='Your nkn wallet address' onChange={(ev) => { }}></input>
                    <br></br>

                </div>

                <div className='checkbox checkbox-control'>
                    <label className='title-deploy-create'>Deployment Options</label>
                    <br></br>
                    <input style={{ marginLeft: '0px', marginTop: '12px' }} type={'checkbox'} className='checkbox-input' id='check-remember'></input>
                    <br></br>
                </div>
                <div className='checkbox checkbox-control' id='sync-mode'>
                    <label className='title-deploy-create'>Sync Modes</label>
                    <br></br>
                    <div className='sync-input'>
                        <input type={'radio'} className='sync-input' name='sync-mode'></input>
                        <span className='sync-mode'>Use Fast Sync (Native fast ChainDB syncing)</span>   <br></br>
                    </div>
                    <div className='sync-input'>
                        <input type={'radio'} className='sync-input' name='sync-mode'></input>
                        <span className='sync-mode'>Use Lite Sync (Run on ≈4GB ChainDB)</span>   <br></br>
                    </div>
                    <div className='sync-input'>
                        <input type={'radio'} className='sync-input' name='sync-mode'></input>
                        <span className='sync-mode'>Use Snapshot (Foreign fast ChainDB syncing)</span>   <br></br>
                    </div>

                    <br></br>
                    <hr style={{
                        width: '100%', textAlign: 'center',
                        marginLeft: '0%', marginRight: '0%'
                    }}></hr>
                </div>
            </form>
            <div className='deploy-create-footer'>
                <button>Create</button>
            </div>
        </div>
    );
}

export default Deploycreate;
