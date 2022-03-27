import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.css";
import "virtual:windi.css";

const container = document.getElementById("root");

if (container != null) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.log(`Failed to render, container is null`);
}
