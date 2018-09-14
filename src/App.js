import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Contacts extends Component {
    render() {
        const contacts = [
        {name: 'Roger'},
        {name: 'Bill'},
        {name: 'Jeff'},
        {name: 'Will'},
        {name: 'Kelly'}
      ];

      return <ol>
          {contacts.map(contact => (
              <li key={contact.name}>{contact.name}</li>
          ))}
      </ol>
    }
}

class App extends Component {
  render() {
    return (
      <Contacts />
    );
  }
}

export default App;
