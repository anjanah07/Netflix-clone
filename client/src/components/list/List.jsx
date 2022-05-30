import "./list.scss";
import React, { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../listitem/ListItem";

export default function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
  };

  const shows = [
    {
      img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/you-season-3-poster-netflix-social-featured.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5",
      ytUrl: "https://www.youtube.com/embed/ga1m0wjzscU",
    },
    {
      img: "https://cdn-www.comingsoon.net/assets/uploads/2022/05/man-bee-e1653579178481.jpg",
      ytUrl: "https://www.youtube.com/embed/YQ1vN_91KO0",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BODZlYjQ4NzYtZTg1MC00NGY4LTg4NjQtNGE3ZjRkMjk3YjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      ytUrl: "https://www.youtube.com/embed/mVsJXiI60a0",
    },
    {
      img: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQc2PQFS2R2USH6ssrSknNFP3ioppyFpQx1dMnSTv84AyeDMs0qhYHTgsHt6NQkYlVo2iUpNRowrxgHKhjqkV1qDEPn6CPCe1LqXUt5XP-ZgYrNRqFrbkLG7rfS9ysAajfcTmS7ys_MX_1JgR2Oa35xiJ.jpg?r=688",
      ytUrl: "https://www.youtube.com/embed/D4wJK4C_nZY",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BNjk4MDdhODctMmFhYi00ZTNhLThlN2UtN2NhZGY0OGFlMWEwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
      ytUrl: "https://www.youtube.com/embed/2s_m8NiLX9k",
    },
    {
      img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
      ytUrl: "https://www.youtube.com/embed/tgB1wUcmbbw",
    },
  ];

  const arr1 = shows.map((elem, i) => i);

  console.log({ arr1 });

  return (
    <div className="list">
      List
      <span className="listTitle">Continue to watch</span>
      https://www.youtube.com/embed/
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slideArrow left"
          only
          in
          theaters
          July
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div className="container" ref={listRef}>
          {[...shows, ...shows].map(({ ytUrl, img }, i) => (
            <ListItem index={i} url={ytUrl} img={img} />
          ))}

          {/* <ListItem index = {1} />
          <ListItem index = {2} />
          <ListItem index = {3} />
          <ListItem index = {4} />
          <ListItem index = {5} />
          <ListItem index = {6} />
          <ListItem index = {7} />
          <ListItem index = {8} />
          <ListItem index = {9} /> */}
        </div>
        <ArrowForwardIosOutlined
          className="slideArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
