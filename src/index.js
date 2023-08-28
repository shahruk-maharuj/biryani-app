import React from "react";
import ReactDOM from "react-dom/client";
import BiryaniList from "./components/BiryaniList";
import './/index.css'

function App() {
  return (
    <div>
      <BiryaniList />
    </div>
  );
}

/* function Biryani() {
  return <h1>Biryani</h1>;
} */

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
