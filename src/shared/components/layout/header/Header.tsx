import ArrowIcon from 'assets/icons/Arrow.svg?react';
import Button from 'shared/components/button/Button';
import { BUTTON_TYPES } from 'shared/components/button/constants';
import Menu from './Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className=' z-30 sticky top-0 flex items-center w-full gap-2 shadow-md bg-[#ffffff]'>
      <Menu />
      <div className='flex gap-2'>
        <Button
          handleClick={() => navigate('/')}
          title='main'
          styles={BUTTON_TYPES.default}>
          <h1 className='text-lg text-default sm:text-xl md:text-xlg md:ml-2'>
            강미정
          </h1>
        </Button>
        <h1 className='text-lg sm:text-xl md:text-xlg'>
          {pathname.length > 1 && pathname}
        </h1>
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
