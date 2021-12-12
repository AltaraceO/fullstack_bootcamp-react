import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <div
        style={{
          width: 500,
          height: 500,
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 400,
            height: 400,
            backgroundColor: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              backgroundColor: "maroon",
            }}
          >
            <div
              style={{
                width: 200,
                height: 60,
                margin: 60,
                backgroundColor: "blue",
              }}
            ></div>
            <div
              style={{
                width: 200,
                height: 60,
                margin: 60,
                backgroundColor: "blue",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
