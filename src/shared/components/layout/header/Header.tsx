import ArrowIcon from 'assets/icons/Arrow.svg?react';
import Button from 'shared/components/button/Button';
import { BUTTON_TYPES } from 'shared/components/button/constants';
import Menu from './Menu';

const Header = () => {
  return (
    <header className='relative flex items-center gap-2 shadow-md'>
      <Menu />
      <h1 className='text-lg'>강미정</h1>
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
