import { createContext } from "react";

const authContext = createContext();
const dataContext = createContext();
const wishListContext = createContext();
const cartContext = createContext();

export  { authContext, dataContext, cartContext, wishListContext };
