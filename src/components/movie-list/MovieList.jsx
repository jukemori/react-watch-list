import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./movie-list.scss";

import { SwiperSide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";

import Button from "../button/Button";

import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSide key={i}>
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
          </SwiperSide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;