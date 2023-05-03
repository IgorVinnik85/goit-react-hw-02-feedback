import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ addFeedback }) => {
  // console.log(addGood);
  return (
    <div className={css.feedback}>
      <ul className={css.list}>
        <li>
          <button className={css.btn} type="button" onClick={addFeedback}>
            Good
          </button>
        </li>
        <li>
          <button className={css.btn} type="button" onClick={addFeedback}>
            Neutral
          </button>
        </li>
        <li>
          <button className={css.btn} type="button" onClick={addFeedback}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.protoType = {
  addFeedback: PropTypes.func.isRequired,
};
