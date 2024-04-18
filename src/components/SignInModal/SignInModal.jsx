import { Modal } from "../Modal"
import { TextField } from "../TextField"

const SignInModal = ({isOpen, onClose}) => {
    return <Modal 
    headerText={"Sign In"}
    isOpen={isOpen}
    onClose={onClose}
    secondaryAction={{
        text: "Cancel",
        action: () => onClose()
    }}
    primaryAction={{
        text: "Sign In",
        action: () => onClose()
    }}>
        <TextField />
        <TextField type={"password"}/>
    </Modal>
    
}

export default SignInModal