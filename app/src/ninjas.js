import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    console.log(this.props, "Props");
    return (
      <div>
        <p>{this.props.name} is my Name</p>
      </div>
    );
  }
}

// function Ninjas() {
//   console.log(this.props.name, "Props");
//   return (
//     <div>
//       <p>{this.props.name} is my Name</p>
//     </div>
//   );
// }

export default Ninjas;
