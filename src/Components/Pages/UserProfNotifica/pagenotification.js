import React, { useState,useEffect } from 'react';
import NavAccount from '../NavAccountSetting/navAccount';
import './notification.css';
import {gql, useQuery}  from '@apollo/client';
const Pagenotification = (props) => {
    const { notification } = props;
    const [dataNotification, setDataNotification] = useState({});
    const getNotification = gql`
    query{
        notificationSetting(
          publicationState: PREVIEW
        ){
          data{
            id
            attributes{
              Node_Updates
              Wallet_Updates
              FastDeploy_events
            }
          }
      
        }
       }
    `
//     const{loading, error, data } = useQuery(getNotification);
    
//     data.notificationSetting.data.attributes
//     if(data){
//         setDataNotification(data.notificationSetting.data.attributes);
//         console.log(data);
//     }
    // useEffect(() => {
    //     queryFunction();
    // }, []);
    console.log(123);
    const [nodeUpdate, setNodeUpdate] = useState(
        [
            {
                title: 'Node offline',
                email: true,
                portal: true,
                app: false
            },
            {
                title: 'Node online again',
                email: true,
                portal: true,
                app: false
            },
            {
                title: 'Needs ID generation',
                email: true,
                portal: true,
                app: false
            },
            {
                title: 'Node generated ID',
                email: true,
                portal: true,
                app: false
            },
            {
                title: 'Node mined a block',
                email: true,
                portal: true,
                app: false
            }
        ]
    );
    const [walletUpdates, setWalletUpdates] = useState(
        [
            {
                title: 'Received NKN',
                email: true,
                portal: true,
                app: false
            },
            {
                title: 'Send NKN',
                email: true,
                portal: true,
                app: false
            }
        ]
    );
    const [fastDeploy, setFastDeploy] = useState(
        [
            {
                title: 'Node installation started',
                email: true,
                portal: false,
                app: false
            }
        ]
    );
    const [isUpdate, setIsUpdate] = useState();
    const submitUpdate = () => {
        setTimeout(() => {
            document.getElementById('notify-button').style.transition = '0.2s';
            document.getElementById('notify-button').style.border = '1px solid rgb(191, 255, 191)';
            document.getElementById('notify-button').style.color = '#5769df';
            document.getElementById('notify-button').style.backgroundColor = 'rgb(191, 255, 191)';
            document.getElementById('notify-button').innerHTML = 'Updated';
            document.getElementById('confirm').style.display = 'block';
        }, 0);

        setTimeout(() => {

            document.getElementById('notify-button').style.transition = '1s';
            document.getElementById('notify-button').style.border = '1px solid #5769df';
            document.getElementById('notify-button').style.color = '#5769df';
            document.getElementById('notify-button').style.backgroundColor = '#fff';
            document.getElementById('notify-button').innerHTML = 'Update';
            document.getElementById('confirm').style.display = 'none';
        }, 1500)
    }
    return (
        <>
            <div id='page-vpskeys'>
                <NavAccount nav={notification} />

                <div className='main-page-sshkey'>
                    <div className='notification-body'>
                        <div className='notifi-title'>
                            <h3>Notify me on (only available in paid subscriptions)</h3>
                            <h3 className='type-notify-title' style={{ textAlign: 'center' }}>Email</h3>
                            <h3 className='type-notify-title' style={{ textAlign: 'center' }}>Portal</h3>
                            <h3 className='type-notify-title' style={{ textAlign: 'center' }}>App</h3>
                        </div>

                        <hr></hr>
                        <div className='notifi-content'>


                            <div className='notifi-item'>
                                <h3 className='notifi-item-title'>Node Updates</h3>
                                <div className='block-item'>
                                    {
                                        nodeUpdate.map((item) => {
                                            return (
                                                <div className='item'>
                                                    <div className='title-item'>
                                                        {item.title}
                                                    </div>

                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.email}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.portal}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.app}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className='notifi-item'>
                                <h3 className='notifi-item-title'>Wallet Updates</h3>
                                <div className='block-item'>
                                    {
                                        walletUpdates.map((item) => {
                                            return (
                                                <div className='item'>
                                                    <div className='title-item'>
                                                        {item.title}
                                                    </div>

                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.email}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.portal}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.app}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className='notifi-item'>
                                <h3 className='notifi-item-title'>FastDeploy events</h3>
                                <div className='block-item'>
                                    {
                                        fastDeploy.map((item) => {
                                            return (
                                                <div className='item'>
                                                    <div className='title-item'>
                                                        {item.title}
                                                    </div>

                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.email}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.portal}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                    <div className='type-notify'>
                                                        <div className='checkbox-type-notify'>
                                                            <input type="checkbox" class="checkbox-type" defaultChecked={item.app}></input>
                                                            <label class="checkbox__label checkbox__label_theme_"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                        <div className='notify-button'>
                            <button onClick={() => submitUpdate()} id='notify-button'>Update</button>
                        </div>
                    </div>


                </div>
                <div className='saved updated' id='confirm'>
                    <span>Configuration Saved</span>
                </div>
            </div>
        </>
    );
}

export default Pagenotification;
