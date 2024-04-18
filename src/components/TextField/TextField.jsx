import styles from "./TextField.module.css"

const TextField = ({value, onChange, placeHolder, type = "text"}) => {
    return (
        <input className={styles.textField}
            type={type}
            value={value}
            onChange={onChange}
            placeHolder={placeHolder}
            
        />
    )
}

export default TextField