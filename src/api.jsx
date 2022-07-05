const API_KEY = "4d825b37952f21901c8f9d8feda61cdb";

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: "originalsNetflix",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  {
    name: "horror",
    title: "Terror",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
];
console.log(categories);

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getMovies", error);
  }
};
