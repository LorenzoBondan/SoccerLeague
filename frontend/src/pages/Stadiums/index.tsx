
import { AxiosRequestConfig } from 'axios';
import StadiumCard from 'components/StadiumCard';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SpringPage, Stadium } from 'types/types';
import { requestBackend } from 'util/requests';
import './styles.css';

const Stadiums = () => {

    const [page, setPage] = useState<SpringPage<Stadium>>();

    const getStadiums = useCallback(() => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: "/stadiums"
        }
    
        requestBackend(params) // função criada no requests.ts
          .then(response => {
            setPage(response.data);
            window.scrollTo(0, 0);
          })
      }, [])
  
      useEffect(() => {
        getStadiums();
      }, [getStadiums]);

    return(
        <div className='stadiums-container'>
            <h1>Stadiums</h1>

            <div className="row">
                {page?.content
                  .sort((a,b) => a.capacity < b.capacity ? 1 : -1)
                  .map(stadium => (
                    <div className="col-sm-6 col-lg-6 col-xl-6 stadiums-column" key={stadium.id}>
                      <Link to={`/stadiums/${stadium.id}`}>
                        <StadiumCard stadium={stadium}/>
                      </Link>
                    </div>
                    )
                  )
                }
            </div>
        </div>
    );
}

export default Stadiums;