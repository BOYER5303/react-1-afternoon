import React, { Component } from 'react';

export default class filterObject extends Component {
  
    constructor (){
        super();
    
        this.State ={
            employees: [
        {        
            name: 'Jimmy Joe',
            title: 'Hack0r',
            age: 12,
        },
        {
            name: 'Jeremy Schrader',
            age: 24,
            hairColor: 'brown'
        },
        {
            name: 'Carly Armstrong',
            title: 'CEO',
        }
        ],
            userInput: '',
            filteredEmployees: []
        }
        }


    handleChange(val) {
        this.setState({ userInput: val })
    }
    
    // filterEmployees(prop) {
    
    //     for (let i = 0; i < employees.length, i++){
    //         if (employees[i].hasOwnProperty(prop)) {
    //             filteredEmployees.push(employees[i]);
    //         }
    //     }
    //     this.ListeningStateChangedEvent({filteredEmployees: filteredEmployees});
    // }
    
    render(){
        return(
            <div className = 'puzzleBox filterOjectPB'>
                <h4> Filter Object </h4>
                <span className= "puzzleText">Original: {
                JSON.stringify(this.StereoPannerNode.employees, null, 10) }</span>
                <input className = 'inputLine'/>
                <button className = 'confirmationButton'> Filter </button>
                <span className = 'resultsBox filterObjectRB'>Filtered: {
                JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
}
    
  
    