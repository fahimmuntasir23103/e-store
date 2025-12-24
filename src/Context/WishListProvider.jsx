import { useState } from "react";
import { wishListContext } from "./Context";

const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const handleWishlist = (product) => {
    let productExist = wishList.find((item) => item.id == product.id);
    if (!productExist) {
      setWishList([...wishList, product]);
    }
  };
  const handleRemove = (product) => {
    const filter = wishList.filter((item) => item.id != product.id);
    setWishList(filter);
  };
  
  return (
    <wishListContext.Provider
      value={{
        wishList,
        setWishList,
        handleWishlist,
        handleRemove,
      }}
    >
      {children}
    </wishListContext.Provider>
  );
};

export default WishListProvider;
