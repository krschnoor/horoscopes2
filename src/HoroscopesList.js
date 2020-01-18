import React, { Component } from "react";
import "./App.css";

export default class HoroscopesList extends Component {
  constructor() {
    super();

    // We want to make sure that the "onClick()"
    // handler is explicitly bound to this component
    // as it's context.
    //this.onClick = this.onClick.bind(this);
  }

  // When a list item is clicked, look up the name
  // of the item based on the "id" argument. This is
  // why we need access to the component through "this",
  // for the properties.

  render() {
    //src={require(sign.image)}
    return (
      <div class="text-center col-md-8  col-md-offset-2 container-fluid">
        {/* Creates a new handler function with
            the bound "id" argument. Notice that
            the context is left as null, since that
            has already been bound in the
            constructor. */}

        {this.props.signs.map(({ id, sign, image }) => (
          <div
            class="col-md-8  panel panel-default text-center"
            className="panel2"
          >
            <div
              class="panel-heading font-weight-bold"
              className="panel-header"
            >
              {sign}
            </div>
            <div class="panel-body" className="panel-body">
              <img
                key={id}
                onClick={this.props.selectSign.bind(null, id)}
                src={process.env.PUBLIC_URL + "/images/" + image}
                alt="Logo"
              />
              
            </div>
          </div>
        ))}
      </div>
    );
  }
}
