import Icon from "../Icon/Icon";
import './Card.css'

function Card({player}) {
    let icon = <Icon />;
    if(player === 'O') {
        icon = <Icon  name="circle"/>;
    }
    else if(player === 'X') {
        icon = <Icon name="cross" />;
    }
    else {
        icon = <Icon name="pen" />;
    }
    return (
        <div className="card">
            {icon}
        </div>
    )
}

export default Card;