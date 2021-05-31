import React from 'react';
import PropTypes from 'prop-types';
import { Message as MessageUi } from 'semantic-ui-react';

import './message.scss';

const Message = ({ message }) => (

  <MessageUi id="message">
    {message}
  </MessageUi>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
