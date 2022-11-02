import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter,Navigate } from "react-router-dom";
import './App.css';
import Login from 'Components/Pages/Login/login';
import PageDeploy from 'Components/Pages/Deploy/pageDeploy';
import Sshkey from 'Components/Pages/Sshkey/sshkey';
import Vpskey from 'Components/Pages/Vpskey/vpskey';
import Apitoken from 'Components/Pages/User/Apitoken/apitoken';
import Profile from 'Components/Pages/User/Profile/profile';
import Pagenotification from 'Components/Pages/UserProfNotifica/pagenotification';
import Header from 'Components/Header/header';
import Homepage from 'Components/Dashboard/Homepage';
import Notifications from 'Components/Notifications/Notifications';
import WalletsTracker from 'Components/WalletsTracker/WalletsTracker';
import Nodes from 'Components/Nodes/Nodes';
import "./App.css"
function App() {
  const ssh = 'ssh';
  const vps = 'vps';
  const token = 'token';
  const profile = 'profile';
  const notification = 'notification';
  return (
    <HashRouter hashType='hashbang'>
      <Routes>
      {/* <Route path='/' element={localStorage.getItem("token") ? <><Header />
          <Homepage /></>: <><Login/></>} /> */}
        {/* <Route path='/login' element={<><Login /></>} /> */}
        <Route path='/user/api-tokens' element={<><Apitoken token={token} /></>} />
        <Route path='/user/profile/:id' element={<><Profile profile={profile} /></>} />
        <Route path='/user-profile-notifications' element={<><Pagenotification notification={notification} /></>} />
        <Route path='ssh-keys' element={<><Sshkey ssh={ssh} /></>} />
        <Route index path='/homepage' element={localStorage.getItem("token") ? <><Header />
          <Homepage /></>: <><Login/></>} />
        <Route path='/vps-keys' element={localStorage.getItem("token") ? <><Header />
          <Vpskey vps={vps} /></>: <><Login/></>} />
        <Route path='/wallets' element={localStorage.getItem("token") ? <><Header />
          <WalletsTracker /></>: <><Login/></>} />
        <Route path='/nodes/:page' element={localStorage.getItem("token") ? <><Header />
          <Nodes /></>: <><Login/></>} />
        <Route path='/notifications' element={localStorage.getItem("token") ? <><Header />
          <Notifications /></>: <><Login/></>} />
          <Route path='*' element={<Navigate to="/homepage"/>} />
      </Routes>
    </HashRouter>
  );
}
{/* <Route path='*' element={<div>Page not found <a href="/#/homepage">Click here</a> come back dashboard</div>} /> */}

export default App;