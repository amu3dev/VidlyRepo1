import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };
  username = React.createRef();

  /*   componentDidMount() {
    this.username.current.focus();
  } */
  validate = () => {
    return { username: "Username is required" };
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    //console.log("preventDefault --submitted");
    // call the server --
    // in react we shouldn't access DOM like this
    //const username = document.getElementById("username").value;
    // properly to access
    const username = this.username.current.value;
    console.log("username --submitted", username);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };

    //account.username = e.currentTarget.value;
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        {/*  ZenMode  form>(div.form-group>label+input.form-control)*2  */}
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />

          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />

          {/*     ZenMode      button.btn.btn-primary*/}
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
