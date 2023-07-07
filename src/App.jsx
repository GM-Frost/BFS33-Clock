import "./App.css";
import Clock from "./components/clock";
function App() {
  let dateTime = new Date().toLocaleTimeString();
  return (
    <>
      <Clock title="Current Time is" dateTime={dateTime} />
    </>
  );
}

export default App;
