import { useState } from "react"
import { Button } from "../../components/button/button"
import styles from "./questao2.module.css"
import { MudarTexto } from "../../components/mudarTexto/mudarTexto"
export function Questão02() {
    const [mensagem, setMensagem] = useState("Olá!")
    function onCLickEntrar() {
        setMensagem("Bem-vindo!")
    }
    return (
        <>
            <div className={styles.container}>
                <p>{mensagem}</p>
                <MudarTexto onClick={onCLickEntrar} />
            </div>
            <div className={styles.backHome}>
                <Button type="button" title="Voltar para home" onClick={() => window.location.href = "/"} />
            </div>
        </>
    )
}