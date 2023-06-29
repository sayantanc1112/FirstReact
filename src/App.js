//import logo from './logo.svg';
//import './App.css';
import FunctionalComp from './Components/FunctionalComp';
//import CC from './Components/ClassComp'; //ClassComponent is renamed as CC
import {ClassComp1, ClassComp} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
function App() {
  return (
    <div>
    <h1>hello, welcome...</h1>
    <h1>This is the components of react</h1>
    <FunctionalComp />
    <ClassComp />
    <ClassComp1 />
    <Click />
    <Counter />
    </div>
  );
}

export default App;
