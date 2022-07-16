import { User } from "firebase/auth";
import { useCallback, useState } from "react";
import { createContext } from "react";
import { auth } from "../../application/services/firebase";

interface AuthContextInterface {
  user?: User;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextInterface>(null);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  auth.onAuthStateChanged(setUser);
  const logout = useCallback(() => auth.signOut(), [auth]);
  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
