function ListGroup() {
  /*
  //<h1>List</h1> //React.createElement('h1') --> to solve, grab entire expression, inside a div or another elemnt. Or select all code,
    //command palette, wrap with abbreviation <div>. But this adds extra element in dom. Avoid. USE fragment.

    but shorter syntax, instead of import. Just add empty <> --> which defaults to react thinking to use default Fragment as wrapper
*/
  const items = ["New York", "San Francisco", "Paris", "Austin"];
  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
