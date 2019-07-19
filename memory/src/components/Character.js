import React from "react"

class Character extends React.Component{
    state={
      clicked: false
    }

    render() {
        return(
            <div>
              <img alt="Gary" onClick={() => this.props.handleClick(this.props.id)} style={{margin: 20}} height="140px" src={this.props.image}/>
            </div>
        )
    }
}


export default Character