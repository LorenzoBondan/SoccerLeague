import './styles.css';

import { Link } from 'react-router-dom';
import { Player } from 'types/types';

type Props = {
  player : Player;
}

function PlayerCrudCard( {player} : Props ) {

    return (
      <>
        <div className='base-card player-crud-card'>

            <div className='player-crud-card-top-container'>
                <img src={player.imgUrl} alt="" />
            </div>

            <div className='player-crud-card-bottom-container'>
              <h3>{player.name}</h3>
            </div>

            <div className='player-crud-card-buttons-container'>

                <Link to={`/admin/players/${player.id}`}>
                  <button className='btn btn-outline-secondary player-crud-card-button'>
                    EDIT
                  </button>
                </Link>
            </div>
        </div>
        
      </>
    );
  }

  export default PlayerCrudCard;