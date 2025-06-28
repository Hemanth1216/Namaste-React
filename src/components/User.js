
const User = (props) => {
    const {name, location} = props;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: test@maildrop.cc</h4>
        </div>
    )
}

export default User;