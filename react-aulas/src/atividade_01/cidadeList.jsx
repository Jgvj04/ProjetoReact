import CidadeCard from "./cidadeCard"

const CidadeList = ({cidadeData}) => {


    return (
        <>
            {
                cidadeData.map(
                    (cidade) => <CidadeCard
                    name={cidade.name}
                    imgSrc={cidade.imgSrc}
                    vote={cidade.vote}
                    />
                    
                )
            }
        </>
    )
}

export default CidadeList