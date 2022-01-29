import './style.css'
import page1 from '../images/page1.png';

function Page1(){
    return(
        <div className="page">
            <img className="image1" src={page1} alt='page1' />
        </div>
    )
};

export default Page1;