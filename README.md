# HelloPipefy Sample App

This is a sample application that integrates Pipefy using React and Pipefy's SDK.

## Application Setup

To run the application locally, use the following commands:

```sh
npm install
npm run dev
```

Open your browser and navigate to http://localhost:3000 to see the application in action.

## Publishing your application

Once you have finished coding, you'll need to build the code and publish it to your desired hosting service.

Use the following command to generate the final code you'll need to upload:

```sh
npm run build
```

Once finished, a folder called `dist` will be created. You should upload only the contents of that folder to your desired hosting server.

You can also use the command below to preview how your application would look in a production build while watching for changes in your code:

```sh
npm run preview
```

Check Vite's documentation for options to deploy your project to the web: [https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site](https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site)

## Technologies

This app was built using the following technologies:

- [React](https://react.dev/), a modern JavaScript library to build reusable components;
- [react-router-dom](https://reactrouter.com/en/main/start/overview#client-side-routing), a library to create routes on the client side;
- [Vite](https://vitejs.dev/), a build tool that allows fast local development and code transformation for production builds.

## File Descriptions

### [src/index.jsx](src/index.jsx)

This is where your application routes will be created.

You'll need to create a new route for each new feature you want to create.

### [src/routes/Main.jsx](src/routes/Main.jsx)

This is the main application component, and it is where you'll add the features your application will use.

See: https://developers.pipefy.com/docs/features

### [src/routes/CardTab.jsx](src/routes/CardTab.jsx)

This component represents a specific route in the application. It is used to display content related to the [card tab feature](https://developers.pipefy.com/docs/card-tab).
