import { createContext } from "react";

const userData = {
    name: "Hemanth",
    project: "BBSI",
    role: "Frontend Engineer"
}
const UserContext = createContext(userData);

export default UserContext;