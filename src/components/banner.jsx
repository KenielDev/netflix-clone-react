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
      <div className="grid grid-cols-2 shadow-xl">
        <div className="navbar-nav container flex">
          <div>
            <img
              className="w-[200px]"
              src="./src/assets/img/logo.png"
              alt="Netflix"
            />
          </div>
          <div className="text-white px-6 flex justify-center items-center">
            <ul className="flex gap-4 font-semibold">
              <li className="hover:text-gray-400 ease-in-out duration-300">
                <a href="App">Início</a>
              </li>
              <li className="hover:text-gray-400 ease-in-out duration-300">
                <a href="MyList">Séries</a>
              </li>
              <li className="hover:text-gray-400 ease-in-out duration-300">
                <a href="">Filmes</a>
              </li>
              <li className="hover:text-gray-400 ease-in-out duration-300">
                <a href="">Bombando</a>
              </li>
              <li className="hover:text-gray-400 ease-in-out duration-300">
                <a href="">Minha lista</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-end justify-end p-4">
          <button>
            <img
              className="w-[70px] h-[70px] rounded-md"
              src="./src/assets/img/avatar.png"
              alt="avatar"
            />
          </button>
        </div>
      </div>
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
              <button className="hover:bg-opacity-90 ease-in-out duration-300 rounded text-[24px] bg-white px-8 py-3 p-4 text-black font-semibold">
                Assistir
              </button>
              <button className="hover:bg-opacity-75 ease-in-out duration-300 rounded text-white text-[24px] px-8 py-3 ml-4 bg-[#333436] font-semibold">
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
