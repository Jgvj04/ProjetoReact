import TeacherProfile from "./TeacherProfile"

const TeacherProfileList = () => {

    const TeacherDatabase = [
        {name: " Diana ", title:"Docente", description:"Professora de desenho 1", imgSrc:""},
        {name: " Paulo-Vitor ", title:"Coordenador", description:"Professor de história da arte", imgSrc:""},
        {name: " Rochelle", title:"Docente", description:"Professora de ética", imgSrc:""}
    ]

    return (
        <>
            {
                TeacherDatabase.map(
                    (teacher) => <TeacherProfile
                        name={teacher.name}
                        title={teacher.title}
                        description={teacher.description}
                        imgSrc={teacher.imgSrc}
                    />
                )
            }

        </>
    )
}

export default TeacherProfileList
