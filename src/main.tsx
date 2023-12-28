import { App } from "./App";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";

const container = document.getElementById("root");
if (container === null) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(<App />);
