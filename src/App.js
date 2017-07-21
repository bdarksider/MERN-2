var bugs = [
    {id:1, priority:"P1", status:"Open", owner:"Ravan", title:"App crashes on open"},
    {id:2, priority:"P2", status:"New", owner:"Eddie", title:"Misaligned border on panel"}
];


class BugFilter extends React.Component {
  render() {
    console.log("Rendering BugFilter");
    return (
        <div>A way to filter the list of bugs would come here.</div>
    )
  }
}

class BugTable extends React.Component {
  render() {
    console.log("Rendering bug table, num items:", this.props.bugs.length);
    var bugRows = this.props.bugs.map(function(bug) {
        return <BugRow key={bug.id} bug={bug} />
    });

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
            {bugRows}
          </tbody>
        </table>
    )
  }
}

class BugAdd extends React.Component {
  render() {
    console.log("Rendering BugAdd");
    return (
        <div>Add Bug</div>
    )
  }
}

class BugRow extends React.Component {
    render() {
        console.log("Rendering BugRow:", this.props.bug);
        return (
            <tr>
                <td>{this.props.bug.id}</td>
                <td>{this.props.bug.status}</td>
                <td>{this.props.bug.priority}</td>
                <td>{this.props.bug.owner}</td>
                <td>{this.props.bug.title}</td>
            </tr>
        )
    }
}

class BugList extends React.Component {
  
  constructor() {
    super();
    this.state = {bugs: bugs};
  }

  testMethod() {
    var nextId = this.state.bugs.length + 1;
    this.addBug({id: nextId, priority: 'P2', status:'New', owner:'Pieta', title:'Warning on console'});
  }

  addBug(bug) {
    console.log("Adding bug:", bug);
    var bugList = [...this.state.bugs];
    bugList.push(bug);
    this.setState({bugs: bugList});
  }

  render() {
    return (
      <div>
          <h1>Bug Tracker</h1>
          <BugFilter />
          <hr />
          <BugTable bugs={this.state.bugs}/>
          <hr />
          <BugAdd />
          <button onClick={() => this.testMethod()}>Test</button>
      </div>
    )
  }
}

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
