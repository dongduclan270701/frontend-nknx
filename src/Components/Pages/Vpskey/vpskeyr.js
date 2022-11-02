import React from 'react';

const Vpskeyr = () => {
    return (
        <div className='sshkey'>
        <div className='ssh-title'>
            <h3>VPS Keys
                <span>0 in total</span>
                
            </h3>
            <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="pagination__arrow pagination__arrow_prev pagination__arrow_disabled pagination__arrow_type_stroke"><path d="M0 4h12m0 0L9.429 1M12 4L9.429 7" stroke="#4A4A68"></path></svg>
                <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="pagination__arrow pagination__arrow_after pagination__arrow_disabled pagination__arrow_type_stroke"><path d="M0 4h12m0 0L9.429 1M12 4L9.429 7" stroke="#4A4A68"></path></svg>
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

export default Vpskeyr;
