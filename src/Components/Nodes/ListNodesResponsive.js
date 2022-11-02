import React from 'react';

const ListNodesResponsive = (props) => {
    const {item} = props
    return (
        <div className="card node-manager__mobile-card col_12 col_start_auto col_end_auto row_1 card_padding_normal">
                <div className="node-card-mobile">
                    <div className="node-card-mobile__header">
                        <div className="node-card-mobile__label">
                            <span>
                                Block #{item.attributes.height}</span>
                        </div>
                        <div className="v-popover" popover="[object Object]">
                            <div className="trigger" style={{ display: 'inline-block' }}>
                                <div className="popover-more tooltip-target">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="popover-more-icon">
                                        <path d="M11.925 7.05a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm0 6.376a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm0 6.374a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" fill="#4A4A68" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="node-card-mobile__body">
                        <div className="node-card-mobile__addr">
                            {item.attributes.ip}</div>
                        <div className="node-card-mobile__copy">

                            Copy
                        </div>
                    </div>
                    <div className="node-card-mobile__footer">
                        <span className="node-status node-status_state_mining">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            <span className="node-status__text">
                                {item.attributes.syncState} </span>
                        </span>
                        <div className="node-card-mobile__stats">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                            <span>
                            {item.attributes.version}</span>
                        </div>
                        <div className="node-card-mobile__stats">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-gift"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                            <span>
                                0</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ListNodesResponsive;
