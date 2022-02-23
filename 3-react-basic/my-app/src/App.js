const React = require("react");

class App extends React.Component {
  state = {
    name: "Hollow Project",
    text: "",
  };

  click = () => {
    this.setState({
      name: this.state.text,
    });
    this.setState({
      text: "",
    });
  };

  change = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <input type="text" value={this.state.text} onChange={this.change} />
        <button onClick={this.click}>Click</button>
      </>
    );
  }
}

export default App;
