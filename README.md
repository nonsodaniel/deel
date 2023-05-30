# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


# Part 2
DO NOT USE ANY WEB OR OTHER RESOURCE.
## 1. What is the difference between Component and PureComponent? an example where it might break my app.
 React.PureComponent implements shouldComponentUpdate() lifecyle method by comparing the
  current state and props with the new state and props.
   This shallow comparison is done to remove unecessary rerender and determine the rerendering of the component,
    thereby leading to an increase in performance of the Application.
    Component doesn't implements `shouldComponentUpdate()` lifecyle method and no shallow comparison is done,
     which causes re-render whenever there's a change in props.

    Example: If an application not using React.PureComponent contains expensive computations 
     which causes it to rerender, the rerendering can lead to an infinite loop which 
      can result in breaking the application and even crash the device the application is running on.


## 2. Context + ShouldComponentUpdate might be dangerous. Why is that? 
`ShouldComponentUpdate` depends on using props and state to determine component rerendering.


## 3. Describe 3 ways to pass information from a component to its PARENT.


## 4. Give 2 ways to prevent components from re-rendering.  
a. Making use of React Hooks like UseMemo and useCalback which reduces rerendering by caching the results of expensive computations and returning the same result if the inputs are the same 
b. Making use of React.PureComponent which implements the shouldComponentUpdate() lifecyle method to detects changes in state or props and render only when there is change.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.
React Fragment is a feature in react that allows the grouping of multiple elements without adding extra elements/nodes to the DOM.
Example: 
`<React.Fragment>
              <h1> My Profile </h1>
                <p>My name is Nonso</p>
              <p>I love React!</p>
       </React.Fragment> 
       `
 Giving the we want to return a user Profile, if React.Fragment is not used to wrap all other elements in a the component, this will result in an error that 
 looks like this "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?". 
 To avoid this error, when multiple elements are returned in a  component that has no container wrapper like div or section, <React.Fragment>  is used to wrap all other elements.


## 6. Give 3 examples of the HOC pattern.


## 7. What's the difference in handling exceptions in promises, callbacks and async…await?

When an error is thrown in an async function, you can catch it with a try {} catch {}.
 `const fetchAPI = async () => {
    try {
        await getAPI();
    } catch (e) {
        console.log("request failed", e); 
    }
}`

In promises, errors are handled using the reject() function. try {} catch {} can also be used to handle exceptions in Promises. 
Example: 
`function fetchSomething() {
    return new Promise((resolve, reject) => {
    if ("computation"){
        reject(new Error("Doesn't meet requirements"))
    }  else{
        resolve("meets requirement")
    }
})
}`
Handling exceptions in callbacks is done using the error argument of the callback function. 
The callback function contains 2 arguments: error and data which is the data returned when the action is successful.

Example: 
`function querySomething(queryString) {
    query(queryString, function(error, data) {
      if (error) return errorHandler(error);
    console.log(data)
    });
  }
`

## 8. How many arguments does setState take and why is it async. 
setState takes two arguments:
1. Object or function for updating the state. 
2. A function that is called after the setState is triggered.
### Why is setState Async? 
Since setState changes the state and causes re-rendering, when there are multiple setState calls, 
it batches the state updates and calls into a single update containing the new state to be rendered for performance.


## 9. List the steps needed to migrate a Class to Function Component.


## 10. List a few ways styles can be used with components.
1. Using Inline Style inside the React Component:`<p style={{color: 'red'}}>` This is a red description!</p>
2. Adding Global Style to “index.html”
3  Importing your style File directly inside the Components
4. Making use of style objects which can easily be passed in the style props: 

`let myComponentStyle = {
  p: {
    color: "red",
  }, 
  h1: {
    color: "green"
  }
}
<React.Fragment>
      <h1 style={myComponentStyle.h1}> My Profile </h1>
        <p style={myComponentStyle.p}>My name is Nonso</p>
      <p style={myComponentStyle.p}>I love React!</p>
 </React.Fragment>`
 
5. Making use of CSS modules
6. Making use of libraries like styled-component. 

## 11. How to render an HTML string coming from the server: 
1.  Making use of dangerouslySetInnerHTML 
