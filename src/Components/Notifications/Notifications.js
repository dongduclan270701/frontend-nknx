import React from 'react';
import "Assets/scss/Notifications.scss"
import TotalNotifications from './TotalNotifications';
import ContentNotifications from './ContentNotifications';

const Notifications = () => {
    return (
        <div className='content'>
            <div className='content-wrapper content-wrapper_centered'>
                <h1 className='page__title'>Notifications</h1>
                <TotalNotifications />
                <ContentNotifications />
            </div>
        </div>
    );
}

export default Notifications;
