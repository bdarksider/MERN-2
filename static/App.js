class BugList extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Bug List here!'
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));