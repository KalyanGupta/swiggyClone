// const heading = React.createElement("h1", {id:"xyz"}, "Hello world from ReactJS usig standard practices");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading)


/*I want this HTML structure:

<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div>

*/

// const parent = React.createElement("div", {id: "parent"}, React.createElement(
//     "div", {id:"child"}, React.createElement(
//         "h1", {}, "I am h1 tag"
//     )
// ))
// const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);
// console.log(parent);


/*I want this HTML structure:

<div id="parent">
    <div id="child1">
        <h1>I am child1 h1 tag</h1>
        <h2>I am child1 h2 tag</h2>
    </div>

    <div id="child2">
        <h1>I am child2 h1 tag</h1>
        <h2>I am child2 h2 tag</h2>
    </div>
</div>

*/

// const parent = React.createElement("div", {id:"parent"}, [
//     React.createElement("div", {id:"child1"}, [React.createElement("h1",{},"I am child1 h1 tag"),
//         React.createElement("h2",{}, "I am child1 h2 tag")
//     ])
// ], React.createElement("div", {id:"child2"}, [React.createElement("h1",{}, "I am child2 h1 tag"),
//     React.createElement("h2", {}, "I am child2 h2 tag")
// ]))
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);







