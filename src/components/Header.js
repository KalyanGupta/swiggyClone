import {HEADER_LOGO} from "../utils/constants"
export const Header = () => {
    return (
      <div className="header">
        <img
          className="food-logo"
          alt="food logo"
          src={`${HEADER_LOGO}`}
        />
        <div className="navigation">
          <ul className="nav-items">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Contact Us</li>
            <li className="nav-item">Grocery</li>
            <li className="nav-item">Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;