import Profile from "../Profile/Profile";
import userData from "../Data/userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../Data/friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../Data/transactions.json"

export default function App() {
 return (
  <>
   <Profile
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
   />
   <FriendList friends={friends} />
   <TransactionHistory items={transactions} />
  </>
 );
}
