
import Cplus from './cpuls';
import Java from './java';
import Python from './python';

// function App() {
//   return (
    
//     <h1>Hello form React!</h1>                    
    
//   );
// }

// export default App;

function App() {
  return (     //Can return only one html tag.   Hence kept all components inside 1 div tag! or fragment(empty tag)
    
    <div>
      <Cplus/>
      <Java/>
      <Python/>
    </div>
    
  );
}

export default App;
