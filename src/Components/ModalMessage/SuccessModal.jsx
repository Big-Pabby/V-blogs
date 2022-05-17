import React from 'react'
import './Modal.css'
import {BsCheckCircle} from 'react-icons/bs'

const SuccessModal = ({modal, message}) => {
    if(modal === true) {
        return (
            <div className="modal-container">
                <div className="modal">
                  <BsCheckCircle className="modal-icon" />
                  <h3>{message}</h3>
                </div>
            </div>
        )
    }
}

export default SuccessModal