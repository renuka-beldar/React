import React from 'react';
import {BrowserRouter as Link,Routes,Router,Route} from "react-router-dom";
import './App.css';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import history from './history';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
      return(
          
      <Router history={history}>
          
          <div className="App">
               <ul className="App-header">
                <li>
                   <Link to="/Register">Register</Link>
                 </li>
                 <li>
                   <Link to="/Login">Login</Link>
                </li>
                 <li>
                   <Link to="/Profile">Profile</Link>
                 </li>
               </ul>
                
              <Routes>
                  <Route exact path="/Register" element={<Register/>}></Route>
                 <Route exact path="/Login" element={<Login/>}></Route>
                  <Route exact path="/Profile" element={<Profile/>}></Route>
              </Routes>

            </div>  
        </Router>

  

        
      //   // <div className="App">
      //   //     <div className="App-header">
      //   //        <Register/>
      //   //       <Login/> 
      //   //       <Profile/> 
              
      //   //     </div>
      //   // </div>         

      );

    }
}
export default App;
