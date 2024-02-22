import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;

//if you pass invalid color --> will not show any error. To solve this, instead of setting color to type string, set it as a default value, using union operators where you can add different bootstrap colors. Can only be limited to that
