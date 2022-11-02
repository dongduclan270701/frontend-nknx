import React, { useState, useEffect } from 'react';
import FormAddWallet from './FormAddWallet';
import FormDeleteWallets from './FormDeleteAllWallets';

import "Assets/scss/WalletsTracker.scss"
import Chart from './Chart';
import ChartWeek from './ChartWeek';
import ChartMonth from './ChartMonth';
import {
    fetchWalletTotal, fetchMarketTotal, fetchAllWallet, FIND_COUNT_ALL_WALLETS, Authorization,
    BALANCE_HISTORY
} from 'Components/Actions/index'
import ListWallet from './ListWallet';
import axios from 'axios'
const endpoint = "https://nknx-amonit.herokuapp.com/graphql";
const localendpoint = "https://nknx-amonit.herokuapp.com/graphql";



const WalletsTracker = () => {
    const [chooseDay, setChooseDay] = useState("toggle_active")
    const [chooseWeek, setChooseWeek] = useState("")
    const [chooseMonth, setChooseMonth] = useState("")
    const [toggleDefault, setToggleDefault] = useState(false)
    const [toggleDelete, setToggleDelete] = useState(false)

    const [totalBalance, setTotalBalance] = useState(0)
    const [totalName, setTotalName] = useState("")
    const [totalUSD, setTotalUSD] = useState(0)
    const [getWallet, setWallet] = useState([])
    const [getWallet_2, setWallet_2] = useState([])
    const [getBalanceHistory, setBalanceHistory] = useState([])
    const [getBalanceHistoryNumber, setBalanceHistoryNumber] = useState(0)
    const [getAddress, setGetAddress] = useState([])
    var nf = new Intl.NumberFormat('ja-JP', { maximumSignificantDigits: 7 });

    useEffect(() => {
        fetchWalletTotal()
            .then(data => {
                // setTotalBalance(data.balance)
                setTotalName(data.address)
            })
        fetchMarketTotal()
            .then(data => {
                setTotalUSD(data.nkn.usd)
            })
        // axios({
        //     url: localendpoint,
        //     method: 'post',
        //     data: {
        //         query: BALANCE_HISTORY
        //     }
        // }).then(data => {
        //     setBalanceHistory(data.data.data.balanceHistories.data)
        //     var totalBalanceHistories = 0
        //     for (let index = 0; index < data.data.data.balanceHistories.data.length; index++) {
        //         totalBalanceHistories += data.data.data.balanceHistories.data[index].attributes.balance
        //     }
        //     setBalanceHistoryNumber(totalBalanceHistories)
        // })

        //fetch wallet, when done change again, !!!!WARNING!!!!
        // fetchAllWallet()
        //     .then(data => {
        //         setWallet_2(data.data)
        //         var total = 0;
        //         for (let index = 0; index < data.data.length; index++) {
        //             // const element = 0
        //             total += data.data[index].attributes.balance * 0.00000001;
        //             setTotalBalance(total)
        //         }

        //     })
        axios({
            url: endpoint,
            method: 'post',
            data: {
                query: FIND_COUNT_ALL_WALLETS
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((data) => {
            setWallet(data.data.data.wallets.data)
            var count = 0
            for (let index = 0; index < data.data.data.wallets.data.length; index++) {
                setGetAddress(getAddress => [...getAddress, data.data.data.wallets.data[index].attributes])
                setTotalBalance(count += data.data.data.wallets.data[index].attributes.balance)
            }

        })
    }, []);

    const changeToggle = () => {
        setToggleDefault(!toggleDefault)
    }
    const changeToggleDelete = () => {
        setToggleDelete(!toggleDelete)
    }
    const changeToggle_1 = (settingSingMulPageToggle) => {
        // console.log(settingSingMulPageToggle)
        setToggleDefault(!settingSingMulPageToggle)
    }

    const Active_Day = () => {
        setChooseDay("toggle_active")
        setChooseWeek("")
        setChooseMonth("")
    }
    const Active_Week = () => {
        setChooseDay("")
        setChooseWeek("toggle_active")
        setChooseMonth("")
    }
    const Active_Month = () => {
        setChooseDay("")
        setChooseWeek("")
        setChooseMonth("toggle_active")
    }
    return (

        <div className='content'>
            <div className='center'>
                {toggleDefault === true &&
                    <FormAddWallet toggleDefault={toggleDefault} changeToggle_1={changeToggle_1} />
                }
                <div className='content-wrapper content-wrapper_centered'>
                    <h1 className='page__title'>Wallets Tracker</h1>
                    <div className='grid'>
                        <div className='card balance-card col_12 col_start_auto col_end_auto row_1 card_padding_normal card_overflow'>
                            <div className="card__header">
                                <h3 className="card__title">
                                    Balance History
                                </h3>
                            </div>
                            <div className='balance-card__header'>
                                <div className='stats-item__wrapper stats-item__wrapper_full'>
                                    <div className='stats-item'>
                                        <div className='stats-item__title'>
                                            Total Balance
                                        </div>
                                        <div className='stats-item__value'>
                                            {nf.format(totalBalance * 0.00000001)}&ensp;
                                            <span className="stats-item__index">NKN</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='balance-card__actions'>
                                    <div className={'toggle ' + chooseDay} onClick={Active_Day}>
                                        Day
                                    </div>
                                    <div className={'toggle ' + chooseWeek}
                                        // onClick={Active_Week} 
                                        style={{ opacity: "0.2" }}
                                        disabled>
                                        Week
                                    </div>
                                    <div className={'toggle ' + chooseMonth}
                                        // onClick={Active_Month} 
                                        style={{ opacity: "0.2" }}
                                        disabled>
                                        Month
                                    </div>
                                </div>
                            </div>
                            <div className='wallet-balance-history__chart balance-card__chart'>
                                {chooseDay === "toggle_active" && <Chart getBalanceHistory={getBalanceHistory} getAddress={getAddress} />}
                                {chooseWeek === "toggle_active" && <ChartWeek getAddress={getAddress} />}
                                {chooseMonth === "toggle_active" && <ChartMonth />}
                            </div>
                        </div>
                        {/*----*/}
                        <div className="page__wallet-tracker-heading">
                            <h3 className="page__wallet-tracker-title">
                                My Wallets ({getAddress.length})
                            </h3>
                            <div className="page-navigation page__wallet-tracker-navigation">
                                <div className="pagination page-navigation__pagination pagination_enabled">
                                    <div className="pagination__button pagination__button_disabled">
                                        <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" className="pagination__arrow pagination__arrow_prev pagination__arrow_disabled pagination__arrow_type_stroke">
                                            <path d="M0 4h12m0 0L9.429 1M12 4L9.429 7" stroke="#4A4A68" />
                                        </svg>
                                    </div>
                                    <div className="pagination__button pagination__button_disabled">
                                        <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" className="pagination__arrow pagination__arrow_disabled pagination__arrow_type_stroke">
                                            <path d="M0 4h12m0 0L9.429 1M12 4L9.429 7" stroke="#4A4A68" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="divider divider_type_horizontal" />
                            <button className="button button_theme_danger button_size_large button_radius_medium button_width_unset" onClick={changeToggleDelete} style={{ opacity: "0.2" }} disabled >
                                <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" className="button__icon">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 3h11a.5.5 0 010 1H3a.5.5 0 110-1zm4 3a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 017 6zm3 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 0110 6z" fill="#ED7470" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 3a.5.5 0 01.5.5V13h8V3.5a.5.5 0 111 0V13a1 1 0 01-1 1h-8a1 1 0 01-1-1V3.5A.5.5 0 014 3z" fill="#ED7470" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.94 1.44A1.5 1.5 0 017 1h3a1.5 1.5 0 011.5 1.5v1a.5.5 0 01-1 0v-1A.5.5 0 0010 2H7a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1c0-.398.158-.78.44-1.06z" fill="#ED7470" />
                                </svg>
                                Delete All Wallets
                            </button>
                            <FormDeleteWallets toggleDelete={toggleDelete} changeToggleDelete={changeToggleDelete} />
                        </div>
                        {/*----*/}
                        <div className="new-wallet-card"
                            // onClick={changeToggle}
                            style={{ opacity: "0.2" }}
                            disabled >
                            <button className="new-wallet-card__btn" disabled>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="new-wallet-card__icon">
                                    <path d="M12 5v14m-7-7h14" stroke="#A2A5B9" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="new-wallet-card__title">
                                Add New Wallet
                            </div>
                        </div>
                        {/*----*/}
                        {
                            getAddress.map((item, index) => {
                                return (
                                    <ListWallet key={index} item={item} totalUSD={totalUSD} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>


    );
}

export default WalletsTracker;
