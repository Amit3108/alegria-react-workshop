import './style.css'
import home from '../images/home.jpg';

function Home(){
    return(
        <div className="page">
            <img className="image1" src={home} alt='home' />
        </div>
    )
};

export default Home;