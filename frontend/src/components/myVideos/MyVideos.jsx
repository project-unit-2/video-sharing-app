import './myVideos.css'
import AddVideo from '../addVideo/AddV'
import video from '../../medie/Pexels Videos 3533.mp4'
import v2 from '../../medie/v2.mp4'
import { Link } from 'react-router-dom'

const MyVideos = () => {
    return ( 
        <div className="myVideos">
            <div>
                <h1 className="sectionTitle">My Videos</h1>
                <div className="add">
                    <Link to="/addVideoPage">
                        <AddVideo />
                    </Link>
                </div>
            </div>

        {/* <div className="trendingVideos">
            <video className="video" src={video} autoPlay={true}/>
            <video className="video" src={v2} autoPlay={true}/>
            <video className="video" src={v2} autoPlay={true}/>
            <video className="video" src={v2} autoPlay={true}/>
        </div> */}
        </div>
     );
}
 
export default MyVideos;