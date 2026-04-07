import "./votador.css"
import CidadeList from "./cidadeList"

function Votador() {

    return (
        <div>
            <>
                <CidadeList/>
            </>

            <div className="buttons">
                {
                    CidadeList.map(
                        (cidade) => 
                        <button> {cidade.nome} </button>
                    )
                }

            </div>
        </div>


    )
}

export default Votador