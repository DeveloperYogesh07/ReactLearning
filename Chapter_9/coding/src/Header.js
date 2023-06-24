import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://images-platform.99static.com//j2uZserU8ZZdlyJra-ML_7Dx-v0=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/67/67648/attachment_67648391"
      />
    </a>
  );


const Header = () => {
  const [isLoggedIn,setisLoggedIn] = useState(true);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <Link to="/"><li>Home </li></Link>
            <Link to="/about"><li>About </li></Link>
            <Link to="/contact"><li>Contact us </li></Link>
            <Link to="/InstaMart"><li>InstaMart </li></Link>
            <li>cart</li>
          
        <li>
        {isLoggedIn ? (
        <button
         className="login-btn"
         onClick={()=>{
          setisLoggedIn(false);
         }}
        >Login</button>
        ):(
        <button className="login-btn"  onClick={()=> setisLoggedIn(true) } >LogOut</button>
      )}
      </li>
      </ul>
      </div>
      </div>
    );
  }


  export default Header;