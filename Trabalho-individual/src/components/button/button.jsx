import styles from "./button.module.css"
export function Button({type, title, onClick}) {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {title}
        </button>
    )
}