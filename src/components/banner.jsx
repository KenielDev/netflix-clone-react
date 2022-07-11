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
      className="bg-cover h-[750px] bg-gradient-to-t from-black to-white"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="grid grid-cols-2">
        <div className="text-white text-left mt-[200px] ml-[30px]">
          <div className="gap-y-10">
            <div>
              <h1>titulo</h1>
            </div>
            <div>
              <h2>top em series e filmes</h2>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis at ipsum, inventore sunt nobis molestiae quis
                similique quae facilis necessitatibus explicabo natus, veniam
                voluptate! Blanditiis tenetur debitis eligendi repellat aut.
              </p>
            </div>
            <div>
              <button className="rounded bg-white p-2 text-black font-semibold">
                Assistir
              </button>
              <button>Mais informações</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
}

export default Banner;
