import "./videoPage.css";
import video from "../../medie/v2.mp4";

const VideoPage = () => {
  return (
    <div className="write">
      <video className="writeVideo" src={video} alt="" autoPlay={true} />
      <label htmlFor="fileInput">
        <i className="writeIcon fas fa-plus"></i>
      </label>
      <input id="fileInput" type="file" style={{ display: "none" }} />

      <form className="writeForm">
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Description..."
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="#tags"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup videoType">
          <h3>Select Video Type </h3>
          <div>
            <label>
            <input type="checkbox" name="fruit[]" value="art" />
            <span>ART</span>
            </label>
            <label>
            <input type="checkbox" name="fruit[]" value="music" />
            <span>MUSIC</span>
            </label>
            <label>
            <input type="checkbox" name="fruit[]" value="dance" />
            <span>DANCE</span>
            </label>
          </div>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default VideoPage;
