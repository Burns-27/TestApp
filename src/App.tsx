import { useState } from "react";
import EventButton from "./components/EventButton";
import TextFloat from "./components/TextFloat";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className="mb-3">
          count is {count}
        </button>
        <TextFloat id="testFloat" name="test" label="test" />
        <EventButton onButtonClick={() => setCount((count) => count + 1)}>
          Test
        </EventButton>
      </div>
    </>
  );
}

export default App;
