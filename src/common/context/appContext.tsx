import { FirebaseApp } from "firebase/app";
import { createContext } from "react";
import { firebaseApp } from "../../application/services/firebase";

interface AppContextInterface {
  firebaseApp: FirebaseApp;
}

const AppContext = createContext<AppContextInterface>(null);

export const AppContextProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ firebaseApp }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
