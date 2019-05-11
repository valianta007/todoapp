import React from "react";
// functional component

const list = ({ title, children }) => (
  <div style={{ padding: "10px" }}>
    <i>{title}</i>
    {children}
  </div>
);

export default list;
