const Header = ({ title }) => {
    return (
      <header className="header">
        <h1>{title}</h1>
      </header>
    );
  };
  
  Header.defaultProps = {
    title: "To do List",
  };
  
  export default Header;
  
