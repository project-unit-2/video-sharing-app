import Header from "../../components/header/Header";
import MyVideos from "../../components/myVideos/MyVideos";
import Trending from "../../components/trending/Trending";


const Home = () => {
    return ( 
        <div>
            <Header />
            <Trending />
            <MyVideos />
        </div>
     );
}
 
export default Home;