import React from 'react';

export interface FirstComponentProps {
  info: string;
}

export const FirstComponent: React.FC<FirstComponentProps> = ({ info }) => {
  return (
    <div>
      <h1>Establecer un contenido</h1>
      <p>{info}</p>
    </div>
  );
};
