import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
    return (friends.map(({ isOnline, avatar, name }) =>
            <li className="item" key={name}>
                {isOnline === true ? <span className="status">Online</span> : <span className="status">Offline</span>}
                <img className="avatar" src={ avatar } alt={ name } width="48" />
                <p className="name">{ name }</p>
            </li>
        )
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,
    }))
};

export default FriendListItem;