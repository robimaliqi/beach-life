import { Component } from "react";
import Map from "./Map";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [],
    };
  }

  componentDidMount() {
    fetch("/home")
      .then((response) => response.json())
      .then((home) => {
        this.setState({ home: home });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.home.name}</h1>
        <div class="map">
          <Map />
        </div>
      </div>

    );
  }
}

export default Home;
