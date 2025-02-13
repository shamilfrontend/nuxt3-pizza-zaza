import React from 'react';

import { useTelegram } from '../../hooks/useTelegram';

import Button from '../Button/Button';

import './Header.css';

const Header = () => {
  const { onClose, user } = useTelegram();
  console.log('user', user)

  return (
    <div className="header">
      <span className="username">
        Привет, <span>{ user?.username ?? 'Неизвестный' }</span>
      </span>

      <Button
        className="header-btn"
        onClick={onClose}
      >
        Закрыть
      </Button>
    </div>
  );
};

export default Header;
