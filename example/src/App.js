import './App.css';
import useTrackedState from "./rtp";
import { useEffect } from "react"
function App() {
  const state = useTrackedState({ username: { value: 10   } })

  return (
    <div className="App">
      <h1>{state.username.value}</h1>
      <input ref={state.username} />
    </div>
  );
}

export default App;
