import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const checkUserLogin = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/check", { credentials: "include",});
        const data = await res.json();
        setAuthUser(data.user); // null or authenticated user object
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    checkUserLogin();
  }, []);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
