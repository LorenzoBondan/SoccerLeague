import { AxiosRequestConfig } from 'axios';
import MatchCard from 'components/MatchCard';
import PlacingTable from 'components/PlacingTable';
import { useCallback, useEffect, useState } from 'react';
import { Match, SpringPage, Team } from 'types/types';
import { requestBackend } from 'util/requests';
import './styles.css';

const Matches = () => {

    const [page, setPage] = useState<SpringPage<Match>>();

    const getMatches = useCallback(() => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: "/matches",
          params: {
            page: 0,
            size: 300
          },
        }
    
        requestBackend(params) 
          .then(response => {
            setPage(response.data);
          })
      }, [])
  
      useEffect(() => {
        getMatches();
      }, [getMatches]);

      const onSubmit = async () => {
        const dataExample = {
            test: "test",
        }
        const config: AxiosRequestConfig = {
            method: "POST",
            url: "/matches/random",
            withCredentials: false,
            data: dataExample
        };
        await 
        requestBackend(config)
            .then(() => {
              getMatches(); // update matches
              getTeams();
            })
    };

    // update table when random matches
    const handleUpdate = (newData : any) => {
      setTeamPage(newData);
    }

    const [teamPage, setTeamPage] = useState<SpringPage<Team>>();

    const getTeams = useCallback(() => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: "/teams/placing"
        }
    
        requestBackend(params) 
          .then(response => {
            setTeamPage(response.data);
            handleUpdate(response.data);
          })
      }, [])

    return(
        <div className='matches-container'>
            <h1>Matches</h1>
            <button className='btn btn-primary' onClick={onSubmit}>
              Generate Random Matches
            </button>
            <div className="row">
                {page?.content
                  .map(match => (
                    <div className="col-sm-6 col-lg-4 col-xl-3 matches-column" key={match.id}>
                        <MatchCard match={match}/>
                    </div>
                    )
                  )
                }
            </div>
            <div className='placing-table-on-matches-container'>
              <h1 style={{textShadow:"5px 5px 5px black"}}>Placing</h1>
              <PlacingTable onUpdate={teamPage}/>
            </div>
        </div>
    );
}

export default Matches;