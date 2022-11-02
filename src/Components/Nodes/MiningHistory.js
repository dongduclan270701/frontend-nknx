import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  FIND_COUNT_TOTAL_MINED, Authorization
} from 'Components/Actions/index'
import ChartMiningWeek from './ChartMiningWeek';
import ChartMiningMonth from './ChartMiningMonth';
import ChartMining from './ChartMining';
import "Assets/scss/MiningHistory.scss"
import { Day, prevDayOfWeek, nextDayOfWeek } from '@progress/kendo-date-math';

const endpoint = "http://localhost:1337/graphql";

const MiningHistory = () => {
  const [chooseDay, setChooseDay] = useState("toggle_active")
  const [chooseWeek, setChooseWeek] = useState("")
  const [chooseMonth, setChooseMonth] = useState("")
  const [totalBlocks, setTotalBlocks] = useState(0)
  const [arrBlocks, setArrBlocks] = useState([])

  const [arrBlock, setArrBlock] = useState([])
  const [arrBlockWeek, setArrBlockWeek] = useState([])
  const [arrBlockMonth, setArrBlockMonth] = useState([])
  let miningBlockSumDay = 0
  let miningBlockSumWeek = 0
  let miningBlockSumMonth = 0
  const today = new Date()
  const timeString_4 = today.setUTCDate(today.getDate());
  const timeString = today.setUTCHours(0, 0, 0, 0);
  const todayISOString = new Date(timeString).toISOString()
  const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))
  useEffect(() => {
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
    }).then(result => {
      setTotalBlocks(result.data.data.mineds.meta.pagination.total)
    })
    for (let index = 0; index < 7; index++) {
      const today = new Date()
      const timeString_4 = today.setUTCDate(today.getDate() - [index]);
      const timeString = today.setUTCHours(0, 0, 0, 0);
      const todayISOString = new Date(timeString).toISOString()
      const today_2 = new Date()
      const timeString_2 = today_2.setUTCDate(today_2.getDate() - [index] - 1);
      const timeString_3 = today_2.setUTCHours(0, 0, 0, 0);
      const todayISOString_2 = new Date(timeString_3).toISOString()
      const FIND_COUNT_ALL_MINEDS_BLOCKS = `
            {
                mineds(
                  filters: { 
                    createdAt:{
                        between: ["${todayISOString_2}", "${todayISOString}"]
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
          query: FIND_COUNT_ALL_MINEDS_BLOCKS
        }
        ,
        headers: {
          'Authorization': Authorization
        }
      }).then(result => {
        arrBlocks.push({ date: todayISOString_2, value: result.data.data.mineds.meta.pagination.total })
      })


    }
    const FIND_COUNT_ALL_MINEDS_BLOCKS_TODAY = `
            {
                mineds(
                  filters: { 
                    createdAt:{
                      gte: "${todayISOString}"
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
        query: FIND_COUNT_ALL_MINEDS_BLOCKS_TODAY
      }
      ,
      headers: {
        'Authorization': Authorization
      }
    }).then(result => {
      arrBlocks.push({ date: todayISOString, value: result.data.data.mineds.meta.pagination.total })
    })
    const prevDate_0 = prevDayOfWeek(new Date(), Day.Monday)
    const prevDate_xx = nextDayOfWeek(new Date(), Day.Monday)
    const time_0 = prevDate_xx.setUTCHours(0, 0, 0, 0);
    const timeIso_0 = new Date(time_0).toISOString()

    const prevDate_1 = prevDayOfWeek(new Date(prevDate_0.setDate(prevDate_0.getDate() - (0))), Day.Monday)
    const time_1 = prevDate_1.setUTCHours(0, 0, 0, 0);
    const timeIso_1 = new Date(time_1).toISOString()
    //xong week 1
    const prevDate_1_1 = new Date(prevDate_0.setDate(prevDate_0.getDate() -1))
    const time_1_1 = prevDate_1_1.setUTCHours(23, 59, 59, 999);
    const timeIso_1_1 = new Date(time_1_1).toISOString() //date2 tuan trc

    const prevDate_2 = prevDayOfWeek(new Date(prevDate_1.setDate(prevDate_1.getDate() - (1))), Day.Monday)
    const time_2 = prevDate_2.setUTCHours(0, 0, 0, 0);
    const timeIso_2 = new Date(time_2).toISOString() //date tuan trc
    
    const prevDate_2_1 = new Date(prevDate_2.setDate(prevDate_2.getDate() -1))
    const time_2_1 = prevDate_2_1.setUTCHours(23, 59, 59, 999);
    const timeIso_2_1 = new Date(time_2_1).toISOString() //date2 tuan 2 trc

    const prevDate_3 = prevDayOfWeek(new Date(prevDate_2.setDate(prevDate_2.getDate() - (1))), Day.Monday)
    const time_3 = prevDate_3.setUTCHours(0, 0, 0, 0);
    const timeIso_3 = new Date(time_3).toISOString() //date tuan 2 trc

    const prevDate_3_1 = new Date(prevDate_3.setDate(prevDate_3.getDate() -1))
    const time_3_1 = prevDate_3_1.setUTCHours(23, 59, 59, 999);
    const timeIso_3_1 = new Date(time_3_1).toISOString() //date2 tuan 2 trc

    const prevDate_4 = prevDayOfWeek(new Date(prevDate_3.setDate(prevDate_3.getDate() - (1))), Day.Monday)
    const time_4 = prevDate_4.setUTCHours(0, 0, 0, 0);
    const timeIso_4 = new Date(time_4).toISOString()// date tuan 3 trc

    const time_x = new Date()
    const time_xIso = new Date(time_x).toISOString()
    const FIND_COUNT_ALL_MINEDS_BLOCKS_WEEK = `
                    {
                        mineds(
                          filters: { 
                            createdAt:{
                                between: ["${timeIso_2}", "${timeIso_1_1}"]
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
    const FIND_COUNT_ALL_MINEDS_BLOCKS_WEEK_2 = `
                    {
                        mineds(
                          filters: { 
                            createdAt:{
                                between: ["${timeIso_3}", "${timeIso_2_1}"]
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
        const FIND_COUNT_ALL_MINEDS_BLOCKS_WEEK_4 = `
                    {
                        mineds(
                          filters: { 
                            createdAt:{
                                between: ["${timeIso_4}", "${timeIso_3_1}"]
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
    const FIND_COUNT_ALL_MINEDS_BLOCKS_WEEK_3 = `
                    {
                        mineds(
                          filters: { 
                            createdAt:{
                                gte: "${timeIso_1}"
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
        query: FIND_COUNT_ALL_MINEDS_BLOCKS_WEEK
      }
      ,
      headers: {
        'Authorization': Authorization
      }
    }).then(result => {
      arrBlockWeek.push({ date2: timeIso_1_1, date : timeIso_2, value: result.data.data.mineds.meta.pagination.total })
      
    })
    axios({
      url: endpoint,
      method: 'post',
      data: {
        query: FIND_COUNT_ALL_MINEDS_BLOCKS_WEEK_2
      }
      ,
      headers: {
        'Authorization': Authorization
      }
    }).then(result => {
      arrBlockWeek.push({ date2: timeIso_2_1, date: timeIso_3, value: result.data.data.mineds.meta.pagination.total })
      
    })
    axios({
      url: endpoint,
      method: 'post',
      data: {
        query: FIND_COUNT_ALL_MINEDS_BLOCKS_WEEK_4
      }
      ,
      headers: {
        'Authorization': Authorization
      }
    }).then(result => {
      arrBlockWeek.push({ date2: timeIso_3_1, date: timeIso_4, value: result.data.data.mineds.meta.pagination.total })
      
    })
    axios({
      url: endpoint,
      method: 'post',
      data: {
        query: FIND_COUNT_ALL_MINEDS_BLOCKS_WEEK_3
      }
      ,
      headers: {
        'Authorization': Authorization
      }
    }).then(result => {
      arrBlockWeek.push({ date2: time_xIso, date: timeIso_1, value: result.data.data.mineds.meta.pagination.total })
      
    })

    
    for (let index = 1; index < 3; index++) {
      const todayxxx = new Date()
      const timeString_LM2 = todayxxx.setUTCMonth(todayxxx.getMonth() - [-1 + index]);
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
        const today_3 = new Date(todayISOStringxxxLM)
        const timeString_Month = today_3.setUTCDate(today_3.getDate() - 1);
        const timeString_Month_2 = today_3.setUTCHours(0, 0, 0, 0);
        const todayISOString_Month = new Date(timeString_Month_2).toISOString()
        arrBlockMonth.push({ date: todayISOString_Month, value: result.data.data.mineds.meta.pagination.total })
      })
    }
    const todayxxxx = new Date()
    const todayxxx = new Date()
    const timeString_LM2 = todayxxx.setUTCMonth(todayxxx.getMonth());
    const timeString_LM = todayxxx.setUTCDate(1);
    const timeStringxxx = todayxxx.setUTCHours(0, 0, 0, 0);
    const todayISOStringxxxLM = new Date(timeStringxxx).toISOString()
    const timeString_LM2x = todayxxxx.setUTCMonth(todayxxxx.getMonth() - 1);
    const timeString_LMx = todayxxxx.setUTCDate(1);
    const timeStringxxxx = todayxxxx.setUTCHours(0, 0, 0, 0);
    const todayISOStringxxxLMx = new Date(timeStringxxxx).toISOString()
    const FIND_COUNT_ALL_MINEDS_BLOCKS_Month_1 = `
                    {
                        mineds(
                          filters: { 
                            createdAt:{
                                gte: "${todayISOStringxxxLM}"
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
        query: FIND_COUNT_ALL_MINEDS_BLOCKS_Month_1
      }
      ,
      headers: {
        'Authorization': Authorization
      }
    }).then(result => {
      
      arrBlockMonth.push({ date: todayISOStringxxxLM, value: result.data.data.mineds.meta.pagination.total })
    })

    setArrBlocks(arrBlock.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c - d;
    }))
    setArrBlockWeek(arrBlockWeek.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c - d;
    }))
    setArrBlockMonth(arrBlockMonth.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c - d;
    }))
  }, [arrBlock, arrBlocks, arrBlockWeek, arrBlockMonth]);
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
  
  const nArr1 = uniqueArray(arrBlocks)
    nArr1.splice(0,1)
    for (let index = 0; index < nArr1.length; index++) {
      miningBlockSumDay += nArr1[index].value
    }

  const nArr2 = uniqueArray(arrBlockWeek)
    arrBlockWeek.sort(function(a,b){
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c-d;
      })
      nArr2.splice(nArr2.length-1,1)
    for (let index = 0; index < nArr2.length; index++) {
      miningBlockSumWeek += nArr2[index].value
    }

  const nArr3 = uniqueArray(arrBlockMonth)
    // nArr3.splice(0,1)
    for (let index = 0; index < nArr3.length; index++) {
      miningBlockSumMonth += nArr3[index].value
    }
  return (
    <div className="card balance-card col_8 col_start_auto col_end_auto row_1 card_padding_normal card_overflow" custom="true" style={{}}>
      <div className="card__header">
        <h3 className="card__title">
          Mining History ({totalBlocks})
        </h3>
      </div>
      <div className="balance-card__header">
        {chooseDay === "toggle_active" && <div className="stats-item__wrapper stats-item__wrapper_full">
          <div className="stats-item">
            <div className="stats-item__title">
              Sum blocks last 7 days</div>
            <div className="stats-item__value">
              {miningBlockSumDay}
              {console.log(miningBlockSumDay)}
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item__title">
            Average / Day</div>
            <div className="stats-item__value">
              {(miningBlockSumDay / 7).toFixed()}
            </div>
          </div>
          
        </div>}
        {chooseWeek === "toggle_active" && <div className="stats-item__wrapper stats-item__wrapper_full">
          <div className="stats-item">
            <div className="stats-item__title">
              Sum blocks last 4 weeks</div>
            <div className="stats-item__value">
              {miningBlockSumWeek}
              {/* {console.log(SumWeek())} */}
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item__title">
            Average / Week</div>
            <div className="stats-item__value">
              {(miningBlockSumWeek/4).toFixed()}
            </div>
          </div>
          
        </div>}
        {chooseMonth === "toggle_active" && <div className="stats-item__wrapper stats-item__wrapper_full">
          <div className="stats-item">
            <div className="stats-item__title">
              Sum blocks last 3 months </div>
            <div className="stats-item__value">
              {miningBlockSumMonth}
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item__title">
            Average / Month</div>
            <div className="stats-item__value">
              {(miningBlockSumMonth/3).toFixed()}
            </div>
          </div>
          
        </div>}
        <div className="balance-card__actions">
          <div className={'toggle ' + chooseDay} onClick={Active_Day}>
            Day
          </div>
          <div className={'toggle ' + chooseWeek} onClick={Active_Week}>
            Week
          </div>
          <div className={'toggle ' + chooseMonth} onClick={Active_Month}>
            Month
          </div>
        </div>
      </div>
      <div className='sparkline-stats__chart'>
        <div data-v-526dea4c className='price-chart'>
          {chooseDay === "toggle_active" && <ChartMining arrBlocks={arrBlocks} />}
          {chooseWeek === "toggle_active" && <ChartMiningWeek arrBlockWeek={arrBlockWeek} />}
          {chooseMonth === "toggle_active" && <ChartMiningMonth arrBlockMonth={uniqueArray(arrBlockMonth)} />}
        </div>
      </div>
    </div>
  );
}

export default MiningHistory;
