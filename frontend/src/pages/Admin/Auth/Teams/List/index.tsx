import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';
import { SpringPage, Team } from 'types/types';
import TeamCrudCard from '../TeamCrudCard';
import './styles.css';

const List = () => {

  const [page, setPage] = useState<SpringPage<Team>>();

  const getTeams = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/teams/a",
      params: {
        size: 20
      },
    }

    requestBackend(params)
      .then(response => {
        setPage(response.data);
      });
  }, [])

  useEffect(() => {
    getTeams();
  }, [getTeams]);


  return (
    <div className='teams-crud-container'>
        <div className='row'>
            {page?.content
              .sort((a,b) => a.name > b.name ? 1 : -1)
              .map((item) => (
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" key={item.id}>
                    <TeamCrudCard team={item} key={item.id}/>
                </div>
            ))}
        </div>
    </div>
  );
};

export default List;