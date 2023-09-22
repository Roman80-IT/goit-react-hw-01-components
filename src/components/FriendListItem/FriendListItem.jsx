import css from './FriendListItem.module.css';

export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span className="status"></span>
      <img className="avatar" src="" alt="User avatar" width="48" />
      <p className="name"></p>
    </li>
  );
};
