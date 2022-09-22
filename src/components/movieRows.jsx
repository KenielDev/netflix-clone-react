import React from "react";
import { getMovies } from "../api";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "/src/App.css";

const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({ title, path }) {
  const [movies, setMovies] = React.useState([]);

  const [scrollX, setScrollX] = React.useState(-400);

  const handleLeft = () => {
    let x = scrollX + window.innerWidth / 2;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRight = () => {
    let x = scrollX - window.innerWidth / 2;
    if (x > 1000) {
      x = 1000;
    }
    setScrollX(x);
  };

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data", data);
      setMovies(data?.results);
    } catch (error) {
      console.log("error fetchMovies", error);
    }
  };

  React.useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl py-4 text-left ml-4 font-bold text-white">
        {title}
      </h2>
      <div
        className="left-0 absolute z-50 bg-black bg-opacity-50 opacity-0 hover:opacity-100 cursor-pointer h-[250px] flex items-center justify-center"
        onClick={handleLeft}
      >
        <NavigateBeforeIcon style={{ fontSize: 50, color: "white" }} />
      </div>
      <div className="right-0 absolute z-50 bg-black bg-opacity-50 opacity-0 hover:opacity-100 ease-in-out duration-300 cursor-pointer h-[250px] flex items-center justify-center overflow-hidden">
        <NavigateNextIcon
          style={{ fontSize: 50, color: "white" }}
          onClick={handleRight}
        />
      </div>
      <div
        className="ml-4 flex items-center justify-center gap-3 ease-in-out duration-300 "
        style={{ marginLeft: scrollX }}
      >
        {movies?.map((movie) => {
          return (
            <img
              className="w-full cursor-pointer max-h-[250px] hover:scale-110 ease-in-out duration-300 py-5"
              key={movie.id}
              src={`${imageHost}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
