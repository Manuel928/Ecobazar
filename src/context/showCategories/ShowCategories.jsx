import { createContext, useState } from "react";

export const ShowCategoriesContext = createContext();

const ShowCategories = ({ children }) => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <ShowCategoriesContext.Provider
      value={{ showCategories, setShowCategories }}
    >
      {children}
    </ShowCategoriesContext.Provider>
  );
};

export default ShowCategories;
