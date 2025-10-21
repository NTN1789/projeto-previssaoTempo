import React from 'react';

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div className="alert alert-danger text-center" role="alert">
    {message}
  </div>
);

export default ErrorMessage;
