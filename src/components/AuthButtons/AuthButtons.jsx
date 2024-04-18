import Button from "../Button/Button";
import styles from "./AuthButtons.module.css"
import { SignInModal } from "../SignInModal";
import { SignUpModal } from "../SignUpModal";
import { useContext, useState } from "react";

const AuthButtons = () => {
   const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
   const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
   
  return (
    <div className={styles.wrapper}>
      <Button onClick={() => setIsSignInModalOpen(true)}>Sign In</Button>
      <Button onClick={() => setIsSignUpModalOpen(true)}>Sign Up</Button>
      <SignInModal isOpen={isSignInModalOpen} onClose={() => setIsSignInModalOpen(false)}/>
      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)}/>
    </div>
  );
};

export default AuthButtons;