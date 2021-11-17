import "./videoPage.css";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const VideoPage = () => {


  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [videoType, setVideoType] = useState([]);
  const [file, setFile] = useState(null);
  const {user} = useContext(Context)
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkboxes = document.querySelectorAll('input[name="type"]:checked');
    checkboxes.forEach((checkbox) => {
      setVideoType(videoType.push(checkbox.value))
    });

    const newPost = {
      username: user.username,
      title,
      desc,
      hashTags: tags,
      categories: videoType,
    }
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.video = filename
      try {
        await axios.post('/upload', data)
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post('/posts', newPost)
      navigation('/')
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="write">
      {file && (
        <video className="writeVideo" src={URL.createObjectURL(file)} alt="" autoPlay={true} />
      )}
      <label htmlFor="fileInput">
        <i className="writeIcon fas fa-plus"></i>
      </label>
      <input 
        id="fileInput" 
        type="file" 
        style={{ display: "none" }} 
        onChange={(e) => setFile(e.target.files[0])}
      />

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title (Required)"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Description... (Optional)"
            type="text"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="#tags (Optional)"
            type="text"
            autoFocus={true}
            onChange={e => setTags(e.target.value)}
          />
        </div>
        <div className="writeFormGroup videoType">
          <h3>Select Video Type <span style={{color:"red"}}>Required</span> </h3>
          <div className="types">
            <label>
              <input type="checkbox" name="type" value="art" />
              <span>ART</span>
            </label>
            <label>
              <input type="checkbox" name="type" value="music" />
              <span>MUSIC</span>
            </label>
            <label>
              <input type="checkbox" name="type" value="dance" />
              <span>DANCE</span>
            </label>
          </div>
        </div>
        <button className="writeSubmit writeFormGroup" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default VideoPage;
