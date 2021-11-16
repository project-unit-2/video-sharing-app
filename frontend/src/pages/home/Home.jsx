import Categories from "../../components/categories/Cats";
import Header from "../../components/header/Header";
import MyVideos from "../../components/myVideos/MyVideos";


const Home = () => {
    return ( 
        <div>
            <Header />
            <MyVideos />
            <Categories />
        </div>
     );
}
 
export default Home;