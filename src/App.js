import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hobbies: ["flying kites", "skipping to my lou", "eating", "higher-order functions", "reading", "zelda", "running"],
      inputText: ''
    }
    

  }
  handleInputChange(e) {
    this.setState({ inputText: e.target.value })
  }
  addHobby() {
    // let newHobbies = this.state.hobbies;
    // newHobbies.push(this.state.inputText);
    this.setState({
      hobbies: [...this.state.hobbies, this.state.inputText],
      inputText: ''
    })
  }

  render() {
    let list = this.state.hobbies.map((hobby) => {
      return (
      <p>{hobby}</p>
      )
    })
    var myName = "Andrew Semle";
    return (
      
      <div className="App">
        < Header />
        <h1>My First React App</h1>
        <h5>My List of Hobbies</h5>
        <input type="text" value={this.state.inputText} onChange={(e) => this.handleInputChange(e)}/>
        <button onClick={() => this.addHobby()}>Add Hobby</button>
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
