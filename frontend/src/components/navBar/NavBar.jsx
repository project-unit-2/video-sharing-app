import './navBar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {Context} from '../../Context/Context'

const NavBar = () => {

    const {user} = useContext(Context)
    return (
      <header>
        <img src="" alt="Logo" className="brand logo" width="75" height="75" />

        {/* <div class="menu-btn">
                <i class="far fa-grip-horizontal"></i>
            </div> */}

        <div className="navigation">
          <div className="navigation-items">
            <Link to="/">
              <span href="#">Home</span>
            </Link>
            <span href="#">Trending</span>
            <span href="#">Type</span>
            <Link to="/login">
              <span href="#">LogIn</span>
            </Link>
            <Link to="/register">
              <span href="#">SignUp</span>
            </Link>
          </div>
        </div>

        {user && (
          <div className="userSettingPage">
            <Link to="/userSetting">
              <i class="fas fa-user"></i>
            </Link>
          </div>
        )}

        <div className="searchBar">
          <input type="text" placeholder="Search by Title or Username..." />
          <i className="fas fa-search"></i>
        </div>
      </header>
    );
}
 
export default NavBar;
