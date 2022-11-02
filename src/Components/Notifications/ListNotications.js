import React from 'react';

const ListNotications = () => {
    return (
        <div className="col-lg-4">
            <div className="card notifications-preview col_12 col_start_auto col_end_auto row_1 card_padding_none card_overflow" custom="true">{/**/}
                <div className="notifications-preview__item notifications-preview__item_active">
                    <div className="notifications-preview__header">
                        <div className="notifications-preview__title text_wrap_none">
                            Welcome to NKNx
                        </div>
                        <div className="notifications-preview__date">
                            a day ago
                        </div>
                    </div>
                    <div className="notifications-preview__text text_wrap_none">
                        We're glad you're on board!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListNotications;
