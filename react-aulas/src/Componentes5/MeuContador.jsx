
import { useState, useEffect } from "react"

function MeuContador (){

    const [contador, setContador] = useState(0)
    const [paridade, setParidade] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            if (contador % 2 == 0) setParidade(true)
            else setParidade(false)
        },
        [contador, loading]

    )

    function modLoading () {
        setLoading(true)
    }

    function testeparidade() {
        if (paridade == true) return "Par"
        else return "Impar"
    }
    const contagem = () => {
        setContador(
            contadorAnterior => contadorAnterior + 1
        )
    }
    return (
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                paddingTop:"4em"
            }}
        >
            <h1> Contador: {contador}</h1>
            <h2> Paridade: {testeparidade()}</h2>
            <button onClick={contagem}>
                Contar
            </button>
            <button onClick={modLoading}>Modificar Loading</button>
        </div>
    )
}

export default MeuContador