const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Welcome From React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));



const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child1"},[
            React.createElement("h1",{}, "Hello from child1"),
            React.createElement("h1",{}, "Hello from child2"),
    ]),
    React.createElement(
        "div",
        {id:"child2"},[
            React.createElement("h1",{}, "Hello from child3"),
            React.createElement("h1",{}, "Hello from child4"),
    ]),
);

root.render(parent);