import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistic from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList/FriendList';
import FriendListItem from './components/FriendList/FriendListItem';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import items from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="files statistic" data={data} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory items={items} />
    </Container>
  );
}

export default App;
