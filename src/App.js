import React, { Component } from "react";
import Controller from "./components/Controller";
import { Col, Row, Container } from "./components/Template";
import { Jumbotron, Title, Score } from "./components/Header";
import character from "./character.json";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    character,
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.setState({ message: "" });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ message: "Congratulations! You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Try again next time",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffled = shuffle(character);
    this.setState({ character: shuffled });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <Jumbotron>
              <Title>
                <h1>
                  Plus Ultra!
              </h1>
              </Title>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="6">
            <Score>
              <h2>
                Score: {this.state.currentScore}
              </h2>
            </Score>
          </Col>
          <Col size="6">
            <Score>
              <h2 className="text-right">
                Top Score: {this.state.topScore}
              </h2>
            </Score>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <Score>
              <h3 className="text-center">
                {this.state.message}
              </h3>
            </Score>
          </Col>
        </Row>
        <Row>
          {this.state.character.map(character => (
            <Col size="md-3 sm-6">
              <Controller
                key={character.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={character.id}
                image={character.image}
              />
            </Col>
          ))}
        </Row>
      </Container >
    );
  }
}
export default App;