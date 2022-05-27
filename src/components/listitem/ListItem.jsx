import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import "./listitem.scss";
import { useState } from "react";

export default function ListItem({ index, img, url }) {
  const [isHovered, setIsHovered] = useState(false);
  // https://www.youtube.com/embed/ga1m0wjzscU
  const trailer = `${url}?autoplay=1&controls=0&loop=1&modestbranding=1`;

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <iframe
            src={trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          ></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">18+</span>
              <span>2020</span>
            </div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              repudiandae eveniet mollitia provident optio saepe iste voluptates
            </div>
            <div className="genre">Romantic</div>
          </div>
        </>
      ) : (
        <img src={img} alt="" />
      )}

      {/* {isHovered && (
        <>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">18+</span>
              <span>2020</span>
            </div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              repudiandae eveniet mollitia provident optio saepe iste voluptates
            </div>
            <div className="genre">Romantic</div>
          </div>
        </>
      )} */}
    </div>
  );
}
