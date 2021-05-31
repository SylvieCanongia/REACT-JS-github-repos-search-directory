import React from 'react';
import PropTypes from 'prop-types';
import { Message as MessageUi } from 'semantic-ui-react';

import './message.scss';

const Message = ({ message, errorMessage }) => (
  <div>
    { errorMessage
      && (
        <MessageUi error id="message">
          {errorMessage}
        </MessageUi>
      )}
    { message
      && (
        <MessageUi id="message">
          {message}
        </MessageUi>
      )}
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

Message.defaultProps = {
  errorMessage: '',
};

export default Message;
