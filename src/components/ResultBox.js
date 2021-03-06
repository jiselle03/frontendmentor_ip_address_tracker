import React from 'react';

const ResultBox = props => {
    const { ip, location, isp } = props.result;
    const results = [
        {
            "label": "IP Address",
            "data": ip || "N/A"
        },
        {
            "label": "Location",
            "data": location ? `${location.city}, ${location.region} ${location.postalCode}` : "N/A"
        },
        {
            "label": "Timezone",
            "data": location ? `UTC ${location.timezone}` : "N/A"
        },
        {
            "label": "ISP",
            "data": isp || "N/A"
        }
    ];

    return (
        <div className="result-container">
            {results.map(result => (
                <div key={result.label} className="result-box">
                    <div className="result">
                        <small>{result.label}</small>
                        <h3>{result.data}</h3>
                    </div>
                    {result.label !== "ISP" && (
                        <div className="vr"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ResultBox;
