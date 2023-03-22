
import { AxiosRequestConfig } from 'axios';
import TeamCard from 'components/TeamCard';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SpringPage, Team } from 'types/types';
import { requestBackend } from 'util/requests';
import './styles.css';

const Teams = () => {

    const [page, setPage] = useState<SpringPage<Team>>();

    const getTeams = useCallback(() => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: "/teams/a"
        }
    
        requestBackend(params) 
          .then(response => {
            setPage(response.data);
            window.scrollTo(0, 0);
          })
      }, [])
  
      useEffect(() => {
        getTeams();
      }, [getTeams]);

    return(
        <div className="teams-container">
            <h1>Teams</h1>

            <div className="row">
                {page?.content
                  .sort((a,b) => a.name > b.name ? 1 : -1)
                  .map(team => (
                    <div className="col-sm-6 col-lg-6 col-xl-4 teams-column" key={team.id}>
                      <Link to={`/teams/${team.id}`}>
                        <TeamCard team={team}/>
                      </Link>
                    </div>
                    )
                  )
                }
            </div>
        </div>
    );
}

export default Teams;