
import { AllMOVIES,TrendingApi,Categories,Trending } from "../types/moviesType";
import axios from "axios";


export const getAllMovie = (page:number= 1) => {
    return async (dispatch:any) => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&page=${page}`)
        
        dispatch({ type: AllMOVIES, data: res.data.results, pages:  Math.ceil(res.data.total_pages / 5) })

    }
}
export const getCategories= () => {
    return async (dispatch:any) => {
        const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
        
        dispatch({ type: Categories, data: res.data.genres  })

    }
}


export const getTrending = () => {
    return async (dispatch:any) => {
        const res = await axios.get(TrendingApi)
        dispatch({ type: Trending, data: res.data.results })

    }
}



export const getPageBySearch = (query:string,page:number) => {
    return async (dispatch:any) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&query=${query}&page=${page}`)
        dispatch({ type: AllMOVIES, data: res.data.results, pages:  Math.ceil(res.data.total_pages / 5)})

    }
}
export const getPage = (id:number|string,page:number) => {
    return async (dispatch:any) => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&with_genres=${id}&page=${page}`)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: Math.ceil(res.data.total_pages / 5) })

    }
} 