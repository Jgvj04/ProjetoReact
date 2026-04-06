import CidadeCard from "./cidadeCard"

const CidadeList = () => {

    const cidadeData = [
        {name: "Quixáda", imgSrc:"https://t3.ftcdn.net/jpg/03/58/64/30/360_F_358643037_ayrVXeQbHGfLVuSfNwuWrbLLiS7wbnv2.webp", vote: 0},
        {name: "Quixeramobim", imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5ZIsf1NjKXyJXmn6jXZycOYpC6tNmjAe_A&s", vote: 0},
        {name: "Banabuiú", imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2ISmrdvQLTQrv3dKGjc16VfSX9TpgHXueA&s", vote: 0},
        {name: "Iguatu", imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0trtr5h9qjWEMdZ91wHDr_v9_jXyYtSrPYQ&s", vote: 0}
    ]

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