// Materi Styling Component pada React
import React from "react";
import "../styles/Styling.css";

const Styling = () => {
  return (
    <div className="box">
      <h1>Hello World</h1>
      <p style={myStyle}>Halo Dunia</p>
    </div>
  );
};

const myStyle = {
  color: "blue",
  fontSize: "6em",
};

export default Styling;
