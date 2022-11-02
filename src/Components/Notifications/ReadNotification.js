import React from 'react';

const ReadNotification = () => {
    return (
        <div className="col-lg-8">
            <div className="card notifications-tab col_12 col_start_auto col_end_auto row_1 card_padding_none card_overflow" custom="true">{/**/}
                <div className="notifications-tab__header">
                    <div className="notifications-tab__header-left">
                        <div className="notifications-tab__title">
                            Welcome to NKNx
                        </div>
                        <div className="notifications-tab__from">
                            From: NKNx Team
                        </div>
                    </div>
                    <div className="notifications-tab__delete">
                        <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" className="notifications-tab__delete-icon">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 3h11a.5.5 0 010 1H3a.5.5 0 110-1zm4 3a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 017 6zm3 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 0110 6z" fill="#ED7470" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 3a.5.5 0 01.5.5V13h8V3.5a.5.5 0 111 0V13a1 1 0 01-1 1h-8a1 1 0 01-1-1V3.5A.5.5 0 014 3z" fill="#ED7470" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.94 1.44A1.5 1.5 0 017 1h3a1.5 1.5 0 011.5 1.5v1a.5.5 0 01-1 0v-1A.5.5 0 0010 2H7a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1c0-.398.158-.78.44-1.06z" fill="#ED7470" />
                        </svg>
                    </div>
                </div>
                <div className="notifications-tab__content">
                    <div>
                        <svg viewBox="0 0 1216 364" xmlns="http://www.w3.org/2000/svg" className="logo">
                            <path d="M133.8 146.9l20.1-20.1c19.2-19.2 50.5-19.2 69.7 0l20.1 20.1c19.2 19.2 19.2 50.5 0 69.7l-20.1 20.1c-19.2 19.2-50.5 19.2-69.7 0l-20.1-20.1c-19.1-19.1-19.1-50.5 0-69.7z" fill="#5CE2B2" />
                            <path d="M596.2 206.4L515.7 74.9h-46.3v214.2h46.3V157.6l80.5 131.5h46.3V74.9h-46.3v131.5zm419.8 0L935.5 74.9h-46.3v214.2h46.3V157.6l80.5 131.5h46.3V74.9H1016v131.5zM809.9 74.9l-51 83.2h-20.3V74.9h-46.3v214.2h46.3V200h19l60 89.1h50.7L797.2 182l65.6-107.1h-52.9zm405.9 87.5h-39.3l-24.7 44.4-24.6-44.4h-39.3l39.1 63.8-38.5 62.9h37.9l26.8-43.7 24.1 43.7h37.9l-38.5-62.9 39.1-63.8z" fill="#242628" />
                            <path d="M280.2 37.7C255.1 12.6 222 0 188.9 0c-33.1 0-66.2 12.6-91.3 37.7L.1 135.2v34l78.8-.1 62.4-62.4c13.1-13.1 30.4-19.6 47.6-19.6 17.3 0 34.5 6.5 47.6 19.6l62.4 62.4 78.8.1v-34l-97.5-97.5zm-43.8 219.6c-13.1 13.1-30.4 19.6-47.6 19.6-17.3 0-34.5-6.5-47.6-19.6l-62.4-62.4-78.8-.1v34l97.5 97.5c25.1 25.1 58.2 37.7 91.3 37.7 33.1 0 66.2-12.6 91.3-37.7l97.5-97.5v-34l-78.8.1-62.4 62.4z" fill="#5769DF" />
                        </svg>
                        <p>Hi kass 👋,</p>
                        <p>Welcome to NKNx!</p>
                        <p>When you're reading this that means you already discovered our notification-center - good work! To help you get started fast here are some quick information on how to use our service:</p>
                        <p>On the <b>left sidebar</b> you can switch between your dashboard, the wallet tracker, the node manager and FastDeploy®. You can add your NKN mainnet wallets as well as your existing nodes easily by hitting the corresponding button. If you are running aa node that <b>changes its IP regularly</b> (f.e. on a home network) it is good to know that you are also able to add DNS-names as your node address. Combined with a dynamic DNS service you can also watch these nodes easily.</p>
                        <p>If you are struggling with getting mainnet tokens for your node to generate an ID it is worth trying out our <b>Node ID generation service</b>. This service gives you an easy way of giving your node a quick start without the hassle of swapping NKN tokens from exchanges to mainnet.</p>
                        <p><b>FastDeploy®</b> makes creating nodes easily. You can either generate a custom installation script for every linux-based architecture or directly deploying to your favorite VPS providers. You should also definitely have a look at your <a href="/user/profile">User Account</a>. Here you can add your VPS API keys and also your public SSH keys. Every SSH key will get added to every fastDeploy® node you create. This way you can make sure that only selected PCs can access it.</p>
                        <p>Finally a personal note from us, the developers:</p>
                        <p>We worked very hard on creating NKNx. We love what we do and believe in the fact that mining on the NKN network should be as easy as it can be. Nevertheless if you want to support us consider getting a paid subscription. That helps us paying server bills and compensate for our work. We hope you are enjoying NKNx - if there is anything we can help with feel free to contact us through our support system.</p>
                        <p>Happy mining,<br />Your NKNx-Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadNotification;
