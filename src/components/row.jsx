import React from "react";
import { getMovies } from "../api";

const imageHost = "https://image.tmdb.org/t/p/original/";
function Row({ title, path }) {
  const [movies, setMovies] = React.useState([]);

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);
    } catch (error) {
      console.log("error fetchMovies", error);
    }
  };

  React.useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="bg-black">
      <h2 className="text-2xl py-4 text-left ml-4 font-bold text-white">
        {title}
      </h2>
      <div className="ml-5 flex items-center justify-center gap-3">
        {movies?.map((movie) => {
          return (
            <img
              className="w-[full] cursor-pointer max-h-[250px] hover:scale-125 ease-in-out duration-300"
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
