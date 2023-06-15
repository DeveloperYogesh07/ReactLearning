
        const heading = React.createElement("h1",{id:"title1"},"this is heading 1");
        const heading2 =  React.createElement("h2",{id:"title2"},"this is heading 2");
        const heading3 =  React.createElement("h3",{id:"title3"},"this is heading 3");

        const paragraph = React.createElement("p",{id:"paragraph"},"this is paragraph tag crated by React ")

        const Containor = React.createElement("div",{id:"containor"},[heading,heading2,heading3,paragraph]);

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(Containor);
