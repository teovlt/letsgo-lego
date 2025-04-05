import React from 'react';
import Icon from '../Icon';
import { Button } from './BackButtonElements';

const BackButton = ({ icon, label, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon name={icon} width='20' height='20' color='currentColor' />
      {label}
    </Button>
  );
};

export default BackButton;
