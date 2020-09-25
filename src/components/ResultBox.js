import React from 'react';

const ResultBox = props => {
    const { ip, location, isp } = props.result;

    return (
        <div className="result-container">
            <div className="result">
                <small>IP Address</small>
                {ip && (
                    <h3>{ip}</h3>
                )}
            </div>
            <div className="vr"></div>
            <div className="result">
                <small>Location</small>
                {location && (
                    <h3>{location.city}, {location.region} {location.postalCode}</h3>
                )}
            </div>
            <div className="vr"></div>
            <div className="result">
                <small>Timezone</small>
                {location && (
                    <h3>{location.timezone}</h3>
                )}
            </div>
            <div className="vr"></div>
            <div className="result">
                <small>ISP</small>
                {isp && (
                    <h3>{isp}</h3>
                )}
            </div>
        </div>
    );
};

export default ResultBox;
