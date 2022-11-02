import React, { useState} from 'react';
import Remove from './Remove';

const ListWallet = (props) => {
    const {item,totalUSD} =props
    const [toggleRemove, setToggleRemove] = useState(false)
    const openToggleRemove = () => {
        setToggleRemove(!toggleRemove)
    }
    var nf = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 7});
    var nf_2 = new Intl.NumberFormat('ja-JP',  { style: 'currency', currency: 'USD'})
    // console.log(item)
    return (
        <div className="card wallet-card col_3 col_start_auto col_end_auto row_1 card_padding_normal card_hover">
                            <div className="wallet-card__grid">
                                <div className="wallet-card__icon">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15a1 1 0 100-2 1 1 0 000 2z" fill="#A2A5B9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16 2H4a3 3 0 00-3 3v14a3 3 0 003 3h16a3 3 0 003-3V9a3 3 0 00-3-3h-1V5a3 3 0 00-3-3zM4 4a1 1 0 000 2h13V5a1 1 0 00-1-1H4zm0 4c-.35 0-.687-.06-1-.17V19a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1H4z" fill="#A2A5B9" />
                                    </svg>
                                </div>
                                <div className="wallet-card__data">
                                    <div className="wallet-card__header">
                                        <div className="wallet-card__title text_wrap_none">
                                            {item.address}
                                        </div>
                                        <div className="v-popover justify-self-end">
                                            <div className="trigger" style={{ display: 'inline-block' }}>
                                                <div className="wallet-card__actions tooltip-target" onClick={openToggleRemove}>
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="wallet-card__actions-icon">
                                                        <path d="M11.925 7.05a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm0 6.376a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm0 6.374a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" fill="#4A4A68" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {/* <Remove toggleRemove={toggleRemove} item={item}/> */}
                                        </div>

                                    </div>
                                    <div className="wallet-card__balance">
                                    {nf.format(item.balance * 0.00000001)}&#160;
                                        <span className="wallet-card__currency">
                                        NKN
                                        </span>
                                    </div>
                                    <div className="wallet-card__price">
                                        {nf_2.format(item.balance * 0.00000001 * totalUSD)} USD
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}

export default ListWallet;
