function Message(){
  // Will get compiled down to javascript --> JSX - javascript XML react.createElement("h1", null, "Hello world")
  const name = 'Noor';
  if(name)
    return <h1> Hello {name} </h1>;
  return <h1>Hello World</h1>;
}
export default Message;