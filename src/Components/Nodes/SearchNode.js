import React, { useState, useEffect } from 'react';
import ListNodes from './ListNodes';
import ListNodesResponsive from './ListNodesResponsive';
import axios from 'axios';
import { useParams, Link, useNavigate  } from 'react-router-dom';
import {
    Authorization
} from "Components/Actions/index"
const endpoint = "https://nknx-amonit.herokuapp.com/graphql";



const SearchNode = (props) => {
    
    const { SettingHideShowAddNodes, selectAddNodes, OFFLINE, SYNC_FINISHED, INSTALLED,
        SYNC_STARTED, WAIT_FOR_SYNCING, GENERATE_ID, PRUNING_DB, PERSISTFINISHED, arrValueDistinceState,
        totalNodeStatus } = props
    let page = Number(useParams().page)
    let navigate = useNavigate();
    const [state, setState] = useState(true)
    const [select, setSelect] = useState(false)
    const [chooseAll, setChooseAll] = useState(false)
    const [choosePERSISTFINISHED, setChoosePERSISTFINISHED] = useState(true)
    const [choosePRUNING_DB, setChoosePRUNING_DB] = useState(false)
    const [chooseGENERATE_ID, setChooseGENERATE_ID] = useState(false)
    const [chooseWAIT_FOR_SYNCING, setChooseWAIT_FOR_SYNCING] = useState(false)
    const [chooseSYNC_STARTED, setChooseSYNC_STARTED] = useState(false)
    const [chooseSYNC_FINISHED, setChooseSYNC_FINISHED] = useState(false)
    const [chooseOFFLINE, setChooseOFFLINE] = useState(false)
    const [chooseINSTALLED, setChooseINSTALLED] = useState(false)

    const [ sort, setSort] = useState({nameSort: "relayMessageCount", settingSort: "asc"})

    const [getDataName, setGetDataName] = useState("PERSIST_FINISHED")
    const [inputSearchName, setInputSearchName] = useState("")
    const [getDataList, setGetDataList] = useState([])
    const [getPaginationList, setGetPaginationList] = useState(0)
    const [getDataListSort, setGetDataListSort] = useState([])
    const [sortHeight, setSortHeight] = useState()

    const [getDataListSortUptime, setGetDataListSortUptime] = useState([])
    const [sortUptime, setSortUptime] = useState()

    const [getDataListSortSubmitted, setGetDataListSortSubmitted] = useState([])
    const [sortSubmitted, setSortSubmitted] = useState()

    const [getDataListSortRelay, setGetDataListSortRelay] = useState([])
    const [sortRelay, setSortRelay] = useState()

    const [getDataListSortRestarted, setGetDataListSortRestarted] = useState([])
    const [sortRestarted, setSortRestarted] = useState()

    const [getDataListSortSyncStateChanged, setGetDataListSortSyncStateChanged] = useState([])
    const [sortSyncStateChanged, setSortSyncStateChanged] = useState()

    const [getDataListSortRelayH, setGetDataListSortRelayH] = useState([])
    const [sortRelayH, setSortRelayH] = useState()
    const [iArr, setIArr] = useState(
        [
        ])
    // const []
    const SettingOpenSelect = () => {
        setSelect(!select)
    }
    const SelectAddNodes = () => {
        SettingHideShowAddNodes(!selectAddNodes)
    }
    const ChooseSelect = (volume) => {
        if (volume === 1) {
            setChooseAll(true)
            // setChoosePERSISTFINISHED(false)
            // setChoosePRUNING_DB(false)
            // setChooseGENERATE_ID(false)
            // setChooseWAIT_FOR_SYNCING(false)
            // setChooseSYNC_STARTED(false)
            // setChooseSYNC_FINISHED(false)
            // setChooseOFFLINE(false)
            setGetDataName("")
        }
        // if (volume === "PERSIST_FINISHED") {
        //     setChooseAll(false)
        //     setChoosePERSISTFINISHED(true)
        //     setChooseINSTALLED(false)
        //     setChoosePRUNING_DB(false)
        //     setChooseGENERATE_ID(false)
        //     setChooseWAIT_FOR_SYNCING(false)
        //     setChooseSYNC_STARTED(false)
        //     setChooseSYNC_FINISHED(false)
        //     setChooseOFFLINE(false)
        //     setGetDataName("PERSIST_FINISHED")
        // }
        // if (volume === 3) {
        //     setChooseAll(false)
        //     setChoosePERSISTFINISHED(false)
        //     setChooseINSTALLED(false)
        //     setChoosePRUNING_DB(true)
        //     setChooseGENERATE_ID(false)
        //     setChooseWAIT_FOR_SYNCING(false)
        //     setChooseSYNC_STARTED(false)
        //     setChooseSYNC_FINISHED(false)
        //     setChooseOFFLINE(false)
        //     setGetDataName("PRUNING_DB")
        // }
        // if (volume === 4) {
        //     setChooseAll(false)
        //     setChoosePERSISTFINISHED(false)
        //     setChooseINSTALLED(false)
        //     setChoosePRUNING_DB(false)
        //     setChooseGENERATE_ID(true)
        //     setChooseWAIT_FOR_SYNCING(false)
        //     setChooseSYNC_STARTED(false)
        //     setChooseSYNC_FINISHED(false)
        //     setChooseOFFLINE(false)
        //     setGetDataName("GENERATE_ID")
        // }
        // if (volume === 5) {
        //     setChooseAll(false)
        //     setChoosePERSISTFINISHED(false)
        //     setChooseINSTALLED(false)
        //     setChoosePRUNING_DB(false)
        //     setChooseGENERATE_ID(false)
        //     setChooseWAIT_FOR_SYNCING(true)
        //     setChooseSYNC_STARTED(false)
        //     setChooseSYNC_FINISHED(false)
        //     setChooseOFFLINE(false)
        //     setGetDataName("WAIT_FOR_SYNCING")
        // }
        // if (volume === 6) {
        //     setChooseAll(false)
        //     setChoosePERSISTFINISHED(false)
        //     setChooseINSTALLED(false)
        //     setChoosePRUNING_DB(false)
        //     setChooseGENERATE_ID(false)
        //     setChooseWAIT_FOR_SYNCING(false)
        //     setChooseSYNC_STARTED(true)
        //     setChooseSYNC_FINISHED(false)
        //     setChooseOFFLINE(false)
        //     setGetDataName("SYNC_STARTED")
        // }
        // if (volume === 7) {
        //     setChooseAll(false)
        //     setChoosePERSISTFINISHED(false)
        //     setChooseINSTALLED(false)
        //     setChoosePRUNING_DB(false)
        //     setChooseGENERATE_ID(false)
        //     setChooseWAIT_FOR_SYNCING(false)
        //     setChooseSYNC_STARTED(false)
        //     setChooseSYNC_FINISHED(true)
        //     setChooseOFFLINE(false)
        //     setGetDataName("SYNC_FINISHED")
        // }
        // if (volume === "OFFLINE") {
        //     setChooseAll(false)
        //     setChoosePERSISTFINISHED(false)
        //     setChooseINSTALLED(false)
        //     setChoosePRUNING_DB(false)
        //     setChooseGENERATE_ID(false)
        //     setChooseWAIT_FOR_SYNCING(false)
        //     setChooseSYNC_STARTED(false)
        //     setChooseSYNC_FINISHED(false)
        //     setChooseOFFLINE(true)
        //     setGetDataName("OFFLINE")
        // }
        // if (volume === 9) {
        //     setChooseAll(false)
        //     setChoosePERSISTFINISHED(false)
        //     setChooseINSTALLED(true)
        //     setChoosePRUNING_DB(false)
        //     setChooseGENERATE_ID(false)
        //     setChooseWAIT_FOR_SYNCING(false)
        //     setChooseSYNC_STARTED(false)
        //     setChooseSYNC_FINISHED(false)
        //     setChooseOFFLINE(false)
        //     setGetDataName("INSTALL")
        // }

        // console.log(arrValueDistinceState)
        
        for (let index = 0; index < arrValueDistinceState.length; index++) {
            if (volume === arrValueDistinceState[index].setName) {
                const IndexIArr = arrValueDistinceState.findIndex(i => i.status === true)
                const newIA = { state: arrValueDistinceState[IndexIArr].state, value: arrValueDistinceState[IndexIArr].value, setName: arrValueDistinceState[IndexIArr].state, status: false }
                arrValueDistinceState.splice(IndexIArr, 1, newIA)
                
                const IndexIArrChoose = arrValueDistinceState.findIndex(i => i.setName === arrValueDistinceState[index].setName)
                const newIAChoose = { state: arrValueDistinceState[IndexIArrChoose].state, value: arrValueDistinceState[IndexIArrChoose].value, setName: arrValueDistinceState[IndexIArrChoose].state, status: true }
                arrValueDistinceState.splice(IndexIArrChoose, 1, newIAChoose)
                setGetDataName(arrValueDistinceState[index].setName)
                setChooseAll(false)
                navigate("/nodes/1")
            }

        }

    }

    // console.log(iArr)
    // console.log(arrValueDistinceState)
    const ChangeInputSearch = (e) => {
        setInputSearchName(e.target.value)
        navigate("/nodes/1")
    }
    // console.log(getDataName)
    const FIND_COUNT_SYNC_QUERY = `
    {
        nodes(sort:[
            "${sort.nameSort}:${sort.settingSort}"
          ],
          filters: {
            ip :{
                startsWith:"${inputSearchName}"
              }
                syncState:{
                ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
                  }},
                  
        pagination:{
          pageSize:10
          page:${page}
        }
                )
          {
            data{
              attributes {
                ip,
                height
                uptime
                syncState
                relayMessageCount
                proposalSubmitted
                publicKey
                version
                restarted
                syncStateChanged
                createdAt
                relayHourly
                }
            }
            meta {
              pagination {
                total,
                pageSize,
                page
              }
            }
          }
      }`
    useEffect(() => {
        setTimeout(() => {
            // iArr.push()
            axios({
                url: endpoint,
                method: 'post',
                data: {
                    query: FIND_COUNT_SYNC_QUERY
                }
                ,
                headers: {
                    'Authorization': Authorization
                }
            }).then((result) => {
                setGetDataList(result.data.data.nodes.data)
                setGetPaginationList(result.data.data.nodes.meta.pagination.total)
                setGetDataListSort([])
                setGetDataListSortUptime([])
                setGetDataListSortSubmitted([])
                setGetDataListSortRelay([])
                setGetDataListSortRestarted([])
                setGetDataListSortSyncStateChanged([])
                setSortRelayH([])
                // navigate("/nodes/1")
            })
        }, 100);

    }, [FIND_COUNT_SYNC_QUERY, iArr, arrValueDistinceState]);
    const SortAscHeight = `
{
  nodes(sort:[
    "height:asc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
        
  }
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortDescHeight = `
{
  nodes(sort:[
    "height:desc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortAscUptime = `
{
  nodes(sort:[
    "uptime:asc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortDescUptime = `
{
  nodes(sort:[
    "uptime:desc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortAscSubmitted = `
{
  nodes(sort:[
    "proposalSubmitted:asc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortDescSubmitted = `
{
  nodes(sort:[
    "proposalSubmitted:desc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortAscRelay = `
{
  nodes(sort:[
    "relayMessageCount:asc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortDescRelay = `
{
  nodes(sort:[
    "relayMessageCount:desc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortAscRestarted = `
{
  nodes(sort:[
    "restarted:asc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortDescRestarted = `
{
  nodes(sort:[
    "restarted:desc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortAscSyncStateChanged = `
{
  nodes(sort:[
    "syncStateChanged:asc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortDescSyncStateChanged = `
{
  nodes(sort:[
    "syncStateChanged:desc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
const SortAscRelayH = `
{
  nodes(sort:[
    "relayHourly:asc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `notIn: [""]`}
  }
      },pagination:{
        pageSize:10
        page:${page}
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`
    const SortDescRelayH = `
{
  nodes(sort:[
    "relayHourly:desc"
  ],filters: {
    ip :{
        startsWith:"${inputSearchName}"
      },
    syncState:{
        ${getDataName !== "" ? `in : ["${getDataName}"]` : `in: ["PERSIST_FINISHED"]`}
  }
      })
    {
      data{
        attributes {
          ip,
          height
          uptime
          syncState
          relayMessageCount
          proposalSubmitted
          publicKey
          version
          restarted
          syncStateChanged
          createdAt
          relayHourly
          }
      }
      meta {
        pagination {
          total,
          pageSize,
          page
        }
      }
    }
}`

    const SortArrHeight = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortAscHeight
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {

            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"height", settingSort:"asc"})
            navigate("/nodes/1")
            // console.log([])
        })
        // setGetDataListSort(getDataList.sort(function (a, b) {
        //     var c = a.attributes.height;
        //     var d = b.attributes.height;
        //     return c - d;
        // }))
    }
    const SortArrHeight_2 = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortDescHeight
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"height", settingSort:"desc"})
            navigate("/nodes/1")
            // console.log([])
        })
        // setGetDataListSort(getDataList.sort(function (a, b) {
        //     var c = a.attributes.height;
        //     var d = b.attributes.height;
        //     return d - c;
        // }))
    }
    const ChangeSort = () => {
        setSortHeight(true)
    }
    const ChangeSort_2 = () => {
        setSortHeight(false)
    }
    //
    const SortArrUptime = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortAscUptime
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortUptime([])
            setGetDataListSort([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"uptime", settingSort:"asc"})
            // console.log([])
        })
        // setGetDataListSortUptime(getDataList.sort(function (a, b) {
        //     var c = a.attributes.uptime;
        //     var d = b.attributes.uptime;
        //     return c - d;
        // }))
    }
    const SortArrUptime_2 = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortDescUptime
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortUptime([])
            setGetDataListSort([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"uptime", settingSort:"desc"})
            // console.log([])
        })
        // setGetDataListSortUptime(getDataList.sort(function (a, b) {
        //     var c = a.attributes.uptime;
        //     var d = b.attributes.uptime;
        //     return d - c;
        // }))
    }
    const ChangeSortUptime = () => {
        setSortUptime(true)
    }
    const ChangeSortUptime_2 = () => {
        setSortUptime(false)
    }
    //
    const SortArrSubmitted = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortAscSubmitted
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortSubmitted([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"proposalSubmitted", settingSort:"asc"})
            // console.log([])
        })
        // setGetDataListSortSubmitted(getDataList.sort(function (a, b) {
        //     var c = a.attributes.proposalSubmitted;
        //     var d = b.attributes.proposalSubmitted;
        //     return c - d;
        // }))
    }
    const SortArrSubmitted_2 = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortDescSubmitted
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortSubmitted([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"proposalSubmitted", settingSort:"asc"})
            // console.log([])
        })
        // setGetDataListSortSubmitted(getDataList.sort(function (a, b) {
        //     var c = a.attributes.proposalSubmitted;
        //     var d = b.attributes.proposalSubmitted;
        //     return d - c;
        // }))
    }
    const ChangeSortSubmitted = () => {
        setSortSubmitted(true)
    }
    const ChangeSortSubmitted_2 = () => {
        setSortSubmitted(false)
    }
    //
    const SortArrRelay = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortAscRelay
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortRelay([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRestarted([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"relayMessageCount", settingSort:"asc"})
            // console.log([])
        })
        // setGetDataListSortRelay(getDataList.sort(function (a, b) {
        //     var c = a.attributes.relayMessageCount;
        //     var d = b.attributes.relayMessageCount;
        //     return c - d;
        // }))
    }
    const SortArrRelay_2 = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortDescRelay
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortRelay([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRestarted([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"relayMessageCount", settingSort:"desc"})
            // console.log([])
        })
        // setGetDataListSortRelay(getDataList.sort(function (a, b) {
        //     var c = a.attributes.relayMessageCount;
        //     var d = b.attributes.relayMessageCount;
        //     return d - c;
        // }))
    }
    const ChangeSortRelay = () => {
        setSortRelay(true)
    }
    const ChangeSortRelay_2 = () => {
        setSortRelay(false)
    }
    //
    const SortArrRestarted = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortAscRestarted
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortRestarted([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"restarted", settingSort:"asc"})
            // console.log([])
        })
        // setGetDataListSortRestarted(getDataList.sort(function (a, b) {
        //     var c = a.attributes.restarted;
        //     var d = b.attributes.restarted;
        //     return c - d;
        // }))
    }
    const SortArrRestarted_2 = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortDescRestarted
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortRestarted([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortSyncStateChanged([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"restarted", settingSort:"desc"})
            // console.log([])
        })
        // setGetDataListSortRestarted(getDataList.sort(function (a, b) {
        //     var c = a.attributes.restarted;
        //     var d = b.attributes.restarted;
        //     return d - c;
        // }))
    }
    const ChangeSortRestarted = () => {
        setSortRestarted(true)
    }
    const ChangeSortRestarted_2 = () => {
        setSortRestarted(false)
    }
    //
    const SortArrSyncStateChanged = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortAscSyncStateChanged
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortSyncStateChanged([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"syncStateChanged", settingSort:"asc"})
            // console.log([])
        })
        // setGetDataListSortSyncStateChanged(getDataList.sort(function (a, b) {
        //     var c = a.attributes.syncStateChanged;
        //     var d = b.attributes.syncStateChanged;
        //     return c - d;
        // }))
    }
    const SortArrSyncStateChanged_2 = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortDescSyncStateChanged
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortSyncStateChanged([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"syncStateChanged", settingSort:"desc"})
            // console.log([])
        })
        // setGetDataListSortSyncStateChanged(getDataList.sort(function (a, b) {
        //     var c = a.attributes.syncStateChanged;
        //     var d = b.attributes.syncStateChanged;
        //     return d - c;
        // }))
    }
    const ChangeSortSyncStateChanged = () => {
        setSortSyncStateChanged(true)
    }
    const ChangeSortSyncStateChanged_2 = () => {
        setSortSyncStateChanged(false)
    }
    //
    const SortArrRelayH = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortAscRelayH
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortSyncStateChanged([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"relayHourly", settingSort:"asc"})
        })
        // setGetDataListSortSyncStateChanged(getDataList.sort(function (a, b) {
        //     var c = a.attributes.syncStateChanged;
        //     var d = b.attributes.syncStateChanged;
        //     return c - d;
        // }))
    }
    const SortArrRelayH_2 = async () => {
        await axios({
            url: endpoint,
            method: 'post',
            data: {
                query: SortDescRelayH
            }
            ,
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            setGetDataListSortSyncStateChanged([])
            setGetDataListSort([])
            setGetDataListSortUptime([])
            setGetDataListSortSubmitted([])
            setGetDataListSortRelay([])
            setGetDataListSortRestarted([])
            setGetDataListSortRelayH([])
            setSort({nameSort:"relayHourly", settingSort:"desc"})
            console.log([])
        })
        // setGetDataListSortSyncStateChanged(getDataList.sort(function (a, b) {
        //     var c = a.attributes.syncStateChanged;
        //     var d = b.attributes.syncStateChanged;
        //     return d - c;
        // }))
    }
    const ChangeSortRelayH = () => {
        setSortRelayH(true)
    }
    const ChangeSortRelayH_2 = () => {
        setSortRelayH(false)
    }
    
    // console.log(getDataListSort === [])
    return (
        <div className="node-manager">
            <div className="node-manager__topbar">
                <div className="node-manager__topbar-left">
                    0 nodes selected
                </div>
                <div className="node-manager__topbar-right">
                    <div className="node-manager__topbar-item" style={{ display: 'none' }}>
                        Generate ID
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="node-manager__topbar-icon">
                            <path d="M8 2a6 6 0 00-6 6A.667.667 0 01.667 8 7.333 7.333 0 118 15.334.667.667 0 018 14 6 6 0 108 2z" fill="#fff" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.471 7.529c.185.185.245.46.153.705l-2 5.334a.667.667 0 01-1.095.237L4.333 12.61l-1.862 1.862a.667.667 0 11-.942-.943l1.862-1.862-1.196-1.195a.667.667 0 01.238-1.096l5.333-2a.667.667 0 01.705.153zm-4.6 2.732l1.868 1.87L6.861 9.14 3.87 10.26z" fill="#fff" />
                            <path d="M6.114 6.115a2.667 2.667 0 112.953 4.33.667.667 0 10.533 1.222A4 4 0 104.333 6.4a.667.667 0 101.222.533c.13-.296.315-.574.56-.818z" fill="#fff" />
                        </svg>
                    </div>
                    <div className="node-manager__topbar-item">
                        Delete
                        <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" className="node-manager__topbar-icon">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 3h11a.5.5 0 010 1H3a.5.5 0 110-1zm4 3a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 017 6zm3 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 0110 6z" fill="#ED7470" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 3a.5.5 0 01.5.5V13h8V3.5a.5.5 0 111 0V13a1 1 0 01-1 1h-8a1 1 0 01-1-1V3.5A.5.5 0 014 3z" fill="#ED7470" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.94 1.44A1.5 1.5 0 017 1h3a1.5 1.5 0 011.5 1.5v1a.5.5 0 01-1 0v-1A.5.5 0 0010 2H7a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1c0-.398.158-.78.44-1.06z" fill="#ED7470" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="node-manager__head">
                <div className="node-manager__select node-manager__select_top">
                    <div className="node-manager__select-title">
                        Node status:</div>
                    <div className="select node-manager__select-controller" onClick={SettingOpenSelect}>
                        <div className={select === true ? "select__button select__button_active" : "select__button"}>
                            <div className="select__value">
                                {/* {console.log([...new Set(iArr.map(item => item.state))])} */}
                                {
                                    chooseAll === false ? arrValueDistinceState.map((item, index) => {
                                        return (
                                             item.status === true &&  `${item.state} (${item.value})` 
                                        )
                                    })
                                    : `ALL (${totalNodeStatus})`
                                }
                                {/* {chooseAll === true && `ALL (${totalNodeStatus})`} */}
                                {/*{choosePERSISTFINISHED === true && `PERSIST_FINISHED (${PERSISTFINISHED})`}
                                {choosePRUNING_DB === true && `PRUNING_DB (${PRUNING_DB})`}
                                {chooseGENERATE_ID === true && `GENERATE_ID (${GENERATE_ID})`}
                                {chooseWAIT_FOR_SYNCING === true && `WAIT_FOR_SYNCING (${WAIT_FOR_SYNCING})`}
                                {chooseSYNC_STARTED === true && `SYNC_STARTED (${SYNC_STARTED})`}
                                {chooseSYNC_FINISHED === true && `SYNC_FINISHED (${SYNC_FINISHED})`}
                                {chooseINSTALLED === true && `INSTALLED (${INSTALLED})`}
                                {chooseOFFLINE === true && `OFFLINE (${OFFLINE})`}  */}

                            </div>

                            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" className={select === true ? "select__toggle select__toggle_open" : "select__toggle"}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.316 4.94c.17-.17.448-.17.618 0L7 9.007l4.066-4.065a.438.438 0 01.618.618L7.31 9.934a.438.438 0 01-.618 0L2.316 5.56a.438.438 0 010-.618z" fill="#4A4A68" />
                            </svg>
                        </div>
                        <div className={select === true ? "select__list select__list_position_bottom select__list_open" : "select__list select__list_position_bottom"}>
                            <div className="select__item" onClick={(volume) => ChooseSelect(volume = 1)} >
                                ALL ({totalNodeStatus})
                            </div>
                            {/* {console.log(arrValueDistinceState)} */}
                            {
                                arrValueDistinceState.map((item, index) => {
                                    return (
                                        <div key={index} className="select__item" onClick={(volume) => ChooseSelect(volume = arrValueDistinceState[index].state)} >
                                            {arrValueDistinceState[index].state} ({arrValueDistinceState[index].value})
                                            {/* <Link to="/#/nodes/1"></Link> */}
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="select__item" onClick={(volume) => ChooseSelect(volume = 2)} >
                                PERSIST_FINISHED ({PERSISTFINISHED})
                            </div>
                            <div className="select__item" onClick={(volume) => ChooseSelect(volume = 3)} >
                                PRUNING_DB ({PRUNING_DB})
                            </div>
                            <div className="select__item" onClick={(volume) => ChooseSelect(volume = 4)} >
                                GENERATE_ID ({GENERATE_ID})
                            </div>
                            <div className="select__item" onClick={(volume) => ChooseSelect(volume = 5)} >
                                WAIT_FOR_SYNCING ({WAIT_FOR_SYNCING})
                            </div>
                            <div className="select__item" onClick={(volume) => ChooseSelect(volume = 6)} >
                                SYNC_STARTED ({SYNC_STARTED})
                            </div>
                            <div className="select__item" onClick={(volume) => ChooseSelect(volume = 7)} >
                                SYNC_FINISHED ({SYNC_FINISHED})
                            </div>
                            <div className="select__item" onClick={(volume) => ChooseSelect(volume = 9)} >
                                INSTALLED ({INSTALLED})
                            </div>
                            <div className="select__item" onClick={(volume) => ChooseSelect(volume = 8)} >
                                OFFLINE ({OFFLINE})
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="node-manager__head-input">
                    <input type="text" placeholder="Search all nodes" className="node-manager__head-input-controller" onChange={(e) => ChangeInputSearch(e)} />
                    <div className="node-manager__head-input-search">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 6.923a5.923 5.923 0 1110.475 3.79l3.367 3.368a.538.538 0 11-.761.761l-3.368-3.367A5.923 5.923 0 011 6.923zm9.39 3.386a.53.53 0 00-.08.081 4.846 4.846 0 11.081-.081z" fill="#7B8395" />
                        </svg>
                    </div>
                </div>
                <div className="node-manager__head-button"
                    // onClick={SelectAddNodes} 
                    style={{ opacity: "0.2" }}
                    disabled >
                    Add Nodes <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5v14m-7-7h14" stroke="#A2A5B9" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="node-manager__wrapper">

                {state === false ?
                    <div className="node-manager__placeholder">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="node-manager__placeholder-icon">
                            <circle cx={50} cy={50} r={50} fill="#4A4A68" fillOpacity=".03" />
                            <circle cx={50} cy={50} r="49.5" stroke="#4A4A68" strokeOpacity=".05" />
                            <g clipPath="url(#clip0)" fill="#4A4A68" fillOpacity=".3">
                                <path d="M65.553 44.423l4.218-4.219a.78.78 0 00-.176-1.237l-5.072-2.785a.782.782 0 00-.752 1.37l4.16 2.284-3.621 3.62-13.021-7.15 3.62-3.62 3.66 2.01a.781.781 0 10.751-1.37l-4.173-2.292a.78.78 0 00-.928.132l-4.22 4.22-4.218-4.22a.782.782 0 00-.928-.132l-14.448 7.933a.78.78 0 00-.176 1.237l4.218 4.219-4.218 4.218a.781.781 0 00.176 1.237l4.366 2.398v8.013c0 .285.155.548.405.685l14.448 7.933a.78.78 0 00.752 0l14.447-7.933c.25-.137.406-.4.406-.685v-8.013l4.366-2.398a.781.781 0 00.176-1.237l-4.218-4.218zM50 51.464l-12.825-7.041L50 37.38l12.824 7.043L50 51.464zm-4.91-18.777l3.62 3.62-13.021 7.15-3.62-3.62 13.021-7.15zm-9.4 12.704l13.02 7.15-3.62 3.62-13.021-7.15 3.62-3.62zm27.975 14.437L50.78 66.903v-7.986a.781.781 0 10-1.562 0v7.986l-12.885-7.075v-6.693l8.519 4.678a.781.781 0 00.928-.133L50 53.461l4.219 4.218a.78.78 0 00.928.133l8.52-4.678v6.693zM54.91 56.16l-3.62-3.62 13.02-7.15 3.621 3.62-13.021 7.15z" />
                                <path d="M61.625 36.264a.788.788 0 00.552-.23.787.787 0 00.23-.551.787.787 0 00-.23-.553.785.785 0 00-1.334.552.783.783 0 00.782.782zM50 55.541a.786.786 0 00-.552.229.788.788 0 00-.23.552.79.79 0 00.23.553.787.787 0 00.552.229.787.787 0 00.552-.229.79.79 0 00.23-.553.788.788 0 00-.23-.552.786.786 0 00-.552-.229z" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <path fill="#fff" transform="translate(30 30)" d="M0 0h40v40H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="node-manager__placeholder-title">
                            Unfortunately, no data is available
                        </div>
                        <div className="node-manager__placeholder-subtitle">
                            You can add nodes by clicking the button in the upper
                            right corner of the card
                        </div>
                    </div>
                    :
                    <table>
                        <thead>
                            <th>
                                <div className="checkbox node-manager__checkbox checkbox_theme_"><input type="checkbox" className="checkbox__control" defaultValue="false" /> <label className="checkbox__label checkbox__label_theme_" /> </div>
                            </th>
                            <th>
                                <span className="node-manager__sort-title">
                                    IP Address
                                    <span className="node-manager__sort-icon fe fe-chevron-down" /></span>
                            </th>
                            {sortHeight === false ?
                                <th onClick={() => { SortArrHeight(); ChangeSort() }}>
                                    <span className="node-manager__sort-title">
                                        Height
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </span>
                                </th>
                                :
                                <th onClick={() => { SortArrHeight_2(); ChangeSort_2() }}>
                                    <span className="node-manager__sort-title">
                                        Height
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                    </span>
                                </th>
                            }
                            {sortUptime === false ?
                                <th onClick={() => { SortArrUptime(); ChangeSortUptime() }}>
                                    <span className="node-manager__sort-title">
                                        Uptime
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </span>
                                </th>
                                :
                                <th onClick={() => { SortArrUptime_2(); ChangeSortUptime_2() }}>
                                    <span className="node-manager__sort-title">
                                        Uptime
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                    </span>
                                </th>
                            }
                            <th className="node-manager__sort_active">
                                <span className="node-manager__sort-title">
                                    Version
                                    <span className="node-manager__sort-icon fe fe-chevron-down" /></span>
                            </th>
                            {sortSubmitted === false ?
                                <th onClick={() => { SortArrSubmitted(); ChangeSortSubmitted() }}>
                                    <span className="node-manager__sort-title">
                                        Submitted
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </span>
                                </th>
                                :
                                <th onClick={() => { SortArrSubmitted_2(); ChangeSortSubmitted_2() }}>
                                    <span className="node-manager__sort-title">
                                        Submitted
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                    </span>
                                </th>
                            }
                            {sortRelay === false ?
                                <th onClick={() => { SortArrRelay(); ChangeSortRelay() }}>
                                    <span className="node-manager__sort-title">
                                        Relay
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </span>
                                </th>
                                :
                                <th onClick={() => { SortArrRelay_2(); ChangeSortRelay_2() }}>
                                    <span className="node-manager__sort-title">
                                        Relay
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                    </span>
                                </th>
                            }
                            {sortRelayH === false ?
                                <th onClick={() => { SortArrRelayH(); ChangeSortRelayH() }}>
                                    <span className="node-manager__sort-title">
                                    Relay/h
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </span>
                                </th>
                                :
                                <th onClick={() => { SortArrRelayH_2(); ChangeSortRelayH_2() }}>
                                    <span className="node-manager__sort-title">
                                    Relay/h
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                    </span>
                                </th>
                            }
                            {sortRestarted === false ?
                                <th onClick={() => { SortArrRestarted(); ChangeSortRestarted() }}>
                                    <span className="node-manager__sort-title">
                                        Restarted
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </span>
                                </th>
                                :
                                <th onClick={() => { SortArrRestarted_2(); ChangeSortRestarted_2() }}>
                                    <span className="node-manager__sort-title">
                                        Restarted
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                    </span>
                                </th>
                            }
                            {sortSyncStateChanged === false ?
                                <th onClick={() => { SortArrSyncStateChanged(); ChangeSortSyncStateChanged() }}>
                                    <span className="node-manager__sort-title">
                                        Status Changed
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </span>
                                </th>
                                :
                                <th onClick={() => { SortArrSyncStateChanged_2(); ChangeSortSyncStateChanged_2() }}>
                                    <span className="node-manager__sort-title">
                                        Status Changed
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                    </span>
                                </th>
                            }
                            <th>
                                <span className="node-manager__sort-title">
                                    Status
                                    <span className="node-manager__sort-icon fe fe-chevron-down" /></span>
                            </th>

                            <th>
                                <span className="node-manager__sort-title">
                                    <span className="node-manager__sort-icon fe fe-chevron-down" /></span>
                            </th>
                        </thead>
                        <tbody>
                            {getDataListSort.length === 0 && getDataListSortUptime.length === 0 && getDataListSortSubmitted.length === 0 && getDataListSortRelay.length === 0 && getDataListSortRestarted.length === 0 && getDataListSortSubmitted.length === 0 && getDataListSortSyncStateChanged.length === 0 && getDataListSortRelayH.length === 0 && getDataList.map((item, index) => {
                                return (
                                    <ListNodes key={index} item={item} />
                                )
                            })
                            }
                            {getDataListSort.length !== 0 && getDataListSort.map((item, index) => {
                                return (
                                    <ListNodes key={index} item={item} />
                                )
                            })
                            }
                            {getDataListSortUptime.length !== 0 && getDataListSortUptime.map((item, index) => {
                                return (
                                    <ListNodes key={index} item={item} />
                                )
                            })
                            }
                            {getDataListSortSubmitted.length !== 0 && getDataListSortSubmitted.map((item, index) => {
                                return (
                                    <ListNodes key={index} item={item} />
                                )
                            })
                            }
                            {getDataListSortRelay.length !== 0 && getDataListSortRelay.map((item, index) => {
                                return (
                                    <ListNodes key={index} item={item} />
                                )
                            })
                            }
                            {getDataListSortRestarted.length !== 0 && getDataListSortRestarted.map((item, index) => {
                                return (
                                    <ListNodes key={index} item={item} />
                                )
                            })
                            }
                            {getDataListSortSyncStateChanged.length !== 0 && getDataListSortSyncStateChanged.map((item, index) => {
                                return (
                                    <ListNodes key={index} item={item} />
                                )
                            })
                            }
                            {getDataListSortRelayH.length !== 0 && getDataListSortRelayH.map((item, index) => {
                                return (
                                    <ListNodes key={index} item={item} />
                                )
                            })
                            }

                        </tbody>
                    </table>
                }
            </div>
            <div className='pagination-css'>
                <ul className="pagination">
                    {
                        parseFloat(page - 1) > 0 && <Link to={"/nodes/" + parseFloat(page - 1)}><li > &lt; </li></Link>
                    }
                    {
                        parseFloat(page - 2) > 0 && <Link to={"/nodes/" + parseFloat(page - 2)}><li >{(page - 2) > 0 ? (page - 2) : 1}</li></Link>
                    }
                    {
                        parseFloat(page - 1) > 0 && <Link to={"/nodes/" + parseFloat(page - 1)}><li >{(page - 1) > 0 ? (page - 1) : 1}</li></Link>
                    }
                    <Link to={"/nodes/" + page}><li className='li-active'>{page}</li></Link>
                    {parseFloat(page + 1) <= Number((getPaginationList / 10).toFixed()) + 1 && <Link to={"/nodes/" + parseFloat(page + 1)}><li >{parseFloat(page) + 1}</li></Link>}
                    {parseFloat(page + 2) <= Number((getPaginationList / 10).toFixed()) + 1 && <Link to={"/nodes/" + parseFloat(page + 2)}><li >{parseFloat(page) + 2}</li></Link>}
                    {parseFloat(page + 1) <= Number((getPaginationList / 10).toFixed()) + 1 && <Link to={"/nodes/" + parseFloat(page + 1)}><li > &gt;</li></Link>}
                </ul>
            </div>
            {getDataList.map((item, index) => {
                return (
                    <ListNodesResponsive key={index} item={item} />
                )
            })}


        </div>
    );
}

export default SearchNode;
