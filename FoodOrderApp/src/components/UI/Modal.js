import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div
        className={classes.backdrop}
        onClick={props.onClose}
    ></div>
}

const ModelOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlay')

const Modal = props => {
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose}></Backdrop>, portalElement)}
            {createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal