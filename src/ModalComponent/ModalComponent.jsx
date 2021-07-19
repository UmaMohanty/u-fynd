import React from 'react';
import './ModalComponent.scss';

const ModalComponent = (props) => {

    return (
        <div id={props.modalcompId} className="modal-overlay">
            <div className="popup">
                <div className="header">
                    {props.headers}
                </div>
                <div className="content">
                    {props.content}
                    {props.video}
                </div>
                <div className="footerDiv">
                    <button className="btnNo" data-dismiss="modal" onClick={props.onModalclose}>Close</button>
                </div>
            </div>
        </div>

    )
}

export default ModalComponent;