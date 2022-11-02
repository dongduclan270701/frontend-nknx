import React, { useEffect, useState } from 'react';
import "Assets/scss/homepage.scss"
import NetWorkControl from './NetWorkControl';
import CurrentNetworkNodes from './CurrentNetworkNodes';
import NewsLate from './NewsLate';
import DailyMined from './DailyMined';
import TotalBalance from './TotalBalance';
import MarketStatistics from './MarketStatistics';
import {
    fetchNodeTotal, fetchCountryTotal, fetchBlockTotal, fetchTransactionTotal, fetchAddressTotal, fetchWalletTotal,
    fetchMarketTotal, fetchCoinTotal, fetchCoinTotalBefor, FIND_COUNT_TOTAL_MINED, FIND_COUNT_TODAY_MINED,
    FIND_COUNT_ONLINE, Authorization, BALANCE_HISTORY
} from 'Components/Actions/index'
import axios from 'axios'
const endpoint = "http://localhost:1337/graphql";
const localendpoint = "http://localhost:1337/graphql";
export const FIND_COUNT_ALL_WALLETS = `
{
  wallets
  {
    data{
      attributes{
        address,
        balance,
        name
        
      }
    }
  }
}
`


const Homepage = () => {
    const [totalNode, setTotalNode] = useState(0)
    const [totalCountry, setTotalCountry] = useState(0)
    const [totalBlock, setTotalBlock] = useState(0)
    const [totalTransaction, setTotalTransaction] = useState(0)
    const [totalAddress, setTotalAddress] = useState(0)
    const [totalBalance, setTotalBalance] = useState(0)
    const [totalUSD, setTotalUSD] = useState(0)
    const [marketcap, setMarketcap] = useState(0)
    const [change24h, setChange24h] = useState(0)
    const [volume, setVolume] = useState(0)
    const [eth, setEth] = useState(0)
    const [transactions10times, setTransaction10times] = useState([])
    const [getTOTALMINED, SetTOTALMINED] = useState(0)
    const [getTODAYMINED, SetTODAYMINED] = useState(0)
    const [getNODEONLINE, SetNODEONLINE] = useState(0)
    const [items, setItems] = useState([]);
    const [getAddress, setGetAddress] = useState([])
    const [getBalanceHistory, setBalanceHistory] = useState([])


    useEffect(() => {
        // localStorage.setItem('items', JSON.stringify(items));
        // axios({
        //     url: localendpoint,
        //     method: 'post',
        //     data: {
        //         query: BALANCE_HISTORY
        //     }
        // }).then(data => {
        //     setBalanceHistory(data.data.data.balanceHistories.data)
        // })
        ///////////////////
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
            var count = 0
            for (let index = 0; index < data.data.data.wallets.data.length; index++) {
                setGetAddress(getAddress => [...getAddress, data.data.data.wallets.data[index].attributes])
                setTotalBalance(count += data.data.data.wallets.data[index].attributes.balance)
            }
        }
        )
        axios({
            url: endpoint,
            method: 'post',
            data: {
                query: FIND_COUNT_TOTAL_MINED
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            SetTOTALMINED(result.data.data.mineds.meta.pagination.total)
        })
            .then(axios({
                url: endpoint,
                method: 'post',
                data: {
                    query: FIND_COUNT_TODAY_MINED
                },
                headers: {
                    'Authorization': Authorization
                }

            }).then((result) => {
                SetTODAYMINED(result.data.data.mineds.meta.pagination.total)
            }))
            .then(axios({
                url: endpoint,
                method: 'post',
                data: {
                    query: FIND_COUNT_ONLINE
                },
                headers: {
                    'Authorization': Authorization
                }
            }).then((result) => {
                SetNODEONLINE(result.data.data.nodes.meta.pagination.total)
            }))
        fetchNodeTotal()
            .then(data => {
                setTotalNode(data.Payload.totalCount)
            })
        fetchCountryTotal()
            .then(data => {
                setTotalCountry(data.Payload.summary.length)
            })
        fetchBlockTotal()
            .then(data => {
                setTotalBlock(data.sumBlocks)
            })
        fetchTransactionTotal()
            .then(data => {
                setTotalTransaction(data.sumTransactions)
            })
        fetchAddressTotal()
            .then(data => {
                setTotalAddress(data.sumAddresses)
            })
        fetchMarketTotal()
            .then(data => {
                setTotalUSD(data.nkn.usd)
            })
        fetchCoinTotal()
            .then(data => {
                setMarketcap(data.market_data.market_cap.usd)
                setChange24h(data.market_data.price_change_percentage_24h)
                setVolume(data.market_data.total_volume.usd)
                setEth(data.market_data.ath.eth)
            })
        fetchCoinTotalBefor()
            .then(data => {
                setTransaction10times(data.data)
            })
        ///////////////
        // axios({
        //     url: endpoint,
        //     method: 'post',
        //     data: {
        //         query: FIND_COUNT_ALL_WALLETS
        //     }
        //     ,
        //     headers: {
        //         'Authorization': Authorization
        //     }
        // }).then((data) => {
        //     // console.log(data)
        //     var count = 0
        //     for (let index = 0; index < data.data.data.wallets.data.length; index++) {
        //         axios.get(`https://openapi.nkn.org/api/v1/addresses/${data.data.data.wallets.data[index].attributes.address}`)
        //             .then(result => {
        //                 setTotalBalance(count += result.data.balance)
        //             })
        //             .catch(error => console.log(error))
        //     }

        // })

    }, [items]);
    return (
        <div className='content'>
            <div className='content-wrapper content-wrapper_centered'>
                <h1 className='page__title'>Dashboard</h1>
                <div className='grid'>
                    <NetWorkControl
                        totalNode={totalNode}
                        getNODEONLINE={getNODEONLINE}
                        getTOTALMINED={getTOTALMINED}
                        getTODAYMINED={getTODAYMINED}
                    />
                    <CurrentNetworkNodes
                        totalNode={totalNode}
                        totalCountry={totalCountry}
                        totalBlock={totalBlock}
                        totalTransaction={totalTransaction}
                        totalAddress={totalAddress}
                    />
                    {/* <NewsLate /> */}

                    <div className='desktop-1 mobile-1'>
                    <MarketStatistics
                        totalUSD={totalUSD}
                        marketcap={marketcap}
                        change24h={change24h}
                        volume={volume}
                        eth={eth}
                    />
                    </div>
                    <DailyMined />
                    <TotalBalance
                        totalBalance={totalBalance}
                        transactions10times={transactions10times}
                        getAddress={getAddress}
                        getBalanceHistory={getBalanceHistory}
                    />
                    <div className='desktop-1 mobile-2'>
                    <MarketStatistics
                        totalUSD={totalUSD}
                        marketcap={marketcap}
                        change24h={change24h}
                        volume={volume}
                        eth={eth}
                    />
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default Homepage;
