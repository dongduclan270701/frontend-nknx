import React from 'react';

const Deployfooter = () => {
    return (
        <div className='deploy-footer'>
        <div className='deploy-recent-ev'>


            <div className='deploy-config-title'>
                <h3>Recent events
                    <span>0 in total</span>
                </h3>
                <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="pagination__arrow pagination__arrow_prev pagination__arrow_disabled pagination__arrow_type_stroke"><path d="M0 4h12m0 0L9.429 1M12 4L9.429 7" stroke="#4A4A68"></path></svg>
                <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="pagination__arrow pagination__arrow_after pagination__arrow_disabled pagination__arrow_type_stroke"><path d="M0 4h12m0 0L9.429 1M12 4L9.429 7" stroke="#4A4A68"></path></svg>
            </div>
            <div className='over-flow'>
                <table className='table'>
                    <tr>
                        <th className='table-head' style={{width: '10%'}}>Deployment name	</th>
                        <th className='table-head' style={{width: '10%'}}>Server</th>
                        <th className='table-head' style={{width: '8%'}}>Provider</th>
                        <th className='table-head' style={{width: '50%', textAlign:'left', paddingLeft:'20px'}}>Event</th>
                        <th className='table-head' style={{width: '10%',}}>When?</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    );
}

export default Deployfooter;
