import React from "react"

class ProfileClass extends React.Component{
   constructor(props){
    super(props);
        this.state ={
            userInfo:{
                name:"",
                location:"",
        }
        }
        console.log("child constructor");
    
   }


   async componentDidMount(){

    const data = await fetch("https://api.github.com/users/DeveloperYogesh07")
     const json = await data.json();
     this.setState({
        userInfo:json,
     })
    // setInterval(() => {
    //     console.log("hello");
    // }, 1000);
    console.log("child componenntdidmount");
   }

    render(){
        console.log("child render")
        return(
            <>
              <h1>this is a site which is developed by :{this.props.name} {this.props.caste}</h1>
              <h2>{this.state.userInfo.name}</h2>
              <h2>{this.state.userInfo.name}</h2>
              {/* <button
              onClick={()=>{
                this.setState({
                    count:1,
                    count1:2
                })
              }}
              setcount
              ></button> */}
            </>
        )
    }
}

export default ProfileClass