import { createContext, useContext, useState, useEffect } from "react";
import React from "react";
import { Provider } from "react";

const ProductContext = createContext(null);

export function MyContextProvider({ children }) {
  const [myLocalStorageData, setMyLocalStorageData] = useState({});

  useEffect(() => {
    //logic for getting a value from local storage stored under the key 'key'
    const data = JSON.parse(localStorage.getItem("productSelected"));
    setMyLocalStorageData(data);
  }, []);
  return (
    <MyContextProvider.Provider
      value={{myLocalStorageData, setMyLocalStorageData}}
    >
      {children}
    </MyContextProvider.Provider>
  );
}

export function useMyContext() {
  return useContext(ProductContext);
}
