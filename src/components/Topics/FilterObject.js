import React, { Component } from 'react'


export default class FilterObject extends Component {


  constructor() {
    super()
    
    this.state = {
      people: [
        {
          name: 'Ryan',
          title: 'developer',
          age: 30,
        },
        {
          name: 'Kami',
          car: 'outback',
          age: 29,
        },
        {
          name: 'Rylee',
          shoes: 'converse',
          age: 10,
        }
      ],
      userInput: '',
      filteredPeople: []
    }

  }

handleChange(val) {
  this.setState({userInput: val});
}

filterPeople(prop) {
  let people = this.state.people
  let filteredPeople = [];
//for ryan: figure out a new way to solve this.
  for(let i = 0; i < people.length; i++){
    if(people[i].hasOwnProperty(prop)){
      filteredPeople.push(people[i])
    }
  }
  this.setState ({ filteredPeople: filteredPeople})
}


  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{ JSON.stringify(this.state.people, null, 10) }</span>
        <input type="text" className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
        <button className="confirmationButton"  > Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredPeople, null, 10) }</span>
      </div>
    )
  }

}


