
import { AxiosRequestConfig } from 'axios';
import PlayerCard from 'components/PlayerCard';
import { useCallback, useEffect, useState } from 'react';
import { Player, SpringPage } from 'types/types';
import { requestBackend } from 'util/requests';
import './styles.css';

const Players = () => {

    const [page, setPage] = useState<SpringPage<Player>>();

    const getPlayers = useCallback(() => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: "/players"
        }
    
        requestBackend(params) 
          .then(response => {
            setPage(response.data);
            window.scrollTo(0, 0);
          })
      }, [])
  
      useEffect(() => {
        getPlayers();
      }, [getPlayers]);


    return(
        <div className="players-container">
            <h1>All Players</h1>

            <div className="row">
                {page?.content
                  .sort((a,b) => a.position > b.position ? 1 : -1)
                  .map(player => (
                    <div className="col-sm-6 col-lg-4 col-xl-3 players-column" key={player.id}>
                        <PlayerCard player={player}/>
                    </div>
                    )
                  )
                }
            </div>
        </div>
    );
}

export default Players;