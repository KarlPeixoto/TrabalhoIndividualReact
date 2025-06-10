import { useState } from "react"
import styles from "./listaTarefas.module.css"

export function ListaTarefas() {
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState([])

    function adicionarTarefa() {
        if (tarefa.trim() !== "") {
            setTarefas([...tarefas, tarefa])
            setTarefa("")
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formArea}>
                <input
                    className={styles.input}
                    type="text"
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    placeholder="Digite uma tarefa"
                />
                <button className={styles.botaoQ3} onClick={adicionarTarefa}>➕</button>
            </div>
            <ul className={styles.lista}>
                {tarefas.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    )
}