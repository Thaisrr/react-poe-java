import {configureStore} from "@reduxjs/toolkit";
import panierSlice from "./panierSlice";

const store = configureStore({
    reducer: {
        panier: panierSlice
    }
})

export default store;