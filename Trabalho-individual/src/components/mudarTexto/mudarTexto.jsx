import styles from "./mudarTexto.module.css"
export function MudarTexto({ onClick }) {
    return (
        <button className={styles.botaoQ2} onClick={onClick}>
            Entrar
        </button>
    )
}