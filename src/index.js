import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Great"]} />
    <StarRating
      maxRating={10}
      color="green"
      size={24}
      className="test"
      defaultRating={5}
    /> */}
  </React.StrictMode>
);
