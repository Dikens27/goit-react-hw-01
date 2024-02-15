import css from './App.module.css';
import Profile from '../profile/Profile';
import userData from '../profile/userData.json';
import FriendList from '../friendList/FriendList';
import friends from '../friendList/friends.json';
import TransactionHistory from '../transactionHistory/TransactionHistory';
import transactions from '../transactionHistory/transactions.json';

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
