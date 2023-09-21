import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>

        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
