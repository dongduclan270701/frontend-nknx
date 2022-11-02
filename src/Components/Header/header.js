import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "Assets/scss/header.scss"
import Logo from "Assets/Images/step_nkn1.png"

const Header = () => {
    const [selectMenu, setSelectMenu] = useState(true)
    const [selectAccountMenu, setSelectAccountMenu] = useState(false)
    const SettingSelectMenu = () => {
        setSelectMenu(!selectMenu)
    }
    const SettingSelectAccountMenu = () => {
        setSelectAccountMenu(!selectAccountMenu)
    }
    return (
        <>
            <aside className={selectMenu === false ? "sidebar sidebar_expanded" : "sidebar"}>
            <img className="sidebar__logo" src={Logo} alt="Logo NKN" />
                <div className="sidebar__nav">
                    <Link to="/homepage" className="sidebar__item sidebar__item_active">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sidebar__icon">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.621 2.707a3 3 0 00-4.242 0l-1.672 1.671a3 3 0 000 4.243l1.672 1.672a3 3 0 004.242 0l1.672-1.672a3 3 0 000-4.243L19.62 2.707zM16.793 4.12a1 1 0 011.414 0l1.672 1.672a1 1 0 010 1.414l-1.672 1.671a1 1 0 01-1.414 0l-1.673-1.67a1 1 0 010-1.414l1.672-1.672zM5 2a3 3 0 00-3 3v3a3 3 0 003 3h3a3 3 0 003-3V5a3 3 0 00-3-3H5zM4 5a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM2 16a3 3 0 013-3h3a3 3 0 013 3v3a3 3 0 01-3 3H5a3 3 0 01-3-3v-3zm3-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H5zm11-2a3 3 0 00-3 3v3a3 3 0 003 3h3a3 3 0 003-3v-3a3 3 0 00-3-3h-3zm-1 3a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" fill="#5769DF" />
                        </svg>
                    </Link>
                    <Link to="/wallets" className="sidebar__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sidebar__icon">
                            <path d="M18 15a1 1 0 100-2 1 1 0 000 2z" fill="#A2A5B9" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 2H4a3 3 0 00-3 3v14a3 3 0 003 3h16a3 3 0 003-3V9a3 3 0 00-3-3h-1V5a3 3 0 00-3-3zM4 4a1 1 0 000 2h13V5a1 1 0 00-1-1H4zm0 4c-.35 0-.687-.06-1-.17V19a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1H4z" fill="#A2A5B9" />
                        </svg>
                    </Link>
                    <Link to="/nodes/1" className="sidebar__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sidebar__icon">
                            <path d="M9 18a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm1-9a1 1 0 10-2 0v2a1 1 0 102 0V9zm2-3a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1zm4 2a1 1 0 10-2 0v3a1 1 0 102 0V8z" fill="#1E1E1E" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 5a3 3 0 013-3h12a3 3 0 013 3v8.764l1.894 3.789c.07.139.106.292.106.447v1a3 3 0 01-3 3H4a3 3 0 01-3-3v-1a1 1 0 01.106-.447L3 13.763V5zm1.618 10L3 18.236V19a1 1 0 001 1h16a1 1 0 001-1v-.764L19.382 15H4.618zM5 13h14V5a1 1 0 00-1-1H6a1 1 0 00-1 1v8z" fill="#1E1E1E" />
                        </svg>
                    </Link>
                </div>
                <img className="sidebar__logo log-res" src={Logo} alt="Logo NKN" />
                <div className="sidebar__bottom">
                    <Link to="/notifications" className="notifications-button sidebar__notifications">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="notifications-button__icon">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.995 3.13a2 2 0 10-3.99 0c-1.564.222-2.757.729-3.653 1.508C5.11 5.72 4.608 7.182 4.332 8.601c-.139.71-.228 1.451-.312 2.16l-.003.025c-.085.712-.166 1.395-.29 2.06-.248 1.346-.65 2.503-1.472 3.421a1 1 0 00.263 1.543c1.63.899 3.536 1.514 5.538 1.859a4.023 4.023 0 00.685 1.65 4 4 0 007.203-1.65c2.002-.345 3.908-.96 5.539-1.859a1 1 0 00.262-1.543c-.822-.918-1.224-2.075-1.473-3.42-.123-.666-.204-1.349-.289-2.06l-.003-.027c-.085-.708-.173-1.448-.312-2.16-.276-1.418-.778-2.88-2.02-3.962-.896-.78-2.089-1.286-3.653-1.508zm-.227 16.805a23.883 23.883 0 01-3.536 0 2.006 2.006 0 00.843.838 2 2 0 002.693-.838zM12 18c-2.683 0-5.327-.49-7.488-1.436.646-1.066.975-2.232 1.182-3.354.135-.73.223-1.468.306-2.16l.006-.053c.086-.72.167-1.388.289-2.014.244-1.256.627-2.19 1.37-2.836C8.405 5.503 9.671 5 12 5s3.595.503 4.335 1.147c.742.646 1.126 1.58 1.37 2.836.122.626.203 1.293.289 2.014l.006.053c.083.692.17 1.43.305 2.16.208 1.122.537 2.288 1.183 3.354C17.328 17.51 14.683 18 12 18z" fill="#A2A5B9" />
                        </svg>
                    </Link>
                    <div className="avatar-dropdown sidebar__avatar">
                        <a className="avatar-dropdown__link">
                            <div className="avatar-dropdown__avatar" onClick={SettingSelectAccountMenu}>
                                ka
                            </div>
                            <div className='drop-pc'>
                                <ul className="avatar-dropdown__menu" style={selectAccountMenu === false ? { display: "none" } : {}}>
                                    <li>
                                        <Link to="/user/profile/:id" className="avatar-dropdown__dd-link">
                                            Account</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="avatar-dropdown__dd-link">
                                            Billing</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="avatar-dropdown__dd-link">
                                            Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>
            </aside>
            {/* <div className={selectMenu === false ? "headerbar headerbar_collapsed" : "headerbar"}>
                <div className="headerbar__left" onClick={SettingSelectMenu}>
                    <span className="headerbar__item">
                        <div className={selectMenu === false ? "headerbar__toggle arrow" : "headerbar__toggle"}>
                            <svg viewBox="40 40 150 120">
                                <path id="top" d="
  M 40, 80
  C 40, 80 120, 80 140, 80
  C180, 80 180, 20  90, 80
  C 60,100  30,120  30,120
" />
                                <path id="middle" d="
  M 40,100
  L140,100
" />
                                <path id="bottom" d="
  M 40,120
  C 40,120 120,120 140,120
  C180,120 180,180  90,120
  C 60,100  30, 80  30, 80
" />
                            </svg>
                        </div>
                    </span>
                </div>
                <img className="headerbar__logo" src={Logo} alt="Logo NKN"></img>
                
                
                <div className="headerbar__right">
                    <a href="/notifications" className="notifications-button headerbar__notifications">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="notifications-button__icon">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.995 3.13a2 2 0 10-3.99 0c-1.564.222-2.757.729-3.653 1.508C5.11 5.72 4.608 7.182 4.332 8.601c-.139.71-.228 1.451-.312 2.16l-.003.025c-.085.712-.166 1.395-.29 2.06-.248 1.346-.65 2.503-1.472 3.421a1 1 0 00.263 1.543c1.63.899 3.536 1.514 5.538 1.859a4.023 4.023 0 00.685 1.65 4 4 0 007.203-1.65c2.002-.345 3.908-.96 5.539-1.859a1 1 0 00.262-1.543c-.822-.918-1.224-2.075-1.473-3.42-.123-.666-.204-1.349-.289-2.06l-.003-.027c-.085-.708-.173-1.448-.312-2.16-.276-1.418-.778-2.88-2.02-3.962-.896-.78-2.089-1.286-3.653-1.508zm-.227 16.805a23.883 23.883 0 01-3.536 0 2.006 2.006 0 00.843.838 2 2 0 002.693-.838zM12 18c-2.683 0-5.327-.49-7.488-1.436.646-1.066.975-2.232 1.182-3.354.135-.73.223-1.468.306-2.16l.006-.053c.086-.72.167-1.388.289-2.014.244-1.256.627-2.19 1.37-2.836C8.405 5.503 9.671 5 12 5s3.595.503 4.335 1.147c.742.646 1.126 1.58 1.37 2.836.122.626.203 1.293.289 2.014l.006.053c.083.692.17 1.43.305 2.16.208 1.122.537 2.288 1.183 3.354C17.328 17.51 14.683 18 12 18z" fill="#A2A5B9" />
                        </svg>
                    </a>
                    <div className="avatar-dropdown headerbar__item">
                        <a className="avatar-dropdown__link" onClick={SettingSelectAccountMenu}>
                            <div className="avatar-dropdown__avatar">
                                ka
                            </div>
                            <div >
                                <ul className="avatar-dropdown__menu" style={selectAccountMenu === false ? { display: "none" } : {}}>
                                    <li>
                                        <Link to="/user/profile/:id" className="avatar-dropdown__dd-link">
                                            Account</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="avatar-dropdown__dd-link">
                                            Billing</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="avatar-dropdown__dd-link">
                                            Logout</Link>
                                    </li>
                                </ul>
                            </div>

                        </a>
                    </div>
                </div>
            </div> */}

        </>
    );
}

export default Header;
