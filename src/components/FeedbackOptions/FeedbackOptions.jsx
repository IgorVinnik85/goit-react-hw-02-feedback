import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ addGoodFeedback }) => {
  // console.log(addGood);
  return (
    <div className={css.feedback}>
   
      <ul className={css.list}>
        <li>
          <button className={css.btn} type="button" onClick={addGoodFeedback}>
            Good
          </button>
        </li>
        <li>
          <button className={css.btn} type="button" onClick={addGoodFeedback}>
            Neutral
          </button>
        </li>
        <li>
          <button className={css.btn} type="button" onClick={addGoodFeedback}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};
