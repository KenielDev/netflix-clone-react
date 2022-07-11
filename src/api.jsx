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
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
  },
  {
    name: "horror",
    title: "Terror",
    path: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
  },
];

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getMovies", error);
  }
};

export default categories;
