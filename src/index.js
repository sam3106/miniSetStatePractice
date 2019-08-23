import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = { message: '' };

    const Question = () => {
      var message;
      const person = prompt('please enter your Name:', 'John Smith');
      if (person == '' || null) {
        message = "No fun... why didn't you enter a name?";
        this.setState({ message: message });
      } else {
        message =
          'Hello ' + person + '. Hope you enjoyed my mini pratice project!Bre';
        this.setState({ message: message });
      }
    };
    window.addEventListener('load', Question);
  }
  render() {
    if (this.state.message == '' || this.state.message == null) {
      return (
        <div>
          <Header />

          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Body message={this.state.message} />
          <Footer />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
