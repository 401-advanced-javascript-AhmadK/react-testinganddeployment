import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
        
        handleIncrement = e => {
          e.preventDefault();
          let counterState = this.state.counter++;
          this.setState({counterState});
          console.log('__STATE__', this.state.counter);
        }
        
        handleDecrement = e => {
          e.preventDefault();
          let counterState = this.state.counter--;
          this.setState({counterState});
          console.log('__STATE__', this.state.counter);
        }
        
        render() {
          return (
            <section className='counter'>
              <h3 className='number'>{this.state.counter}</h3>
              <button onClick={this.handleIncrement} className='increase'> click to increase counter... go bro.. </button>
              <button onClick={this.handleDecrement} className='decrease'> click to decrease counter... do it bro...</button>
            </section>
          );
        }
}   
export default Counter;