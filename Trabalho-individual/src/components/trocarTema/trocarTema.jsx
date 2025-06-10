import styles from "./trocarTema.module.css"
export function TrocarTema({ claro, onToggle }) {
    return (
        <button
            className={claro ? styles.botaoQ1Claro : styles.botaoQ1Escuro}
            onClick={onToggle}
        >
            💡
        </button>
    )
}