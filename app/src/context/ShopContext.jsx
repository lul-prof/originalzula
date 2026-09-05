/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "KSh";
  const value = {
    currency,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;