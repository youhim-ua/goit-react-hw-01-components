import PropTypes from 'prop-types';

const Statistic = ({ title, data }) => {
    return (
        <section className="statistics">
            {title !== undefined && <h2 className="title">{ title }</h2>}

            <ul className="stat-list">
                {data.map(({ id, label, percentage}) => 
                    <li className="item" key={ id }>
                        <span className="label">{ label }</span>
                        <span className="percentage">{ percentage }</span>
                    </li>
                )}
            </ul>
        </section>
    );
}


Statistic.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};

export default Statistic;