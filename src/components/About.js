import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div className="about-section">
            <h3>About Page</h3>
            <div className="border border-gray-300 m-2.5 p-2.5">
                <User name="Hemanth" location="Angaluru"/>
            </div>
            <div className="border border-gray-300 m-2.5 p-2.5">
                <UserClass name="Channakya" location="Guntur"/>
            </div>
        </div>
    )
}

export default About