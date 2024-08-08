import css from "./FriendList.module.css";
import clsx from "clsx";
export default function FriendListItem({ friends: { avatar, name, isOnline } }) {
 return (
  <>
   <img src={avatar} alt="Avatar" width="48" />
   <p>{name}</p>
         <p className={clsx(css.status, isOnline ? css.isActive : css.isRetired)}>
             {isOnline ? "Online" : "Offline"}
         </p>
  </>
 );
}
