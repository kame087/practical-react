import React, { Component } from "react";

import { FormDiv, FormButton } from "./style";

export default class Form extends Component {
  state = {
    first: "",
    last: "",
    rememberMe: false,
    salutation: "Mr.",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheck = (e) => {
    this.setState({
      rememberMe: e.target.checked,
    });
  };

  handleSelect = (e) => {
    this.setState({
      salutation: e.target.value,
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <FormDiv>
        First Name:{" "}
        <input
          name="first"
          value={this.state.first}
          onChange={this.handleChange}
        />
        Last Name:
        <input
          name="last"
          value={this.state.last}
          onChange={this.handleChange}
        />
        Remember Me?
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
        />
        Salutation:
        <select
          defaultValue={this.state.salutation}
          onChange={this.handleSelect}
        >
          <option>Ms.</option>
          <option>Mrs.</option>
          <option>Dr.</option>
          <option>Mr.</option>
        </select>
        <FormButton onClick={this.handleSubmit}>Submit</FormButton>
      </FormDiv>
    );
  }
}
