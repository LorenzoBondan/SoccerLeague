
import { Team } from 'types/types';
import tacaMundial from 'assets/images/taca-mundial.png';
import tacaLibertadores from 'assets/images/taca-libertadores.png';
import tacaBrasileirao from 'assets/images/taca-brasileirao.png';
import tacaCopaBrasil from 'assets/images/taca-copa-brasil.png';

import './styles.css';

type Props = {
    team: Team;
}

const TeamCard = ({team} : Props) => {

    const plotCups = (quantity: number, imageUrl : string) => {
        const arrayImages = Array.from({length: quantity});

        return(
            <div style={{display:"flex", flexDirection:"row"}}>
                {quantity !== 0 ? 
                    arrayImages.map((_) => (
                        <img src={imageUrl} alt="" style={{height:"30px", marginLeft:"5px"}}/>
                    )) : 
                        <p style={{marginLeft:"5px"}}>0</p>
                }
            </div>
        );
    }

    return(
        <div className="team-card-container">
            <div className='team-card-title'>
                <h3>{team.name}</h3>
            </div>
            <div className='team-card-image-container'>
                <img src={team.imgUrl} alt="" />
            </div>
            <div className='team-card-content-container'>
                <>
                <div className='team-card-cups'>
                    <p>International Cups:</p>
                    {plotCups(team.internationalCups, tacaMundial)}
                </div>
                <div className='team-card-cups'>
                    <p>Continental Cups:</p>
                    {plotCups(team.continentalCups, tacaLibertadores)}
                </div>
                <div className='team-card-cups'>
                    <p>National Leagues:</p>
                    {plotCups(team.nationalLeagues, tacaBrasileirao)}
                </div>
                <div className='team-card-cups'>
                    <p>National Cups:</p>
                    {plotCups(team.nationalCups, tacaCopaBrasil)}
                </div>
                </>
            </div>
            <div className='team-card-stadium-container'>
                <h4>Stadium: {team.stadium.name}</h4>
            </div>
        </div>
    );
}

export default TeamCard;