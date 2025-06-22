 const heading = React.createElement("h1", {id: "heading"}, "Hi, from React") // give me a React object to create an element.
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading) // converts react object into DOM element