
import css from "./Profile.module.css";


export default function Profile({ name, tag, location, image, stats }) {
 return (
  <div className={css.container}>
   <div className={css.box}>
    <img src={image} alt="User avatar" />
    <p className={css.user_name}>{name}</p>
    <p className={css.user_desc}>@{tag}</p>
    <p className={css.user_desc}>{location}</p>
   </div>

   <ul className={css.stats}>
    <li className={css.stats_value}>
     <span>Followers</span>
     <span className={css.stats_data}>{stats.followers}</span>
    </li>
    <li className={css.stats_value}>
     <span>Views</span>
     <span className={css.stats_data}>{stats.views}</span>
    </li>
    <li className={css.stats_value}>
     <span>Likes</span>
     <span className={css.stats_data}>{stats.likes}</span>
    </li>
   </ul>
  </div>
 );
}
