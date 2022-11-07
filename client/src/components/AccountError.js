import { useContext } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthContext from '../auth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '17%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AccountError() {
    const { auth } = useContext(AuthContext);

    function handleConfirm(event) {
        auth.knowError()
        console.log(auth.errorMessage)
    }

    console.log(auth.errorMessage)

    return (
        <Modal
            open={auth.errorMessage !== null}
            >
            <Box sx={style}>
            <div
            id="account-error"
            className="modal is-visible"
            data-animation="slideInOutLeft">
            <div
                id='account-error-root'
                className="modal-root">
                <div
                    id="account-error-header"
                    className="modal-north"
                    style = {{fontSize:'xxx-large'}}>Error message</div>
                <div
                    id="account-error-content"
                    className="modal-center">
                    <div id="title-prompt" className="modal-prompt"
                    style = {{fontSize:'x-large'}}>{auth.errorMessage}</div>
                </div>
                <div className="modal-south">
                    <input 
                        type="button" 
                        id="account-error-confirm-button" 
                        className="modal-button" 
                        value='OK' 
                        onClick={handleConfirm} />
                </div>
            </div>
        </div>
            </Box>
        </Modal>
    );
}