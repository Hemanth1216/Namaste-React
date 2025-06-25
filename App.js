import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hi, from React") // give me a React object to create an element.
const heading = <h1 id="heading">Hi, I'm React</h1>

const HeaderComponent = () => {
    return <h1 className="heading">I'm Header component</h1>
}

const HeaderComponentalt = () => <h1 className="heading">I'm alt Header component</h1>

const NestedHeaderComponent = () => (
    <div>
        {heading}
        <HeaderComponent />
        <HeaderComponentalt />
        <h1 className="heading">I'm Nested Header component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeaderComponent />);
