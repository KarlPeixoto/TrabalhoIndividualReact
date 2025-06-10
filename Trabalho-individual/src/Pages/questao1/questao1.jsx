import { useState } from "react"
import { Button } from "../../components/button/button"
import styles from "./questao1.module.css"
import { TrocarTema } from "../../components/trocarTema/trocarTema"

export function Questão01() {
    const [claro, setClaro] = useState(false)

    return (
        <>
            <div className={claro ? styles.containerClaro : styles.containerEscuro}>
                <TrocarTema claro={claro} onToggle={() => setClaro(!claro)} />
            </div>
            <div className={styles.backHome}>
                <Button type="button" title="Voltar para home" onClick={() => window.location.href = "/"} />
            </div>
        </>
    )
}