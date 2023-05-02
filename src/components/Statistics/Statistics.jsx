import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <ul>
        <li className={css.item}>
          <span>Good: {good}</span>
        </li>
        <li className={css.item}>
          <span>Neutral: {neutral}</span>
        </li>
        <li className={css.item}>
          <span>Bad: {bad}</span>
        </li>
        <li className={css.item}>
          <span>Total: {total}</span>
        </li>
        <li className={css.item}>
          <span>Posistive feedback: {positive}</span>
        </li>
      </ul>
    </div>
  );
};
