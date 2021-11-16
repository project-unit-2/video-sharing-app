import './addV.css'

const AddVideo = () => {

  const click = () => {
    console.log("object");
  }


  return (
    <div className="plus" onClick={click}>
        <i className="fas fa-plus"></i>
    </div>
  );
}
 
export default AddVideo;