import React, { createContext, useState } from "react";

// Create the context
const AppContext = createContext<{
  state: boolean;
  toggleState: () => void;
}>({
  state: true,
  toggleState: () => {},
});

// Create the provider component
export const AppContextProvider: React.FC<any> = ({ children }) => {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        toggleState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Export the context
export const useAppContext = () => React.useContext(AppContext);
