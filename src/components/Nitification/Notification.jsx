import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <span>{message}</span>;
};

Notification.prototype = {
  message: PropTypes.number.isRequired,
};
