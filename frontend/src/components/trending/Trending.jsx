import './trending.css'
import video1 from '../../medie/Pexels Videos 3533.mp4'
import { useContext } from 'react' 
import { AllVideos } from '../../Context/Context'


const Trending = () => {

  const PF = 'http://localhost:5000/videos/'

  const allVideosInFile = useContext(AllVideos)

  return (
    <div className="trending">
      <h1 className="sectionTitle">All Videos</h1>

      
      <div className="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">
              allVideosInFile.allVideos.title
            </h3>
            <p className="mt-2 text-gray-500">
              allVideosInFile.allVideos.desc
            </p>
          </div>
          <div className="md:flex-shrink-0">
            <video className="h-80 w-full object-cover md:w-70" src={video1} autoPlay={true} loop/>
            <i className="far fa-heart likeIcon"></i>
          </div>
        </div>
      </div>  

      {allVideosInFile && <div className="trendingVideos">
          {allVideosInFile.allVideos.map((ele,index) => {
            return (
              <video className="video" src={PF + ele.video} autoPlay={false} key={index}/>
            )
          })}
      </div>}
    </div>
  );
}
 
export default Trending;