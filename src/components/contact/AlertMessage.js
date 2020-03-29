import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertMessage() {
  return (
    <Alert variant="success">
      <Alert.Heading>Thank you!</Alert.Heading>
      <p>We have recieved your message and will give you an answer shortly.</p>
    </Alert>
   );
}

export default AlertMessage;