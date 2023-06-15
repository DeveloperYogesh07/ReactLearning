import React from "react";
import Reactdom from "react-dom/client";
import logo from "/logo.png"
import usericon from '/usericon.png'

// const heading = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", { id: "h1" }, "this is heading one"),
//   React.createElement("h2", { id: "h2" }, "this is heading 2"),
//   React.createElement("h3", { id: "h3" }, "this is heading 3"),
// ]);





//USING JSX

// const header = (
//     <div className="title" key="title">
//         <h1 id="h1" key="h1">this is a heading 1</h1>
//         <h2 id="h2" key="h2">this is a heading 2</h2>
//         <h3 id="h3" key="h3"> this is a heading 3</h3>
//     </div>
// );

 //  functional component
// const Header1 = () => {
//     return (
//     <div className="Title" key="title">
//         <h1 id="h1" key="h1">this is a heading 1 from functional component</h1>
//         <h2 id="h2" key="h2">this is a heading 2 from functional component</h2>
//         <h3 id="h3" key="h3"> this is a heading 3 from functional component</h3>
//     </div>
// );
// }

// const AnotherCompnent = () =>{
//     return (
//         <div><h1>this is a another component</h1></div>
//     )
// }




// const Container = () => {
//   return (
//     <div>
//       {header}
//       <AnotherCompnent />
//      <h2>this is a normal h2 tag inside funciton componenet</h2>
//      <AnotherCompnent></AnotherCompnent>
//     </div>
//   );
// };



const Header = () =>{
    return (
        <header className="header">
        <div className="left">
           <img src={logo} alt="logo" />
        </div>
        <div className="center">
            <input className="input"
               type="text"
               placeholder="search"
            />
          <button type="submit" value="submit" 
          />
         

          </div>
          <div className="right">
            <img src={usericon} alt="icon"
            />
        </div>
        </header>

    )
}


const root = Reactdom.createRoot(document.getElementById("root"));

root.render(< Header/>);