import { useEffect } from 'react';
import { usePipefyApp } from '../hooks/usePipefyApp';

import '../styles/pipe-view.css';

export function PipeView() {
  const { pipefyApp, pipefyAppInstance } = usePipefyApp();

  useEffect(() => {
    if (pipefyApp && pipefyAppInstance) {
      /**
       * Pipefy's main application requires that Pipe Views call this method when the page load is complete
       * before rendering the tab where your application will be shown.
       * Without this, you'll be redirected to the Kanban main view.
       */
      pipefyApp.render(() => {});
    }
  }, [pipefyApp, pipefyAppInstance]);

  return (
    <div className="pipe-view-content">
      <h1>Hello World!</h1>
      <p>Welcome to the custom Pipe-view!</p>
      <p>
        Here you can embed another solution. For example, see below our community page embedded within the pipe view.
        Take the opportunity to leave an app suggestion in our community. 😉
      </p>
      <iframe src="https://app.pipefy.com/public/form/x6yC3ZCF?internal=sampleapps" />
    </div>
  );
}
