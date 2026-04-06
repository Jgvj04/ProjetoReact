import { useState } from "react"

const FormularioAluno = () => {

    const [aluno, setAluno] = useState({nome:"", sobrenome:"", idade:0, universidade:"", curso:"", areas_interesse:{"mat":false, "design":false, "des": false}})

    const onHandleChange = (event) => {
        const {name, value} = event.target
        setAluno( (aluno) => ({
            ...aluno,
            [name]:value
        }))
    }

    const onHandleCheckBox = (event) => {
        const {value, checked} = event.target
        setAluno({
            ...aluno,
            areas_interesse:{
                ...aluno.areas_interesse,
                [value]:checked
            }
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        alert("Nome:" + aluno.nome + 
            "\n" + "Sobrenome:" + aluno.sobrenome + 
            "\n" + "Idade:" + aluno.idade + 
            "\n" + "Universidade:" + aluno.universidade +
            "\n" + "Curso:" + aluno.curso)
    }

    return (
        <>
            <h1> Formulário Aluno</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        value={aluno.nome}
                        placeholder="Insira o seu Nome"
                        onChange={onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="sobrenome">SobreNome:</label>
                    <input
                        id="sobrenome"
                        type="text"
                        name="sobrenome"
                        value={aluno.sobrenome}
                        placeholder="Insira o seu SobreNome"
                        onChange={onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="idade">Idade:</label>
                    <input
                        id="idade"
                        type="text"
                        name="idade"
                        value={aluno.idade}
                        onChange={onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="universidade">Universidade:</label>
                    <select id="universidade"
                            name="universidade"
                            value = {aluno.universidade}
                            onChange={onHandleChange}>

                        <option value="ufc"> UFC</option>
                        <option value="uece"> UECE</option>
                        <option value="ifce"> IFCE</option>
                    </select>
                </div>
                <div>
                    <label>Curso:</label>
                    Design Digital
                    <input
                        type="radio"
                        name="curso"
                        value="dd"
                        onChange={onHandleChange}
                    />
                    Sistemas de Informação
                    <input
                        type="radio"
                        name="curso"
                        value="si"
                        onChange={onHandleChange}
                    />
                    Engenharia de Software
                    <input
                        type="radio"
                        name="curso"
                        value="es"
                        onChange={onHandleChange}
                    />
                </div>
                <div>
                    <label>Áreas de interesse:</label>
                    Matemática
                    <input
                        type="checkbox"
                        name="areas_interesse"
                        value="mat"
                        onChange={onHandleCheckBox}
                    />
                    Design
                    <input
                        type="checkbox"
                        name="areas_interesse"
                        value="des"
                        onChange={onHandleCheckBox}
                    />
                    Desenvolvimento
                    <input
                        type="checkbox"
                        name="areas_interesse"
                        value="dev"
                        onChange={onHandleCheckBox}
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </>
    )
}

export default FormularioAluno