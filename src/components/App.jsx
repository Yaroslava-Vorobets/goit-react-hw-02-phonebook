import { Component } from 'react';
import 'modern-normalize';

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  hendlerNameCange = e => {
    this.setState({name: e.currentTarget.value})
  }

   hendlerContactCange = e => {
    this.setState({contacts: e.currentTarget.value})
  }
  render() {
    return (
      <>
         <h1> Phonebook </h1>
        <form> 
          <label  htmlFor="fname">Name</label>
        <input
            onChange={this.hendlerNameCange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          /> 
          <button>add contact</button>
      </form>     
        <h2> Contacts </h2>
        <ul>
          <li></li>          
        </ul>
       </>
       

       
)}
   
  }


