import React from "react";
import categories, { getMovies } from "../api";

function Banner() {
  const [movie, setMovie] = React.useState([]);
  const fetchRandomMovie = async () => {
    try {
      const getBanner = categories.find(
        (category) => category.name === "originalsNetflix"
      );
      const data = await getMovies(getBanner.path);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(data?.results[randomIndex]);
    } catch (error) {
      console.log("erro ao buscar o banner", error);
    }
  };

  React.useEffect(() => {
    fetchRandomMovie();
  }, []);

  return (
    <header
      className="bg-cover bg-gradient-to-b to-black h-[750px]"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="grid grid-cols-2">
        <div className="text-white text-left mt-[200px] ml-[30px]">
          <div className="gap-y-10">
            <div className="text-4xl font-semibold w-2/3 p-4">
              {movie?.name}
            </div>
            <div className="text-[24px] w-2/3 p-4">
              <p>{movie?.overview}</p>
            </div>
            <div className="p-4">
              <button className="rounded text-[24px] bg-white px-8 py-3 p-4 text-black font-semibold">
                Assistir
              </button>
              <button className="rounded text-white text-[24px] px-8 py-3 ml-4 bg-[#333436] font-semibold">
                Mais informações
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
}

export default Banner;
