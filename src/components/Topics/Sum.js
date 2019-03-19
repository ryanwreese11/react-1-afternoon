import React, { Component } from 'react'

export default class Sum extends Component {
  
    constructor(){
        super()
        
        this.state = {
        num1: 0,
        num2: 0,
        sum: null
        }
    }
  


      updateNum1(val) {
          this.setState({num1: val * 1});
      }
      updateNum2(val) {
        this.setState({num2: val * 1 });
    }

    add(num1, num2) {
        this.setState({ sum: num1 + num2})
    }


  
  
    render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input type="text" className="inputLine" onChange={(e)=> this.updateNum1(e.target.value) } />
        <input type="text" className="inputLine" onChange={(e)=> this.updateNum2(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.add(this.state.num1, this.state.num2) } > Add </button>
        <span className="resultsBox"> Sum: { this.state.sum } </span>
      </div>
    )
  }
}


import React, { Component } from 'react'

export class Sum extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Sum
