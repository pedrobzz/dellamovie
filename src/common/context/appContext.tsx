import { createContext } from "react";

interface AppContextInterface {
  name: string;
}

const AppContext = createContext<AppContextInterface>(null);

const sampleAppContext: AppContextInterface = {
  name: "TypeScript React Template",
};

export const AppContextProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={sampleAppContext}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
