# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Trouble with installation 
if there is version earlier than 5.0.0 then uninstall by running the command `npm uninstall -g create-react-app` or `yarn global remove create-react-app` in the terminal in your working folder. 
Then install by running `npx create-react-app .`
Then you should be asked a question 
`Need to install the following packages: create-react-app Ok to proceed? (y)`
then you say y to accept. 

or you can use `npm install -g create-react-app` then `create-react-app .` 
dot "." means your working folder 

### To install firebase 
In your working folder in Visual Studio Code run `npm install firebase` 

### Linking firebase to your react project
Once you have created a new project in Firebase, click on the settings in Project Overview to Project Settings. Click on the </> button and register your app. Give it a name, then click register. You will need to add a new file in your vs code src folder called firebase-config.js and everything related to the connection will be put in this file. The first thing you put will be the `const firebaseConfig` code. 

### The database 
Click on the `Firestore Database` and create a database. 
then click `Rules` to change permissions. 
Change the if false statement to say true instead. Publish those changes. 
Go to the Data tab and add your data name. No SQL database so you have collections which would be similar to tables. 
![collection](https://user-images.githubusercontent.com/83961643/148936856-fa8fdc20-bada-4838-9455-30aba3d6f733.jpeg)
:arrow_right:then say next 

A collection will include multiple documents. 

You can choose an auto generated ID. 

Add fields. 

It should look like then when you say DONE. 
![data](https://user-images.githubusercontent.com/83961643/148938421-e5ccb8d7-3a6c-439f-945b-a142d973ddf8.jpeg)

## Run your project 
`npm start`

# Final product of the User Input App 
![inputuserappscreenshot](https://user-images.githubusercontent.com/83961643/149079085-79f45812-801f-4e23-b59c-1af036843bbf.jpeg)


Last EDIT January 2022
