import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PipefyAppProvider } from './contexts/PipefyAppContext';
import { CardTab, Main, ModalCardButton, PipeView, Sidebar, SidebarCardButton } from './routes';

import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/card-tab',
    element: <CardTab />,
  },
  {
    path: '/sidebar',
    element: <Sidebar />,
  },
  {
    path: '/pipe-view',
    element: <PipeView />,
  },
  {
    path: '/card-button-sidebar',
    element: <SidebarCardButton />,
  },
  {
    path: '/card-button-modal',
    element: <ModalCardButton />,
  },
  /**
   * Add a new item in this list for each different feature you want to add to your app.
   * This entry will be used inside the App.jsx file to create the features.
   */
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PipefyAppProvider>
      <RouterProvider router={router} />
    </PipefyAppProvider>
  </React.StrictMode>
);
