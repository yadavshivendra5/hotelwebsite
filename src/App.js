
import Home from "./pages/Home";
import Room from "./pages/Room"
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Description from "./pages/Description";
import DoubleRoom from "./pages/DoubleRoom";
import {Route,Switch} from 'react-router-dom'

function App() {

  return <>
  <Navbar/>
  <Switch>
  <Route exact path ="/" component = {Home}/>
  <Route exact path ="/rooms" component = {Room}/>
  <Route exact path ="/rooms" component = {SingleRoom}/>
  <Route exact path = "/description" component = {Description}/>
  <Route exact path = "/double-room" component = {DoubleRoom}/> 
  <Route  Component={Error}/>
  </Switch>
  

  </>;
}

export default App;
