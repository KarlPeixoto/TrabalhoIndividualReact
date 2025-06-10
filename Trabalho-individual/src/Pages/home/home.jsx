import styles from "./home.module.css"
import { Button } from "../../components/button/button"

export function HomePage() {
    return (
        <div className={styles.container}>
            <h1>Exercício individual</h1>
            <Button type="button" title="Ir para Questão 01" onClick={() => window.location.href = "/questao1"} />
                <Button type="button" title="Ir para Questão 02" onClick={() => window.location.href = "/questao2"} />
                    <Button type="button" title="Ir para Questão 03" onClick={() => window.location.href = "/questao3"} />
        </div>
    )
}