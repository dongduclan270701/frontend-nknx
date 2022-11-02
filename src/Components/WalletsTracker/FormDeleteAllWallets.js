import React, { useState, useEffect } from 'react';
import 'Assets/scss/FormDeleteWallets.scss'

const FormDeleteWallets = (props) => {
    const { toggleDelete } = props
    const [settingStyle, setSettingStyle] = useState({ display: "none" })
    useEffect(() => {
        if (toggleDelete === true) {
            setSettingStyle({})
        }
        if (toggleDelete === false) {
            setSettingStyle({ display: "none" })
        }
    }, [toggleDelete]);
    const settingStyleForm = () => {
        setSettingStyle({ display: "none" })
    }
    return (

        <div className="modal-wrapper" style={settingStyle}>
            {/* {console.log(settingStyle)} */}
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
                                Delete All Wallets
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
                            <div className="modal-card__descr">
                                Attention! All your wallets are going to be removed from NKNx - are
                                you sure? This change is persistent and cannot be undone. All
                                history-data will get removed, too.
                            </div>
                        </div>
                        <div className="modal-content__footer modal-content__footer_margin">
                            <button className="button button_theme_text button_size_large button_radius_medium button_width_default">
                                Cancel
                            </button>
                            <button className="button button_theme_primary button_size_large button_radius_medium button_width_default">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>

    );
}

export default FormDeleteWallets;
