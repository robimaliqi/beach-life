import { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [],
    };
  }

  componentDidMount() {
    fetch("/api/home")
      .then((response) => response.json())
      .then((home) => {
        this.setState({ home: home });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.home.name}</h1>
      </div>
    );
  }
}

export default Home;
