import React from 'react';
import "Assets/scss/CurrentNetworkNodes.scss"

const CurrentNetworkNodes = (props) => {
    const {totalNode, totalCountry, totalBlock, totalTransaction, totalAddress} = props
    var nf = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 20 });
    return (
        <div className="card col_4 col_start_auto col_end_auto row_1 card_padding_none card_overflow">
            <div className='general-stats_1'>
                <div className='general-stats__item_1'>
                    <div className='general-stats__title_1'>{nf.format(totalNode)}</div>
                    <div className='general-stats__subtitle_1'>Current Network Nodes</div>
                </div>
                <div className='general-stats__divider_1'></div>
                <div className='general-stats__item_1'>
                    <div className='general-stats__data'>
                        <div className='general-stats__data-item'>
                            <span className="fe general-stats__data-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span>
                            <div className='general-stats__data-description'>
                                <div className='general-stats__data-title_1'>{totalCountry}</div>
                                <div className='general-stats__data-subtitle'>Countries</div>
                            </div>
                        </div>
                        <div className='general-stats__data-item'>
                            <span className="fe general-stats__data-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></span>
                            <div className='general-stats__data-description'>
                                <div className='general-stats__data-title_1'>{totalAddress}</div>
                                <div className='general-stats__data-subtitle'>Addresses</div>
                            </div>
                        </div>
                        <div className='general-stats__data-item'>
                            <span className="fe general-stats__data-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></span>
                            <div className='general-stats__data-description'>
                                <div className='general-stats__data-title_1'>{totalBlock}</div>
                                <div className='general-stats__data-subtitle'>Blocks</div>
                            </div>
                        </div>
                        <div className='general-stats__data-item'>
                            <span className="fe general-stats__data-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shuffle"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg></span>
                            <div className='general-stats__data-description'>
                                <div className='general-stats__data-title_1'>{totalTransaction}</div>
                                <div className='general-stats__data-subtitle'>Transactions</div>
                            </div>
                        </div>

                    </div>
                </div>
                <a href="https://nknx.org/nodes" className="button general-stats__btn button_theme_success button_size_large button_radius_medium button_width_default" type="router"> View My Nodes</a>
            </div>
        </div>
    );
}

export default CurrentNetworkNodes;
