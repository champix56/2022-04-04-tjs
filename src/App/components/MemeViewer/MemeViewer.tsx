import React from "react";
import PropTypes from "prop-types";
import style from "./MemeViewer.module.scss";
import { I_Image, I_Meme } from "../../interfaces/common";

interface I_MemeVieverProps {
  meme: I_Meme;
  image: I_Image|undefined;
}
const MemeViewer: React.FC<I_MemeVieverProps> = (props) => {
  return (
    <svg className={style.MemeViewer} data-testid="MemeViewer">
      {undefined!==props.image?<image href={`/img/${props.image.url}`} x="0" y="0" />:null}
      <text
        x={props.meme.x}
        y={props.meme.y}
        fontSize={props.meme.fontSize}
        fill={props.meme.color}
        textDecoration={props.meme.underline?'underline':'none'}
        fontStyle={props.meme.italic?'italic':'normal'}
        fontWeight={props.meme.fontWeight}
      ></text>
    </svg>
  );
};
// MemeViewer.propTypes = {
//   meme: PropTypes.object.isRequired,
//   image: PropTypes.any.isRequired,
// };

export default MemeViewer;
