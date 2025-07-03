import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    
    return (
        <div>
            <h3>OOPS...somthing went wrong</h3>
            <h5>{error.status + " : "}{error.statusText}</h5>
        </div>
    )
}

export default Error;