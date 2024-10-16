import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './reducers/products'

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>
