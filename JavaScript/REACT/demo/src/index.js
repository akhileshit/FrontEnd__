//04/12/24

import React from 'react';  //required
import ReactDOM from 'react-dom/client';  //required

import App from './App';  //component imports.  Obviously required
import Sample from './sample';


const root = ReactDOM.createRoot(document.getElementById('root'));   
root.render(               //this is actually connecting(modifying here itself) to the index.html inside public folder!!!
  <React.StrictMode>
    <App />              {/*Specifying which component to run*/}
    {/* <Sample /> */}
  </React.StrictMode>
);



//React by Facebook           To build a Single Page Application(SPA)
//Actually built to easily build and manage the large web applications unlike traditional JavaScript


//Deleted all unnecessary files & lines of code to this simple react app (inside "public" and "src" folders)

//"Components"
// The Components file_name and it's functions(returns an html element!) start with caps by convention.
// A Component is basically made of html element or elements. like buttons, navigation bar,....
// A component's function can only return 1 html element hence can use a <div> or an empty-tag(fragment)  [More precisely accepts inputs(props) and returns/renders a part of ui based on those inputs]


//index.js         tells where exactly a component shd be placed inside the browser
//App.js         connects all the components of the app (By Convention i think)
//index.html          A single html for the react app [may be helps react project to act as SPA only by modifying the diff components rather than entire page (no refreshes!)]

//public folder for assets and images
//src folder for writing main codes and components!


//react-dom    for creating web apps
//react-native     for creating android apps


