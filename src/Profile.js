import React from "react";
import axios from "axios";
import "./App.css";
import history from './history';
class Profile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    };

    axios.get("https://api-nodejs-todolist.herokuapp.com/user/me", {headers: headers})
      .then((response) => {
        const user = response.data;
        this.setState({ user });
        this.props.history.push('/App');
      });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="todoListMain">
          <div className="App-header">
            ToDo List <br />
            <br />
            {user.name} <br />
            {user.age}
            <br />
            {user.email}
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
