import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
    state = {
        screen: 'list', //list, create
        contacts: []
    };

    componentDidMount() {
        ContactsAPI.getAll().then( contacts => {
            this.setState({ contacts: contacts }); //can simply be contacts since the values are the same
        });
    }

    removeContact = contact => {
        this.setState(state => ({
            contacts: state.contacts.filter( c => c.id !== contact.id)
        }));

        ContactsAPI.remove(contact);
    }

    // navigate = () => {
    //     this.setState({ screen: 'create' });
    // }

    render() {
      return (
        <div className="app">
            {this.state.screen === 'list' && (
                <ListContacts 
                    onDeleteContact={this.removeContact} 
                    contacts={this.state.contacts}
                    onNavigate={ () => {
                        this.setState({ screen: 'create' });
                    }}
                />
            )}
            {this.state.screen === 'create' && (
                <CreateContact />
            )}
        </div>
      )
    }
  }

  export default App;