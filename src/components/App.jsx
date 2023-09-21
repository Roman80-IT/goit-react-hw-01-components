import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import css from './styles/Layout.module.css';

export const App = () => {
  return (
    <div className={css.layout}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
