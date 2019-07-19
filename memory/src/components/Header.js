import React from "react"
//import Instructions from "./Instructions"

class Header extends React.Component {
   
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light " style={{backgroundColor: "#ceaf70"}}>
                <span className="navbar-brand mb-0 h1 " style={{letterSpacing: 2, color: "white", marginLeft: "calc(50% - 100px)"}}>Golden Memories</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item"><button>Instructions</button></li>
                        <li className="nav-item">Score: {this.props.score}</li>
                        <li className="nav-item"> High Score: {this.props.highScore}</li>
                    </ul>
                </div>
            </nav>

        )
    }

}


export default Header