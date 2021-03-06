import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controller from './Controller';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aPressed: false,
      bPressed: false,
      upPressed:false,
      downPressed:false,
      leftPressed:false,
      rightPressed:false,
      lx:0,
      ly:0,
      rx:0,
      ry:0
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          {'A Button is ' + (this.state.aPressed? 'pressed' : 'released')}
        </p>
        <p>
          {'B Button is ' + (this.state.bPressed? 'pressed' : 'released')}
        </p>
        <p>
          {'UP Button is ' + (this.state.upPressed? 'pressed' : 'released')}
        </p>
        <p>
          {'DOWN Button is ' + (this.state.downPressed? 'pressed' : 'released')}
        </p>
        <p>
          {'LEFT Button is ' + (this.state.leftPressed? 'pressed' : 'released')}
        </p>
        <p>
          {'RIGHT Button is ' + (this.state.rightPressed? 'pressed' : 'released')}
        </p>
        <p>
          {'Left  Joytick Postion ' + (this.state.lx +' , '+this.state.ly)}
        </p>
        <p>
          {'Right  Joytick Postion ' + (this.state.rx +' , '+this.state.ry)}
        </p>
        <Controller
            onBClicked={(event, down)=>this.setState({bPressed:down})}
            onAClicked={(event, down)=>this.setState({aPressed:down})}
            onUpClicked={(event, down)=>this.setState({upPressed:down})}
            onDownClicked={(event, down)=>this.setState({downPressed:down})}
            onLeftClicked={(event, down)=>this.setState({leftPressed:down})}
            onRightClicked={(event, down)=>this.setState({rightPressed:down})}
            onLeftJoyStick={(lx, ly)=>this.setState({lx:lx, ly:ly})}
            onRightJoyStick={(rx, ry)=>this.setState({rx:rx, ry:ry})}
          />
      </div>
    );
  }
}

export default App;
