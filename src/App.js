var bugs = [
    {id:1, priority:"P1", status:"Open", owner:"Ravan", title:"App crashes on open"},
    {id:2, priority:"P2", status:"New", owner:"Eddie", title:"Misaligned border on panel"}
];


class BugFilter extends React.Component {
  render() {
    return (
        <div>Bug Filter</div>
    )
  }
}

class BugTable extends React.Component {
  render() {
    return (
        <table>
          <thead>
              <tr>
                <th>id</th>
                <th>status</th> 
                <th>priority</th>
                <th>owner</th>
                <th>title</th>
              </tr>
          </thead>
          <tbody>
            <BugRow id={1} priority="P1" status="Open" owner="Ravan" title="App crashes on open" />
            <BugRow id={2} priority="P2" status="New" owner="Eddie" title="Misaligned border on panel" />
          </tbody>
        </table>
    )
  }
}

class BugAdd extends React.Component {
  render() {
    return (
        <div>Add Bug</div>
    )
  }
}

class BugRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.status}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.owner}</td>
                <td>{this.props.title}</td>
            </tr>
        )
    }
}

class BugList extends React.Component {
  render() {
    return (
      <div>
          <h1>Bug Tracker</h1>
          <BugFilter />
          <hr />
          <BugTable />
          <hr />
          <BugAdd />
      </div>
    )
  }
}

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
