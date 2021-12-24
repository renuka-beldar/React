import React from 'react';
import axios from 'axios';
//import Register from './Register';
import './App.css';
import history from './history';

class Register extends React.Component {

    constructor(props) {
        super();
        this.state=({
          name1: "",
          email: "",
          password: "",
          age:''
        })
    }

    validateUser = () => {
      //event.preventDefault();
        const {name1,email, password, age} = this.state;

        axios.post('https://api-nodejs-todolist.herokuapp.com/user/register', {
          name:name1,
          email:email,
          password:password,
          age:age
            })
            .then((response)=>{
              console.log(response);
              console.log(response.data);
              this.props.history.push('/Login');

            })
            .catch(function (error) {
                alert(error);
            });
    }

    setName = (e) => {
        this.setState({name1: e.target.value});
    }
    setEmail = (e) => {
        this.setState({email: e.target.value});
    }
    setPssword = (e) => {
        this.setState({password: e.target.value});
    }
    setaAge = (e) => {
      this.setState({age: e.target.value});
  }

    render() {
        return(

              <div className="App">
  
                  <div className="todoListMain">

                    <div className="App-header">
                      <form method='POST'>
                           ToDo List <br/><br/>
                           

                              Name:<input type="text" placeholder="Name" name="uname"  onChange={(e) => this.setName(e)}/><br/><br/>
                                                  
                              Email:<input type="email" placeholder="Email" name="em" onChange={(e) => this.setEmail(e)} /><br/><br/>
                                                
                              Password:<input type="password" placeholder="Password" name="psw"  onChange={(e) => this.setPssword(e)} /><br/><br/>
                                                
                              Age:<input type="number" placeholder="age" name="ag" onChange={(e) => this.setaAge(e)} /><br/><br/>
                                                                    
                              <button className="btn btn-success"type="button" onClick={this.validateUser} >Add</button><br/>

                              {this.state.name1}<br/>
                              {this.state.email}<br/>
                              {this.state.password}<br/>
                              {this.state.age}

                      </form>
                    </div>
                  </div>
                </div>
                                    
          );

    }
   
}

export default Register;
