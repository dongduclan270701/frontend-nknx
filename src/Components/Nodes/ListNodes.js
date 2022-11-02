import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import swal from 'sweetalert';

const ListNodes = (props) => {
    const { item } = props
    const [ valueCopy, setValueCopy] = useState({value: "",copied:false})
    
    const nf = new Intl.NumberFormat()
    var now = new Date(item.attributes.createdAt);
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    
    function secondsToHms(d) {
        d = Number(d);
        var dd = Math.floor(d / 86400);
        var h = Math.floor(d % 86400 / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var ddDisplay = dd > 0 ? dd.toString().padStart(2, '0') + "d, " : "00d, ";
        var hDisplay = h > 0 ? h.toString().padStart(2, '0') + "h:" : "00h:";
        var mDisplay = m > 0 ? m.toString().padStart(2, '0') + "m:" : "00m:";
        var sDisplay = s > 0 ? s.toString().padStart(2, '0') + "s" : "00s";
        return ddDisplay + hDisplay + mDisplay + sDisplay;
    }
    return (
        
        <tr className='node-manager_state'>
            <td>
                <div className="checkbox node-manager__checkbox checkbox_theme_">
                    <input type="checkbox" className="checkbox__control" defaultValue="[object Object]" />
                    <label className="checkbox__label checkbox__label_theme_" />
                </div>
            </td>
            <td className="text_color_primary"><a target="_blank" href={"http://nstatus.org/?ip=" + item.attributes.ip}>{item.attributes.ip}</a>
            <CopyToClipboard text={item.attributes.ip}
          onCopy={() => setValueCopy({value: item.attributes.ip,copied: true})}>
          <button onClick={valueCopy.copied === true && swal("Copied", "You was copied ip: " + item.attributes.ip, "success") && setValueCopy({value: item.attributes.ip,copied: false})} style={{border: "none", backgroundColor:"white"}}><svg style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
        </CopyToClipboard>
            </td>
            <td>{item.attributes.height}</td>
            <td>{secondsToHms(item.attributes.uptime)}</td>
            <td>{item.attributes.version}</td>
            <td>{item.attributes.proposalSubmitted}</td>
            <td>{item.attributes.relayMessageCount}</td>
            <td>{item.attributes.relayHourly}</td>
            <td>{item.attributes.restarted}</td>
            <td>{item.attributes.syncStateChanged}</td>
            <td>
                {item.attributes.syncState === "PERSIST_FINISHED" &&
                    <span className="node-status node-status_state_mining" style={{ color: "#67b7dc" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                            </polyline>
                        </svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                {item.attributes.syncState === "PRUNING_DB" &&
                    <span className="node-status node-status_state_mining" style={{ color: "rgb(128 103 220)" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                            </polyline>
                        </svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                {item.attributes.syncState === "GENERATE_ID" &&
                    <span className="node-status node-status_state_mining" style={{ color: "rgb(163 103 220)" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                            </polyline>
                        </svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                {item.attributes.syncState === "WAIT_FOR_SYNCING" &&
                    <span className="node-status node-status_state_mining" style={{ color: "rgb(103 113 220)" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                            </polyline>
                        </svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                {item.attributes.syncState === "SYNC_STARTED" &&
                    <span className="node-status node-status_state_mining" style={{ color: "rgb(103 148 220)" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                            </polyline>
                        </svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                {item.attributes.syncState === "SYNC_FINISHED" &&
                    <span className="node-status node-status_state_mining" style={{ color: "rgb(199 103 220)" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                            </polyline>
                        </svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                {item.attributes.syncState === "INSTALLED" &&
                    <span className="node-status node-status_state_mining" style={{ color: "#dc67ce" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                            </polyline>
                        </svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                {item.attributes.syncState === "OFFLINE" &&
                    <span className="node-status node-status_state_mining" style={{ color: "gray" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                {item.attributes.syncState !== "OFFLINE" && 
                item.attributes.syncState !== "INSTALLED" &&
                item.attributes.syncState !== "PERSIST_FINISHED" &&
                item.attributes.syncState !== "SYNC_FINISHED" &&
                item.attributes.syncState !== "SYNC_STARTED" &&
                item.attributes.syncState !== "WAIT_FOR_SYNCING" &&
                item.attributes.syncState !== "GENERATE_ID" &&
                item.attributes.syncState !== "PRUNING_DB" &&
                    <span className="node-status node-status_state_mining" style={{ color: "rgb(199 103 220)" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                        &ensp;
                        <span className="node-status__text">
                            {item.attributes.syncState}
                        </span>
                    </span>
                }
                
            </td>
            <td>
                <div className="v-popover" popover="[object Object]">
                    <div className="trigger" style={{ display: 'inline-block' }}>
                        <div className="popover-more popover-more_horizontal tooltip-target">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="popover-more-icon popover-more-icon_horizontal">
                                <path d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z" fill="#757981" />
                            </svg>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default ListNodes;
