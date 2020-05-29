import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  //username = React.createRef(); // not used

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call the server --
    console.log("form-- submitted");
  };

  render() {
    //const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        {/*  ZenMode  form>(div.form-group>label+input.form-control)*2  */}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {/*     ZenMode      button.btn.btn-primary*/}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
