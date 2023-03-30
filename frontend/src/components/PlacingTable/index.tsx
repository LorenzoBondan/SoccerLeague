import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { SpringPage, Team } from 'types/types';
import { requestBackend } from 'util/requests';
import './styles.css';

const PlacingTable = ({onUpdate} : any) => {

    const [page, setPage] = useState<SpringPage<Team>>();

    const getTeams = useCallback(() => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: "/teams/placing"
        }
    
        requestBackend(params) 
          .then(response => {
            setPage(response.data);
            onUpdate();
          })
      }, [onUpdate])
  
      useEffect(() => {
        getTeams();
      }, [getTeams]);


      const placingColor = (number : number) => {
        
        let positionColor;
        
        if(number <= 3){
            positionColor = '#3ACB3D';
        } 
        else if(number >= 4 && number < 6){
            positionColor = '#32541D';
        }
        else if(number >= 16 && number <= 20){
            positionColor = 'rgb(255,0,0)';
        }

        return(
            <td style={{color: positionColor, borderTop:"none" }}> {number + 1}</td>
        );
      }
    
    return(
        <table className='placing-table'>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Points</th>
                    <th>Games</th>
                    <th>Victories</th>
                    <th>Draws</th>
                    <th>Defeats</th>
                    <th>Goals Scored</th>
                    <th>Goals Conceded</th>
                    <th>Goal Difference</th>
                </tr>
            </thead>

            <tbody>
                {page?.content.map((team, index) => (
                    <tr key={team.id}>
                        <td>{placingColor(index)}</td>
                        <td>{team.name}</td>
                        <td>{team.points}</td>
                        <td>{team.games}</td>
                        <td>{team.victories}</td>
                        <td>{team.draws}</td>
                        <td>{team.defeats}</td>
                        <td>{team.goalsScored}</td>
                        <td>{team.goalsConceded}</td>
                        <td>{team.goalsScored - team.goalsConceded}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PlacingTable;