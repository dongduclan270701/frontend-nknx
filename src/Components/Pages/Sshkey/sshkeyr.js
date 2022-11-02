import React from 'react';

const Sshkeyr = () => {
    return (
        <div className='sshkey'>
        <div className='ssh-title'>
            <h3>SSH Keys
                <span>0 in total</span>
            </h3>
        </div>
        <div className='over-flow'>
            <table className='table'>
                <tr>
                    <th className='table-head' style={{width: '0.5%'}}>Name</th>
                    <th className='table-head' style={{width: '4%', textAlign: 'left' }}>Fingerprint</th>
                    <th className='table-head' style={{width: '1%'}}>Added</th>
                    <th className='table-head' style={{width: '1%' }}>Actions</th>
                </tr>
            </table>
        </div>
    </div>
    );
}

export default Sshkeyr;
