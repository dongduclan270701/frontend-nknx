import React, {useState, useEffect} from 'react';
import "Assets/scss/DailyMined.scss"
import {FIND_BLOCKS_3MONTH, Authorization} from "Components/Actions/index"
import axios from 'axios';
import ChartMarket from './ChartMarket';
const endpoint = "https://nknx-amonit.herokuapp.com/graphql";

const DailyMined = () => {
    const [getDataBlocks, setGetDataBlocks] = useState(0)
    const [arrBlockMonth, setArrBlockMonth] = useState([])
    // console.log(FIND_BLOCKS_3MONTH)
    useEffect(() => {
        axios({
            url: endpoint,
            method: 'post',
            data: {
                query: FIND_BLOCKS_3MONTH
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        })
        .then((result) => {
            setGetDataBlocks(result.data.data.mineds.meta.pagination.total)
        })
        for (let index = 0; index < 3; index++) {
            const todayxxx = new Date()
            const timeString_LM2 = todayxxx.setUTCMonth(todayxxx.getMonth() - [-1 +index]);
            const timeString_LM = todayxxx.setUTCDate(1);
            const timeStringxxx = todayxxx.setUTCHours(0, 0, 0, 0);
            const todayISOStringxxxLM = new Date(timeStringxxx).toISOString()

            const todayxxxx = new Date()
            const timeString_LM2x = todayxxxx.setUTCMonth(todayxxxx.getMonth() - [index]);
            const timeString_LMx = todayxxxx.setUTCDate(1);
            const timeStringxxxx = todayxxxx.setUTCHours(0, 0, 0, 0);
            const todayISOStringxxxLMx = new Date(timeStringxxxx).toISOString()
            const FIND_COUNT_ALL_MINEDS_BLOCKS_Month = `
                    {
                        mineds(
                          filters: { 
                            createdAt:{
                                between: ["${todayISOStringxxxLMx}", "${todayISOStringxxxLM}"]
                              }
                          }
                        ) 
                        {
                          data{
                            attributes{
                              ip,
                              updatedAt
                              createdAt

                            }
                          }
                          meta {
                            pagination {
                              total
                            }
                          }
                        }
                      }
        `
            axios({
                url: endpoint,
                method: 'post',
                data: {
                    query: FIND_COUNT_ALL_MINEDS_BLOCKS_Month
                }
                ,
                headers: {
                    'Authorization': Authorization
                }
            }).then(result => {
                // arrBlockWeek.push({ date: timeIso_0, value: result.data.data.mineds.meta.pagination.total })
                arrBlockMonth.push({ date: todayISOStringxxxLMx, value: result.data.data.mineds.meta.pagination.total})
            })
        }
        setArrBlockMonth(arrBlockMonth.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
        }))
    }, [arrBlockMonth]);
    return (
        <div className="card col_4 col_start_auto col_end_auto row_1 card_padding_none card_overflow">
            <div className='sparkline-stats'>
                <div className='sparkline-stats__header'>
                    <div className='sparkline-stats__title'>Total Mined blocks last 3 months</div>
                    <div className='sparkline-stats__change'>
                        <span className='sparkline-stats__icon'>
                            {(getDataBlocks/ getDataBlocks)*100}%
                        </span>
                    </div>
                </div>
                <div className='sparkline-stats__value'>
                    {getDataBlocks}&ensp;
                    <span className='sparkline-stats__symbol'>
                        Blocks
                    </span>
                </div>
                <div className='sparkline-stats__chart'>
                    <div data-v-526dea4c className='price-chart'>
                    <ChartMarket getDataBlocks={getDataBlocks} arrBlockMonth={arrBlockMonth}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default DailyMined;
