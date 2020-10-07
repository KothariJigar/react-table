This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

- Install VS Code for coding
- Install node
- Install npm

#Front-end tools/libraries used

##Typescript
TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code. Typescript is recommended for big projects like TDI 3.0 for more robust software, while still being deployable where a regular JavaScript application would run.

We aim at using types as often as possible. The only exception is when third parties are used and it is more time consuming detecting/creating the correct type than it is useful. In this case the use of "any" is allowed.

Documentation:
https://www.typescriptlang.org

##Styled-components
We use styled-components to enhance our css with more maintainable styling practices and being able to scope our styles to component specific styles.
https://www.styled-components.com/

##React-router
We use react-router to handle the dynamic routing in TDI, as it is one of the most common libraries used to handle this for react apps. You can read more about the router structure under the “Routing” section.

Documentation:
https://reacttraining.com/react-router/web/guides/quick-start

##Suggested devtools

- React devtools - https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

##VS Code Extentions
Extensions suggested to use for this project

- Prettier - Code formatter https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- vscode-styled-components https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components
- TSlint - https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin

##Naming conventions
All folder names should use kebab case (all lower case with dash). Example: "form-elements".

All component file names should use pascal case (each word starting with upper case). Example: "Tables.tsx". The component should have the exact same name as the file, unless there are other reasons or the file includes several components.

Each component that has props should have an interface defined with the naming convention <ComponentName>Props. Example: a component named TableHeader would have the underface TableHeaderProps.
