import './App.css';
import { Count } from './Components/Product/Count';
import { CountHook } from './Components/Product/CountHook';
import { CountRedux } from './Components/Product/CountRedux';


function App() {
  return (
  <>
    {/* <CountHook/> */}
    <CountRedux/>
    <Count/>
  </>
  );
}

export default App;




