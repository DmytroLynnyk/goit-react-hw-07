import { useDispatch, useSelector } from 'react-redux';
import css from './searchbox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { getFilters } from '../../redux/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters);

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};
