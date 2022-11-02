import axios from 'axios'
import moment from 'moment';

const date = new Date()
const timeString = date.setUTCHours(0, 0, 0, 0);
const time2StringNow = new Date(timeString).toISOString()
const timeString_2 = date.setUTCHours(0, 0, 0, 0);
const time2StringNow_2 = new Date(timeString_2).toISOString()
const date_2 = new Date()
const Time = date_2.setUTCMonth(+3);
const TimeNow = new Date(Time).toISOString()

var myDate = new Date();
var time = moment.utc(myDate).format("HH");

export const fetchNodeTotal = async () => {
  const req = await axios.get(`https://api.nkn.org/v1/geo/summary`)
  return req.data
}
export const fetchDistinctSyncState = async () => {
  const req = await axios.get(`https://nknx-amonit.herokuapp.com//api/nodes/dashboard/distinctSyncState`)
  return req.data
}
export const fetchCountryTotal = async () => {
  const req = await axios.get(`https://api.nkn.org/v1/geo/summary`)
  return req.data
}
export const fetchBlockTotal = async () => {
  const req = await axios.get(`https://openapi.nkn.org/api/v1/blocks`)
  return req.data
}
export const fetchTransactionTotal = async () => {
  const req = await axios.get(`https://openapi.nkn.org/api/v1/transactions`)
  return req.data
}
export const fetchAddressTotal = async () => {
  const req = await axios.get(`https://openapi.nkn.org/api/v1/addresses`)
  return req.data
}
export const fetchWalletTotal = async () => {
  const req = await axios.get(`https://openapi.nkn.org/api/v1/addresses/NKNEfKFwLjdN2SXJU2UZaY3aECVuC6kTjwzz`)
  return req.data
}
export const fetchMarketTotal = async () => {
  const req = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=nkn&vs_currencies=usd`)
  return req.data
}
export const fetchCoinTotal = async () => {
  const req = await axios.get(`https://api.coingecko.com/api/v3/coins/nkn?tickers=true&market_data=true&community_data=true&developer_data=true`)
  return req.data
}
export const fetchCoinTotalBefor = async () => {
  const req = await axios.get(`https://openapi.nkn.org/api/v1/addresses/NKNEfKFwLjdN2SXJU2UZaY3aECVuC6kTjwzz/transactions`)
  return req.data
}
export const fetchAllWallet = async () => {
  const req = await axios.get(`https://nknx-amonit.herokuapp.com//api/wallets`)
  return req.data
}

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

export const FIND_COUNT_TOTAL_MINED = `
{
    mineds
    {
      meta {
        pagination {
          total
        }
      }
    }
  }
`

export const FIND_COUNT_TODAY_MINED = `
{
  mineds(
    filters: { 
      
      updatedAt: {
        gte: "${time2StringNow_2}"
      }
    }
  ) 
  {
    meta {
      pagination {
        total
      }
    }
  }
}
`

export const FIND_COUNT_ONLINE = `
{
    nodes(
      filters: {
            syncState:{
            notIn : ["OFFLINE"]
          }
              }
            )
      {
        data{
          attributes {
            ip,
            syncState,
            }
        }
        meta {
          pagination {
            total
          }
        }
      }
}`

export const FIND_BLOCKS_3MONTH = `
{
  mineds(
    filters: { 
      updatedAt:{
          gte: "${TimeNow}"
        }
    }
  ) 
  {
    data{
      attributes{
        ip,
        updatedAt
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}`

export const FIND_COUNT_SYNC_QUERY_PERSIST_FINISHED = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["PERSIST_FINISHED"]
              }
                  }
                )
          {
            data{
              attributes {
                ip,
                syncState,
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
export const FIND_COUNT_SYNC_QUERY_PRUNING_DB = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["PRUNING_DB"]
              }
                  }
                )
          {
            data{
              attributes {
                ip,
                syncState,
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
export const FIND_COUNT_SYNC_QUERY_GENERATE_ID = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["GENERATE_ID"]
              }
                  }
                )
          {
            data{
              attributes {
                ip,
                syncState,
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
export const FIND_COUNT_SYNC_QUERY_WAIT_FOR_SYNCING = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["WAIT_FOR_SYNCING"]
              }
                  }
                )
          {
            data{
              attributes {
                ip,
                syncState,
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
export const FIND_COUNT_SYNC_QUERY_SYNC_STARTED = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["SYNC_STARTED"]
              }
                  }
                )
          {
            data{
              attributes {
                ip,
                syncState,
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
export const FIND_COUNT_SYNC_QUERY_SYNC_FINISHED = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["SYNC_FINISHED"]
              }
                  }
                )
          {
            data{
              attributes {
                ip,
                syncState,
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
export const FIND_COUNT_SYNC_QUERY_OFFLINE = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["OFFLINE"]
              }
                  }
                )
          {
            data{
              attributes {
                ip,
                syncState,
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
export const FIND_COUNT_SYNC_QUERY_INSTALLED = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["INSTALLED"]
              }
                  }
                )
          {
            data{
              attributes {
                ip,
                syncState,
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
export const BALANCE_HISTORY = `
{
  balanceHistories{
    data{
      attributes{
        address
        balance
        createdAt
      }
    }
  }
}
`
export const Authorization = 'Bearer ' + localStorage.getItem('token')
// export const Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU4Mzc2NDY3LCJleHAiOjE2NjA5Njg0Njd9.XeFvaf94gdq_a01i0E697v7Sn9MWnzhj2xlatWlPbzo'