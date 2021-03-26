import styles from './FriendList.module.css';

const FriendList = ({ children }) => (
  <ul className={styles.friendList}>{children}</ul>
);
export default FriendList;
