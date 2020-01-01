import React from "react";

const ErrorHandler = err => {
  console.log(err.response.data.msg);
  const msg = err ? err : "Page not found";
  return (
    <div>
      <h1>{err}</h1>
    </div>
  );
};
export default ErrorHandler;
