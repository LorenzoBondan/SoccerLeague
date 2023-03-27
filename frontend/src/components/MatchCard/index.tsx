
import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Match, Team } from 'types/types';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
    match: Match;
}

const MatchCard = ({match}: Props) => {

    const [homeTeam, setHomeTeam] = useState<Team>();
    const [awayTeam, setAwayTeam] = useState<Team>();

    const getHomeTeamById = useCallback( (id : number) => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: `/teams/team/${id}`
        }
    
        requestBackend(params) 
          .then(response => {
            setHomeTeam(response.data);
          })
        }, [])

      
  
      useEffect(() => {
        getHomeTeamById(match.homeTeamId);
        getAwayTeamById(match.awayTeamId);
      }, []);
      

      const getAwayTeamById = useCallback( (id : number) => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: `/teams/team/${id}`
        }
    
        requestBackend(params) 
          .then(response => {
            setAwayTeam(response.data);
          })
        }, [])

    return(
        <div className='match-card-container'>
            <div className='match-card-content-container'>
                <div className='match-card-content'>
                    <img src={homeTeam?.imgUrl} alt="" />
                    <h3>{match.homeTeamGoals}</h3>
                    <h4>X</h4>
                    <h3>{match.awayTeamGoals}</h3>
                    <img src={awayTeam?.imgUrl} alt="" />
                </div>
                
            </div>
        </div>
    );
}

export default MatchCard;