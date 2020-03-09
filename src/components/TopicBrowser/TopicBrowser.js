import React, {Component} from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterOject from "../Topics/FilterObject"
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
    render(){
        return(
          <div>
              <EvenAndOdd />
              <FilterOject />
              <FilterString />
              <Palindrome />
              <Sum />
          </div>  
        )
    }
}

// class TopicBrowser extends Component{
//     render(){
//     return(<p>Hello World</p>)
//     }
// }