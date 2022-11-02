import React, { useState, useEffect } from 'react';
import "Assets/scss/Nodes.scss"
import NodeStatus from './NodeStatus';
import MiningHistory from './MiningHistory';
import SearchNode from './SearchNode';
import AddNodes from './AddNodes';
import axios from 'axios';
import {
    FIND_COUNT_SYNC_QUERY_PERSIST_FINISHED, FIND_COUNT_SYNC_QUERY_SYNC_STARTED,
    FIND_COUNT_SYNC_QUERY_WAIT_FOR_SYNCING, FIND_COUNT_SYNC_QUERY_PRUNING_DB,
    FIND_COUNT_SYNC_QUERY_GENERATE_ID, FIND_COUNT_SYNC_QUERY_SYNC_FINISHED,
    FIND_COUNT_SYNC_QUERY_OFFLINE, FIND_COUNT_SYNC_QUERY_INSTALLED, Authorization,
    fetchDistinctSyncState
} from 'Components/Actions/index'
const endpoint = "https://nknx-amonit.herokuapp.com/graphql";

const Nodes = () => {
    const [hideShow, setHideShow] = useState(true)
    const [selectAddNodes, setSelectAddNodes] = useState(false)
    const [PERSISTFINISHED, setPERSISTFINISHED] = useState(0)
    const [SYNC_STARTED, setSYNC_STARTED] = useState(0)
    const [WAIT_FOR_SYNCING, setWAIT_FOR_SYNCING] = useState(0)
    const [PRUNING_DB, setPRUNING_DB] = useState(0)
    const [GENERATE_ID, setGENERATE_ID] = useState(0)
    const [SYNC_FINISHED, setSYNC_FINISHED] = useState(0)
    const [INSTALLED, setINSTALLED] = useState(0)
    const [OFFLINE, setOFFLINE] = useState(0)
    const [arrDistinceState, setArrDistinceState] = useState([])
    const [arrValueDistinceState, setValueArrDistinceState] = useState([])
    let totalNodeStatus = 0

    const SettingHideShow = () => {
        setHideShow(!hideShow)
    }

    const SettingHideShowAddNodes = (res) => {
        setSelectAddNodes(res)
    }
    const SettingCloseAddNodes = (res) => {
        setSelectAddNodes(res)
    }
    useEffect( () => {
        axios({
            url: "https://nknx-amonit.herokuapp.com/api/nodes/dashboard/distinctSyncState",
            method: 'get',
            headers: {
                'Authorization': Authorization
            }
        })
            // axios.get(`https://nknx-amonit.herokuapp.com/api/nodes/dashboard/distinctSyncState`)
            .then((result) => {
                
                setArrDistinceState(result.data.data)
                for (let index = 0; index < result.data.data.length; index++) {
                    const FIND_COUNT_SYNCSTATE = `
    {
        nodes(
          filters: {
                syncState:{
                in : ["${result.data.data[index]}"]
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
                    axios({
                        url: endpoint,
                        method: 'post',
                        data: {
                            query: FIND_COUNT_SYNCSTATE
                        }
                        ,
                        headers: {
                            'Authorization': Authorization
                        }
                    }).then((result1) => {
                        // setPERSISTFINISHED(result.data.data.nodes.meta.pagination.total)
                        setValueArrDistinceState(arrValueDistinceState => [...arrValueDistinceState, { state: result.data.data[index], value: result1.data.data.nodes.meta.pagination.total, setName: result.data.data[index], status: result.data.data[index] === "PERSIST_FINISHED" ? true : false }])
                    })
                    .catch(error=> console.log(error))
                }
            })
        // console.log(arrDistinceState)
        // axios({
        //     url: endpoint,
        //     method: 'post',
        //     data: {
        //         query: FIND_COUNT_SYNC_QUERY_PERSIST_FINISHED
        //     }
        //     ,
        //     headers: {
        //         'Authorization': Authorization
        //     }
        // }).then((result) => {
        //     setPERSISTFINISHED(result.data.data.nodes.meta.pagination.total)
        // })
        //     .then(axios({
        //         url: endpoint,
        //         method: 'post',
        //         data: {
        //             query: FIND_COUNT_SYNC_QUERY_WAIT_FOR_SYNCING
        //         }
        //         ,
        //         headers: {
        //             'Authorization': Authorization
        //         }
        //     }).then((result) => {
        //         setWAIT_FOR_SYNCING(result.data.data.nodes.meta.pagination.total)
        //     }))
        //     .then(axios({
        //         url: endpoint,
        //         method: 'post',
        //         data: {
        //             query: FIND_COUNT_SYNC_QUERY_SYNC_STARTED
        //         }
        //         ,
        //         headers: {
        //             'Authorization': Authorization
        //         }
        //     }).then((result) => {
        //         setSYNC_STARTED(result.data.data.nodes.meta.pagination.total)
        //     }))
        //     .then(axios({
        //         url: endpoint,
        //         method: 'post',
        //         data: {
        //             query: FIND_COUNT_SYNC_QUERY_PRUNING_DB
        //         }
        //         ,
        //         headers: {
        //             'Authorization': Authorization
        //         }
        //     }).then((result) => {
        //         setPRUNING_DB(result.data.data.nodes.meta.pagination.total)
        //     }))
        //     .then(axios({
        //         url: endpoint,
        //         method: 'post',
        //         data: {
        //             query: FIND_COUNT_SYNC_QUERY_OFFLINE
        //         }
        //         ,
        //         headers: {
        //             'Authorization': Authorization
        //         }
        //     }).then((result) => {
        //         setOFFLINE(result.data.data.nodes.meta.pagination.total)
        //     }))
        //     .then(axios({
        //         url: endpoint,
        //         method: 'post',
        //         data: {
        //             query: FIND_COUNT_SYNC_QUERY_GENERATE_ID
        //         }
        //         ,
        //         headers: {
        //             'Authorization': Authorization
        //         }
        //     }).then((result) => {
        //         setGENERATE_ID(result.data.data.nodes.meta.pagination.total)
        //     }))
        //     .then(axios({
        //         url: endpoint,
        //         method: 'post',
        //         data: {
        //             query: FIND_COUNT_SYNC_QUERY_SYNC_FINISHED
        //         }
        //         ,
        //         headers: {
        //             'Authorization': Authorization
        //         }
        //     }).then((result) => {
        //         setSYNC_FINISHED(result.data.data.nodes.meta.pagination.total)
        //     }))
        //     .then(axios({
        //         url: endpoint,
        //         method: 'post',
        //         data: {
        //             query: FIND_COUNT_SYNC_QUERY_INSTALLED
        //         }
        //         ,
        //         headers: {
        //             'Authorization': Authorization
        //         }
        //     }).then((result) => {
        //         setINSTALLED(result.data.data.nodes.meta.pagination.total)
        //     }))
    }, []);
    const TotalNodes = () => {
        for (let index = 0; index < arrValueDistinceState.length; index++) {
            totalNodeStatus += arrValueDistinceState[index].value
        }
        return totalNodeStatus
    }
    totalNodeStatus = TotalNodes()
    const FindIndexPersistFinished = () => {
        const index = arrValueDistinceState.findIndex(i => i.state === "PERSIST_FINISHED")
        // const find =  arrValueDistinceState[index].value
        return index
    }

    return (
        <div className='content'>
            <div className='content-wrapper content-wrapper_centered'>
                <div className="page__node-manager-heading">
                    <div className="page__node-manager-left">
                        <h1>My Nodes ({totalNodeStatus})</h1>
                        <div className="node-online">
                            <span className="node-online__status node-online__status_positive" />
                            <span className="node-online__title">
                                {arrValueDistinceState[FindIndexPersistFinished()] ? arrValueDistinceState[FindIndexPersistFinished()].value : 0} Nodes are mining!
                            </span>
                        </div>
                    </div>
                    <div className="page__node-manager-right" onClick={SettingHideShow}>
                        <button className="button page__node-manager-btn button_theme_white button_size_large button_radius_medium button_width_default">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="button__icon">
                                <path d="M3 2a1 1 0 00-2 0v18a3 3 0 003 3h18a1 1 0 100-2H4a1 1 0 01-1-1V2z" fill="#5769DF" />
                                <path d="M5.366 11.987c1.852 1.518 3.415 2.118 4.872 1.998 1.413-.115 2.501-.906 3.356-1.536l.079-.059c.888-.655 1.564-1.154 2.38-1.328.758-.162 1.8-.06 3.399.988a1 1 0 001.096-1.673c-1.9-1.246-3.484-1.576-4.913-1.271-1.254.267-2.258 1.012-3.054 1.604l-.175.13c-.895.66-1.557 1.089-2.331 1.152-.731.06-1.793-.2-3.441-1.552a1 1 0 10-1.268 1.547z" fill="#5769DF" />
                            </svg>
                            {hideShow === true ?
                                <span>
                                    Hide summary
                                </span>
                                :
                                <span>
                                    Show summary
                                </span>
                            }
                        </button>
                    </div>
                </div>
                <div className='grid'>
                    {hideShow === true &&
                        <NodeStatus
                            arrValueDistinceState={arrValueDistinceState}
                            PERSISTFINISHED={PERSISTFINISHED}
                            WAIT_FOR_SYNCING={WAIT_FOR_SYNCING}
                            SYNC_STARTED={SYNC_STARTED}
                            PRUNING_DB={PRUNING_DB}
                            GENERATE_ID={GENERATE_ID}
                            SYNC_FINISHED={SYNC_FINISHED}
                            INSTALLED={INSTALLED}
                            OFFLINE={OFFLINE}
                        />
                    }
                    {hideShow === true &&
                        <MiningHistory />
                    }
                    <SearchNode
                        arrValueDistinceState={arrValueDistinceState}
                        SettingHideShowAddNodes={SettingHideShowAddNodes}
                        selectAddNodes={selectAddNodes}
                        PERSISTFINISHED={PERSISTFINISHED}
                        WAIT_FOR_SYNCING={WAIT_FOR_SYNCING}
                        SYNC_STARTED={SYNC_STARTED}
                        PRUNING_DB={PRUNING_DB}
                        GENERATE_ID={GENERATE_ID}
                        SYNC_FINISHED={SYNC_FINISHED}
                        INSTALLED={INSTALLED}
                        OFFLINE={OFFLINE}
                        totalNodeStatus={totalNodeStatus}
                    />
                    {selectAddNodes === true && <AddNodes SettingCloseAddNodes={SettingCloseAddNodes} />}
                </div>
            </div>
        </div>
    );
}

export default Nodes;
