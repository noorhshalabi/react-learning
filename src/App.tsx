import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisability] = useState(false);
  return [
    <div>
      {}
      <ListGroup
        items={["California", "Texas", "South Carolina"]}
        heading={"Miami"}
        onSelectItem={function (item: string): void {
          throw new Error("Function not implemented.");
        }}
      />{" "}
    </div>,
  ];
}

export default App;
