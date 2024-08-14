import axios from "axios";



export const getAllMovie = async (page) => {
    try{
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
          );
          return data;
    }
 catch{
    throw Error("can't read api token")
 }
};
export const getCategories = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en`
  );

  return data;
};

export const getTrending = async () => {
    try{
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&language=en-US`
          );
          return data;
    }
    catch{
        throw Error("can't read api token")
    }
};

export const getPageBySearch = async (query, page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=${page}`
  );

  return data;
};
export const getCategoryById = async (id, page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=${id}&page=${page}`
  );

  return data;
};
