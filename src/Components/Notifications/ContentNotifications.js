import React from 'react';
import ListNotications from './ListNotications';
import ReadNotification from './ReadNotification';

const ContentNotifications = () => {
    return (
        <div className="row">
            <ListNotications />
            <ReadNotification />
        </div>
    );
}

export default ContentNotifications;
