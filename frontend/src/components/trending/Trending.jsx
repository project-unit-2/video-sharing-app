import './trending.css'
import video from '../../medie/Pexels Videos 3533.mp4'
import v2 from '../../medie/v2.mp4'

const Trending = () => {


  return (
    <div className="trending">
      <h1 className="sectionTitle">Trnding Videos</h1>

      <div className="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">
              Finding customers for your new business
            </h3>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work.
              Here are five ideas you can use to find your first customers.
            </p>
          </div>
          <div className="md:flex-shrink-0">
            <video className="h-80 w-full object-cover md:w-70" src={video} autoPlay={true} loop/>
            <i className="far fa-heart likeIcon"></i>
          </div>
        </div>
      </div>
      
      <div className="trendingVideos">
          <video className="video" src={video} autoPlay={true}/>
          <video className="video" src={v2} autoPlay={true}/>
          <video className="video" src={video} autoPlay={true}/>
          <video className="video" src={v2} autoPlay={true}/>
          <video className="video" src={video} autoPlay={true}/>
          <video className="video" src={v2} autoPlay={true}/>
          <video className="video" src={video} autoPlay={true}/>
          <video className="video" src={v2} autoPlay={true}/>
      </div>
    </div>
  );
}
 
export default Trending;