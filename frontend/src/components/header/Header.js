import './header.css'
import NavBar from '../navBar/NavBar';
import video from '../../medie/v2.mp4'
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { Link } from 'react-router-dom';

const Header = () => {

  const {user} = useContext(Context)
    return ( 
      <div className="header">
        <NavBar />
        <section className="home">
            <video className="video-slide" src={video} autoPlay={true} muted loop></video>
            <div className="content">
                <h1>hype</h1>
            </div>
            <div className="media-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                {user && (
                  <Link to="/userSetting">
                  <div className="userSettingPage">
                      <i class="fas fa-user"></i>
                      </div>
                      </Link>
                )}
            </div>
        </section>
            
      </div>
    );
}
 
export default Header;