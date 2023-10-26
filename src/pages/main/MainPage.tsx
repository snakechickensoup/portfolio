import Button from 'shared/components/button/Button';
import ArrowIcon from 'assets/icons/Arrow.svg?react';
import { BUTTON_TYPES } from 'shared/components/button/constants';

const MainPage = () => {
  return (
    <main className='relative w-full p-10 bg-center bg-cover h-main bg-main sm:p-20'>
      <h1 className='text-xl font-bold text-white sm:text-xxl'>
        프론트엔드 개발자 <br />
        강미정입니다.
      </h1>
      <section className='absolute flex flex-col items-end gap-2 right-10 bottom-20 sm:right-24 sm:bottom-32'>
        <h3 className='text-lg font-bold text-right text-white sm:text-xl md:text-xlg'>
          모여봐요 동물의 숲을 <br /> 좋아합니다.
        </h3>
        <Button
          handleClick={() => {}}
          title='이동'
          styles={BUTTON_TYPES.default}>
          <div className='absolute right-0 inline-flex h-8 gap-1 p-1 text-base whitespace-nowrap sm:text-lg sm:h-10'>
            띠로리섬 구경하기
            <ArrowIcon />
          </div>
        </Button>
      </section>
    </main>
  );
};

export default MainPage;
