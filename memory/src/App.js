import React from 'react';
import Header from "./components/Header"
import Game from "./components/Game"
import Footer from "./components/Footer"

const characters = [
  {
      id: 1,
      image: "./images/gary.png",
      clicked: false
  },
  {
      id: 2,
      image: "./images/krustyKrab.png",
      clicked: false
  },
  {
      id: 3,
      image: "./images/larry.png",
      clicked: false
  },
  {
      id: 4,
      image: "./images/mrKrabs.jpg",
      clicked: false
  },
  {
      id: 5,
      image: "./images/mrsPuff.jpg",
      clicked: false
  },
  {
      id: 6,
      image: "./images/patrick.jpg",
      clicked: false
  },
  {
      id: 7,
      image: "./images/pearl.jpg",
      clicked: false
  },
  {
      id: 1,
      image: "./images/pineapple.jpg",
      clicked: false
  },
  {
      id: 8,
      image: "./images/plankton.jpg",
      clicked: false
  },
  {
      id: 9,
      image: "./images/sandy.jpg",
      clicked: false
  },
  {
      id: 10,
      image: "./images/sponge.jpg",
      clicked: false
  },
  {
      id: 11,
      image: "./images/squid.jpg",
      clicked: false
  },
  {
      id: 12,
      image: "./images/squidHome.png",
      clicked: false
  }

]


class App extends React.Component {
  state={
    score: 0,
    highScore: 0
  }


  handleClick = (id) => {
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
            if (characters[i].clicked === false) {
                characters[i].clicked = true
                if (this.state.score < 12) {
                    this.setState({ score: this.state.score + 1 })
                } else {
                    alert("You won")
                }
            } else {
                if (this.state.score > this.state.highScore) {
                    this.setState({ highScore: this.state.score })
                    alert("You didn't make it, but you have a new high score")
                } else {
                    alert("You lost")
                }
                this.setState({ score: 0 })
                for (let i = 0; i < characters.length; i++) {
                    characters[i].clicked = false
                }

            }
        }
    }
}

  render() {
    return (
      <div>
        <Header score={this.state.score} highScore={this.state.score} />
        <Game score={this.state.score} highScore={this.state.score} handleClick={this.handleClick} characters={characters}/>
        <Footer />
      </div>
    );
  }
}

export default App;
