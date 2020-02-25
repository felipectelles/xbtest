import React from 'react';
import BtnCircleItem from '../btn-circle-icon/BtnCircleIcon';
import AddIcon from '../../assets/svg-icons/Add';

export default function BtnAddCircleIcon({ onClick }) {
  return (
    <BtnCircleItem
      onClick={onClick && (() => onClick())}>
      <AddIcon />
    </BtnCircleItem>
  );
}