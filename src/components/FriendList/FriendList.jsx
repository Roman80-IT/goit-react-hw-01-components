import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css[`friend-list`]}>
      {friends.map(item => (
        <FriendListItem key={item.id} friend={item} />
      ))}
    </ul>
  );
};
