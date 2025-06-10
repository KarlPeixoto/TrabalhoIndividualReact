import { Button } from "../../components/button/button"
import { ListaTarefas } from "../../components/listaTarefas/listaTarefas"
import styles from "./questao3.module.css"
export function Questão03() {
    return (
        <>
            <div className={styles.container}>
                <ListaTarefas />
            </div>
            <div className={styles.backHome}>
                <Button type="button" title="Voltar para home" onClick={() => window.location.href = "/"} />
            </div>
        </>
    )
}