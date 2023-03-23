
import axios from 'axios';
import PlayerCard from 'components/PlayerCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Team } from 'types/types';
import { BASE_URL } from 'util/requests';
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
        })
    }, [teamId]);

    return(
        <div className="team-details-container">
            <h1>{team?.name}</h1>
            <h1>Players</h1>
            <div className='row team-details-players'>
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