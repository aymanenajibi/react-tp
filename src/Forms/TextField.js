/* 
export default function TextField({ children, inputLabel, inputName }) {
  //console.log(props)
    return (
        <>
            <label> {inputLabel} </label>
            <input name={inputName} type="text" />
            {children}
        </>
    );
} */

import { Component } from "react";

export default class TextField extends Component {
  render() {
      return (
          <>
              <label> {this.props.inputLabel} </label>
              <input name={this.props.inputName} type="text" />
              {this.props.children}
          </>
      );
  }
}
