import React, { useState } from "react";
import "./Home.scss";
import HistoryPage from "./../History/History";
import Launches from "./../Launches/Launches";

const Home = () => {
    const [historyPage, setHistoryPage] = useState(false);
    const [launchesPage, setLaunchesPage] = useState(false);

    const handleHistory = () => {
        setHistoryPage(true);
        setLaunchesPage(false);
    }
    const handleLaunches = () => {
        setLaunchesPage(true);
        setHistoryPage(false);
    }

    return (
        <React.Fragment>
            <div className="sub-section">
                <div className="navTabs">
                    <h3 onClick={handleHistory}>History</h3>
                    <h3 onClick={handleLaunches}>Launches</h3>
                </div>

                <div className="content">
                    {!historyPage && !launchesPage ?
                        <p> Click on History or Launches to view details</p>
                        :
                        null
                    }
                    {historyPage ?
                        <HistoryPage />
                        :
                        null
                    }
                    {launchesPage ?
                        <div>
                            <Launches />
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
