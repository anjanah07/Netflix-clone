import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";


const Featured = ({type}) => {
  return (
    <div className="featured">
    {type && (
        <div className="category">
            <span>{type ==="movie"? "Movies": "Series"}</span>
            <select name="genre" id="genre">
                <option >Genre </option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fatansy">Fatansy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>

            </select>
        </div>
    )}
      <img
        width="100%"
        src="https://i.pinimg.com/474x/7c/b2/38/7cb238b1eb3bc2d92d19afd891a112cd.jpg"
        alt=""
      />
      <div className="info">
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2000-2012.png" alt="" />
        
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          libero maxime, laboriosam eos amet excepturi iusto nisi atque
          laudantium recusandae blanditiis! Blanditiis debitis quidem nesciunt
          possimus, aliquid ad eos laudantium.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
