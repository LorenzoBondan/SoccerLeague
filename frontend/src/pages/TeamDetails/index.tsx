import axios from 'axios';
import PlayerCard from 'components/PlayerCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Team } from 'types/types';
import { BASE_URL } from 'util/requests';
import tacaMundial from 'assets/images/taca-mundial.png';
import tacaLibertadores from 'assets/images/taca-libertadores.png';
import tacaBrasileirao from 'assets/images/taca-brasileirao.png';
import tacaCopaBrasil from 'assets/images/taca-copa-brasil.png';
import StadiumMap from 'components/StadiumMap';
import './styles.css';

type UrlParams = {
    teamId: string;
}

const TeamDetails = () => {

    const { teamId } = useParams<UrlParams>();

    const [team, setTeam] = useState<Team>();

    useEffect(() => {
        axios
        .get(`${BASE_URL}/teams/team/${teamId}`)
        .then((response) => {
            setTeam(response.data);
            window.scrollTo(0,0);
        })
    }, [teamId]);

    const plotCupsDetails = (quantity: number, imageUrl : string) => {
        const arrayImages = Array.from({length: quantity});

        return(
            <div style={{display:"flex", flexDirection:"row"}}>
                {quantity !== 0 ? 
                    arrayImages.map((_) => (
                        <img src={imageUrl} alt="" style={{height:"50px", marginLeft:"5px"}}/>
                    )) : 
                        <p>0</p>
                }
            </div>
        );
    }

    return(
        <div className="team-details-container">
            <div className='team-details-info'>
                <div className='team-details-logo'>
                    <img src={team?.imgUrl} alt="" />
                    <h1>{team?.name}</h1>
                </div>
                <div className='team-details-content'>
                    <div className='team-details-serie'>
                        <h2 style={{display:"flex", flexDirection:"row"}}>Serie: <p style={{color:"white", marginLeft:"10px", textTransform:"uppercase"}}>{team?.serie}</p></h2>
                    </div>
                    <div className='team-details-members' >
                        <h2 style={{display:"flex", flexDirection:"row"}}>Members: <p style={{color:"white", marginLeft:"10px"}}>{team?.members}</p></h2>
                    </div>
                    <div className='team-details-cups'>
                        <>
                        <h2>Titles</h2>
                        <div className='team-card-cups-details'>
                            <p>International Cups:</p>
                            {team?.internationalCups && ( 
                                plotCupsDetails(team?.internationalCups, tacaMundial))}
                        </div>
                        <div className='team-card-cups-details'>
                            <p>Continental Cups:</p>
                            {team?.continentalCups && (
                                plotCupsDetails(team.continentalCups, tacaLibertadores))}
                        </div>
                        <div className='team-card-cups-details'>
                            <p>National Leagues:</p>
                            {team?.nationalLeagues && (
                                plotCupsDetails(team.nationalLeagues, tacaBrasileirao))}
                        </div>
                        <div className='team-card-cups-details'>
                            <p>National Cups:</p>
                            {team?.nationalCups && (
                                plotCupsDetails(team.nationalCups, tacaCopaBrasil))}
                        </div>
                        </>
                    </div>
                    {team?.rivals && (
                        <div className='team-card-rivals-container'>
                            <h2>Rivals</h2>
                            <div className='team-card-rivals-images'>
                                {team.rivals.map(rival => (
                                    <img src={rival.imgUrl} alt="" />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='team-details-stadium'>
               <div className='team-details-stadium-image'>
                    <h3>{team?.stadium.name}</h3>
                        <img src={team?.stadium.imgUrl} alt="" />
                    <p>Capacity: {team?.stadium.capacity}</p>
               </div>
               <div className='team-details-stadium-content'>
                    <p>Location: {team?.stadium.location}</p>
                    {team?.stadium.latitude && (
                        <StadiumMap lat={team?.stadium.latitude} lng={team?.stadium.longitude} location={team.stadium.location}/>
                    )}
               </div>
            </div>
            <div className='row team-details-players'>
                <h2>Players</h2>
                {team?.players.map(player => (
                    <div className="col-sm-6 col-lg-4 col-xl-3 players-column team-details-player-card" key={player.id}>
                        <PlayerCard player={player}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamDetails;