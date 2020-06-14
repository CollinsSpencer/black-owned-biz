# Black-Owned Biz

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and hosted with [Firebase](https://firebase.google.com/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

This also will run the Firebase emulator in the background.  
The Firebase emulator runs an emulated version of the Firestore database.  
Access the Firebase Emulator console at [http://localhost:4000](http://localhost:4000) in the browser.

Note that Firebase emulator does not have functionality to emulate Firebase Auth yet.  
If auth is necessary, use the following script.

### `npm run start:staging`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

This will connect to the staging Firebase project.  
Data accesses via Firebase will come from the staging server.  
Auth is also supported through the staging server.

### `npm run storybook`

Launches the component storybook app in interactive watch mode.  
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run deploy:staging`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include the hashes.

The app is then deployed to the Firebase staging server for hosting.

- https://black-owned-biz-staging.web.app/
- https://black-owned-biz-staging.firebaseapp.com/

### `npm run deploy`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include the hashes.

The app is then deployed to the Firebase server for hosting.

- https://blackowned.in/
- https://black-owned-biz.web.app/
- https://black-owned-biz.firebaseapp.com/
