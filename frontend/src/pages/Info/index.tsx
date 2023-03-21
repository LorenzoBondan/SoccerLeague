import logoBrasileirao from 'assets/images/logo-brasileirao.png';
import logoCopaDoBrasil from 'assets/images/copa-do-brasil.png';
import logoLibertadores from 'assets/images/libertadores.png';
import logoMundial from 'assets/images/mundial.png';

import { GiBrazil } from 'react-icons/gi';
import { GiSouthAmerica } from 'react-icons/gi';
import { GiEarthAmerica } from 'react-icons/gi';

import './styles.css';

const Info = () => {
    return(
        <div className="info-container">
            <div className='odd'>
                <div className='info-card base-card'>
                    <div className='info-image-zone'>
                        <img src={logoBrasileirao} alt="" />
                    </div>
                    <div className='info-content-zone'>
                        <h3><i style={{marginRight:"10px"}}><GiBrazil/></i>Brazilian League</h3>
                        <p>The Brazilian Football Championship, also known as the Brasileirão, Brazilian Championship and Serie A, is the Brazilian professional football league among clubs in Brazil, being the main football competition in the country. Through it, the Brazilian representatives for the Copa Libertadores da América (together with the winner of Brazilian Cup) are indicated.</p>
                    </div>
                </div>
                <div className='info-background-img'>
                    <img style={{opacity:"0.3"}} src="https://www.cartacapital.com.br/wp-content/uploads/2018/12/palmeiras.jpg" alt="" />
                </div>
            </div>
            
            <div className='even'>
                <div className='info-card'>
                    <div className='info-card base-card'>
                        <div className='info-image-zone'>
                            <img src={logoCopaDoBrasil} alt="" />
                        </div>
                        <div className='info-content-zone'>
                            <h3><i style={{marginRight:"10px"}}><GiBrazil/></i>Brazilian Cup</h3>
                            <p>The Brazil Cup is a knockout football competition played by 92 teams, representing all 26 Brazilian states plus the Federal District. This cup is an opportunity for teams from smaller states to play against the big teams. The winner of the cup automatically qualifies for the following edition of the Copa Libertadores de América.</p>
                        </div>
                    </div>
                </div>
                <div className='info-background-img'>
                    <img style={{opacity:"0.3"}} src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/04/atletico-mg_cruzeiro.jpeg" alt="" />
                </div>
            </div>
            
            <div className='odd'>
                <div className='info-card'>
                    <div className='info-card base-card'>
                        <div className='info-image-zone'>
                            <img src={logoLibertadores} alt="" />
                        </div>
                        <div className='info-content-zone'>
                            <h3><i style={{marginRight:"5px"}}><GiSouthAmerica/></i>Continental Cup</h3>
                            <p>The Libertadores Cup is the main professional football competition among clubs in South America since 1960. It is the most important club competition in the continent. The name of the tournament is a tribute to the main leaders of the independence of the nations of South America: José Artigas, Simón Bolívar, José de San Martín, José Bonifácio de Andrada e Silva, D. Pedro I of Brazil, Antonio José de Sucre, and Bernardo O'Higgins.</p>
                        </div>
                    </div>
                </div>
                <div className='info-background-img'>
                    <img style={{opacity:"0.3"}} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5a2fe8b1306a4572/60dc755d2446e93b5b674aa8/186d8912f9b0cc610459afb64dec436e42ec99af.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200" alt="" />
                </div>
            </div>
            
            <div className='even'>
                <div className='info-card'>
                    <div className='info-card base-card'>
                        <div className='info-image-zone'>
                            <img src={logoMundial} alt="" />
                        </div>
                        <div className='info-content-zone'>
                            <h3><i style={{marginRight:"10px"}}><GiEarthAmerica/></i>International Cup</h3>
                            <p>The FIFA Club World Cup is an international men's association football competition organised by the FIFA, the sport's global governing body. The competition was first contested in 2000 and it has been held every year, and has been hosted by Brazil, Japan, the United Arab Emirates, Morocco and Qatar. Views differ as to the cup's prestige: it struggles to attract interest in most of Europe, and is the object of heated debate in South America.</p>
                        </div>
                    </div>
                </div>
                <div className='info-background-img'>
                    <img style={{opacity:"0.3"}} src="http://jornalbeirario.com.br/portal/wp-content/uploads/2012/12/corinthians.jpg" alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Info;