import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header></header>
      <div>
        <Weather />
        <p>
          <a
            href="https://github.com/sara-si/react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Sara Sarabi
        </p>
      </div>
    </div>
  );
}

export default App;
