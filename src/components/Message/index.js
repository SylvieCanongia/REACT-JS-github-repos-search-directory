import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Message as MessageUi } from 'semantic-ui-react';

import './message.scss';

const Message = ({ message, errorMessage, hideMessage }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hideMessage();
    }, 10000);
    // cleaning function for the previous effect
    return () => {
      clearTimeout(timeoutId);
      // console.log('Nettoyage');
    };
  }, [message, errorMessage]);
  return (
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
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  hideMessage: PropTypes.func.isRequired,
};

Message.defaultProps = {
  errorMessage: '',
};

export default Message;
