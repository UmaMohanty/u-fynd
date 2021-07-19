import React, { useState } from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import lData from "./../launchesData.json";
import './Launches.scss';

const Launches = () => {
    const [launchesData, setLaunchesData] = useState(lData);
    const [showModal, setShowModal] = useState(false);

    //find the payload details
    let newlaunchData = [];
    let videoList = [];

    for (let elm of launchesData) {
        let tempObj = {};
        let videoObj = {};
        tempObj['mission_name'] = elm.mission_name;
        videoObj['flight_number'] = elm.flight_number;
        videoObj['videoLink'] = elm.links['video_link'];

        for (let elmItem in elm) {
            if (elmItem == 'rocket') {
                let payloadDetails = elm[elmItem].second_stage['payloads'];
                for (let payElm of payloadDetails) {
                    tempObj['nationality'] = payElm.nationality;
                    tempObj['manufacturer'] = payElm.manufacturer;
                    tempObj['payload_type'] = payElm.payload_type;
                }
            }
        }
        newlaunchData.push(tempObj);
        videoList.push(videoObj);
    }

    const showModalData = (e) => {
        setShowModal(true);
    }

    const closeModal = (e) => {
        setShowModal(false);
    }

    return (
        <div className="launchesSection">
            <table>
                <thead>
                    <tr>
                        <th>Mission Name</th>
                        <th>Payloads's Nationality</th>
                        <th>Payloads's Manufacturer</th>
                        <th>Payloads's Payload Type</th>
                    </tr>
                </thead>
                <tbody>
                    {newlaunchData.map(item => {
                        return (
                            <tr key={item.flight_number}>
                                <td onClick={(e) => { showModalData(e) }}>{item.mission_name}</td>
                                <td>{item.nationality}</td>
                                <td>{item.manufacturer}</td>
                                <td>{item.payload_type}</td>
                            </tr>
                        )
                    }
                    )
                    }
                </tbody>
            </table>
            {showModal ?
                <ModalComponent
                    modalcompId="launch1"
                    headers="Videos related to Mission"
                    video={<iframe width="100%" height="300px" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                    </iframe>}
                    onModalclose={closeModal}
                />
                :
                null
            }
        </div>


    );
}

export default Launches;