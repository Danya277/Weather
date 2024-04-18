import CN from "classnames";
import styles from "./Button.module.css";

const Button = ({ children, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={CN({
        [styles.btn]: true,
        [styles.outlined]: variant === "outlined",
        [styles.contained]: variant === "contained",
        [styles.text]: variant === "text",
      })}
    >
      {children}
    </button>
  )
};

export default Button;
