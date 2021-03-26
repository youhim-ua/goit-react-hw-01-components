import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(({ isOnline, avatar, name }) => (
    <li className={styles.item} key={name}>
      {isOnline === true ? (
        <span className={styles.statusActive}></span>
      ) : (
        <span className={styles.statusPassive}></span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  ));
};

FriendListItem.defaultProps = {
  avatar:
    'https://dedietrich-home.ru/upload/resize_cache/iblock/3c4/245_230_1/3c47ef63209e1b7ac3e50cde1a02b449.jpg',
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendListItem;
