import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Container from "react-bootstrap/Container";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container fluid>
      <App />
    </Container>
  </StrictMode>,
);
