import Alert from "./components/Alert";
function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;

//       <Alert text="Hello World"></Alert>
// Above is Ugly - what if text is long. Use children
// what if you want to pass html content? In props; change from string to ReactNode.
