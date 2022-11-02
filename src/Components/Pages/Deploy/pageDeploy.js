import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pageDeploy.css';
import DeployTo from './deployTo';
import Deploycreate from './Deploycreate';
import Deployconfig from './Deployconfig';
import Deployfooter from './Deployfooter';
//import FontAwe;

const PageDeploy = () => {


    return (
        <>
            <div className='page-deploy'>
                <div id='deploy-main'>
                    <h1 className='title-page'>NKNx FastDeploy</h1>
                    <div className='deploy-body'>
                        <Deploycreate />
                        <Deployconfig />
                    </div>
                </div>
                <DeployTo />
                <Deployfooter />
            </div>
        </>
    );
}

export default PageDeploy;
