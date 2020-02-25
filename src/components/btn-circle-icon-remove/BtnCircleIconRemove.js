import React from 'react';
import BtnCircleItem from '../btn-circle-icon/BtnCircleIcon';
import RemoveIcon from '../../assets/svg-icons/Remove';

export default function BtnAddCircleIcon({ onClick }) {
  return (
    <BtnCircleItem
      onClick={onClick && (() => onClick())}
    >
      <RemoveIcon />
    </BtnCircleItem>
  );
}