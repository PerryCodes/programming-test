import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {

}
interface State {
  counter: number;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleIncrement = () => {
    const { counter } = this.state;
    if (counter === 10)
      return;
    this.setState({ counter: counter + 1 });
  }
  handleDecrement = () => {
    const { counter } = this.state;
    if (counter === 0)
      return;
    this.setState({ counter: counter - 1 });
  }


  render() {
    const { counter } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height="64" />
          <p>
            <a className="Decrement" onClick={this.handleDecrement.bind(this)}>-</a>

            Current count is {counter}!

            <a className="Increment" onClick={this.handleIncrement.bind(this)}>+</a>
          </p>
        </header>
      </div>
    );
  }
}