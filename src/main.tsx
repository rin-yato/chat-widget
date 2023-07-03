import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Chat } from "./components/chat/index.tsx";

ReactDOM.createRoot(
  document.getElementsByTagName("body")[0] as HTMLElement
).render(
  <React.StrictMode>
    <>
      <Chat />
    </>
  </React.StrictMode>
);
