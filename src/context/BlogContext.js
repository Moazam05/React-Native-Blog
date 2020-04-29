import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={[5, 8, 1996]}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
