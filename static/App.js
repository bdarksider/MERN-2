var bugs = [{ id: 1, priority: "P1", status: "Open", owner: "Ravan", title: "App crashes on open" }, { id: 2, priority: "P2", status: "New", owner: "Eddie", title: "Misaligned border on panel" }];

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
    // clear the form for the next input
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
    this.addBug = this.addBug.bind(this);
  }

  addBug(bug) {
    var bugList = [...this.state.bugs];
    bug.id = this.state.bugs.length + 1;
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
      React.createElement(BugAdd, { addBug: this.addBug })
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));