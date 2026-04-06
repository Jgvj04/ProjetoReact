import { useState } from "react"

const PokemonPages = () => {

    const [pokemonId, setPokemonId] = useState(150)

    const voltarPokemon = () => {
        if (pokemonId - 1 > 0)
            setPokemonId((pokemonId) => pokemonId - 1)
    }

    const adiantarPokemon = () => {
        setPokemonId((pokemonId) => pokemonId + 1)
    }

    return(
        <> 
            <nav className="navbar bg-dark border-bottom border-body">
                <div className="container-fluid"> 
                    <h1 style ={{color:"white"}}>Navegador de Pokemons</h1>
                </div>
            </nav>
            <div className="card" style={{"width":"18rem"}}>
                <img style={{width:"300px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} className="card-img-top" alt="Pokemon"/>
                <div className="card-body">
                    <h5 className="card-title"> Nome do Pokemon: {pokemonId}</h5>
                    <p className="card-text"> Descrição do Pokemon</p>
                </div>
            </div>
            <div>
                <button className="btn-primary" onClick={voltarPokemon}> Diminuir</button>
                <button className="btn-primary" onClick={adiantarPokemon}> Acrescentar</button>
            </div>
        </>
    )
}

export default PokemonPages