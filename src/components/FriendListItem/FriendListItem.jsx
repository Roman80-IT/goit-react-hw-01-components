import css from './FriendListItem.module.css';
import profileCss from '../Profile/Profile.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
      <img
        className={profileCss.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={profileCss.name}>{name}</p>
    </li>
  );
};
