import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Contacts extends Component {
    render() {
        const contacts = this.props.people;

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
        <div className="App">
            <Contacts people={[
                {name: 'Roger'},
                {name: 'Bill'},
                {name: 'Jeff'},
                {name: 'Will'},
                {name: 'Kelly'}
            ]}/>
            <Contacts people={[
                {name: 'Nina'},
                {name: 'Jill'},
                {name: 'Lily'},
                {name: 'Osiris'},
                {name: 'Joe'}
            ]}/>
            <Contacts people={[
                {name: 'Elle'},
                {name: 'Nate'},
                {name: 'Victoria'},
                {name: 'Louis'},
                {name: 'Madeline'}
            ]}/>
        </div>
    );
  }
}

export default App;
