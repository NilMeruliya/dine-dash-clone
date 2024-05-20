import CartSlice from "./slices/CartSlice";
import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice,
        search: SearchSlice
    }
})

export default Store;