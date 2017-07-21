class BugFilter extends React.Component {
  render() {
    return (
        <div>A way to filter the list of bugs would come here.</div>
    )
  }
}

class BugTable extends React.Component {
  render() {
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
    return (
        <div>
           <form name="bugAdd">
             <input type="text" name="owner" placeholder="Owner" />
             <input type="text" name="title" placeholder="Title" />
             <button onClick={(e) => this.handleSubmit(e)}>Add Bug</button>
           </form>
        </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.addBug({owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1'});
    form.owner.value = ""; 
    form.title.value = "";
  }
}

class BugRow extends React.Component {
    render() {

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
    this.state = {bugs: []};
    this.addBug = this.addBug.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }


  loadData() {
    fetch('/api/bugs/').then(response => 
        response.json()
    ).then(bugs => {
        this.setState({ bugs });
    }).catch(err => {
        console.log(err);
    })
  }


  addBug(bug) {

    fetch('/api/bugs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bug)
    }).then(res => res.json()).then(bug => {
        console.log(bug);
        var bugsModified = [...this.state.bugs, bug];
        this.setState({bugs: bugsModified});
    })
  }

  render() {
    return (
      <div>
          <h1>Bug Tracker</h1>
          <BugFilter />
          <hr />
          <BugTable bugs={this.state.bugs}/>
          <hr />
          <BugAdd addBug={this.addBug} />
      </div>
    )
  }
}

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
