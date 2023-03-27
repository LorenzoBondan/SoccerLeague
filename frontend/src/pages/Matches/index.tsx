
import { AxiosRequestConfig } from 'axios';
import MatchCard from 'components/MatchCard';
import { useCallback, useEffect, useState } from 'react';
import { Match, SpringPage } from 'types/types';
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
            window.scrollTo(0, 0);
          })
      }, [])
  
      useEffect(() => {
        getMatches();
      }, [getMatches]);


    return(
        <div className='matches-container'>
            <h1>Matches</h1>
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
        </div>
    );
}

export default Matches;