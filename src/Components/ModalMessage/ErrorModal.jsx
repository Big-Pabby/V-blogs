import React from 'react'
import './Modal.css'
import {BiError} from 'react-icons/bi'

const ErrorModal = ({errModal, message}) => {
    if(errModal === true) {
        return (
            <div className="modal-container">
                <div className="modal">
                  <BiError className="modal-icon" />
                  <h3>{message}</h3>
                </div>
            </div>
        )
    }
}

export default ErrorModal