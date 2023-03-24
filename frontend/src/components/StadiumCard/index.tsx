import { Link } from "react-router-dom";
import { Stadium } from "types/types";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import './styles.css';

type Props = {
    stadium: Stadium;
}

const StadiumCard = ({stadium} : Props) => {

    const renderTooltipTeamName = (teamName : string) => (
        <Tooltip>
          {teamName}
        </Tooltip>
    );

    return(
        <div className="stadium-card-container">
            <div className="stadium-card-image-container">
                <img src={stadium.imgUrl} alt="" />
            </div>

            <div className="stadium-card-content-container">
                <h3>{stadium.name}</h3>
                <p><strong style={{marginRight:"5px"}}>Capacity: </strong>{stadium.capacity}</p>
                <p><strong style={{marginRight:"5px"}}>Location: </strong>{stadium.location}</p>

                <div className="stadium-card-teams">
                    <h3 style={{marginTop:"30px"}}>Teams:</h3>

                    {stadium.teams.map(team => (
                        <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltipTeamName(team.name)}
                        >
                            <Link to={`/teams/team/${team.id}`} key={team.id}>
                                <img src={team.imgUrl} alt="" />
                            </Link>
                        </OverlayTrigger>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StadiumCard;