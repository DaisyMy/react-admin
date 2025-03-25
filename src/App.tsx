// import { RouterProvider} from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import Router from "./router/index";
// import router from './router';
import './App.css';


function App() {
  return (
    <HashRouter>
        <Router/>
    </HashRouter>
  );
}

export default App;
