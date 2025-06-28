import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div className="about-section">
            <h3>About Page</h3>
            <div className="user-section">
                <User name="Hemanth" location="Angaluru"/>
            </div>
            <div className="user-section">
                <UserClass name="Channakya" location="Guntur"/>
            </div>
        </div>
    )
}

export default About