import React from "react";

const ErrorHandler = err => {
  return (
    <div>
      {err && <h1>{err}</h1>}
      <h1>Page Not Found</h1>
    </div>
  );
};
export default ErrorHandler;
