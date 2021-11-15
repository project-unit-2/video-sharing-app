import './navBar.css'

const NavBar = () => {
    return ( 
        <header>
            <img src="" alt="Logo" className="brand logo" width="75" height="75"/>

            {/* <div class="menu-btn">
                <i class="far fa-grip-horizontal"></i>
            </div> */}

            <div className="navigation">
                <div className="navigation-items">
                    <a href="#">Home</a>
                    <a href="#">Trending</a>
                    <a href="#">Type</a>
                    <a href="#">LogIn</a>
                    <a href="#">SignUp</a>
                </div>
            </div>


            <div className="searchBar">
                <input type="text" placeholder="Search by Title or Username..." /><i className="fas fa-search"></i>
            </div>

        </header>
     );
}
 
export default NavBar;
