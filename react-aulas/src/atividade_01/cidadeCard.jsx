import "./votador.css"

const CidadeCard = (props) =>
    <div className="cidadeCard">
        <div className="cidadename">
            <h2>{props.name}</h2>
        </div>
        <div classname="cidadeimage">
            <img src={props.imgSrc}></img>
        </div>
        <div classname="cidadevotes">
            <h2> Votos: {props.vote}</h2>
        </div>
    </div>

export default CidadeCard