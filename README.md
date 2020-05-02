Setup the app:
-   `yarn install`

Generate hooks from graphql:

-   add graphql query or mutation in `src/graphql/index.ts`
-   start your graphql server, so `codegen` can get the schema
-   `yarn codegen` will add an exported `use<queryNameHere>` hook to `src/graphql/index.ts` for use in any component, as well as all the typescript and graphql you need to use the query (or mutation...)

Run the app:
-   `yarn start`



Graphql queries are managed by ApolloClient (although a good deal of the syntax is generated in the step above): https://www.apollographql.com/docs/react/

Local State is managed with mobx-state-tree. Here's the quick start:
https://mobx-state-tree.js.org/intro/getting-started

Styling and UI Components use Chakra-ui: https://chakra-ui.com/
We are hoping to build a component library as we go so as to avoid rebuilding simple components. Please try to only use UI Components from chakra-ui, or `src/components/common`. If you need new ui components, build them in the `common` folder as well, with an eye towards reuse

---

React App readme
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
