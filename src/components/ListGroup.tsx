function ListGroup() {
  /*
  //<h1>List</h1> //React.createElement('h1') --> to solve, grab entire expression, inside a div or another elemnt. Or select all code,
    //command palette, wrap with abbreviation <div>. But this adds extra element in dom. Avoid. USE fragment.

    but shorter syntax, instead of important. Just add empty <> --> which defaults to react thinking to use default Fragment as wrapper
*/
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}
export default ListGroup;
