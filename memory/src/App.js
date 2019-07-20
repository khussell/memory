import React from 'react';
import Header from "./components/Header"
import Game from "./components/Game"
import Footer from "./components/Footer"
import Instructions from "./components/Instructions"

const characters = [
  {
      id: 1,
      image: "./images/lilu1.png",
      clicked: false
  },
  {
      id: 2,
      image: "./images/lilu3.png",
      clicked: false
  },
  {
      id: 3,
      image: "./images/lilu5.png",
      clicked: false
  },
  {
      id: 4,
      image: "./images/lilu12.png",
      clicked: false
  },
  {
      id: 5,
      image: "./images/lilu13.png",
      clicked: false
  },
  {
      id: 6,
      image: "./images/lilu14.png",
      clicked: false
  },
  {
      id: 7,
      image: "./images/lilu15.png",
      clicked: false
  },
  {
      id: 8,
      image: "./images/lilu2.png",
      clicked: false
  },
  {
      id: 9,
      image: "./images/lilu4.png",
      clicked: false
  },
  {
      id: 10,
      image: "./images/lilu6.png",
      clicked: false
  },
  {
      id: 11,
      image: "./images/lilu9.png",
      clicked: false
  },
  {
      id: 12,
      image: "./images/lilu10.png",
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
                    console.log(this.state.score)
                    if (this.state.score === 11){
                      alert("You won")
                    }
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

emptyDiv =() => {
  let emptyThisDiv = document.getElementsByClassName("needsEmpty")
  emptyThisDiv.innerHTML=""
}

  render() {

    this.emptyDiv()
    

    var shuffle = function (array) {

      var currentIndex = array.length;
      var temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    
    };
    
    var shuffled = shuffle(characters)
    

    return (
      <div>
        <Header score={this.state.score} highScore={this.state.highScore} />
        <Instructions />
        <Game score={this.state.score} highScore={this.state.score} handleClick={this.handleClick} characters={shuffled}/>
        <Footer />
      </div>
    );
  }
}

export default App;
