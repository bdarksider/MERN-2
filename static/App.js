var bugs = [{ id: 1, priority: "P1", status: "Open", owner: "Ravan", title: "App crashes on open" }, { id: 2, priority: "P2", status: "New", owner: "Eddie", title: "Misaligned border on panel" }];

class BugFilter extends React.Component {
  render() {
    console.log("Rendering BugFilter");
    return React.createElement(
      "div",
      null,
      "A way to filter the list of bugs would come here."
    );
  }
}

class BugTable extends React.Component {
  render() {
    console.log("Rendering bug table, num items:", this.props.bugs.length);
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug.id, bug: bug });
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
    console.log("Rendering BugAdd");
    return React.createElement(
      "div",
      null,
      "Add Bug"
    );
  }
}

class BugRow extends React.Component {
  render() {
    console.log("Rendering BugRow:", this.props.bug);
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.bug.id
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
    this.state = { bugs: bugs };
  }

  testMethod() {
    var nextId = this.state.bugs.length + 1;
    this.addBug({ id: nextId, priority: 'P2', status: 'New', owner: 'Pieta', title: 'Warning on console' });
  }

  addBug(bug) {
    console.log("Adding bug:", bug);
    var bugList = [...this.state.bugs];
    bugList.push(bug);
    this.setState({ bugs: bugList });
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
      React.createElement(BugAdd, null),
      React.createElement(
        "button",
        { onClick: () => this.testMethod() },
        "Test"
      )
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));