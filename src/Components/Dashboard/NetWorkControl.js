import React, { useState, useEffect } from 'react';
import "Assets/scss/NetWorkControl.scss"
import moment from 'moment';
import { Link } from 'react-router-dom';


const NetWorkControl = (props) => {
    var myDate = new Date();
    var time = moment.utc(myDate).format("HH");
    var nf = new Intl.NumberFormat('ja-JP', { maximumSignificantDigits: 4});
    var nf_2 = new Intl.NumberFormat('ja-JP', { maximumSignificantDigits: 6});
    const { getTOTALMINED, getTODAYMINED, getNODEONLINE, totalNode } = props
    const [minedTotal, setMinedTotal] = useState(0)
    useEffect(() => {
        setMinedTotal(getTOTALMINED)
    }, [getTOTALMINED]);
    return (
        <div className="card col_4 col_12 col_start_auto col_end_auto row_1 card_padding_none card_overflow">
            <div className='general-stats general-stats_gradient'>
                <div className='general-stats__item'>
                    <div className='general-stats__title'>{nf.format((getNODEONLINE / totalNode) * 100)}%</div>
                    <div className='general-stats__subtitle'>Your Network Control</div>
                </div>
                <div className='general-stats__divider'></div>
                <div className='general-stats__item'>
                    <div className='general-stats__data'>
                        <div className='general-stats__data-item'>
                            <span className="fe general-stats__data-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>
                            <div className='general-stats__data-description'>
                                <div className='general-stats__data-title'>{getNODEONLINE}</div>
                                <div className='general-stats__data-subtitle'>Active Nodes</div>
                            </div>
                        </div>
                        <div className='general-stats__data-item'>
                            <span className="fe general-stats__data-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span>
                            <div className='general-stats__data-description'>
                                <div className='general-stats__data-title'>{getTODAYMINED}</div>
                                <div className='general-stats__data-subtitle'>Mined today</div>
                            </div>
                        </div>
                        <div className='general-stats__data-item'>
                            <span className="fe general-stats__data-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg></span>
                            <div className='general-stats__data-description'>
                                <div className='general-stats__data-title'>{minedTotal}</div>
                                <div className='general-stats__data-subtitle'>Mined Total</div>
                            </div>
                        </div>
                        <div className='general-stats__data-item'>
                            <span className="fe general-stats__data-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-crosshair"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg></span>
                            <div className='general-stats__data-description'>
                                <div className='general-stats__data-title'>{(getTODAYMINED / time*24).toFixed()}</div>
                                <div className='general-stats__data-subtitle'>Mined per Day</div>
                            </div>
                        </div>

                    </div>
                </div>
                <Link to="/nodes/1" style={{textDecoration: "none"}}>
                <a className="button general-stats__btn button_theme_success button_size_large button_radius_medium button_width_default" type="router"> View My Nodes</a>
                </Link>
            </div>
        </div>
    );
}

export default NetWorkControl;
