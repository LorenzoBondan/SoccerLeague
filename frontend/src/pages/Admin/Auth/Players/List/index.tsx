
import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';
import { Player, SpringPage } from 'types/types';
import './styles.css';
import PlayerCrudCard from '../PlayerCrudCard';
import { Link } from 'react-router-dom';

const List = () => {

  const [page, setPage] = useState<SpringPage<Player>>();

  const getPlayers = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/players",
      params: {
        size: 2000
      },
    }

    requestBackend(params)
      .then(response => {
        setPage(response.data);
      });
  }, [])

  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  return (
    <div className='players-crud-container'>
      <Link to="/admin/players/create">
          <button className="btn btn-primary btn-crud-add">
            ADD NEW PLAYER
          </button>
        </Link>
        <div className='row'>
            {page?.content
              .sort((a,b) => a.name > b.name ? 1 : -1)
              .map((item) => (
                <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3" key={item.id}>
                    <PlayerCrudCard player={item} key={item.id}/>
                </div>
            ))}
        </div>
    </div>
  );
};

export default List;