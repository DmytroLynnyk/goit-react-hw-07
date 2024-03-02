import css from './contactlist.module.css';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/contact';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.contactsItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
