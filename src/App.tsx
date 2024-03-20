import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import { BsFillCalendarFill } from "react-icons/bs";

import ListGroup from "./components/ListGroup";

import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisability] = useState(false);
  return [
    <div>
      <Button onClick={() => {}}>My Button</Button>,
    </div>,
    <div>
      <BsFillCalendarFill color="red" size="40"></BsFillCalendarFill>
    </div>,
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
