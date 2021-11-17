import "./cats.css";
import v2 from "../../medie/v2.mp4";
import { useContext, useState } from "react";
import { VideoTypeContext } from "../../Context/Context";
import axios from "axios";
import { Link } from 'react-router-dom';

const Categories = () => {
  const videoTypeContext = useContext(VideoTypeContext);

  const handlClic = async (text) => {
    try {
      const data = await axios.get(`/posts?cat=${text}`);
      console.log(data);
      VideoTypeContext.setVideoType(data.data);
      console.log(VideoTypeContext.videoType);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cats">
      <div className="eachCat art">
        <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
        <Link to="/videoType/art">
          <div className="catSection" onClick={() => handlClic("art")}>
            <video src={v2} alt="" className="rounded-2xl" autoPlay={true} />
            <span className="text-8xl text-white font-extrabold">ART</span>
          </div>
        </Link>
      </div>
      <div className="eachCat music">
        <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
        <Link to="/videoType/music">
          <div className="catSection">
            <video src={v2} alt="" className="rounded-2xl" autoPlay={true} />
            <span className="text-8xl text-white font-extrabold">MUSIC</span>
          </div>
        </Link>
      </div>
      <div className="eachCat dance">
        <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
        <Link to="/videoType/dance">
          <div className="catSection">
            <video src={v2} alt="" className="rounded-2xl" autoPlay={true} />
            <span className="text-8xl text-white font-extrabold">DANCE</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
