import Signup from "./signup"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./login"
import Dashboard from "./Dashboard"
import Home from "./home"


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Home />}></Route>        
      </Routes>
    </BrowserRouter>

  );
}

export default App