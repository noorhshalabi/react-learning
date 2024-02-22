import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisability] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisability(false)}>My alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisability(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
