import { authContext } from "../../contexts/AuthContext"
import { Modal } from "../Modal"
import { TextField } from "../TextField"
import { useContext } from "react"

const SignUpModal = ({isOpen, onClose}) => {
    const { signUpUser } = useContext(authContext)
    return <Modal 
    headerText={"Sign Up"}
    isOpen={isOpen}
    onClose={onClose}
    secondaryAction={{
        text: "Cancel",
        action: () => onClose()
    }}
    primaryAction={{
        text: "Sign Up",
        action: () => signUpUser({
            email: "Gapurov.ildan@gmial.com",
            password: "123"
        })
    }}>
        <TextField />
        <TextField type={"password"}/>
    </Modal>
    
}

export default SignUpModal