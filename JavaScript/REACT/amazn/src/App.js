import { useState } from "react";
import Selection from "./Components/Selection";

function App() {

  const [clicked, setClicked] = useState(false)
  function gotoSelection() {
    setClicked(true)
  }

  if (clicked === true) {
    return <Selection price='799' />
  }
  return (
    <div>
      <h3>Welcome to amazon!</h3>
      <button onClick={gotoSelection}>Select Product</button>
      
    </div>
  );
}

export default App;


// First we make use of props to share data(here price) from 1 comp to another [it is not the good approach if the project is big]
// So installed react-redux library [npm i redux react-redux]           reducer
// With redux u don't need to pass data through unwanted components(through "props drilling") to get at the final destination. With redux all state is stored @ one place (store) and you only use whereever u want...
// Created a store.jsx 
// imported useSelector, useDispatch from react-redux
// imported createStore from redux

// Finally went to index.js to wrap it with <Provider> imported from react-redux to make react-redux work!!