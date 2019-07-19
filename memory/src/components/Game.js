import React from "react"
import Character from "./Character"



class Game extends React.Component {
  

    render() {
        let shuffled = this.props.characters
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)

        return (
            <div className="container">
                <div style={{ marginTop: 100 }} className="row">
                    {shuffled.map(char => {
                        return (<Character handleClick={this.props.handleClick} key={char.id} id={char.id} image={char.image} clicked={char.clicked} />)
                    })}
                </div>
            </div>
        )
    }
}

export default Game