import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistic = ({ title, data }) => {
  return (
    <section className={styles.statistics}>
      {title !== undefined && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {data.map(({ id, label, percentage }) => (
          <li className={styles.item} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistic;
