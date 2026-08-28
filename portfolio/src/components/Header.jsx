import '../app.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        MyLogo
      </div>

      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;