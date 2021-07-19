import React, { useState } from 'react';
import hData from "./../historyData.json";
import './History.scss';

const HistoryPage = (props) => {
    const [historyJsonData, setHistoryJsonData] = useState(hData);

    return (
        <div className="historySection">
            <table>
                <thead>
                    <tr>
                        <th>Events Date</th>
                        <th style={{ width: "70%" }}>Description</th>
                        <th style={{ width: "10%" }}>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {historyJsonData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.event_date_utc}</td>
                                <td>{item.details}</td>
                                <td>{item.links.wikipedia ? <a href={item.links.wikipedia} target="_blank">links</a> : ""}</td>
                            </tr>
                        )
                    }
                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default HistoryPage;
