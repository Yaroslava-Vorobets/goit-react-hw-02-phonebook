// import PropTypes from 'prop-types';
import ContactElement from '../ContactElementFolder/ContactElement'
import {List} from './List.Styled';

const ContactList = ({contacts, onDelete}) => 
   <List>
        {contacts.map(({ id, name, number }) =>      
                <ContactElement 
                key={id}    
                name={name}
                id={id}
                number={number}
                onDelete={onDelete}
            /> 
        )}                 
    </List>
               
 export default ContactList;              