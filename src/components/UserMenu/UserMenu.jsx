import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  return (
    <div className={css.wrapper}>
      <p>
        Welcome, <span>{user.name}</span>
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};