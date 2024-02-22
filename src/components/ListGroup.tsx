import { MouseEvent } from "react";
function ListGroup() {
  /*
  //<h1>List</h1> //React.createElement('h1') --> to solve, grab entire expression, inside a div or another elemnt. Or select all code,
    //command palette, wrap with abbreviation <div>. But this adds extra element in dom. Avoid. USE fragment.

    but shorter syntax, instead of import. Just add empty <> --> which defaults to react thinking to use default Fragment as wrapper
*/
  let items = ["New York", "San Francisco", "Paris", "Austin"];
  items.map((item) => <li>{item}</li>);

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

/*
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );

    Lines above can be replaced with line 15, using { } you are able to render things conditionally inside jsx expression
    Can only use html if not using { } braces
*/
