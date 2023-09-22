import { getRandomColor } from './getRandomColor';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section class={css.statistics}>
      {title && <h2 class={css.title}>{title}</h2>}

      <ul class={css[`stat-list`]}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span>{label}</span>
            <span class={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
