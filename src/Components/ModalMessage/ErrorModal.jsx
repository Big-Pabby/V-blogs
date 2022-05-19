import React from 'react'
import './Modal.css'
import {BiError} from 'react-icons/bi'

const ErrorModal = ({errModal, message}) => {
    if(errModal === true) {
        return (
            <div className="modal-container">
                <div className="modal">
                  <BiError className="modal-icon" />
                  <h4>{message}</h4>
                </div>
            </div>
        )
    }
}

export default ErrorModal