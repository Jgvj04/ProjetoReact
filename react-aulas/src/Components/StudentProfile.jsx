import "./StudentProfile.css"

const StudentProfile = (props) =>
    <div className="student-card">
        <div className="student-title">
            <h2>{props.name}</h2>
        </div>
        <div className="student-picture">
            <img src={props.imgSrc} alt= {"foto do estudante" + props.name}/>
        </div>
        <div className="student-description">
            {props.description}
        </div>

    </div>

export default StudentProfile