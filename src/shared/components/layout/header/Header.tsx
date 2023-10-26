import ArrowIcon from 'assets/icons/Arrow.svg?react';
import Button from 'shared/components/button/Button';
import { BUTTON_TYPES } from 'shared/components/button/constants';
import Menu from './Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className='relative flex items-center gap-2 shadow-md'>
      <Menu />
      <div className='flex gap-2'>
        <Button
          handleClick={() => navigate('/')}
          title='main'
          styles={BUTTON_TYPES.default}>
          <h1 className='text-lg text-default'>강미정</h1>
        </Button>
        <h1 className='text-lg'>{pathname.length > 1 && pathname}</h1>
      </div>
      <Button
        handleClick={() => {}}
        styles={BUTTON_TYPES.contact}
        title='Contact'>
        <ArrowIcon />
      </Button>
    </header>
  );
};

export default Header;
