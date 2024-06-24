import { configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from '@/app/redux/reducer/moviesReducer'
import { categorieReducer } from '../reducer/categorieReducer'


export const store = configureStore({ reducer: {moviesReducer,categorieReducer} })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
