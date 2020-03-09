import React, { Component } from 'react';

export default class Palindrome extends Component {
   
    constructor () {
        super();
    
        this.state ={
            unserInput: '',
            palindrome: ''
    
        };
    } 
handleChange(val) {
    this.setState({userInput: val })
}

render() {
    return (
        <div className ="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={ () =>
        this.isPalindrome(this.state.unserInput)}> Check </button>
        <span className='resultsBox'> Palindrome: {this.state.palindrome}</span>
        </div>
    )
}
}


