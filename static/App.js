class BugFilter extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "A way to filter the list of bugs would come here."
    );
  }
}

class BugTable extends React.Component {
  render() {
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug._id, bug: bug });
    });

    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "id"
          ),
          React.createElement(
            "th",
            null,
            "status"
          ),
          React.createElement(
            "th",
            null,
            "priority"
          ),
          React.createElement(
            "th",
            null,
            "owner"
          ),
          React.createElement(
            "th",
            null,
            "title"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        bugRows
      )
    );
  }
}

class BugAdd extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { name: "bugAdd" },
        React.createElement("input", { type: "text", name: "owner", placeholder: "Owner" }),
        React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
        React.createElement(
          "button",
          { onClick: e => this.handleSubmit(e) },
          "Add Bug"
        )
      )
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.addBug({ owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1' });
    form.owner.value = "";
    form.title.value = "";
  }
}

class BugRow extends React.Component {
  render() {

    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.bug._id
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.status
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.title
      )
    );
  }
}

class BugList extends React.Component {

  constructor() {
    super();
    this.state = { bugs: [] };
    this.addBug = this.addBug.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/bugs/').then(response => response.json()).then(bugs => {
      this.setState({ bugs });
    }).catch(err => {
      console.log(err);
    });
  }

  addBug(bug) {

    fetch('/api/bugs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bug)
    }).then(res => res.json()).then(bug => {
      console.log(bug);
      var bugsModified = [...this.state.bugs, bug];
      this.setState({ bugs: bugsModified });
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Bug Tracker"
      ),
      React.createElement(BugFilter, null),
      React.createElement("hr", null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement("hr", null),
      React.createElement(BugAdd, { addBug: this.addBug })
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));