import logoBrasileirao from 'assets/images/logo-brasileirao.png';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return(
        <div className="home-container">
                
            <div className='home-content-container'>
                <h1>THE BRAZILIAN LEAGUE SIMULATOR <img src="https://em-content.zobj.net/thumbs/160/apple/325/flag-brazil_1f1e7-1f1f7.png" alt="" /></h1>
                <p>Simulate the result of matches and check out all the teams, stadiums and players of the first division of the <strong>toughest</strong> soccer league in the world</p>
                <div className='home-button-zone'>
                    <Link to={`/teams`}>
                        <button className='btn btn-primary btn-home'><span>JOIN IN</span></button>
                    </Link>
                </div>
            </div>

            <div className='home-image-container'>
                <img src={logoBrasileirao} alt="" />
            </div>
            
        </div>
    );
}

export default Home;