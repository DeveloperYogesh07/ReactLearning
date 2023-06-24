import React from "react";
import ProfileClass from "./Profile";

class AboutClass extends React.Component{
  constructor(props){
    super(props);
     console.log("parent-constructor");
  }

 componentDidMount(){
    console.log("parent-componentdidmount");
 }

    render(){
        console.log("parent-render")
        return(
            <>
               
                <h1>Hello this is about our site</h1>
                <ProfileClass name={"yogesh"} caste={"upadhyay"}/>
            </>
            )
    }
}









export default AboutClass;