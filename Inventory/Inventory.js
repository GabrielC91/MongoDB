import React, {Component} from 'react'
import "./Inventory.css"
class Inventory extends Component{
 constructor(props){
    super(props);
    this.state =  {
        startingCount: this.props.startingCount
    }
        this.addcode = this.addcode.bind(this)
        this.restecode = this.resetcode.bind(this)
        this.subtractcode = this.subtractcode.bind(this)
}

addcode() {
    console.log("added",this.addcode);
    this.setState({
        startingCount: this.state.startingCount + 1 
    })
}
subtractcode() {
        console.log ("Subtract",this.subtractcode)
        this.setState({
           startingCount: this.state.startingCount - 1
        })
    }
resetcode() {
    console.log ("Reset",this.resetcode)
    this.setState({
        startingCount: this.props.startingCount
    })
}

render() { 
    console.log("count",this.startingCount );
    return(
        <div className="Box">
            <h2>{this.props.item}</h2>
            <h3>Inventory: {this.state.startingCount}</h3>
            <button onClick={() => this.addcode()}> + </button>
            <button onClick={() => this.subtractcode()}> - </button>
            <button onClick={() => this.resetcode()}> Reset </button>
            
        </div>
    )
    }
}

 export default Inventory