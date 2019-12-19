import React from "react";

const ErrorHandler = ({ err }) => {
  const msg = err ? err : "Page not found";
  return (
    <div>
      <h1>{msg}</h1>
    </div>
  );
};
export default ErrorHandler;
