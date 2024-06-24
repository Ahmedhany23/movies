import { Categories} from "../types/moviesType";


const initalValue = { categories: []}

export const categorieReducer = (state = initalValue, action:any) => {
    switch (action.type) {
        case Categories:
            return {categories: action.data}
           
        default:
            return state;
    }
}