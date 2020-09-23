import React from 'react';

const ResultBox = props => {
    const { ip, location, isp } = props.result;

    return (
        <div className="result-container">
            <div>
                <small>IP Address</small>
                {ip && (
                    <h3>{ip}</h3>
                )}
            </div>
            <div>
                <small>Location</small>
                {location && (
                    <h3>{location.city}, {location.region} {location.postalCode}</h3>
                )}
            </div>
            <div>
                <small>Timezone</small>
                {location && (
                    <h3>{location.timezone}</h3>
                )}
            </div>
            <div>
                <small>ISP</small>
                {isp && (
                    <h3>{isp}</h3>
                )}
            </div>
        </div>
    );
};

export default ResultBox;
