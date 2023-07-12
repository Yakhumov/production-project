import React from 'react';
import { classNames } from '../../lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
