import { AllMOVIES,Trending} from "../types/moviesType";


const initalValue = { movies: [], pageCount: 0}

export const moviesReducer = (state = initalValue, action:any) => {
    switch (action.type) {
        case AllMOVIES:
            return { movies: action.data, pageCount: action.pages }
            case Trending:
                return { movies: action.data , pageCount: 0 }
        default:
            return state;
    }
}