import { useEffect } from 'react';

export function useResize(pipefyApp) {
  useEffect(() => {
    if (pipefyApp) {
      pipefyApp.resizeTo('#root');
    }
  }, [pipefyApp]);
}
