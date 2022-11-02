import React from 'react';
import "Assets/scss/MarketStatistics.scss"
import ChartMarket from './ChartMarket';

const MarketStatistics = (props) => {
    const { totalUSD, marketcap, change24h, volume, eth } = props
    var nf = new Intl.NumberFormat();
    var nf_2 = new Intl.NumberFormat('ja-JP',  { style: 'currency', currency: 'USD'})
    return (
        <div className="card col_4 col_start_auto col_end_auto row_1 card_padding_normal card_overflow">
            <div className="market-stats">
                <div className="market-stats__data">
                    <div className="market-stats__heading">
                        <h3 className="market-stats__title">
                            NKN Market Statistics
                        </h3>
                    </div>
                    <div className="market-stats__numbers">
                        <div className="market-stats__numbers-item">
                            <div className="market-stats__numbers-name">
                                Price
                            </div>
                            <div className="market-stats__numbers-value">

                                ${totalUSD}
                            </div>
                        </div>
                        <div className="market-stats__numbers-item">
                            <div className="market-stats__numbers-name">
                                Change 24 Hours
                            </div>
                            {change24h >=0 ? 
                            <div style={{color: "#5ce2b2"}} className="market-stats__numbers-value market-stats__numbers-value_positive">
                                <span className="fe market-stats__numbers-icon fe-trending-up" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                </span>
                                {change24h}%
                            </div>
                            :
                            <div style={{color: "#d63649"}} className="market-stats__numbers-value market-stats__numbers-value_positive">
                                <span className="fe market-stats__numbers-icon fe-trending-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-down"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                                </span>
                                {change24h}%
                            </div>
                            }
                        </div>
                        <div className="market-stats__numbers-item">
                            <div className="market-stats__numbers-name">
                                Marketcap
                            </div>
                            <div className="market-stats__numbers-value">

                                {nf_2.format(marketcap)}
                            </div>
                        </div>
                        <div className="market-stats__numbers-item">
                            <div className="market-stats__numbers-name">
                                Daily Volume
                            </div>
                            <div className="market-stats__numbers-value">

                                {nf_2.format(volume)}
                            </div>
                        </div>
                        <div className="market-stats__numbers-item">
                            <div className="market-stats__numbers-name">
                                NKN/USD
                            </div>
                            <div className="market-stats__numbers-value">

                                {totalUSD}
                            </div>
                        </div>
                        <div className="market-stats__numbers-item">
                            <div className="market-stats__numbers-name">
                                NKN/ETH
                            </div>
                            <div className="market-stats__numbers-value">

                                {eth}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MarketStatistics;
