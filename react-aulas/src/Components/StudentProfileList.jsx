import StudentProfile from "./StudentProfile"

const StudentProfileList = () => {

    const studentDataBase = [
        {name: " João Gabriel", description:"Dicente de DD", imgSrc:""},
        {name: " Guilherme ", description:"Dicente de DD", imgSrc:""},
        {name: " Caio", description:"Dicente de DD", imgSrc:""}
    ]

    return (
        <>
            {
                studentDataBase.map(
                    (student) => <StudentProfile
                        name={student.name}
                        imgSrc={student.imgSrc}
                        description={student.description}
                    />
                )
            }
        </>
    )
}

export default StudentProfileList