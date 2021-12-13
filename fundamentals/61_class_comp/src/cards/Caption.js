import React from "react";

// const Caption = (props) => {
//   return (
//     <div className="caption">
//       <p>{props.text}</p>
//     </div>
//   );
// };

class Caption extends React.Component {
  render() {
    return (
      <div className="caption">
        <p>{this.props.text}</p>
      </div>
    );
  }
}
export default Caption;
