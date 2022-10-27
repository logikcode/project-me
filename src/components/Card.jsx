import assassin from "../images/assassins.png"
import { Card } from "./CardStyled";
export const SectionCard = (props) =>{

    return(
        
        <Card>
            <img src={assassin} alt=''/>
            <div className="card-info">
            <h3>{props.text}</h3>
            <p>{props.info}</p>
            <div className="progress"></div>
            </div>
            <h2 className="percentage">{props.percentage}</h2>
        </Card>
      
    );
}