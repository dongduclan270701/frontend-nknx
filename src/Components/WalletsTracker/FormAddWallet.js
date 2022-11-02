import React, { useState, useEffect } from 'react';
import 'Assets/scss/FormAddWallet.scss'
import http from 'http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const FormAddWallet = (props) => {
    const { toggleDefault, changeToggle_1 } = props
    const [settingStyle, setSettingStyle] = useState({ display: "none" })
    const [settingSingMulPageToggle, setSettingSingMulPageToggle] = useState(false)
    const [settingSingMulPageStyleToggle, setSettingSingMulPageStyleToggle] = useState("tabs__item_active")
    const [getDataInput, setGetDataInput] = useState("")
    useEffect(() => {
        if (toggleDefault === true) {
            setSettingStyle({})
        }
        if (toggleDefault === false) {
            setSettingStyle({ display: "none" })
        }
    }, [toggleDefault]);
    const settingStyleForm = () => {
        setSettingStyle({ display: "none" })
        changeToggle_1(true)
    }
    const settingForm = () => {
        setSettingSingMulPageToggle(!settingSingMulPageToggle)
    }
    const createNewWallet = async (data) => {
        await http.post("/api/wallets", data);
    };
    const data = JSON.stringify({
        "data": {
            "address": getDataInput
        }
    })
    const handleChange = (e) => {
        setGetDataInput(e.target.value)
    }
    const handleSubmit = () => {
        if (getDataInput !== "") {
            createNewWallet(data)
            setGetDataInput("")
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Yes! Add it's working ^^!",
                showConfirmButton: false,
                timer: 1500
            })
            console.log(getDataInput)
            
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
    return (

        <div className="modal-wrapper" style={settingStyle}>
            <div className="modal-wrapper__container">
                <div className="card modal-card col_12 col_start_auto col_end_auto row_1 card_padding_normal card_overflow" style={{}}>
                    <div className="card__header card__header_modal">
                        <div className="card__header-left">
                            <div className="card__subtitle">
                                Wallet Tracker
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="tooltip-icon has-tooltip" data-original-title="null">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.875 10a8.125 8.125 0 1116.25 0 8.125 8.125 0 01-16.25 0z" fill="#4B4DED" fillOpacity=".2" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.804 5.863a3.125 3.125 0 111.821 5.949v.063a.625.625 0 11-1.25 0v-.625c0-.345.28-.625.625-.625A1.875 1.875 0 108.125 8.75a.625.625 0 11-1.25 0 3.125 3.125 0 011.93-2.887z" fill="#4B4DED" />
                                    <path d="M10 15.313a.937.937 0 100-1.875.937.937 0 000 1.874z" fill="#4B4DED" />
                                </svg>
                            </div>
                            <h3 className="card__title card__title_modal">
                                Add Wallet
                            </h3>
                        </div>
                        <div className="card__header-controls" onClick={settingStyleForm}>
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
                            {settingSingMulPageToggle === false ?
                                <div className="tabs">
                                    <div className="tabs__header">
                                        <div className="tabs__container">
                                            <div className={"tabs__item tabs__item_type_ " + settingSingMulPageStyleToggle}>
                                                Single
                                            </div>
                                            <div className="tabs__item tabs__item_type_ " onClick={settingForm}>
                                                Multiple
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab">
                                        <div className="modal-content">
                                            <div className="modal-content__body">
                                                <div className="control-wrapper col_3">
                                                    <label className="control-wrapper__title">
                                                        Wallet Address</label>
                                                    <div className="input">
                                                        <input type="text" value={getDataInput} placeholder="Enter your NKN wallet address" className="input__controller input__controller_size_ input__controller_size_" onChange={(e) => handleChange(e)}/>
                                                    </div>
                                                    <div className="control-wrapper__error control-wrapper__error_visible">
                                                    </div>
                                                </div>
                                                <div className="control-wrapper col_3">
                                                    <label className="control-wrapper__title">
                                                        Wallet Label</label>
                                                    <div className="input">
                                                        <input type="text" placeholder="Enter your NKN wallet label" className="input__controller input__controller_size_ input__controller_size_" />
                                                    </div>
                                                    <div className="control-wrapper__error control-wrapper__error_visible">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='tabs'>
                                    <div className="tabs__header">
                                        <div className="tabs__container">
                                            <div className={"tabs__item tabs__item_type_ "} onClick={settingForm}>
                                                Single
                                            </div>
                                            <div className={"tabs__item tabs__item_type_ " + settingSingMulPageStyleToggle}>
                                                Multiple
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab">
                                        <div className="modal-content">
                                            <div className="modal-content__body">
                                                <div className="control-wrapper col_6">
                                                    <label className="control-wrapper__title">
                                                        Wallet Addresses (comma separated)</label>
                                                    <div className="textarea">
                                                        <textarea type="text" rows={5} placeholder="Enter your NKN wallet addresses" className="textarea__controller" defaultValue={""} />
                                                    </div>
                                                    <div className="control-wrapper__error control-wrapper__error_visible">
                                                    </div>
                                                </div>
                                                <div className="control-wrapper col_6">
                                                    <label className="control-wrapper__title">
                                                        Name for Wallets (optional)</label>
                                                    <div className="input">
                                                        <input type="text" placeholder="Enter your NKN wallets label" className="input__controller input__controller_size_ input__controller_size_" />
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

export default FormAddWallet;
