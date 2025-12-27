import { createContext, useContext } from "react";

const BackendUrlContext = createContext("http://localhost:3000");

export const useBackendUrl = () => useContext(BackendUrlContext);

export const BackendUrlProvider = ({ children }) => {
  const backendUrl = "http://localhost:3000";

  return (
    <BackendUrlContext.Provider value={backendUrl}>
      {children}
    </BackendUrlContext.Provider>
  );
};
