import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Changed Children to children
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children} // Changed Children to children
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }; 
