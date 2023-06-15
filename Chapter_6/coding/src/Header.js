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
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>about</li>
            <li>Contact us</li>
            <li>cart</li>
          </ul>
        </div>
        <button>Login</button>
        <button>LogOut</button>
      </div>
    );
  }


  export default Header;