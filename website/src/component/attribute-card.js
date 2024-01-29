import { ReactComponent as BgBadge } from "../home/assets/bg-badge.svg";
import "./attribute.css";
function AttributeCard(props) {
  // console.log(props)
  // console.log("======>", props.commonProps.imagePath)
  props = props.commonProps;
  return (
    <div>
      <img src={props.imagePath} className="attributePanel" alt={props.altName} />
      <div>
        <div>
          <span> {props.AttributeText}</span>
        </div>
        <div>
          <BgBadge />
          <img
            src={props.badge.imagePath}
            className="badge"
            alt={props.badge.altName}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AttributeCard;
