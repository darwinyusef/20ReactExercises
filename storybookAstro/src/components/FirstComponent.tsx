import React from 'react';

export interface FirstComponentProps {
  info: string; // Puedes cambiar el tipo de 'info' si es un objeto o array, etc.
}

export const FirstComponent: React.FC<FirstComponentProps> = ({ info }) => {
  return (
    <div>
      <h1>FirstComponent</h1>
      <p>{info}</p>
    </div>
  );
};
