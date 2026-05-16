import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <h1 className="title">🌷 Counter App 🌷</h1>

      <h2 className="counter">{count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      {count >= 5 && (
        <p className="goal">🎉 Goal Reached!</p>
      )}

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <p className="message">
        Message: {message}
      </p>
    </div>
  );
}

export default App;