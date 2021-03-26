import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistic from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList/FriendList';
import FriendListItem from './components/FriendList/FriendListItem';
import friends from './components/FriendList/friends.json';


function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic
        title="Stata"
        data={data}
      />
      <FriendList>
        <FriendListItem
          friends={friends}
        />
      </FriendList>
    </>
  );
}

export default App;
