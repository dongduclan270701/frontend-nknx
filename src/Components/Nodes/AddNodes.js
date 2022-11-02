import React, { useState } from 'react';
import http from 'http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const AddNodes = (props) => {
    const { SettingCloseAddNodes } = props
    const [settingSingMul, setSettingSingMul] = useState(true)
    const [getDataInput, setGetDataInput] = useState("")
    const SelectCloseAddNodes = () => {
        SettingCloseAddNodes(false)
    }
    const SettingSelectSingMul = () => {
        setSettingSingMul(!settingSingMul)

    }
    const createNewPet = async (data) => {
        await http.post("/api/nodes", data);
    };
    const data = JSON.stringify({
        "data": {
            "ip": getDataInput
        }
    })
    const handleChange = (e) => {
        setGetDataInput(e.target.value)
    }
    const handleSubmit = () => {
        if (getDataInput !== "") {
            createNewPet(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Yes! Add it's working ^^!",
                showConfirmButton: false,
                timer: 1500
            })
            setGetDataInput("")
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Ip empty, try again! ^^!',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
        
    }


    const IP_VALIDATE = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;

    const IP_EXTRACT = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/gm;
    const text = "20.231.103.212,20.7.32.128,20.127.84.176,20.7.35.91,20.232.113.75"
    const IPs = (text).match(IP_EXTRACT);
    const validIP = IPs.filter(ip => IP_VALIDATE.test(ip))
    return (
        <div className="modal-wrapper" style={{}}>
            <div className="modal-wrapper__container">
                <div className="card modal-card col_12 col_start_auto col_end_auto row_1 card_padding_normal card_overflow" style={{ width: '720px' }}>
                    <div className="card__header card__header_modal">
                        <div className="card__header-left">
                            <div className="card__subtitle">
                                Node Manager
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="tooltip-icon has-tooltip" data-original-title="null">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.875 10a8.125 8.125 0 1116.25 0 8.125 8.125 0 01-16.25 0z" fill="#4B4DED" fillOpacity=".2" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.804 5.863a3.125 3.125 0 111.821 5.949v.063a.625.625 0 11-1.25 0v-.625c0-.345.28-.625.625-.625A1.875 1.875 0 108.125 8.75a.625.625 0 11-1.25 0 3.125 3.125 0 011.93-2.887z" fill="#4B4DED" />
                                    <path d="M10 15.313a.937.937 0 100-1.875.937.937 0 000 1.874z" fill="#4B4DED" />
                                </svg>
                            </div>
                            <h3 className="card__title card__title_modal">
                                Add Nodes
                            </h3>
                        </div>
                        <div className="card__header-controls" onClick={SelectCloseAddNodes}>
                            <div className="modal-card__close">
                                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" className="modal-card__close-icon">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.167 6.37a.95.95 0 010 1.371l-18 17.452a1.022 1.022 0 01-1.414 0 .949.949 0 010-1.371l18-17.452a1.022 1.022 0 011.414 0z" fill="#4A4A68" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.753 6.37a1.022 1.022 0 011.414 0l18 17.452c.39.378.39.992 0 1.37a1.022 1.022 0 01-1.414 0l-18-17.45a.949.949 0 010-1.372z" fill="#4A4A68" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content card__body">
                        <div className="modal-content__body">
                            {settingSingMul === false &&
                                <div className="tabs">
                                    <div className="tabs__header">
                                        <div className="tabs__container">
                                            <div className="tabs__item tabs__item_active tabs__item_type_">
                                                Single
                                            </div>
                                            <div className="tabs__item tabs__item_type_" onClick={SettingSelectSingMul}>
                                                Multiple
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab">
                                        <div className="modal-content">
                                            <div className="modal-content__body">
                                                <div className="control-wrapper col_3">
                                                    <label className="control-wrapper__title">
                                                        IP Address</label>
                                                    <div className="input">
                                                        <input type="text" value={getDataInput} placeholder="Enter your node's ip here" className="input__controller input__controller_size_ input__controller_size_" onChange={(e) => handleChange(e)} />
                                                    </div>
                                                    <div className="control-wrapper__error control-wrapper__error_visible">
                                                    </div>
                                                </div>
                                                <div className="control-wrapper col_3">
                                                    <label className="control-wrapper__title">
                                                        Node Label</label>
                                                    <div className="input">
                                                        <input type="text" placeholder="Enter your NKN node label" className="input__controller input__controller_size_ input__controller_size_" />
                                                    </div>
                                                    <div className="control-wrapper__error control-wrapper__error_visible">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }
                            {settingSingMul === true &&
                                <div className="tabs">
                                    <div className="tabs__header">
                                        <div className="tabs__container">
                                            <div className="tabs__item  tabs__item_type_" onClick={SettingSelectSingMul}>
                                                Single
                                            </div>
                                            <div className="tabs__item tabs__item_active tabs__item_type_">
                                                Multiple
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab">
                                        <div className="modal-content">
                                            <div className="modal-content__body">
                                                <div className="control-wrapper col_6">
                                                    <label className="control-wrapper__title">
                                                        IP Addresses (comma separated)</label>
                                                    <div className="textarea">
                                                        <textarea type="text" rows={5} placeholder="Enter your NKN wallet addresses" className="textarea__controller" defaultValue={""} />
                                                    </div>
                                                    <div className="control-wrapper__error control-wrapper__error_visible">
                                                    </div>
                                                </div>
                                                <div className="control-wrapper col_6">
                                                    <label className="control-wrapper__title">
                                                        Name for Nodes (optional)</label>
                                                    <div className="input">
                                                        <input type="text" placeholder="Enter your NKN node label" className="input__controller input__controller_size_ input__controller_size_" />
                                                    </div>
                                                    <div className="control-wrapper__error control-wrapper__error_visible">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="modal-content__footer modal-content__footer_margin">
                            <button href className="button button_theme_text button_size_large button_radius_medium button_width_default">
                                Cancel
                            </button>
                            <button href className="button button_theme_primary button_size_large button_radius_medium button_width_default" onClick={handleSubmit}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddNodes;
