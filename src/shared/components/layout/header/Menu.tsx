import { useState } from 'react';
import Button from 'shared/components/button/Button';
import { BUTTON_TYPES } from 'shared/components/button/constants';
import { categories } from 'assets/options';
import MenuIcon from 'assets/icons/Menu.svg?react';
import ArrowIcon from 'assets/icons/Arrow.svg?react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const openMenu = isMenuOpen ? 'w-full h-full' : 'w-0 h-0';
  return (
    <>
      <div
        className={`z-10 fixed top-0  ${openMenu} transition-window duration-500 bg-default overflow-hidden`}>
        <ul className='flex flex-col items-center justify-center h-full gap-4 text-white md:flex-row md:gap-8'>
          {categories.map((category, idx) => (
            <li key={idx}>
              <Button
                title={category}
                styles={BUTTON_TYPES.default}
                handleClick={() => {
                  setIsMenuOpen(false);
                  navigate(`/${category.toLowerCase()}`);
                }}>
                <div className='flex items-center justify-center w-40 h-40 text-lg border border-white rounded-full md:w-56 md:h-56 '>
                  {category}
                </div>
              </Button>
            </li>
          ))}
          <li className='hidden text-lg sm:block md:absolute md:bottom-20'>
            <div className='mb-4'>jagarmj@gmail.com</div>
            <Button
              title='github'
              styles={BUTTON_TYPES.default}
              handleClick={() => {}}>
              <div className='inline-flex h-8 gap-2'>
                github <ArrowIcon />
              </div>
            </Button>
          </li>
        </ul>
      </div>

      <Button
        handleClick={() => setIsMenuOpen((prev) => !prev)}
        styles={BUTTON_TYPES.menu}
        title='Menu'>
        <MenuIcon />
      </Button>
    </>
  );
};

export default Menu;
