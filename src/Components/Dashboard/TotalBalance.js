import React, { useState,useEffect } from 'react';
import "Assets/scss/TotalBalance.scss"
import ChartTotal from './ChartTotal';
import DailyMined from './DailyMined';

const TotalBalance = (props) => {
    const {totalBalance, transactions10times,getBalanceHistory,getAddress} = props
    const [ balance , setBalance] = useState(0)
    var nf = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 7});
    useEffect(() => {
        setBalance(totalBalance)
    }, [totalBalance]);
    return (
        <div className="card col_4 col_start_auto col_end_auto row_1 card_padding_none card_overflow">
            <div className='sparkline-stats'>
                <div className='sparkline-stats__header'>
                    <div className='sparkline-stats__title'>Total Balance</div>
                    <div className='sparkline-stats__change'>
                        <span className=' sparkline-stats__icon'>
                            0%
                        </span>
                    </div>
                </div>
                <div className='sparkline-stats__value'>
                    {nf.format(totalBalance*0.00000001)}&ensp;
                    <span className='sparkline-stats__symbol'>
                        NKN
                    </span>
                </div>
                <div className='sparkline-stats__chart'>
                    <div data-v-526dea4c className='price-chart'>
                        <ChartTotal transactions10times={transactions10times} totalBalance={totalBalance} balance={balance} getAddress={getAddress} getBalanceHistory={getBalanceHistory}/>
                    </div>
                </div>
            </div>
            {/* <div className='general-stats__divider_2'></div> */}
        </div>
    );
}

export default TotalBalance;
