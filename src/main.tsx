import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Chat } from "./components/chat/index.tsx";
// import App from "./App.tsx";

ReactDOM.createRoot(
  document.getElementsByTagName("body")[0] as HTMLElement
).render(
  <React.StrictMode>
    <>
      {/* <App /> */}
      <Chat />
    </>
  </React.StrictMode>
);
