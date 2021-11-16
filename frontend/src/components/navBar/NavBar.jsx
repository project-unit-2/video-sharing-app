import './navBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <header>
            <img src="" alt="Logo" className="brand logo" width="75" height="75"/>

            {/* <div class="menu-btn">
                <i class="far fa-grip-horizontal"></i>
            </div> */}

            <div className="navigation">
                <div className="navigation-items">
                    <Link to="/">
                        <a href="#">Home</a>
                    </Link>
                    <a href="#">Trending</a>
                    <a href="#">Type</a>
                    <Link to='login'>
                        <a href="#">LogIn</a>
                    </Link>
                    <Link to="register">
                        <a href="#">SignUp</a>
                    </Link>
                </div>
            </div>


            <div className="searchBar">
                <input type="text" placeholder="Search by Title or Username..." /><i className="fas fa-search"></i>
            </div>

        </header>
     );
}
 
export default NavBar;
