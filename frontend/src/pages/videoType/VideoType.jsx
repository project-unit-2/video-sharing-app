import "./videoType.css";
import NavBar from "../../components/navBar/NavBar";

const VideoType = () => {
  
  const PF = 'http://localhost:5000/videos/'
  const vType = JSON.parse(localStorage.getItem("videoType"));
//   console.log(vType);

  return (
    <div className="videoType">
      <NavBar />
      
      <div className="div">
      {vType.map((ele,index) => {
          return (
              <div key={index} className="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-3xl m-4">
                <div className="md:flex">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {ele.title}
                    </div>
                    <p className="mt-2 text-gray-500">{ele.desc}</p>
                  </div>
                  <video
                      className="h-50 w-full object-cover md:w-61"
                      src={PF + ele.video}
                      alt="Man looking at item at a store"
                      autoPlay={true}
                    />
                    <i className="far fa-heart vTypeIcon"></i>
                </div>
              </div>
              );
            })}
        </div>
    </div>
  );
};

export default VideoType;
