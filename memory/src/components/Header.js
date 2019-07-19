import React from "react"
//import Instructions from "./Instructions"

class Header extends React.Component {
   
    showInstructions = () =>{
        let instruct = document.getElementById("instruct")
        instruct.style.display="block"
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light " style={{backgroundColor: "#ceaf70"}}>
                <span className="navbar-brand mb-0 h1 " style={{letterSpacing: 2, color: "white", marginLeft: "calc(50% - 100px)"}}>Golden Memories</span>
                <button style={{backgroundColor: "white"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse justify-content-end" style={{textAlign:"right"}} id="navbarNav"> 
                    <ul className="navbar-nav ">
                        <li className="nav-item"><button onClick={this.showInstructions}>Instructions</button></li>
                        <li className="nav-item">Score: {this.props.score}</li>
                        <li className="nav-item"> High Score: {this.props.highScore}</li>
                    </ul>
                </div>
            </nav>

        )
    }

}


export default Header