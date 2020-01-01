import React from "react";

const ErrorHandler = err => {
  return (
    <div>
      <h1>{err.response ? err.response.data.msg : "Page not found"}</h1>
    </div>
  );
};
export default ErrorHandler;
