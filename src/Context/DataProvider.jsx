import { useEffect, useState } from "react";
import { dataContext } from "./Context";


const DataProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  },[]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  },[]);

  return (
    <dataContext.Provider value={{ products, categories }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
