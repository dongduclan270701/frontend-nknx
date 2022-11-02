import React, { useState, useEffect } from 'react';
import "Assets/scss/Remove.scss"
import axios from 'axios'
import {
    Authorization
} from 'Components/Actions/index'
const endpoint = "https://nknx-amonit.herokuapp.com/graphql";

const Remove = (props) => {
    const { toggleRemove, item } = props
    const [ deToggleRemove, setDeToggleRemove ] = useState({display:"none"})
    const FIND_COUNT_REMOVE_ID = `
    mutation {
        deleteWallet(
          id:${item.id}
        ) {
          data {
            id
            attributes {
              address
                  }
                }
              }
            }
`
    useEffect(() => {
        if (toggleRemove === true) {
            setDeToggleRemove({})
        }
        if (toggleRemove === false) {
            setDeToggleRemove({ display: "none" })
        }
    }, [toggleRemove]);
    const submitDelete = () => {
        axios({
            url: endpoint,
            method: 'post',
            data: {
                query: FIND_COUNT_REMOVE_ID
            },
            headers: {
                'Authorization': Authorization
            }
        }).then((result) => {
            console.log(result)
        })
    }
    return (
        <div className="wrapper" style={deToggleRemove} onClick={submitDelete}>
            <div className="tooltip-inner popover-inner" style={{ position: 'relative' }}>
                <div>
                    <div className="popover_actions">
                        <div className="popover__actions">
                            <div className="popover__actions-item">
                                <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" className="popover__actions-icon">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 3h11a.5.5 0 010 1H3a.5.5 0 110-1zm4 3a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 017 6zm3 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 0110 6z" fill="#ED7470" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 3a.5.5 0 01.5.5V13h8V3.5a.5.5 0 111 0V13a1 1 0 01-1 1h-8a1 1 0 01-1-1V3.5A.5.5 0 014 3z" fill="#ED7470" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.94 1.44A1.5 1.5 0 017 1h3a1.5 1.5 0 011.5 1.5v1a.5.5 0 01-1 0v-1A.5.5 0 0010 2H7a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1c0-.398.158-.78.44-1.06z" fill="#ED7470" />
                                </svg>
                                Remove
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-8859cc6c tabIndex={-1} className="resize-observer">
                    <object aria-hidden="true" tabIndex={-1} type="text/html" data="about:blank" />
                </div>
            </div>
            <div className="tooltip-arrow popover-arrow" style={{ left: '63px' }} />
        </div>
    );
}

export default Remove;
