import './header.css'
import NavBar from '../navBar/NavBar';
import AddVideo from '../addVideo/AddV';
import video from '../../medie/v2.mp4'

const Header = () => {
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
            </div>
        </section>
            
      </div>
    );
}
 
export default Header;