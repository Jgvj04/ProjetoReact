import "./TeacherProfile.css"

const TeacherProfile = (props) =>
    <div className="teacher-card">
        <div className="teacher-name">
            <h2>{props.name}</h2>
        </div>
        <div className="teacher-image">
            <img src={props.imgSrc} alt ={"foto do professor" + props.name}/>
        </div>
        <div className="teacher-title">
            <h2>{props.title}</h2>
        </div>
        <div className="teacher-description">
            {props.description}
        </div>
    </div>

export default TeacherProfile
