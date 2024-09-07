import classes from './Modal.module.css';

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      {/* open props => simply required by default dialog element to make sure it's visible */}
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
