import './App.css';
import { ContactList } from '../ContactList/contactlist';
import { ContactForm } from '../ContactForm/contactform';
import { SearchBox } from '../SearchBox/searchbox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request is in progress</b>}
      <ContactList />
    </div>
  );
};
