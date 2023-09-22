import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css[`friend-list`]}>
      <FriendListItem />
    </ul>
  );
};
