import "./votador.css"
import CidadeList from "./cidadeList"
import cidadesData from "./cidades_data"
import { useState, useEffect } from "react"

function Votador() {

    const [cidades, setCidades] = useState(cidadesData)
    const [desabilitar, setDesabilitar] = useState(false)
    

    useEffect(
        () => {
            for (const cidade of cidades) {
                if (cidade.vote >= 10){
                    setDesabilitar(true)
                    alert(`A cidade mais votada foi ${cidade.name}`)
                }
            }
        }
        ,
        [cidades]
    )

    function votarCidade2(nome) {
        const novaCidades = cidades.map(
            (cidade) => {
                if(cidade.name == nome ) {
                    return ({
                        ...cidade, vote: cidade.vote + 1
                    })
                } else return cidade
            }
        )
        setCidades(novaCidades)
    }

    /*function votarCidade (name) {
        for (let i = 0; i < cidadesData.length; i++){
            if (cidadesData[i].name == name) {
                cidadesData[i].vote = cidadesData[i].vote + 1
                console.log(cidadesData[i].name + " " + cidadesData[i].vote)
            }
        }
    } */

    return (
        <div>
            <>
                <CidadeList cidadeData={cidades}/>
            </>

            <div className="buttons">
                {
                    cidadesData.map(
                        (cidade) => <button onClick={ () => votarCidade2(cidade.name)} disabled={desabilitar}>
                            {cidade.name}
                        </button>

                    )
                }

            </div>
        </div>


    )
}

export default Votador