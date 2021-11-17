import './cats.css'
import v2 from "../../medie/v2.mp4"
import { useState } from 'react'

const Categories = () => {

    const [startVideo, setStartVideo] = useState(false)

    const handleHover = () => {
        console.log("object");
    }
    return ( 
        <div className="cats">
            <div className="eachCat art">
                <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
                <div className="catSection" onMouseOver={() => setStartVideo(false)}>
                    <video src={v2} alt="" className="rounded-2xl" autoPlay={startVideo} />
                    <span className="text-8xl text-white font-extrabold">ART</span>
                </div>
            </div>
            <div className="eachCat music">
                <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
                <div className="catSection">
                    <video src={v2} alt="" className="rounded-2xl" />
                    <span className="text-8xl text-white font-extrabold">MUSIC</span>
                </div>
            </div>
            <div className="eachCat dance">
                <p className="text-5xl text-white font-extrabold pb-4">FIELDE</p>
                <div className="catSection">
                    <video src={v2} alt="" className="rounded-2xl" />
                    <span className="text-8xl text-white font-extrabold">DANCE</span>
                </div>
            </div> 
        </div>
     );
}
 
export default Categories;