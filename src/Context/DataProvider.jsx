import { useEffect, useState } from "react";
import { dataContext } from "./Context";


const DataProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([])

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
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((res) => setBlogs(res));
  },[]);

  return (
    <dataContext.Provider value={{ products, categories, blogs }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
