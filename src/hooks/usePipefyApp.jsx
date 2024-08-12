import { useContext } from 'react';
import { PipefyAppContext } from '../contexts/PipefyAppContext';

export const usePipefyApp = () => {
  const context = useContext(PipefyAppContext);

  if (!context) {
    throw new Error('usePipefyApp must be used within a PipefyAppProvider');
  }

  return {
    pipefyApp: context.pipefyApp,
    pipefyAppInstance: context.pipefyAppInstance,
  };
};
