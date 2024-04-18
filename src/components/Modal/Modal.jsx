import styles from "./Modal.module.css"
import { Button } from "../Button"

const Modal = ({
    isOpen,
    children,
    onClose,
    primaryAction,
    secondaryAction,
    headerText,
     }) => {
    if (isOpen) {
      return (
        <div class={styles.modal}>
            <div className="overlay" class={styles.overlay} onClick={onClose}></div>
            <div className="modal_content" class={styles.modal_content}>
                <button onClick={onClose} className="styles.modal_close" class={styles.modal_close} >&times;</button>
                <div className={styles.modal_header}>
                    <h2>{headerText}</h2>
                </div>

                {children}

                <div className={styles.modal_footer}>
                    {Boolean(secondaryAction) && <Button onClick={secondaryAction.action} variant="outlined" >{secondaryAction.text}</Button>}
                    
                    {Boolean(primaryAction) && <Button onClick={primaryAction.action} variant="contained" >{primaryAction.text}</Button>}
                </div>

            </div>
        </div>
    )  
    }
    return null
}
export default Modal