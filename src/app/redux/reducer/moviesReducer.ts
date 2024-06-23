import { AllMOVIES,Categories} from "../types/moviesType";


const initalValue = { movies: [], pageCount: 0 }

export const moviesReducer = (state = initalValue, action:any) => {
    switch (action.type) {
        case AllMOVIES:
            return { movies: action.data, pageCount: action.pages }
            case Categories:
                return { movies: action.data , pageCount: 0 }
        default:
            return state;
    }
}