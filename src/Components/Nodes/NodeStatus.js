import React from 'react';
import Chart from './Chart';

const NodeStatus = (props) => {
    const {PERSISTFINISHED, SYNC_STARTED, WAIT_FOR_SYNCING, PRUNING_DB, INSTALLED, GENERATE_ID, SYNC_FINISHED, OFFLINE,arrValueDistinceState} =props
    return (
        <div className="card nodes-info-card col_4 col_start_auto col_end_auto row_1 card_padding_normal card_overflow" custom="true" style={{}}>
            <div className="card__header">
                <h3 className="card__title">
                    Node Status
                </h3>
            </div>
            <div className="node-status__chart nodes-info-card__chart">
                <Chart 
                arrValueDistinceState={arrValueDistinceState}
                    PERSISTFINISHED={PERSISTFINISHED}
                    WAIT_FOR_SYNCING={WAIT_FOR_SYNCING}
                    SYNC_STARTED={SYNC_STARTED}
                    PRUNING_DB={PRUNING_DB}
                    GENERATE_ID={GENERATE_ID}
                    SYNC_FINISHED={SYNC_FINISHED}
                    INSTALLED={INSTALLED}
                    OFFLINE={OFFLINE}
                />
                
            </div>
            <div className="nodes-info-card__footer">
                <div className="stats-item__wrapper">
                    <div className="stats-item">
                        <div className="stats-item__title">
                            Network nodes</div>
                        <div className="stats-item__value">
                            70,854
                        </div>
                    </div>
                    <div className="stats-item">
                        <div className="stats-item__title">
                            Network version</div>
                        <div className="stats-item__value">
                            v2.1.9
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NodeStatus;
