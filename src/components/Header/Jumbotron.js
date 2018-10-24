import React from "react";

export const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 25, textAlign: "center", backgroundColor: "purple" }}
    className="jumbotron"
  >
    {children}
  </div>
);