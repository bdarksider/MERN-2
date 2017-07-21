var bugs = [{ id: 1, priority: "P1", status: "Open", owner: "Ravan", title: "App crashes on open" }, { id: 2, priority: "P2", status: "New", owner: "Eddie", title: "Misaligned border on panel" }];

class BugFilter extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Bug Filter"
    );
  }
}

class BugTable extends React.Component {
  render() {
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
        React.createElement(BugRow, { id: 1, priority: "P1", status: "Open", owner: "Ravan", title: "App crashes on open" }),
        React.createElement(BugRow, { id: 2, priority: "P2", status: "New", owner: "Eddie", title: "Misaligned border on panel" })
      )
    );
  }
}

class BugAdd extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Add Bug"
    );
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
        this.props.id
      ),
      React.createElement(
        "td",
        null,
        this.props.status
      ),
      React.createElement(
        "td",
        null,
        this.props.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.title
      )
    );
  }
}

class BugList extends React.Component {
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
      React.createElement(BugTable, null),
      React.createElement("hr", null),
      React.createElement(BugAdd, null)
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));