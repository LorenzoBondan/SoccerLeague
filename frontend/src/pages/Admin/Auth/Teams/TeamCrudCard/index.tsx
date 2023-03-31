import './styles.css';

import { Link } from 'react-router-dom';
import { Team } from 'types/types';

type Props = {
  team : Team;
}

function TeamCrudCard( {team} : Props ) {

    return (
      <>
        <div className='base-card team-crud-card'>

            <div className='team-crud-card-top-container'>
                <img src={team.imgUrl} alt="" />
            </div>

            <div className='team-crud-card-bottom-container'>
              <h3>{team.name}</h3>
            </div>

            <div className='team-crud-card-buttons-container'>

                <Link to={`/admin/teams/team/${team.id}`}>
                  <button className='btn btn-outline-secondary team-crud-card-button'>
                    EDITAR
                  </button>
                </Link>
            </div>
        </div>
        
      </>
    );
  }

  export default TeamCrudCard;