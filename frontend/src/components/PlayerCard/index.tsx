
import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Player, Team } from 'types/types';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
    player: Player;
}

const PlayerCard = ({player} : Props) => {

    const positionColor = (positionNumber : string) => {

        let letterColor = '';

        if(positionNumber === 'GOALKEEPER'){
            letterColor = '#B9FD8F';
        }
        else if(positionNumber === 'DEFENDER'){
            letterColor = '#96FC58';
        }
        else if(positionNumber === 'MIDDLE_FIELD'){
            letterColor = '#64A83A';
        }
        else if(positionNumber === 'FORWARD'){
            letterColor = '#32541D';
        }

        return(
            <p>Position: <span style={{color: letterColor }}>{player.position}</span></p>
        );
    };

    const [team, setTeam] = useState<Team>();

    const getTeamById = useCallback( (id : number) => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: `/teams/team/${id}`
        }
    
        requestBackend(params) 
          .then(response => {
            setTeam(response.data);
          })
      }, [])
  
      useEffect(() => {
        getTeamById(player.teamId);
      }, );


    return(
        <div className='player-card-container'>
            <div className='player-card-image-container'>
                <img className='player-card-player-image' src={player.imgUrl} alt="" />
                <img className='player-card-team-image' src={team?.imgUrl} alt="" />
            </div>
            <div className='player-card-content-container'>
                <>
                <h3>{player.nickname}</h3>
                <p>Birth Date: {player.birthDate.substring(0,10)}</p>
                {positionColor(player.position)}
                </>
            </div>
        </div>
    );
}

export default PlayerCard;