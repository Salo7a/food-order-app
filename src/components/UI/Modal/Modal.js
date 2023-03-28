import classes from "./Modal.module.css";
import {createPortal} from "react-dom";

const overlayPortal = document.getElementById('overlays');

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}
const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export const Modal = (props) => {
    return (
        <>
            {createPortal(<Backdrop onClose={props.onClose}/>, overlayPortal)}
            {createPortal((<ModalOverlay>{props.children}</ModalOverlay>), overlayPortal)}
        </>
    )
}