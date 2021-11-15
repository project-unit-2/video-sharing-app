import './header.css'
import video from '../../medie/Pexels Videos 3533.mp4'
import NavBar from '../navBar/NavBar';
import AddVideo from '../addVideo/AddV';

const Header = () => {
    return (
      <div className="header">
        <NavBar />
        <section className="home">
            <video className="video-slide" src={video} autoplay="true" muted loop></video>
            <div className="content">
                <h1>hype</h1>
            </div>
            <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </section>
            
        <AddVideo />
      </div>
    );
}
 
export default Header;