import React from 'react';

const PageWallet = () => {
    return (
        <div className="page-navigation page__wallet-tracker-navigation">
            <div className="pagination page-navigation__pagination pagination_enabled">
                <div className="pagination__button pagination__button_disabled">
                    <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" className="pagination__arrow pagination__arrow_prev pagination__arrow_disabled pagination__arrow_type_stroke">
                        <path d="M0 4h12m0 0L9.429 1M12 4L9.429 7" stroke="#4A4A68" />
                    </svg>
                </div>
                <div className="pagination__button pagination__button_disabled">
                    <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" className="pagination__arrow pagination__arrow_disabled pagination__arrow_type_stroke">
                        <path d="M0 4h12m0 0L9.429 1M12 4L9.429 7" stroke="#4A4A68" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default PageWallet;
