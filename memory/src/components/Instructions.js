import React from "react"

class Instructions extends React.Component{
    render() {
        return(
            <div id="instruct" style={{position: "absolute", zIndex: 3, backgroundColor: "white", display: "none"}}>
                <p>Hello there this will be instructions</p>
            </div>
        )
    }
}

export default Instructions