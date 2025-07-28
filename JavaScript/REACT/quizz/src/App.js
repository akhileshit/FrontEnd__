import Home from "./pages/Home";
import Html from "./pages/Html";
import Java from "./pages/Java";
import Python from "./pages/Python";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home />}></Route>   {/* For Home page */}
            <Route path='/java' element={<Java />}></Route>
            <Route path='/pyton' element={<Python />}></Route>
            <Route path='/html' element={<Html />}></Route>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

// 1st created new react project   --->   npx create-react-app quizz
// removed unnecessary files and codes as usual.
// Then installed new library called react-router-dom for moving through diff pages (SPA)    --->   npm install react-router-dom
// Keep the App.js page clean with only Router based tags!!
// It's Good practice to keep all pages-components inside a 'pages' folder  (obviously create it yourself)
// It's Good practice to keep all component-components like navbar, sidebar, footer.. inside 'components' folder

// Everything here in this react project looked crazy to me.....................