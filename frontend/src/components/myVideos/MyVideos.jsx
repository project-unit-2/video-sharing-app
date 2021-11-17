import './myVideos.css'
import AddVideo from '../addVideo/AddV'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
// import video from '../../medie/Pexels Videos 3533.mp4'
// import v2 from '../../medie/v2.mp4'
import {Context} from '../../Context/Context'
import axios from 'axios'

const MyVideos = () => {
    const PF = 'http://localhost:5000/videos/'

    const {user} = useContext(Context)
    const [videos, setVideos] = useState([])
    useEffect(()=> {
        async function getVidios() {
            try {
                const res = await axios.get(`/posts?user=${user.username}`)
                console.log(res.data);
                setVideos(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getVidios()
    } ,[])


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

        {user && (
            <div className="trendingVideos">
                {videos.map((ele, index) => {
                    return (
                        <video className="video" src={PF + ele.video} autoPlay={false} key={index}/>
                    )
                })}
            </div>
        )}
        </div>
     );
}
 
export default MyVideos;