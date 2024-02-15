import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.avatarBox}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.params}>Followers</span>
          <span className={css.valeu}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.params}>Views</span>
          <span className={css.valeu}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.params}>Likes</span>
          <span className={css.valeu}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
