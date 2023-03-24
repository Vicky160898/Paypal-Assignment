import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();
export default function ContextProvider({ children }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    setUser(data);
  }, []);

  return <MyContext.Provider value={{ user }}>{children}</MyContext.Provider>;
}

export const DataProvider = () => {
  return useContext(MyContext);
};
