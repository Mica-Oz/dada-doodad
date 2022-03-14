import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "../default.png",
    };
    this.handler = this.handler.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
  }
  async componentDidMount() {
    console.log("mounted");
  }

  async handler() {
    console.log("handler called");
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const newSrc = await getRandomInt(49);
    const newImg = `../images/${newSrc}.png`;
    this.setState({ imgSrc: newImg });
    console.log("this state", this.state);
  }

  async handleSave() {
    console.log("saving...");
  }

  render() {
    return (
      <div id='main'>
        <img alt='oops' id='mainImg' src={this.state.imgSrc}></img>
        <button id='genButton' type='button' onClick={this.handler}>
          dada
        </button>
      </div>
    );
  }
}
