import React, { Component } from "react";

class LoginForm extends Component {
  state = { account: { username: "", password: "" } };
  username = React.createRef();

  /*   componentDidMount() {
    this.username.current.focus();
  } */
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("preventDefault --submitted");
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
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={account.password}
              onChange={this.handleChange}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          {/*     ZenMode      button.btn.btn-primary*/}
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
