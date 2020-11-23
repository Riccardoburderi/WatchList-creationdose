import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
   // Update the document title using the browser API    



  return (
    <BrowserRouter>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
     </BrowserRouter>
  );
}

export default App;
