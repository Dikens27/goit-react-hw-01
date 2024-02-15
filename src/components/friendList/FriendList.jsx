import css from './FriendList.module.css';
import { FriendListItem } from './friendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={css.list}>
    {friends.map(({ avatar, name, isOnline, id }) => {
      return (
        <li key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      );
    })}
  </ul>
);
