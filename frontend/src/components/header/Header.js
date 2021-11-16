import './header.css'
// import video from '../../medie/v2.mp4'
import NavBar from '../navBar/NavBar';
import AddVideo from '../addVideo/AddV';

const Header = () => {
    return (
      <div className="header">
        <NavBar />
        <section className="home">
            {/* <video className="video-slide" src={video} autoPlay={true} muted loop></video> */}
            <div className="content">
                <h1>hype</h1>
            </div>
            <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </section>
            
        <div className="addSection">
          <AddVideo />
        </div>
      </div>
    );
}
 
export default Header;