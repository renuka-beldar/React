import React from 'react';
import axios from 'axios';
//import Register from './Register';
import './App.css';
import history from './history';

class Login extends React.Component {

    constructor(props) {
        super();
        this.state=({
          email1: "",
          password1: ""
        })
    }

    validateUser = () => {
      //event.preventDefault();
        const {email1, password1} = this.state;

        axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', {
          
          email:email1,
          password:password1,
          
            })
            .then((response)=>{localStorage.setItem("token",response.data.token);
             this.props.history.push('/Profile');

            })
            .catch(function (error) {
                alert(error);
            });
    }

    
    setEmail = (e) => {
        this.setState({email1: e.target.value});
    }
    setPssword = (e) => {
        this.setState({password1: e.target.value});
    }

    render() {
        return(

              <div className="App">
  
                  <div className="todoListMain">

                    <div className="App-header">
                      <form method='POST'>
                           ToDo List <br/><br/>
                                                  
                              Email:<input type="email" placeholder="Email" name="em" onChange={(e) => this.setEmail(e)} /><br/><br/>
                                                
                              Password:<input type="password" placeholder="Password" name="psw"  onChange={(e) => this.setPssword(e)} /><br/><br/>
                                                
                                                                                         
                              <button className="btn btn-success"type="button" onClick={this.validateUser} >Login</button><br/>

                              {this.state.email1}<br/>
                              {this.state.password1}<br/>
                              

                      </form>
                    </div>
                  </div>
                </div>
                                    
          );

    }
   
}

export default Login;
