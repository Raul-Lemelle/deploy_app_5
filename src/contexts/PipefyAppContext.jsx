import { createContext, useEffect, useMemo, useState } from 'react';

export const PipefyAppContext = createContext({
  pipefyApp: null,
  pipefyAppInstance: null,
});

export const PipefyAppProvider = ({ children }) => {
  const [pipefyApp, setPipefyApp] = useState(null);
  const [pipefyAppInstance, setPipefyAppInstance] = useState(null);

  useEffect(() => {
    try {
      if (window.PipefyApp && window.PipefyApp.init) {
        setPipefyAppInstance(window.PipefyApp.init());
        setPipefyApp(window.PipefyApp);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const value = useMemo(() => {
    return { pipefyApp, pipefyAppInstance };
  }, [pipefyApp, pipefyAppInstance]);

  return <PipefyAppContext.Provider value={value}>{children}</PipefyAppContext.Provider>;
};
