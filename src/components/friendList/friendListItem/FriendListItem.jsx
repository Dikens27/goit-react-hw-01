import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  const checkOnline = clsx(css.offline, isOnline && css.online);

  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={checkOnline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
