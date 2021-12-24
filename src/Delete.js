import React from 'react';
import axios from 'axios';
import './App.css';

class Delete extends React.Component {

    constructor(props) {
        super();
        this.state=({
          id: "",
        
        })
    }
    render(){

        handleChange = event => {
            this.setState({ id: event.target.value });
           }
          
        deleteUser = event => {
            event.preventDefault();

            const headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            };
            
            axios.delete(`https://api-nodejs-todolist.herokuapp.com/user/me${this.state.id}`,{headers: headers})
           .then(res => {
              console.log(res);
              console.log(res.data);
             })
           }
        
           return(
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                     ID:<input type="text" name="id" onChange={this.handleChange} /></label>
                        <button type="button" onClick={this.deleteUser}>Delete</button>
                    </form>
            </div>


        );

    }
}